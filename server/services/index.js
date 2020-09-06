const express = require('express');
const { request, response } = require('http');

import './database';

const app = express();

// for testing the routes, using insomnia 

//GET: find links into database
app.get('/listUrls', (request, response) => {
    return response.json([
        "https://www.ibm.com/br-pt/products/partneratibm",
        "https://www.ibm.com/br-pt",
        "https://www.ibm.com/br-pt/analytics?lnk=hpmpr_bua_brpt&lnk2=learn",
        "https://www.ibm.com/br-pt/analytics/data-integration?lnk=hpmpr_bua_brpt&lnk2=learn",
        "https://www.ibm.com/br-pt/analytics/machine-learning?lnk=hpmpr_bua_brpt&lnk2=learn",
        "https://www.ibm.com/br-pt/analytics/data-science?lnk=hpmpr_bua_brpt&lnk2=learn"

    ]);
});


//POST: save link into database

app.post('/listUrls', (request, response) => [

    "https://www.ibm.com/br-pt/products/partneratibm",
    "https://www.ibm.com/br-pt",
    "https://www.ibm.com/br-pt/analytics?lnk=hpmpr_bua_brpt&lnk2=learn",
    "https://www.ibm.com/br-pt/analytics/data-integration?lnk=hpmpr_bua_brpt&lnk2=learn",
    "https://www.ibm.com/br-pt/analytics/machine-learning?lnk=hpmpr_bua_brpt&lnk2=learn",
    "https://www.ibm.com/br-pt/analytics/data-science?lnk=hpmpr_bua_brpt&lnk2=learn"

]);

app.listen(3333, () => {
    console.log("Back-end started!")
});