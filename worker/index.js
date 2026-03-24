/**
 * Cloudflare Worker that serves the built React SPA from static assets.
 * Uses the `--assets` flag in wrangler.toml to serve from /dist.
 * This worker handles SPA routing (returns index.html for non-asset routes)
 * and serves robots.txt + sitemap.xml correctly.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Security headers for all responses
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    };

    // Let Cloudflare's asset serving handle known static files
    // This worker only runs for requests that don't match a static asset

    // For SPA routing: return index.html for any path that isn't a file
    // (Cloudflare's asset binding handles actual files like .js, .css, etc.)
    try {
      // Try to fetch the asset first
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        const response = new Response(assetResponse.body, assetResponse);
        Object.entries(securityHeaders).forEach(([key, value]) => {
          response.headers.set(key, value);
        });

        // Cache static assets
        if (path.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff2?|ttf|ico)$/)) {
          response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        }

        return response;
      }
    } catch (e) {
      // Asset not found, fall through to SPA routing
    }

    // SPA fallback: serve index.html for all unmatched routes
    try {
      const indexRequest = new Request(new URL('/', request.url), request);
      const indexResponse = await env.ASSETS.fetch(indexRequest);
      const response = new Response(indexResponse.body, indexResponse);
      Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
      response.headers.set('Cache-Control', 'no-cache');
      return response;
    } catch (e) {
      return new Response('Not Found', { status: 404, headers: securityHeaders });
    }
  },
};
