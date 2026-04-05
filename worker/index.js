/**
 * Cloudflare Worker middleware for DoorROI.
 * Static assets are served by the [assets] binding in wrangler.toml.
 * This worker adds security headers, caching, and SPA fallback routing.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Security headers applied to all responses
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    };

    try {
      // Try to serve the requested asset
      let response = await env.ASSETS.fetch(request);

      // SPA fallback: if no asset found and it's not a file request, serve index.html
      if (response.status === 404 && !path.includes('.')) {
        const indexUrl = new URL('/', url.origin);
        response = await env.ASSETS.fetch(new Request(indexUrl, request));
      }

      // Clone so we can modify headers
      const newResponse = new Response(response.body, response);

      // Apply security headers
      for (const [key, value] of Object.entries(securityHeaders)) {
        newResponse.headers.set(key, value);
      }

      // Cache hashed static assets for 1 year; HTML gets no-cache
      if (path.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff2?|ttf|ico)$/)) {
        newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        newResponse.headers.set('Cache-Control', 'no-cache');
      }

      return newResponse;
    } catch (e) {
      return new Response('Internal Server Error', {
        status: 500,
        headers: securityHeaders,
      });
    }
  },
};
