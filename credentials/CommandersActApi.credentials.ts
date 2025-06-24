import { 
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon
} from 'n8n-workflow';

export class CommandersActApi implements ICredentialType {
	name = 'commandersActApi';
	displayName = 'Commanders Act API';
	documentationUrl = 'https://commandersact.github.io/api_doc/';
  icon: Icon = 'file:icons/commandersact.svg';
	properties: INodeProperties[] = [
		{
			displayName: 'Site ID',
			name: 'siteId',
			type: 'string',
			default: '',
			required: true,
			description: 'CommandersAct Site ID'
		},
		{
			displayName: 'Token API',
			name: 'tokenAPI',
			type: 'string',
			typeOptions: {
				password: true
			},
			default: '',
			required: true,
			description: 'Authentication token for the CommandersAct API'
		}
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.tokenAPI}}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{"https://api.commander1.com/v2/" + $credentials?.siteId + "/users"}}',
			url: '',
		},
	};
}
