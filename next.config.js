/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    const headers = [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      // Pentest Finding 3: restrict CORS from Vercel's default wildcard (*) to own origin.
      // Update this value if a custom domain is added.
      { key: 'Access-Control-Allow-Origin', value: 'https://chickenbot.vercel.app' },
    ];

    // CSP is production-only — Next.js dev mode uses Webpack eval-based source maps
    // which are blocked by CSP without 'unsafe-eval'. Production bundles don't use eval.
    //
    // Pentest Finding 2 (unsafe-inline): removing 'unsafe-inline' from script-src requires
    // nonce-based CSP via middleware, which forces per-request server rendering and breaks
    // the static site model. Accepted risk: this is a static joke site with no persistent
    // user input and React's JSX escaping prevents XSS injection.
    if (!isDev) {
      headers.push({
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data:; connect-src 'self'",
      });
    }

    return [{ source: '/(.*)', headers }];
  },
};

module.exports = nextConfig;
