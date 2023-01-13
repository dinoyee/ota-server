import http from 'http';

import app from '../app';
import '../utils/db';

import { normalizePort, Env } from '../utils';
import { LogI } from '../utils/logger';

const port = normalizePort(Env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', (error) => {
  switch (error.code) {
    case 'EACCES':
      process.exit(1);
      break;
    case 'EADDRINUSE':
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  LogI(`Listening on ${bind}`);
});
