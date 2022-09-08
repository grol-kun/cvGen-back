module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '45cc9f7dc3726e11140fc3111a2c9c64'),
  },
});
