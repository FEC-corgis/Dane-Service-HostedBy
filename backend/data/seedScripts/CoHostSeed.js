const { CoHost } = require('../../models');

module.exports = (async function () {
    await CoHost.sync({ force: true });
    for (let i = 0; i < 25; i++) {
        await CoHost.create({
            HostId: 101 + Math.floor(Math.random() * 25),
            HostedById: Math.floor(Math.random() * 100),
        });
    }
})();