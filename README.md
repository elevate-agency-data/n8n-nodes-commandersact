# n8n-nodes-commandersact  

This is an n8n community node. It lets you interact with Commanders Act in your n8n workflows.  

Commanders Act specializes in digital data management and optimization, offering solutions for tag management, consent management, and data activation to enhance marketing performance and GDPR compliance. 

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.  

[Installation](#installation)  
[Credentials](#credentials)    
[Operations](#operations)   
[Using as a Tool](#using-as-a-tool)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation  

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.  

Alternatively, you can manually install it:  

```sh  
git clone https://github.com/elevate-agency-data/n8n-nodes-commandersact.git 
cd n8n-nodes-commandersact 
npm install  
```  

Then, place the node file in the `~/.n8n/custom-nodes` directory (or follow instructions specific to your n8n installation).   

## Credentials  

To use this node, you need a Commanders Act API key with access to Commanders Act.  

## Operations  

This node supports the following operations within Commanders Act:  

* **Activity Logs**
    - Lists activity logs
* **Consent Analysis**
    - Gets statistics
* **Cookie Scanner**
    - Creates a cookie
    - Creates a custom field
    - Creates a generated version
    - Deploys a cookie notice
    - Destroys a cookie
    - Destroys a custom field
    - Exports a cookie notice
    - Gets a cookie
    - Gets a custom field
    - Gets a generated version
    - Gets the javascript code
    - Lists cookies
    - Lists custom fields
    - Lists generated versions
    - Resets a cookie description
    - Updates a cookie
    - Updates a custom field
* **Data Cleansing**
    - Destroys a cleansing transformation
    - Gets a cleansing transformation
    - Lists cleansing transformations
    - Stores a cleansing transformation
    - Updates a cleansing transformation
* **Destinations**
    - Destroys a destination
    - Gets a destination
    - Lists catalog destinations
    - Lists destination categories
    - Lists destinations
    - Updates a destination
* **Event Delivery**
    - Gets destination delivery issues
    - Gets destination delivery issues details
    - Gets a destination event delivery health
    - Gets a destination event delivery trend
* **Event Enrichments**
    - Creates an event enrichment
    - Destroys an event enrichment
    - Gets an event enrichment
    - Lists event enrichments
    - Updates an event enrichment
* **Live Report Builder**
    - Gets a live report
    - Gets a live report data
    - Lists live reports
* **Mix Collect Redirect Rules**
    - Creates a redirect rule
    - Deletes a redirect rule
    - Gets a redirect rule
    - Lists redirect rules
    - Updates a redirect rule
* **Monitoring**
    - Creates an alert
    - Creates a notification
    - Destroys an alert
    - Destroys a notification
    - Gets an alert
    - Gets a notification
    - Lists alerts
    - Lists events collection statistics
    - Lists notifications
    - Updates an alert
    - Updates a notification
* **Normalized Datalayer**
    - Lists event types
* **Segments**
    - Gets segments statistics
* **Sources**
    - Lists catalog sources
    - Lists source categories
    - Lists sources
    - Creates a source
    - Destroys a source
    - Gets a source
    - Updates a source
* **Sources Data Quality**
    - Gets sources data quality
* **Users**
    - Creates an user
    - Deletes an user
* **Web Containers**
    - Creates a web constraint
    - Creates a web container
    - Creates a web perimeter
    - Creates a web tag
    - Creates a web trigger
    - Deletes a web constraint
    - Deletes a web container
    - Deletes a web perimeter
    - Deletes a web tag
    - Deletes a web trigger
    - Gets a web constraint
    - Gets a web perimeter
    - Gets a web tag
    - Gets a web trigger
    - Lists web constraints
    - Lists web containers
    - Lists web perimeters
    - Lists web tags
    - Lists web triggers
    - Reverts a web tag
    - Updates a web constraint
    - Updates a web container
    - Updates a web perimeter
    - Updates a web tag
    - Updates a web trigger
* **Web Containers Variables**
    - Creates a web datalayer variable
    - Creates a web datalayer variable category
    - Creates a web internal variable
    - Deletes a web datalayer variable
    - Deletes a web datalayer variable category
    - Deletes a web internal variable
    - Gets a web datalayer variable
    - Gets a web internal variable
    - Lists web datalayer variables
    - Lists web internal variables
* **Workspaces**
    - Creates a workspace
    - Deletes a workspace

Retrieve information from the [Commanders Act API](https://commandersact.github.io/api_doc/). 

## Using as a Tool

This node can be used as a tool in n8n AI Agents. To enable community nodes as tools, you need to set the `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE` environment variable to `true`.

### Setting the Environment Variable

**If you're using a bash/zsh shell:**
```bash
export N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
n8n start
```

**If you're using Docker:**
Add to your docker-compose.yml file:
```yaml
environment:
  - N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

**If you're using the desktop app:**
Create a `.env` file in the n8n directory:
```
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

**If you want to set it permanently on Mac/Linux:**
Add to your `~/.zshrc` or `~/.bash_profile`:
```bash
export N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

## Compatibility  

- Tested with: 1.84.1 (Success)

## Resources  

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)  
- [Commanders Act API documentation](https://commandersact.github.io/api_doc/)