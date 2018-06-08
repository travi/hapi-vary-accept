export function handler({response}, h) {
  if (!response.isBoom) response.vary('accept');

  return h.continue;
}

export const plugin = {
  pkg: require('../package.json'),
  async register(server) {
    server.ext('onPreResponse', handler);
  }
};
