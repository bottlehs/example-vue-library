import { Config } from 'bili';

const config: Config = {
  input: 'index.js',
  output: {
    moduleName: 'HelloWorld',
    extractCSS: false,
    format: ['esm', 'umd', 'cjs'],
    fileName({ format }, defaultFileName) {
      if (format === 'esm') {
        return 'hello-world.esm.js';
      }
      if (format === 'umd') {
        return 'hello-world.js';
      }
      if (format === 'cjs') {
        return 'hello-world.cjs.js';
      }
      return defaultFileName;
    },
    sourceMapExcludeSources: true
  },
  babel: {
    minimal: true
  },
  plugins: {
    vue: true,
  },
  extendConfig(config, { format }) {
    if (format === 'umd') {
      config.output.minify = true;
      config.env = Object.assign({}, config.env, {
        NODE_ENV: 'production',
      });
    }
    return config;
  },
};

export default config;
