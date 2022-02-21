const esbuild = require('esbuild');
const { installScript } = require('./install');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/vivaldi-mod.js',
  watch: {
    onRebuild(err, res) {
      if (err) {
        console.error('watch build failed:', err);
      }
      console.log('watch build succeeded:\n', res.errors, res.warnings);
      installScript();
    },
  },
});
