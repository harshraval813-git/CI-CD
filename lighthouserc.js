module.exports = {
  ci: {
    collect: {
      staticDistDir: './', // Aapki HTML files yahan hain
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.8}], // Speed 80% se kam hui toh error dega
        'categories:accessibility': ['error', {minScore: 0.9}], // Accessibility 90% honi chahiye
      },
    },
    upload: {
      target: 'temporary-public-storage', // Report ka link generate karega
    },
  },
};