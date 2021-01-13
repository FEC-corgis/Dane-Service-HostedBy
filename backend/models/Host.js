const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');
const { name, address } = require('faker');
const { abouts } = require('../data/mock/About');

class Host extends Model {}

Host.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfReviews: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    identityVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isSuperhost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    livesIn: {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: true,
    },
    joinedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Host',
  }
);

(async () => {
  await Host.sync();
  const hosts = await Host.findAll();

  if (!hosts.length) {
    for (let i = 0; i < 100; i++) {
      await Host.create({
        name: name.firstName(),
        about: abouts[i],
        numberOfReviews: Math.floor(Math.random() * 1000),
        identityVerified: Math.floor(Math.random() * 2) === 0 ? true : false,
        isSuperhost: Math.floor(Math.random() * 2) === 0 ? true : false,
        avatar:
          Math.floor(Math.random() * 2) === 0
            ? `https://randomuser.me/api/portraits/women/${i}.jpg`
            : `https://randomuser.me/api/portraits/men/${i}.jpg`,
        livesIn: `${address.city()}, ${address.state()}`,
        joinedOn: new Date().toDateString(),
      });
    }
  }
})();

module.exports = Host;
