export function handler(request, reply) {
  request.response.vary('accept');

  reply.continue();
}

export function register(server, options, next) {
  server.ext('onPreResponse', handler);

  next();
}

register.attributes = {
  pkg: require('../package.json')
};
