import debug from 'debug';
import { Env } from './index';

global.LogI = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Info`)(msg);
};

global.LogD = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Debug`)(msg);
};

global.LogE = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Error`)(msg);
};
