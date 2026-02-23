import { 
	ApplicationError,
	INodeType, 
	INodeTypeDescription, 
	IExecuteFunctions, 
	NodeApiError,
	NodeConnectionType,
	NodeOperationError
} from 'n8n-workflow';

export class CommandersAct implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Commanders Act',
		name: 'commandersAct',
		group: ['transform'],
		version: 1,
		description: 'Use the Commanders Act API',
    defaults:{ name: 'Commanders Act' },
		icon: 'file:commandersact.svg',
		// @ts-ignore - node-class-description-inputs-wrong
		inputs: [{ type: NodeConnectionType.Main }],
		// @ts-ignore - node-class-description-outputs-wrong
		outputs: [{ type: NodeConnectionType.Main }],        
		usableAsTool: true,
		credentials: [{	name: 'commandersActApi', required: true}],
		requestDefaults:{
			baseURL: 'https://api.commander1.com/v2',
			headers:{ 'Content-Type': 'application/json' }
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Activity Log', value: 'activityLogs', description: 'Manage Commanders Act Activity Logs' },
					{ name: 'Consent Analysis', value: 'consentAnalysis', description: 'Manage Commanders Act Consent Analysis' },
					{ name: 'Cookie Scanner', value: 'cookieScanner', description: 'Manage Commanders Act Cookie Scanner' },
					{ name: 'Data Cleansing', value: 'dataCleansingTransformations', description: 'Manage Commanders Act Data Cleansing' },
					{ name: 'Destination', value: 'destinations', description: 'Manage Commanders Act Destinations' },
					{ name: 'Event Delivery', value: 'eventDelivery', description: 'Manage Commanders Act Event Delivery' },
					{ name: 'Event Enrichment', value: 'eventEnrichments', description: 'Manage Commanders Act Event Enrichments' },
					{ name: 'Live Report Builder', value: 'liveReports', description: 'Manage Commanders Act Live Reports' },
					{ name: 'Mix Collect Redirect Rule', value: 'mixCollectRedirectRules', description: 'Manage Commanders Act Mix Collect Redirect Rules' },
					{ name: 'Monitoring', value: 'monitoring', description: 'Manage Commanders Act Monitoring' },
					{ name: 'Normalized Datalayer', value: 'normalizedDatalayer', description: 'Manage Commanders Act Normalized Datalayer' },
					{ name: 'Segment', value: 'segments', description: 'Manage Commanders Act Segments' },
					{ name: 'Source', value: 'sources', description: 'Manage Commanders Act Sources' },
					{ name: 'Sources Data Quality', value: 'sourcesDataQuality', description: 'Manage Commanders Act Sources Data Quality' },
					{ name: 'User', value: 'users', description: 'Manage Commanders Act Users' },
					{ name: 'Web Container', value: 'webContainers', description: 'Manage Commanders Act Sources Web Containers' },
					{ name: 'Web Containers Variable', value: 'webContainersVariables', description: 'Manage Commanders Act Sources Web Containers Variables' },
					{ name: 'Workspace', value: 'workspaces', description: 'Manage Commanders Act Workspaces' },
			  ],
				default: 'activityLogs',
				required: true,
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['activityLogs'] } },
				options: [					
					{ name: 'List Activity Logs', value: 'activityLogsList', action:'Lists activity logs', description: 'Provides detailed platform activity records exclusively for administrators (Admin-only)' },
				],
				default: 'activityLogsList',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['consentAnalysis'] } },
				options: [					
					{ name: 'Get Statistics', value: 'consentAnalysisGet', action:'Gets statistics', description: 'Gets data from the consent dashboard (aggregated data)' },
				],
				default: 'consentAnalysisGet',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['cookieScanner'] } },
				options: [					
					{ name: 'Create Cookie', value: 'cookieScannerCookiesCreatePost', action:'Creates a cookie', description: 'Creates a new cookie' },
					{ name: 'Create Custom Field', value: 'cookieScannerCustomFieldsCreatePost', action:'Creates a custom field', description: 'Creates a new cookie custom field' },
					{ name: 'Create Generated Version', value: 'cookieScannerGeneratedVersionsCreatePost', action:'Creates a generated version', description: 'Creates a new version' },
					{ name: 'Deploy Cookie Notice', value: 'cookieScannerCookieNoticeDeploy', action:'Deploys a cookie notice', description: 'Deploys a cookie notice to the website' },
					{ name: 'Destroy Cookie', value: 'cookieScannerCookiesDelete', action:'Destroys a cookie', description: 'Destroys a cookie' },
					{ name: 'Destroy Custom Field', value: 'cookieScannerCustomFieldsDelete', action:'Destroys a custom field', description: 'Destroys a custom field' },
					{ name: 'Export Cookie Notice', value: 'cookieScannerCookieNoticeExport', action:'Exports a cookie notice', description: 'Allows to download the cookie notice in all localisations' },
					{ name: 'Get Cookie', value: 'cookieScannerCookiesGet', action:'Gets a cookie', description: 'Gets information about requested cookie' },
					{ name: 'Get Custom Field', value: 'cookieScannerCustomFieldsGet', action:'Gets a custom field', description: 'Gets informaion about a custom field' },
					{ name: 'Get Generated Version', value: 'cookieScannerGeneratedVersionsGet', action:'Gets a generated version', description: 'Gets a specific version of cookie Scanner' },
					{ name: 'Get JS Code', value: 'cookieScannerJSCodeGet', action:'Gets the javascript code', description: 'Gets the javascript code that will be added to your legal page to automatically build the cookie list table' },
					{ name: 'List Cookies', value: 'cookieScannerCookiesList', action:'Lists cookies', description: 'Lists cookies' },
					{ name: 'List Custom Fields', value: 'cookieScannerCustomFieldsList', action:'Lists custom fields', description: 'Lists all cutom fields' },
					{ name: 'List Generated Versions', value: 'cookieScannerGeneratedVersionsList', action:'Lists generated versions', description: 'Lists all generated versions' },
					{ name: 'Reset Cookie Description', value: 'cookieScannerCookiesDescriptionReset', action:'Resets a cookie description', description: 'Resets a description retrieve the default description of a given cookie when presented in configured languages' },
					{ name: 'Update Cookie', value: 'cookieScannerCookiesPut', action:'Updates a cookie', description: 'Updates a cookie' },
					{ name: 'Update Custom Field', value: 'cookieScannerCustomFieldsPatch', action:'Updates a custom field', description: 'Updates a cookie custom field' },
				],
				default: 'cookieScannerCookiesCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['dataCleansingTransformations'] } },
				options: [					
					{ name: 'Destroy Cleansing Transformations', value: 'dataCleansingTransformationsDelete', action:'Destroys a cleansing transformation', description: 'Destroys a cleansing transformation' },
					{ name: 'Get Cleansing Transformations', value: 'dataCleansingTransformationsGet', action:'Gets a cleansing transformation', description: 'Gets a cleansing transformation' },
					{ name: 'List Cleansing Transformations', value: 'dataCleansingTransformationsList', action:'Lists cleansing transformations', description: 'Lists cleansing transformations' },
					{ name: 'Store Cleansing Transformations', value: 'dataCleansingTransformationsStorePost', action:'Stores a cleansing transformation', description: 'Stores a cleansing transformation' },
					{ name: 'Update Cleansing Transformations', value: 'dataCleansingTransformationsPatch', action:'Updates a cleansing transformation', description: 'Updates a cleansing transformation' },
				],
				default: 'dataCleansingTransformationsDelete',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['destinations'] } },
				options: [					
					{ name: 'Create Destination', value: 'destinationsCreatePost', action:'Creates a destination', description: 'Creates a destination' },
					{ name: 'Destroy Destination', value: 'destinationsDelete', action:'Destroys a destination', description: 'Destroys a destination' },
					{ name: 'Get Destination', value: 'destinationsGet', action:'Gets a destination', description: 'Gets a destination' },
					{ name: 'List Catalog Destinations', value: 'destinationsCatalogList', action:'Lists catalog destinations', description: 'Lists catalog destinations' },
					{ name: 'List Destination Categories', value: 'destinationsCategoriesList', action:'Lists destination categories', description: 'Lists destination categories' },
					{ name: 'List Destinations', value: 'destinationsList', action:'Lists destinations', description: 'Lists destinations' },
					{ name: 'Update Destination', value: 'destinationsPatch', action:'Updates a destination', description: 'Updates a destination' },
				],
				default: 'destinationsCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['eventDelivery'] } },
				options: [					
					{ name: 'Get Destination Delivery Issues', value: 'eventDeliveryGetIssues', action:'Gets destination delivery issues', description: 'Deliverys issues gives a detailed report on the encountered issues during the provided period' },
					{ name: 'Get Destination Delivery Issue Details', value: 'eventDeliveryGetIssuesDetails', action:'Gets destination delivery issues details', description: 'Gives details on the provided issue ID (related event, request sent to the connector API, response from the connector API)' },
					{ name: 'Get Destination Event Delivery Health', value: 'eventDeliveryGetHealth', action:'Gets a destination event delivery health', description: 'Gives an overview on the delivery health during the provided period and beyond (it returns statistics on the succeded and failed events with a dataset history for each event type during the last 30 days)' },
					{ name: 'Get Destination Event Delivery Trend', value: 'eventDeliveryGetTrend', action:'Gets a destination event delivery trend', description: 'Gives an overview on the delivery status history during the provided period' },
				],
				default: 'eventDeliveryGetIssues',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['eventEnrichments'] } },
				options: [					
					{ name: 'Create Event Enrichment', value: 'eventEnrichmentsCreatePost', action:'Creates an event enrichment', description: 'Creates an event enrichment' },
					{ name: 'Destroy Event Enrichment', value: 'eventEnrichmentsDelete', action:'Destroys an event enrichment', description: 'Destroys an event enrichment' },
					{ name: 'Get Event Enrichment', value: 'eventEnrichmentsGet', action:'Gets an event enrichment', description: 'Gets an event enrichment' },
					{ name: 'List Event Enrichments', value: 'eventEnrichmentsList', action:'Lists event enrichments', description: 'Lists event enrichments' },
					{ name: 'Update Event Enrichment', value: 'eventEnrichmentsPatch', action:'Updates an event enrichment', description: 'Updates an event enrichment' },
				],
				default: 'eventEnrichmentsCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['liveReports'] } },
				options: [					
					{ name: 'Get Live Report', value: 'liveReportsGet', action:'Gets a live report', description: 'Gets a live report' },
					{ name: 'Get Live Report Data', value: 'liveReportsDataGet', action:'Gets a live report data', description: 'Gets a live report data' },
					{ name: 'List Live Reports', value: 'liveReportsList', action:'Lists live reports', description: 'Lists live reports' },
				],
				default: 'liveReportsGet',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['mixCollectRedirectRules'] } },
				options: [					
					{ name: 'Create Redirect Rule', value: 'mixCollectRedirectRulesCreatePost', action:'Creates a redirect rule', description: 'Creates a redirect rule' },
					{ name: 'Delete Redirect Rule', value: 'mixCollectRedirectRulesDelete', action:'Deletes a redirect rule', description: 'Deletes a redirect rule' },
					{ name: 'Get Redirect Rule', value: 'mixCollectRedirectRulesGet', action:'Gets a redirect rule', description: 'Gets a redirect rule' },
					{ name: 'List Redirect Rules', value: 'mixCollectRedirectRulesList', action:'Lists redirect rules', description: 'Lists redirect rules' },
					{ name: 'Update Redirect Rule', value: 'mixCollectRedirectRulesPatch', action:'Updates a redirect rule', description: 'Updates a redirect rule' },
				],
				default: 'mixCollectRedirectRulesCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['monitoring'] } },
				options: [					
					{ name: 'Create Alert', value: 'monitoringAlertsCreatePost', action:'Creates an alert', description: 'Creates an alert for current connected user' },
					{ name: 'Create Notification', value: 'monitoringNotificationsCreatePost', action:'Creates a notification', description: 'Creates a notification for existing alert' },
					{ name: 'Destroy Alert', value: 'monitoringAlertsDelete', action:'Destroys an alert', description: 'Destroys an alert' },
					{ name: 'Destroy Notification', value: 'monitoringNotificationsDelete', action:'Destroys a notification', description: 'Destroys a notification' },
					{ name: 'Get Alert', value: 'monitoringAlertsGet', action:'Gets an alert', description: 'Gets an alert' },
					{ name: 'Get Notification', value: 'monitoringNotificationsGet', action:'Gets a notification', description: 'Gets a notification' },
					{ name: 'List Alerts', value: 'monitoringAlertsList', action:'Lists alerts', description: 'Lists alerts for current connected user' },
					{ name: 'List Events Collection Statistics', value: 'monitoringEventsCollectionStatisticsList', action:'Lists events collection statistics', description: 'Lists events collection statistics' },
					{ name: 'List Notifications', value: 'monitoringNotificationsList', action:'Lists notifications', description: 'Lists notifications' },
					{ name: 'Update Alert', value: 'monitoringAlertsPatch', action:'Updates an alert', description: 'Updates an alert' },
					{ name: 'Update Notification', value: 'monitoringNotificationsPatch', action:'Updates a notification', description: 'Updates a notification' },
				],
				default: 'monitoringAlertsCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['normalizedDatalayer'] } },
				options: [					
					{ name: 'List Event Types', value: 'normalizedDatalayerEventTypesList', action:'Lists event types', description: 'Lists normalized datalayer event types' },
				],
				default: 'normalizedDatalayerEventTypesList',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['segments'] } },
				options: [					
					{ name: 'Get Segments Statistics', value: 'segmentsStatisticsGet', action:'Gets segments statistics', description: 'Retrieves segments statistics' },					
				],
				default: 'segmentsStatisticsGet',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['sources'] } },
				options: [					
					{ name: 'Create Source', value: 'sourcesCreatePost', action:'Creates a source', description: 'Creates a source' },
					{ name: 'Destroy Source', value: 'sourcesDelete', action:'Destroys a source', description: 'Destroys a source' },
					{ name: 'Get Source', value: 'sourcesGet', action:'Gets a source', description: 'Gets a source' },
					{ name: 'List Catalog Sources', value: 'sourcesCatalogList', action:'Lists catalog sources', description: 'Lists catalog sources' },
					{ name: 'List Source Categories', value: 'sourcesCategoriesList', action:'Lists source categories', description: 'Lists source categories' },
					{ name: 'List Sources', value: 'sourcesList', action:'Lists sources', description: 'Lists sources' },
					{ name: 'Update Source', value: 'sourcesPatch', action:'Updates a source', description: 'Updates a source' },
				],
				default: 'sourcesCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['sourcesDataQuality'] } },
				options: [					
					{ name: 'Get Sources Data Quality', value: 'sourcesDataQualityGet', action:'Gets sources data quality', description: 'Fetches statistics about events collections across one or multiple sources' },
				],
				default: 'sourcesDataQualityGet',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['users'] } },
				options: [					
					{ name: 'Create User', value: 'usersCreatePost', action:'Creates an user', description: 'Creates an user' },
					{ name: 'Delete User', value: 'usersDelete', action:'Deletes an user', description: 'Deletes an user' },
				],
				default: 'usersCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['webContainers'] } },
				options: [					
					{ name: 'Create Web Constraint', value: 'webContainersConstraintsCreatePost', action:'Creates a web constraint', description: 'Creates a web constraint' },
					{ name: 'Create Web Container', value: 'webContainersContainersCreatePost', action:'Creates a web container', description: 'Creates a web container' },
					{ name: 'Create Web Perimeter', value: 'webContainersPerimetersCreatePost', action:'Creates a web perimeter', description: 'Creates a web perimeter' },
					{ name: 'Create Web Tag', value: 'webContainersTagsCreatePost', action:'Creates a web tag', description: 'Creates a web tag' },
					{ name: 'Create Web Trigger', value: 'webContainersTriggersCreatePost', action:'Creates a web trigger', description: 'Creates a web trigger' },
					{ name: 'Delete Web Constraint', value: 'webContainersConstraintsDelete', action:'Deletes a web constraint', description: 'Deletes a web constraint' },
					{ name: 'Delete Web Container', value: 'webContainersContainersDelete', action:'Deletes a web container', description: 'Deletes a web container' },
					{ name: 'Delete Web Perimeter', value: 'webContainersPerimetersDelete', action:'Deletes a web perimeter', description: 'Deletes a web perimeter' },
					{ name: 'Delete Web Tag', value: 'webContainersTagsDelete', action:'Deletes a web tag', description: 'Deletes a web tag' },
					{ name: 'Delete Web Trigger', value: 'webContainersTriggersDelete', action:'Deletes a web trigger', description: 'Deletes a web trigger' },
					{ name: 'Get Web Constraint', value: 'webContainersConstraintsGet', action:'Gets a web constraint', description: 'Gets a web constraint' },
					{ name: 'Get Web Perimeter', value: 'webContainersPerimetersGet', action:'Gets a web perimeter', description: 'Gets a web perimeter' },
					{ name: 'Get Web Tag', value: 'webContainersTagsGet', action:'Gets a web tag', description: 'Gets a web tag' },
					{ name: 'Get Web Trigger', value: 'webContainersTriggersGet', action:'Gets a web trigger', description: 'Gets a web trigger' },
					{ name: 'List Web Constraints', value: 'webContainersConstraintsList', action:'Lists web constraints', description: 'Lists web constraints' },
					{ name: 'List Web Containers', value: 'webContainersContainersList', action:'Lists web containers', description: 'Lists web containers' },
					{ name: 'List Web Perimeters', value: 'webContainersPerimetersList', action:'Lists web perimeters', description: 'Lists web perimeters' },
					{ name: 'List Web Tags', value: 'webContainersTagsList', action:'Lists web tags', description: 'Lists web tags' },
					{ name: 'List Web Triggers', value: 'webContainersTriggersList', action:'Lists web triggers', description: 'Lists web triggers' },
					{ name: 'Revert Web Tag', value: 'webContainersTagsRevertPatch', action:'Reverts a web tag', description: 'Reverts a web tag' },
					{ name: 'Update Web Constraint', value: 'webContainersConstraintsPatch', action:'Updates a web constraint', description: 'Updates a web constraint' },
					{ name: 'Update Web Container', value: 'webContainersContainersPatch', action:'Updates a web container', description: 'Updates a web container' },
					{ name: 'Update Web Perimeter', value: 'webContainersPerimetersPatch', action:'Updates a web perimeter', description: 'Updates a web perimeter' },
					{ name: 'Update Web Tag', value: 'webContainersTagsPatch', action:'Updates a web tag', description: 'Updates a web tag' },
					{ name: 'Update Web Trigger', value: 'webContainersTriggersPatch', action:'Updates a web trigger', description: 'Updates a web trigger' },
				],
				default: 'webContainersConstraintsCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['webContainersVariables'] } },
				options: [					
					{ name: 'Create Web Datalayer Variables', value: 'webContainersVariablesDatalayerCreatePost', action:'Creates a web datalayer variable', description: 'Creates a web datalayer variable' },
					{ name: 'Create Web Datalayer Variables Category', value: 'webContainersVariablesDatalayerCategoriesCreatePost', action:'Creates a web datalayer variable category', description: 'Creates a web datalayer variable category' },
					{ name: 'Create Web Internal Variables', value: 'webContainersVariablesInternalCreatePost', action:'Creates a web internal variable', description: 'Creates a web internal variable' },
					{ name: 'Delete Web Datalayer Variables', value: 'webContainersVariablesDatalayerDelete', action:'Deletes a web datalayer variable', description: 'Deletes a web datalayer variable' },
					{ name: 'Delete Web Datalayer Variables Category', value: 'webContainersVariablesDatalayerCategoriesDelete', action:'Deletes a web datalayer variable category', description: 'Deletes a web datalayer variable category' },
					{ name: 'Delete Web Internal Variables', value: 'webContainersVariablesInternalDelete', action:'Deletes a web internal variable', description: 'Deletes a web internal variable' },
					{ name: 'Get Web Datalayer Variables', value: 'webContainersVariablesDatalayerGet', action:'Gets a web datalayer variable', description: 'Gets a web datalayer variable' },
					{ name: 'Get Web Internal Variables', value: 'webContainersVariablesInternalGet', action:'Gets a web internal variable', description: 'Gets a web internal variable' },
					{ name: 'List Web Datalayer Variables', value: 'webContainersVariablesDatalayerList', action:'Lists web datalayer variables', description: 'Lists web datalayer variables' },
					{ name: 'List Web Internal Variables', value: 'webContainersVariablesInternalList', action:'Lists web internal variables', description: 'Lists web internal variables' },
				],
				default: 'webContainersVariablesDatalayerCreatePost',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['workspaces'] } },
				options: [					
					{ name: 'Create Workspace', value: 'workspacesCreatePost', action:'Creates a workspace', description: 'Creates a workspace' },
					{ name: 'Delete Workspace', value: 'workspacesDelete', action:'Deletes a workspace', description: 'Deletes a workspace' },
				],
				default: 'workspacesCreatePost',
			},			  
			{
				displayName: 'Alert ID',
				name: 'alertId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['monitoringAlertsDelete', 'monitoringAlertsGet', 'monitoringAlertsPatch'] } }
			},   			  
			{
				displayName: 'Cleansing Transformation ID',
				name: 'cleansingTransformationId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['dataCleansingTransformationsDelete', 'dataCleansingTransformationsGet', 'dataCleansingTransformationsPatch'] } }
			},	 			  
			{
				displayName: 'Constraint ID',
				name: 'constraintId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersConstraintsDelete', 'webContainersConstraintsGet', 'webContainersConstraintsPatch'] } }
			},				  
			{
				displayName: 'Container ID',
				name: 'containerId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersContainersDelete', 'webContainersContainersPatch'] } }
			},				  
			{
				displayName: 'Cookie ID',
				name: 'cookieId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['cookieScannerCookiesGet', 'cookieScannerCookiesDelete', 'cookieScannerCookiesPut'] } }
			},			  
			{
				displayName: 'Cookie Name',
				name: 'cookieName',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['cookieScannerCookiesDescriptionReset'] } }
			},			  
			{
				displayName: 'Cookie Notice Format',
				name: 'cookieNoticeFormat',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['cookieScannerCookieNoticeExport'] } }
			},			  
			{
				displayName: 'Cookie Notice Language',
				name: 'cookieNoticeLanguage',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['cookieScannerCookieNoticeExport'] } }
			},			  
			{
				displayName: 'Cookie Notice Version ID',
				name: 'cookieNoticeVersionId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['cookieScannerCookieNoticeDeploy', 'cookieScannerCookieNoticeExport'] } }
			},				  
			{
				displayName: 'Cookie Scanner Version ID',
				name: 'cookieScannerVerionId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['cookieScannerGeneratedVersionsGet'] } }
			},		  
			{
				displayName: 'Custom Field ID',
				name: 'customFieldId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['cookieScannerCustomFieldsDelete', 'cookieScannerCustomFieldsGet', 'cookieScannerCustomFieldsPatch'] } }
			},
			{
				displayName: 'Datalayer Variable Category ID',
				name: 'datalayerVariableCategoryId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersVariablesDatalayerCategoriesDelete'] } }
			},	   	  
			{
				displayName: 'Datalayer Variable ID',
				name: 'datalayerVariableId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersVariablesDatalayerDelete', 'webContainersVariablesDatalayerGet'] } }
			},	   	 
			{
				displayName: 'Destination ID',
				name: 'destinationId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['destinationsDelete', 'destinationsGet', 'destinationsPatch'] } }
			},   
			{
				displayName: 'Event Delivery ID',
				name: 'eventDeliveryId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['eventDeliveryGetHealth', 'eventDeliveryGetTrend'] } }
			}, 	  
			{
				displayName: 'Event Enrichment ID',
				name: 'eventEnrichmentId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['eventEnrichmentsDelete', 'eventEnrichmentsGet', 'eventEnrichmentsPatch'] } }
			}, 		 	  
			{
				displayName: 'Internal Variable ID',
				name: 'internalVariableId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersVariablesInternalGet', 'webContainersVariablesInternalDelete'] } }
			},		  
			{
				displayName: 'Issue ID',
				name: 'issueId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['eventDeliveryGetIssues', 'eventDeliveryGetIssuesDetails'] } }
			}, 			  
			{
				displayName: 'Notification ID',
				name: 'notificationId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['monitoringNotificationsDelete', 'monitoringNotificationsGet', 'monitoringNotificationsPatch'] } }
			},  			  
			{
				displayName: 'Perimeter ID',
				name: 'perimeterId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersPerimetersDelete', 'webContainersPerimetersGet', 'webContainersPerimetersPatch'] } }
			},   
			{
				displayName: 'Redirect Rule ID',
				name: 'redirectRuleId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['mixCollectRedirectRulesDelete', 'mixCollectRedirectRulesGet', 'mixCollectRedirectRulesPatch'] } }
			},   
			{
				displayName: 'Report ID',
				name: 'reportId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['liveReportsGet', 'liveReportsDataGet'] } }
			},   
			{
				displayName: 'Source ID',
				name: 'sourceId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['sourcesDelete', 'sourcesGet', 'sourcesPatch'] } }
			},   
			{
				displayName: 'Tag ID',
				name: 'tagId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersTagsGet', 'webContainersTagsDelete', 'webContainersTagsPatch', 'webContainersTagsRevertPatch'] } }
			},   
			{
				displayName: 'Trigger ID',
				name: 'triggerId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['webContainersTriggersGet', 'webContainersTriggersDelete', 'webContainersTriggersPatch'] } }
			},   
			{
				displayName: 'User ID',
				name: 'userId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['usersDelete'] } }
			},   
			{
				displayName: 'Workspace ID',
				name: 'workspaceId',            
				type: 'string',
				default: '',
        displayOptions:{ show:{ operation:['workspacesDelete'] } }
			},	
      {
        displayName: 'Query Parameters',
        name: 'queryParameters',
        type: 'collection',
        placeholder: 'Add Parameter',
        default:{},
        options:[					
          { displayName: 'End', name: 'end', type: 'string', default: '' },
          { displayName: 'Fields[template]', name: 'Fields%5Btemplate%5D', type: 'string', default: '' },
					{ displayName: 'Filter', name: 'filter', type: 'json', default: '' },
					{ displayName: 'Filter[action]', name: 'filter%5Baction%5D', type: 'string', default: '' },
					{ displayName: 'Filter[alert]', name: 'filter%5Balert%5D', type: 'string', default: '' },
					{ displayName: 'Filter[archived]', name: 'filter%5Barchived%5D', type: 'string', default: '' },
					{ displayName: 'Filter[begin_date]', name: 'filter%5Bbegin_date%5D', type: 'string', default: '' },
					{ displayName: 'Filter[category]', name: 'filter%5Bcategory%5D', type: 'string', default: '' },
					{ displayName: 'Filter[causer_id]', name: 'filter%5Bcauser_id%5D', type: 'string', default: '' },
					{ displayName: 'Filter[created]', name: 'filter%5Bcreated%5D', type: 'string', default: '' },
					{ displayName: 'Filter[enable]', name: 'filter%5Benable%5D', type: 'boolean', default: true },
					{ displayName: 'Filter[end_date]', name: 'filter%5Bend_date%5D', type: 'string', default: '' },
					{ displayName: 'Filter[environment]', name: 'filter%5Benvironment%5D', type: 'string', default: '' },
					{ displayName: 'Filter[from]', name: 'filter%5Bfrom%5D', type: 'string', default: '' },
					{ displayName: 'Filter[label]', name: 'filter%5Blabel%5D', type: 'string', default: '' },
					{ displayName: 'Filter[model_id]', name: 'filter%5Bmodel_id%5D', type: 'string', default: '' },
					{ displayName: 'Filter[name]', name: 'filter%5Bname%5D', type: 'string', default: '' },
					{ displayName: 'Filter[public-ID]', name: 'filter%5Bpublic-id%5D', type: 'string', default: '' },
					{ displayName: 'Filter[rangeType]', name: 'filter%5BrangeType%5D', type: 'string', default: '' },
					{ displayName: 'Filter[search]', name: 'filter%5Bsearch%5D', type: 'string', default: '' },
					{ displayName: 'Filter[segment_id]', name: 'filter%5Bsegment_id%5D', type: 'string', default: '' },
					{ displayName: 'Filter[status]', name: 'filter%5Bstatus%5D', type: 'string', default: '' },
					{ displayName: 'Filter[subject_id]', name: 'filter%5Bsubject_id%5D', type: 'string', default: '' },
					{ displayName: 'Filter[subject_type]', name: 'filter%5Bsubject_type%5D', type: 'string', default: '' },
					{ displayName: 'Filter[sup_filters][device][]', name: 'filter%5Bsup_filters%5D%5Bdevice%5D%5B%5D', type: 'string', default: '' },
					{ displayName: 'Filter[sup_filters][location][]', name: 'filter%5Bsup_filters%5D%5Blocation%5D%5B%5D', type: 'string', default: '' },
					{ displayName: 'Filter[to]', name: 'filter%5Bto%5D', type: 'string', default: '' },
					{ displayName: 'Filter[types]', name: 'filter%5Btypes%5D', type: 'string', default: '' },
					{ displayName: 'Granularity', name: 'granularity', type: 'string', default: '' },
          { displayName: 'Include', name: 'include', type: 'string', default: '' },
					{ displayName: 'Page', name: 'page', type: 'json', default: '' },
					{ displayName: 'Page[number]', name: 'page%5Bnumber%5D', type: 'string', default: '' },
					{ displayName: 'Page[size]', name: 'page%5Bsize%5D', type: 'string', default: '' },
					{ displayName: 'Sort', name: 'sort', type: 'json', default: '' },
					{ displayName: 'Sort[by]', name: 'sort%5Bby%5D', type: 'string', default: '' },
					{ displayName: 'Sort[desc]', name: 'sort%5Bdesc%5D', type: 'boolean', default: true },
					{	displayName: 'Source', name: 'source', type: 'string', default: '' },					
          { displayName: 'Start', name: 'start', type: 'string', default: '' },  				
          { displayName: 'Token', name: 'token', type: 'string', default: '', typeOptions:{password:true} },  
        ]
      },   
      {
        displayName: 'Request Body',
        name: 'requestBody',
        type: 'json',
	      default: '{}',
        displayOptions:{ show:{ operation:['cookieScannerCustomFieldsPatch', 'cookieScannerCookiesCreatePost', 'cookieScannerCookiesPut', 'cookieScannerCustomFieldsCreatePost', 'cookieScannerGeneratedVersionsCreatePost', 'dataCleansingTransformationsStorePost', 'dataCleansingTransformationsPatch', 'destinationsCreatePost', 'destinationsPatch', 'eventEnrichmentsCreatePost', 'eventEnrichmentsPatch', 'mixCollectRedirectRulesPatch', 'mixCollectRedirectRulesCreatePost', 'monitoringAlertsCreatePost', 'monitoringAlertsPatch', 'monitoringNotificationsCreatePost', 'monitoringNotificationsPatch', 'sourcesPatch', 'sourcesCreatePost', 'sourcesPatch', 'usersCreatePost', 'webContainersConstraintsCreatePost', 'webContainersConstraintsPatch', 'webContainersContainersCreatePost', 'webContainersContainersPatch', 'webContainersPerimetersCreatePost', 'webContainersPerimetersPatch', 'webContainersTagsCreatePost', 'webContainersTagsPatch', 'webContainersTagsRevertPatch', 'webContainersTriggersCreatePost', 'webContainersTriggersPatch', 'webContainersVariablesDatalayerCreatePost', 'webContainersVariablesDatalayerCategoriesCreatePost', 'webContainersVariablesInternalCreatePost', 'workspacesCreatePost'] } }
      }
		]
	};

	async execute(this: IExecuteFunctions) {
		const items = this.getInputData();
		const returnData = [];
		const credentials = await this.getCredentials('commandersActApi');
    if (!credentials) { throw new ApplicationError('Missing Commanders Act API Credentials'); }
		
		const siteId = credentials.siteId as string;
		const tokenAPI = credentials.tokenAPI as string;
		
		// Traitement des opérations
		for (let i = 0; i < items.length; i++) {
			try {		
       	const operation = this.getNodeParameter('operation', i, '') as string;
        const resource = this.getNodeParameter('resource', i, '') as string;	
        const alertId = this.getNodeParameter('alertId', i, '') as string;
				const cleansingTransformationId = this.getNodeParameter('cleansingTransformationId', i, '') as string;
				const constraintId = this.getNodeParameter('constraintId', i, '') as string;
				const containerId = this.getNodeParameter('containerId', i, '') as string;
				const cookieId = this.getNodeParameter('cookieId', i, '') as string;
        const cookieName = this.getNodeParameter('cookieName', i, '') as string;
				const cookieNoticeFormat = this.getNodeParameter('cookieNoticeFormat', i, '') as string;
				const cookieNoticeLanguage = this.getNodeParameter('cookieNoticeLanguage', i, '') as string;
				const cookieNoticeVersionId = this.getNodeParameter('cookieNoticeVersionId', i, '') as string;
				const cookieScannerVerionId = this.getNodeParameter('cookieScannerVerionId', i, '') as string;
        const customFieldId = this.getNodeParameter('customFieldId', i, '') as string;
				const datalayerVariableCategoryId = this.getNodeParameter('datalayerVariableCategoryId', i, '') as string;		
				const datalayerVariableId = this.getNodeParameter('datalayerVariableId', i, '') as string;
				const destinationId = this.getNodeParameter('destinationId', i, '') as string;
				const eventDeliveryId = this.getNodeParameter('eventDeliveryId', i, '') as string;
				const eventEnrichmentId = this.getNodeParameter('eventEnrichmentId', i, '') as string;
				const internalVariableId = this.getNodeParameter('internalVariableId', i, '') as string;	
        const issueId = this.getNodeParameter('issueId', i, '') as string; 
        const notificationId = this.getNodeParameter('notificationId', i, '') as string; 	
        const perimeterId = this.getNodeParameter('perimeterId', i, '') as string; 		
				const redirectRuleId = this.getNodeParameter('redirectRuleId', i, '') as string;
				const reportId = this.getNodeParameter('reportId', i, '') as string; 			
        const sourceId = this.getNodeParameter('sourceId', i, '') as string; 				
        const tagId = this.getNodeParameter('tagId', i, '') as string; 			
        const triggerId = this.getNodeParameter('triggerId', i, '') as string; 		
        const userId = this.getNodeParameter('userId', i, '') as string;
				const workspaceId = this.getNodeParameter('workspaceId', i, '') as string;	
        const queryParameters = this.getNodeParameter('queryParameters', i, '') as Record<string, any>;					
        const requestBody = this.getNodeParameter('requestBody', i, '') as string; 			

        let url = `https://api.commander1.com/v2/${siteId}`;

				const queryParams = new URLSearchParams();
        Object.entries(queryParameters).forEach(([key, value]) => {
          if (value) queryParams.append(decodeURIComponent(key), String(value));
        });

        const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';

				switch (resource) {
          case 'activityLogs':
						switch (operation) {
							case 'activityLogsList':
								url += `/activity-logs${queryString}`;
								break;
						}
						break;
          case 'consentAnalysis':
            switch (operation) {
							case 'consentAnalysisGet':
								url += `/privacy/statistics${queryString}`;
								break;
						}
						break;
          case 'cookieScanner':
            switch (operation) {
							case 'cookieScannerCookiesCreatePost':
							case 'cookieScannerCookiesList':
								url += `/privacy/cookie-scanner/cookies${queryString}`;
								break;
							case 'cookieScannerCookiesGet':
							case 'cookieScannerCookiesDelete':
							case 'cookieScannerCookiesPut':						
								if (!cookieId) { throw new ApplicationError('Cookie ID is required'); }
								url += `/privacy/cookie-scanner/cookies/${cookieId}${queryString}`;
								break;					
							case 'cookieScannerCookiesDescriptionReset':				
								if (!cookieName) { throw new ApplicationError('Cookie Name is required'); }
								url += `/privacy/cookie-scanner/cookie/description/${cookieName}${queryString}`;
								break;	
							case 'cookieScannerCookieNoticeDeploy':
								if (!cookieNoticeVersionId) { throw new ApplicationError('Cookie Notice Version ID is required'); }
								url += `/privacy/cookie-scanner/${cookieNoticeVersionId}/deploy${queryString}`;
								break;
							case 'cookieScannerCookieNoticeExport':
								if (!cookieNoticeFormat) { throw new ApplicationError('Cookie Notice Format is required'); }
								if (!cookieNoticeVersionId) { throw new ApplicationError('Cookie Notice Version ID is required'); }
								url += `/privacy/cookie-scanner/${cookieNoticeVersionId}/${cookieNoticeFormat}/exports/${cookieNoticeLanguage}${queryString}`;
								break;
							case 'cookieScannerCustomFieldsCreatePost':
							case 'cookieScannerCustomFieldsList':
								url += `/privacy/cookie-scanner/setting/custom-fields${queryString}`;
								break;	
							case 'cookieScannerCustomFieldsGet':
							case 'cookieScannerCustomFieldsDelete':
							case 'cookieScannerCustomFieldsPatch':						
								if (!customFieldId) { throw new ApplicationError('Custom Field ID is required'); }
								url += `/privacy/cookie-scanner/setting/custom-fields/${customFieldId}${queryString}`;
								break;			
							case 'cookieScannerGeneratedVersionsGet':			
								if (!cookieScannerVerionId) { throw new ApplicationError('Cookie Scanner Version ID is required'); }
								url += `/privacy/cookie-scanners/setting/custom-fields/${cookieScannerVerionId}${queryString}`;
								break;		
							case 'cookieScannerGeneratedVersionsCreatePost':	
								url += `/privacy/cookie-scanner${queryString}`;
								break;				
							case 'cookieScannerGeneratedVersionsList':
								url += `/privacy/cookie-scanners${queryString}`;
								break;		
							case 'cookieScannerJSCodeGet':
								url += `/privacy/cookie-scanner/install-code${queryString}`;
								break;
						}
						break;
          case 'dataCleansingTransformations':
            switch (operation) {
							case 'dataCleansingTransformationsStorePost':
							case 'dataCleansingTransformationsList':
								url += `/integrations/cleansing-transformations${queryString}`;
								break;				
							case 'dataCleansingTransformationsGet':
							case 'dataCleansingTransformationsDelete':
							case 'dataCleansingTransformationsPatch':
								if (!cleansingTransformationId) { throw new ApplicationError('Cleansing Transformation ID is required'); }
								url += `/integrations/cleansing-transformations/${cleansingTransformationId}${queryString}`;
								break;	
						}
						break;	
          case 'destinations':
            switch (operation) {			
							case 'destinationsCatalogList':
								url += `/integration-categories${queryString}`;
								break;
							case 'destinationsCategoriesList':
								url += `/destination-categories${queryString}`;
								break;
							case 'destinationsCreatePost':
								url += `/integrations${queryString}`;
								break;
							case 'destinationsList':
								url += `/destinations${queryString}`;
								break;					
							case 'destinationsDelete':
							case 'destinationsPatch':
								if (!destinationId) { throw new ApplicationError('Destination ID is required'); }
								url += `/integrations/${destinationId}${queryString}`;
								break;					
							case 'destinationsGet':
								if (!destinationId) { throw new ApplicationError('Destination ID is required'); }
								url += `/destinations/${destinationId}${queryString}`;
								break;
						}
						break;
          case 'eventDelivery':
            switch (operation) {
							case 'eventDeliveryGetIssues':
								if (!issueId) { throw new ApplicationError('Event Delivery Issue ID is required'); }
								url += `/integrations/${issueId}/delivery/issues${queryString}`;
								break;
							case 'eventDeliveryGetIssuesDetails':
								if (!issueId) { throw new ApplicationError('Event Delivery Issue ID is required'); }
								url += `/integrations/delivery/issues/${issueId}/details${queryString}`;
								break;
							case 'eventDeliveryGetHealth':
								if (!eventDeliveryId) { throw new ApplicationError('Event Delivery ID is required'); }
								url += `/integrations/${eventDeliveryId}/delivery/healths${queryString}`;
								break;
							case 'eventDeliveryGetTrend':
								if (!eventDeliveryId) { throw new ApplicationError('Event Delivery ID is required'); }
								url += `/integrations/${eventDeliveryId}/delivery/trends${queryString}`;
								break;
						}
						break;	
          case 'eventEnrichments':
            switch (operation) {
							case 'eventEnrichmentsCreatePost':
							case 'eventEnrichmentsList':
								url += `/enrichment/events/${queryString}`;
								break;					
							case 'eventEnrichmentsGet':
							case 'eventEnrichmentsDelete':
							case 'eventEnrichmentsPatch':
								if (!eventEnrichmentId) { throw new ApplicationError('Event Enrichments ID is required'); }
								url += `/enrichment/events/${eventEnrichmentId}${queryString}`;
								break;
						}
						break;	
          case 'liveReports':
            switch (operation) {
							case 'liveReportsDataGet':
								if (!reportId) { throw new ApplicationError('Report ID is required'); }
								url += `/ams/reports/${reportId}/data${queryString}`;
								break;
							case 'liveReportsGet':
								if (!reportId) { throw new ApplicationError('Report ID is required'); }
								url += `/ams/reports/${reportId}${queryString}`;
								break;
							case 'liveReportsList':
								url += `/ams/reports${queryString}`;
								break;
						}
						break;	
          case 'mixCollectRedirectRules':
            switch (operation) {
							case 'mixCollectRedirectRulesCreatePost':
							case 'mixCollectRedirectRulesList':
								url += `/ams/redirect-rules${queryString}`;
								break;
							case 'mixCollectRedirectRulesDelete':
							case 'mixCollectRedirectRulesGet':
							case 'mixCollectRedirectRulesPatch':
								if (!redirectRuleId) { throw new ApplicationError('Redirect Rule ID is required'); }
								url += `/ams/redirect-rules/${redirectRuleId}${queryString}`;
								break;
						}
						break;	
          case 'monitoring':
            switch (operation) {
							case 'monitoringEventsCollectionStatisticsList':
								url += `/monitoring/collection/events${queryString}`;
								break;
							case 'monitoringAlertsCreatePost':
							case 'monitoringAlertsList':
								url += `/health/alerts${queryString}`;
								break;
							case 'monitoringAlertsDelete':
							case 'monitoringAlertsGet':
							case 'monitoringAlertsPatch':
								if (!alertId) { throw new ApplicationError('Alert ID is required'); }
								url += `/health/alerts/${alertId}${queryString}`;
								break;				
							case 'monitoringNotificationsCreatePost':
							case 'monitoringNotificationsList':
								url += `/health/notifications${queryString}`;
								break;
							case 'monitoringNotificationsDelete':
							case 'monitoringNotificationsGet':
							case 'monitoringNotificationsPatch':
								if (!notificationId) { throw new ApplicationError('Notification ID is required'); }
								url += `/health/notifications/${notificationId}${queryString}`;
								break;	
						}
						break;		
          case 'normalizedDatalayer':
            switch (operation) {
							case 'normalizedDatalayerEventTypesList':
								url += `/normalized-datalayer/event-types${queryString}`;
								break;
						}
						break;		
          case 'segments':
            switch (operation) {
							case 'segmentsStatisticsGet' :
								url += `/dms/segment-statistics${queryString}`;
								break;
						}
						break;		
          case 'sources':
            switch (operation) {
							case 'sourcesCatalogList':
								url += `/integration-categories${queryString}`;
								break;
							case 'sourcesCategoriesList':
								url += `/source-categories${queryString}`;
								break;
							case 'sourcesCreatePost':
								url += `/integrations${queryString}`;
								break;	
							case 'sourcesList':
								url += `/sources${queryString}`;
								break;					
							case 'sourcesDelete':
							case 'sourcesPatch':
								if (!sourceId) { throw new ApplicationError('Source ID is required'); }
								url += `/integrations/${sourceId}${queryString}`;
								break;				
							case 'sourcesGet':
								if (!sourceId) { throw new ApplicationError('Source ID is required'); }
								url += `/sources/${sourceId}${queryString}`;
								break;
						}
						break;	
          case 'sourcesDataQuality':
            switch (operation) {
							case 'sourcesDataQualityGet':
								url += `/monitoring/sources-data-quality${queryString}`;
								break;
						}
						break;	
          case 'users':
            switch (operation) {
							case 'usersCreatePost':
								url += `/admin/users${queryString}`;
								break;
							case 'usersDelete':
								if (!userId) { throw new ApplicationError('User ID is required'); }
								url += `/admin/users/${userId}${queryString}`;
								break;
						}
						break;	
          case 'webContainers':
            switch (operation) {
							case 'webContainersConstraintsCreatePost':
							case 'webContainersConstraintsList':
								url += `/tms/web-constraints${queryString}`;
								break;
							case 'webContainersConstraintsGet':
							case 'webContainersConstraintsDelete':
							case 'webContainersConstraintsPatch':
								if (!constraintId) { throw new ApplicationError('Constraint ID is required'); }
								url += `/tms/web-constraints/${constraintId}${queryString}`;
								break;
							case 'webContainersContainersCreatePost' : 
							case 'webContainersContainersList':
								url += `/tms/web-containers${queryString}`;
								break;
							case 'webContainersContainersDelete':
							case 'webContainersContainersPatch':
								if (!containerId) { throw new ApplicationError('Container ID is required'); }
								url += `/tms/web-containers/${containerId}${queryString}`;
								break;
							case 'webContainersPerimetersCreatePost':
							case 'webContainersPerimetersList':
								url += `/tms/web-perimeters${queryString}`;
								break;
							case 'webContainersPerimetersGet':
							case 'webContainersPerimetersDelete':
							case 'webContainersPerimetersPatch':
								if (!perimeterId) { throw new ApplicationError('Perimeter ID is required'); }
								url += `/tms/web-perimeters/${perimeterId}${queryString}`;
								break;
							case 'webContainersTagsCreatePost':
							case 'webContainersTagsList':
								url += `/tms/web-tags${queryString}`;
								break;
							case 'webContainersTagsDelete':
							case 'webContainersTagsGet':
							case 'webContainersTagsPatch':
								if (!tagId) { throw new ApplicationError('Tag ID is required'); }
								url += `/tms/web-tags/${tagId}${queryString}`;
								break;
							case 'webContainersTagsRevertPatch':
								if (!tagId) { throw new ApplicationError('Tag ID is required'); }
								url += `/tms/web-tags/${tagId}/revert${queryString}`;
								break;
							case 'webContainersTriggersCreatePost':
							case 'webContainersTriggersList':
								url += `/tms/web-triggers${queryString}`;
								break;
							case 'webContainersTriggersGet':
							case 'webContainersTriggersDelete':
							case 'webContainersTriggersPatch':
								if (!triggerId) { throw new ApplicationError('Trigger ID is required'); }
								url += `/tms/web-triggers/${triggerId}${queryString}`;
								break;
						}
						break;	
          case 'webContainersVariables':
            switch (operation) {
							case 'webContainersVariablesDatalayerCreatePost':
							case 'webContainersVariablesDatalayerList':
								url += `/tms/web-datalayer-variables${queryString}`;
								break;
							case 'webContainersVariablesDatalayerGet':
							case 'webContainersVariablesDatalayerDelete':
								if (!datalayerVariableId) { throw new ApplicationError('Datalayer Variable ID is required'); }
								url += `/tms/web-datalayer-variables/${datalayerVariableId}${queryString}`;
								break;
							case 'webContainersVariablesInternalCreatePost':
							case 'webContainersVariablesInternalList':
								url += `/tms/web-internal-variables${queryString}`;
								break;
							case 'webContainersVariablesInternalGet':
							case 'webContainersVariablesInternalDelete':
								if (!internalVariableId) { throw new ApplicationError('Internal Variable ID is required'); }
								url += `/tms/web-internal-variables/${internalVariableId}${queryString}`;
								break;
							case 'webContainersVariablesDatalayerCategoriesCreatePost':
								url += `/tms/web-datalayer-variable-categories${queryString}`;
								break;
							case 'webContainersVariablesDatalayerCategoriesDelete':
								if (!datalayerVariableCategoryId) { throw new ApplicationError('Datalayer Variable Category ID is required'); }
								url += `/tms/web-datalayer-variable-categories/${datalayerVariableCategoryId}${queryString}`;
								break;
						}
						break;	
          case 'workspaces':
            switch (operation) {
							case 'workspacesCreatePost':
								url += `/admin/workspace${queryString}`;
								break;
							case 'workspacesDelete':
								if (!workspaceId) { throw new ApplicationError('Workspace ID is required'); }
								url += `/admin/workspace/${workspaceId}${queryString}`;
								break;
						}
						break;
          default:
          throw new NodeOperationError(this.getNode(),`Unknown resource:${resource}`);
				}			

				const httpMethod: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT' =  operation.endsWith('Delete') ? 'DELETE' :
                                                                         operation.endsWith('Patch') ? 'PATCH' :
																																				 operation.endsWith('Put') ? 'PUT' :
																																				 operation.endsWith('Post') ? 'POST' : 'GET';

				let body;
				let headers: any = {
          'Authorization': `Bearer ${tokenAPI}`,
          'Content-Type': 'application/json'
        };

				if (['PATCH', 'POST', 'PUT'].includes(httpMethod)) {
          body = JSON.parse(requestBody);
        }

				let requestConf;

				requestConf = {
          method: httpMethod,
          url,
          headers,
          ...(body ? { body } : {}),
        };

        console.log('url : ' + url);
        console.log('requestConf : ' + JSON.stringify(requestConf));

				const responseData = await this.helpers.request(requestConf);

        console.log('responseData : ' + responseData);

				if (typeof responseData === 'string') {
          const trimmed = responseData.trim();
          if (trimmed !== '') {
            try {
              returnData.push({ json: JSON.parse(trimmed) });
            } catch (e) {
              returnData.push({ text: trimmed });
            }
          } else {
            returnData.push({ 'Status Code': '204 No Content' });
          }
        } else if (responseData) {
          returnData.push(responseData);
        } else {
          returnData.push({ 'Status Code': '204 No Content' });
        }

			} catch (error) {
        throw new NodeApiError(this.getNode(), {
          message: `Error calling Commanders Act API: ${error.message}`,
          description: error.stack || 'No stack trace available'
        });
      }
    }
    return [this.helpers.returnJsonArray(returnData)];
  }
}