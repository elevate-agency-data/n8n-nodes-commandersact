// This file ensures n8n can find and load your nodes and credentials
const { CommandersAct } = require('./dist/nodes/CommandersAct/CommandersAct.node.js');

module.exports = {
	nodeTypes: {
		CommandersAct: CommandersAct,
	},
	credentialTypes: {
		CommandersActApi: require('./dist/credentials/CommandersActApi.credentials.js').CommandersActApi,
	},
};
