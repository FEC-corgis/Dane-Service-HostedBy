const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');

class CoHost extends Model {}

CoHost.init(
  {
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hostedById: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CoHost',
  }
);

(async () => {
  await CoHost.sync();
  const cohosts = await CoHost.findAll();

  if (!cohosts.length) {
    for (let i = 0; i < 25; i++) {
      await CoHost.create({
        hostId: 101 + Math.floor(Math.random() * 25),
        hostedById: Math.floor(Math.random() * 100),
      });
    }
  }
})();
module.exports = CoHost;
