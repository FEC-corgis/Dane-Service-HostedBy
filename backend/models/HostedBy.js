const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');
const { duringYourStay } = require('../data/mock/DuringYourStay');

class HostedBy extends Model {}

HostedBy.init(
  {
    duringYourStay: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    responseTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    responseRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    showLanguage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'HostedBy',
  }
);

(async () => {
  await HostedBy.sync();

  const hostedByRecords = await HostedBy.findAll();

  if (!hostedByRecords.length) {
    for (let i = 0; i < 100; i++) {
      await HostedBy.create({
        duringYourStay: duringYourStay[i],
        responseTime: Math.floor(Math.random() * 168), // max hours within a week
        responseRate: Math.floor(Math.random() * 100),
        showLanguage: Math.floor(Math.random() * 2) === 0 ? true : false,
        hostId: i + 1,
        propertyId: i + 1,
      });
    }
  }
})();

module.exports = HostedBy;
