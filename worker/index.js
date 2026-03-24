/**
 * Cloudflare Worker middleware for DoorROI.
 * Static assets + SPA routing are handled by wrangler.toml [assets] config.
 * This worker adds security headers and caching to all responses.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Fetch the asset (static file or SPA fallback handled by Cloudflare)
    const response = await env.ASSETS.fetch(request);

    // Clone response so we can modify headers
    const newResponse = new Response(response.body, response);

    // Security headers
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('X-Frame-Options', 'DENY');
    newResponse.headers.set('X-XSS-Protection', '1; mode=block');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newResponse.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // Cache hashed static assets for 1 year; HTML gets no-cache
    if (path.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff2?|ttf|ico)$/)) {
      newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (path.endsWith('.html') || path === '/') {
      newResponse.headers.set('Cache-Control', 'no-cache');
    }

    return newResponse;
  },
};
