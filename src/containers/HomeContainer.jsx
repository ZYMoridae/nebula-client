// Counter.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subHeader: {
    fontWeight: 600
  }
});

const markdown = `

[Take me to suppliermanager](#ninsm-link)

# Kill port
<code>
netstat -ano | findstr :9000
taskkill /PID 12216 /F
</code>

---

# PrivaSec

* **profile_login_data** table

---
# Excon

#### [Endpoints](/~zhouj/nebula/excon.html)


#### Issue
* Ires API vendor folder missing when deployed to the target server
* Tango request


#### Tango

**build throttle project**
<code>
mvn clean
mvn install package -DskipTests
</code>

##### Parameters (devjava2)
<pre>
#Tango Data Source
tangoDS.driverClassName=org.postgresql.Driver
#tangoDS.url=jdbc:postgresql://pgpooldev1.intsrv.net:5432/tango
tangoDS.url=jdbc:postgresql://uat.intsrv.net:5432/tango

#tangoDS.url=jdbc:postgresql://uat.intsrv.net:5432/tango
tangoDS.username=tango
#tangoDS.password=6Piper$
tangoDS.password=^&ujmNBVCDE#@!

#ires Data Source
iresDS.driverClassName=org.postgresql.Driver
#iresDS.url=jdbc:postgresql://irespredev1.intsrv.net:5432/ires
iresDS.url=jdbc:postgresql://uat.intsrv.net:5432/ires
#iresDS.url=jdbc:postgresql://uat.intsrv.net:5432/ires
#iresDS.url=jdbc:postgresql://brd.intsrv.net:5432/ires
iresDS.username=ires
iresDS.password=test

#iresDS.username=tango
#iresDS.password=6Piper$
#iresDS.password=^&ujmNBVCDE#@!

#iCom Gateway
icomGateway.url=http://10.15.1.211:8080/iCom/servlet/conn
icomGateway.user=aotDBI
icomGateway.password=trawl9just6


#AsyncHttpClient
asyncHttpClient.requestTimeoutInMs = 500000
asyncHttpClient.connectionTimeoutInMs = 500000
asyncHttpClient.maxRequestRetry = 0

#NIN Gateway
ninGateway.url= http://tst.ninternal.needitnow.com.au/StartNinternal.asmx



#OCTOPUS Gateway
octopusGateway.url=http://13.55.156.152:8080/exconn
</pre>

#### Symphony Deployment


##### Task
<code>
cd /app/www/deployer
vendor/bin/dep build test-excon
vendor/bin/dep deploy test-excon
</code>

##### Deployer
Overriding configuration options
For example, if your deploy.php file contains this configuration:

<pre><code>
set('ssh_multiplexing', false);
</code></pre>
And you want to enable ssh multiplexing without modifying the file, you can pass the -o option to the dep command:

<pre><code>
dep deploy -o ssh_multiplexing=true
</code></pre>
To override multiple config options, you can pass multiple -o args:

<pre><code>
dep deploy -o ssh_multiplexing=true -o branch=master
</code></pre>

#### IresApi Request

##### getAotHotelsSearchResults
<pre>
{
  "endpoint":"search",
  "method":"getAotHotelsSearchResults",
  "params":{
     "country":null,
     "location":"NULL.E179900",
     "checkInDate":"2018-10-18",
     "nights":1,
     "adults":[
        "1"
     ],
     "children":[

     ],
     "office":null,
     "proximity":20,
     "orderBy":"availability",
     "advancedSearchFilters":{
        "band":"608",
        "accomStyle":null,
        "roomType":null,
        "starRating":null
     },
     "nocache":false,
     "perPage":20,
     "pageNum":1
  },
  "id":"02g1c62v9tl66vumhl4n808163_search_getAotHotelsSearchResults_1538966758"
}
</pre>

##### getLocations
<pre>
{
  "endpoint":"search",
  "method":"getLocations",
  "params":{
     "keyword":"mel",
     "site":"WOAG",
     "country_code":"AU",
     "version":"excon"
  },
  "id":"ulde7172sj41eq6ghvrco13ll3_search_getLocations_1537244914"
}
</pre>



#### SQL
* Excon location mapping table (import data from CSV => **UTF-8 format**)
* IRES location view
* Tango property setting

#### Ape Rate Mapping

1. Create provider in **ape_providers** table
  * Hotelbeds **501**
  * GTA       **502**
  * Calypso   **503**
  * Priceline **504**
2. Create rate in **ape_rate_plan_mapping** table
  As per @Anthoney.
  * Copy where PriceCode = 'XV'
  * Change provider id
  * Change rate plan code
  * Change fixed marked up (if nett = 0, if gross = commision)

Use agent commssion (**AgentCommission** field) from response from Throttle 

<!-- Question -->
#### Question
---
##### 1. **How to calculate tax**

ApeRateCalculator
<pre><code>
$taxRates = $this->db->queryForMap('SELECT tax_type, percentage FROM tax_types', false);
if ($aotEntity == 'AU' && $supplierCountry == 'AU') {
    $taxType = $supplier->getTaxType();
    if (!$taxType) throw new Ires_Exception("Cannot find tax type for '{$supplier->getSupplierCode()}'");
    $costTaxRate = $taxRates[$taxType];
    $costTax = $costValue->multiply($costTaxRate / ($costTaxRate + 1));
    $auGstTaxRate = $taxRates['AGS'];
    $markupTax = $markupValue->multiply($auGstTaxRate / ($auGstTaxRate + 1));
    if (strcasecmp(trim($agent->getCountry()), 'Australia') == 0) {
        $agentCommissionTax = $agentCommissionValue->multiply($auGstTaxRate / ($auGstTaxRate + 1));
    }
} else if ($aotEntity == 'NZ' && $supplierCountry == 'NZ') {
    $nzTaxRate = $taxRates['NGT'];
    $costTax = $costValue->multiply($nzTaxRate / ($nzTaxRate + 1));
    $markupTax = $markupValue->multiply($nzTaxRate / ($nzTaxRate + 1));
    if (strcasecmp(trim($agent->getCountry()), 'New Zealand') == 0) {
        $agentCommissionTax = $agentCommissionValue->multiply($nzTaxRate / ($nzTaxRate + 1));
    }
}
</code>
</pre>

##### 2. **Deduplicate Excon location name**

##### 3. **iCom-Excon location mapping**
As per Anthoney, all international products use 'AUS' as iCom location code.

##### 4. **Deduplicate Excon hotel name**
* Do we need set up extra column in supplier connection table or we create a new table follow the same structure like connection table for Excon?


##### 5. **How to sync data from Excon to Ires?**

---

# NIN Supplier Manager

<a name="ninsm-link"><a> <a href="http://dev.aot.com.au/~zhouj/suppliermanager/htdocs/index.html" target="_blank">http://dev.aot.com.au/~zhouj/suppliermanager/htdocs/index.html</a>

#### AOT Supplier Manager Config

| Field                 | Value         |
| ---------             | --------- |
| **NinSmProjName**     | project name. e.g. 'ninsm-ui' |
| **NinSmHost**         | NIN supplier manager front end application host (react-js). e.g. **10.15.5.98** |
| **NinSmPort**         | NIN supplier manager front end application port number (react-js). e.g. **80** |
| **NinSmApiHost**      | NIN supplier manager back end application host (JAVA). e.g. **10.15.5.98** |
| **NinSmApiPort**      | NIN supplier manager back end application port number (JAVA). e.g. **80** |
| **NinSmApiSso**       | Login end point. e.g. **'/ninsm/api/auth/login'** |
| **NinSmApiGroupCheck** | Group check end point. e.g. **'/ninsm/api/auth/groups/:groupName/properties'** |
`;

class HomeContainer extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className={styles.root} style={{ padding: 20 }}>
         <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          href="/products"
        >
          <NavigationIcon/>
          Products
        </Fab>
        <Paper elevation={1} style={{padding: 20, marginTop: 20}}>
          <ReactMarkdown source={markdown} escapeHtml={false}/>
        </Paper>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(HomeContainer);