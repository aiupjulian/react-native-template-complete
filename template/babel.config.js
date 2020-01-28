module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx'],
        root: './src/**',
      },
    ],
  ],
};
