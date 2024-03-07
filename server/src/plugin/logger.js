import debug from 'debug';

global.LogI = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Info`)(msg);
};

global.LogD = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Debug`)(msg);
};

global.LogE = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Error`)(msg);
};

global.LogW = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Warn`)(msg);
};
