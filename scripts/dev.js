const esbuild = require('esbuild');
const execSync = require('child_process').execSync;

const VIVALDI_PATH =
  '/Applications/Vivaldi.app/Contents/Frameworks/Vivaldi Framework.framework/Versions/current/Resources/vivaldi/';

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
      execSync(`cp dist/vivaldi-mod.js "${VIVALDI_PATH}"`);
    },
  },
});
