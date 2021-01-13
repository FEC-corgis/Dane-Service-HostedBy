const { DataTypes, Model } = require('sequelize');
const sequelize = require('../data/db');
const { abouts } = require('../data/mock/About');
const { names } = require('../data/mock/Names');

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
    for (let i = 0; i < 125; i++) {
      const sex = i <= 50 ? 'men' : 'women';
      const picId = i <= 50 ? i : i - 50;

      await Host.create({
        name: names[i],
        about: abouts[i],
        numberOfReviews: Math.floor(Math.random() * 1000),
        identityVerified: Math.floor(Math.random() * 2) === 0 ? true : false,
        isSuperhost: Math.floor(Math.random() * 2) === 0 ? true : false,
        avatar: `https://randomuser.me/api/portraits/${sex}/${picId}.jpg`,
        joinedOn: new Date().toDateString(),
      });
    }
  }
})();

module.exports = Host;
