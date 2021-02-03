const Host = require('../models/Host');
const HostedBy = require('../models/HostedBy');

module.exports = class EntireHouseRepository {
    constructor(id) {
        this.id = id;
        this.dataLoaded = true;
        this.data = {
            name: '',
            avatar: '',
            isSuperhost: false,
        };
    }

    async getHostInfo() {
        const { HostId } = await HostedBy.findOne({
            where: { PropertyId: this.id },
        });

        const { name, avatar, isSuperhost } = await Host.findByPk(HostId);

        this.data.name = name;
        this.data.avatar = avatar;
        this.data.isSuperhost = isSuperhost;
    }

    async getData() {
        try {
            await this.getHostInfo();
            return this.data;
        } catch (error) {
            this.dataLoaded = false;
        }
    }
};
