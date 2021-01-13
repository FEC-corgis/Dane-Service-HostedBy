const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'HostedBy',
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log('ERROR IN db.js', error);
  }
})();

module.exports = sequelize;
