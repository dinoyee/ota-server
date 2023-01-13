import debug from 'debug';
import { Env } from './index';

export const LogI = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Info`)(msg);
};
export const LogD = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Debug`)(msg);
};

export const LogE = (msg) => {
  debug(`${Env.NPM_PACKAGE_NAME}::Error`)(msg);
};
