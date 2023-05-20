module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
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
