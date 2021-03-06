const config = {
  port: process.env.PORT || 3000,
  postgres: {
    user: "postgres",
    host: "localhost",
    database: "users_api_db",
    password: "macximus21",
    port: 5432,
  },
};

module.exports = config;

