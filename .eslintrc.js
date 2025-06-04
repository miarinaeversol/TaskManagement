module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      // Personnalise tes règles ici
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  