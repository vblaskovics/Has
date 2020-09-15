module.exports = {
  HOST: 'localhost',
  USER: 'admin',
  PASSWORD: 'admin',
  DB: 'hasdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
