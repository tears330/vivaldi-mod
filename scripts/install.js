const execSync = require('child_process').execSync;

const VIVALDI_PATH =
  '/Applications/Vivaldi.app/Contents/Frameworks/Vivaldi Framework.framework/Versions/current/Resources/vivaldi/';

const installScript = () => {
  execSync(`cp dist/vivaldi-mod.js "${VIVALDI_PATH}"`);
}

if (process.argv[2] === 'install') {
  installScript();
}

module.exports = { installScript }