module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'components', 'styles'],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'next', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    '@next/next/no-page-custom-font': 'off',
    'no-plusplus': 'off',
    'import/no-unresolved': 'off', // Fails with module paths
    'import/extensions': 'off', // Fails with module paths
    '@next/next/no-document-import-in-page': 'off', // Mistakenly Thinks I'm Breaking The Rule
    'no-restricted-syntax': 'off',
    'one-var': 'consecutive'
  },
};
