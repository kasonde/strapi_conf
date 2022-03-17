module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '607c3c21b6606b88e605757de6c963fa'),
  },
});
