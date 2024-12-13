---
title: "Test Environment"
date: 2022-02-01 00:01:01Z
description: "Test Environment"
---

## Test Environment

### ER/EP Components

#### Procedure Portal (ER Service)
##### Procedure Portal PoCs
- **CY:** https://oots-er-web-acc.dmrid.gov.cy
- **ES:** https://oots.simplegob.com/requester
- **SI:** https://oots-ers.test.medius.si/ers/test/00
- **MT:** https://projectathonmtsp.azurewebsites.net

#### Preview Space (EP)
- https://oots-ep-preview-acc.dmrid.gov.cy

### Integration Components

#### Backend Web Service (BWS)
- https://oots-ep-backend-acc.dmrid.gov.cy/BackendApiService.svc/api/help  
- https://oots-ep-backend-acc.dmrid.gov.cy/Service.svc?WSDL

#### OOTS Integration API
- https://oots-api-acc.dmrid.gov.cy/swagger/index.html

#### EU Common Services
- CS API Documentation: https://oots.pages.code.europa.eu/tdd/apidoc/
- Evidence Broker (EB): https://query.cs.acc.oots.tech.ec.europa.eu/eb/rest/search
- Data Services Dictionary (DSD): https://query.cs.acc.oots.tech.ec.europa.eu/dsd/rest/search

#### eDelivery Access Point
- https://oots-ap-acc.dmrid.gov.cy/services/wsplugin?WSDL

#### eIDAS/CyLogin

- https://dev.azure.com/cyprus-gov-cds/Documentation/_wiki/wikis/Documentation/14/CY-Login

<!-- #### Natural or Physical person
In case the user is authenticated from eIDAS network then the unique identifier has the following format:  
 **__{sending_country}/{receiving_country}/{member_state_unique_identifier}__**

The value of the member_state_unique_identifier may be derived (as hash value) by the real identifier of the natural person or legal person.

Based on eIDAS specifications the member_state_unique_identifier is unique for a natural person or legal person.  

The unique identifier consists of:
- 1. The first part is the Nationality Code of the identifier - ISO 3166-1 alpha-2 codes, followed by a slash (“/“)
- 2. The second part is the Nationality Code of the destination country - ISO 3166-1 alpha-2 codes, followed by a slash (“/“)
- 3. The third part a combination of readable characters 
This uniquely identifies the identity asserted in the country of origin but does not necessarily reveal any discernible correspondence with the subject's actual identifier (for example, username, fiscal number etc)

##### Example:
DE/CY/02635542Y (German eID Number for a Cypriot Evidence Provider) -->

#### CyConnect
- https://dev.azure.com/cyprus-gov-cds/Documentation/_wiki/wikis/Documentation/74/CY-Connect

