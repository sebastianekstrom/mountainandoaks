module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        // https://github.com/sebastianekstrom/sebbebakes/issues/5
        "largest-contentful-paint": "off",
        interactive: "off",
        "uses-responsive-images": "off",
        "unused-javascript": "off",
        "heading-order": "off",
        "errors-in-console": "off",
        "csp-xss": "off",
        "color-contrast": "off",
        "max-potential-fid": "off",
        "lcp-lazy-loaded": "off",
        // PWA specific rules
        "apple-touch-icon": "off",
        "installable-manifest": "off",
        "themed-omnibox": "off",
        "splash-screen": "off",
        "service-worker": "off",
        "maskable-icon": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
    collect: {
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/pizza/new-york-style",
      ],
      startServerCommand: "npm run start",
    },
  },
};
