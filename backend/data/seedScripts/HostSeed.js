const { Host } = require('../../models');
const { names } = require('../mock/Names');
const { abouts, long } = require('../mock/About');

module.exports = (async function () {
    await Host.sync({ force: true });

    for (let i = 0; i < 125; i++) {
        const sex = i <= 50 ? 'men' : 'women';
        const picId = i <= 50 ? i : i - 50;

        await Host.create({
            name: names[i],
            about: i === 25 ? long : abouts[i],
            numberOfReviews: Math.floor(Math.random() * 1000),
            identityVerified:
                Math.floor(Math.random() * 2) === 0 ? true : false,
            isSuperhost: Math.floor(Math.random() * 2) === 0 ? true : false,
            avatar: `https://randomuser.me/api/portraits/${sex}/${picId}.jpg`,
            joinedOn: new Date().toDateString(),
        });
    }
})();
