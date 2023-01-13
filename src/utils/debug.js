import debugLib from 'debug';
import { Env } from './index';

export const LogI = (msg) => {
  debugLib(`${Env().npm_package_name}::Info`)(msg);
};
export const LogD = (msg) => {
  debugLib(`${Env().npm_package_name}::Debug`)(msg);
};

export const LogE = (msg) => {
  debugLib(`${Env().npm_package_name}::Error`)(msg);
};
