const CoHost = require('./Cohost');
const HostedBy = require('./HostedBy');
const Language = require('./Language');
const Host = require('./Host');

Host.hasMany(CoHost);
Host.hasMany(HostedBy);
Host.hasMany(Language);
Language.hasMany(Host);
CoHost.belongsTo(Host);
