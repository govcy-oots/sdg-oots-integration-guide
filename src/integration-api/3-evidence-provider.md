---
title: "Evidence Provider"
date: 2022-02-01 00:01:01Z
description: "Evidence Provider"
---

## Evidence Provider (EP) Integration
[ ![OOTS Integration APIs](../../img/EP.png) ](../../img/EP.png)

### Scope of work for Evidence Providers
- Implement Backend SOAP Web Service to receive notifications from eDelivery Access Point
- Implement SOAP Client to submit Responses to and retrieve Requests from the AP
- Integration with eIDAS to re-authenticate user
- Implement Preview Space for user to confirm the exchange of evidence (if applicable)
- Collaborate with relevant ERs from other MS to Test

### Prerequisites

#### SDG Team @ [sdg@dits.dmrid.gov.cy](mailto:oots-support@dits.dmrid.gov.cy)
- Initiate the SDG/OOTS Integration process as an Evidence Provider according to the legal SDG framework
- Discovery and readiness assessment
- Register as an Evidence Provider in the Common Services Admin GUI (in cooperation with the evidence mapping team)

#### OOTS Central Team @ [oots-support@dits.dmrid.gov.cy](mailto:oots-support@dits.dmrid.gov.cy)
- eDelivery Access Point Account: Send requests and receive responses from AP
- OOTS Integration API key: Validate messages (if applicable)
- Central Backend Service Account: integration with the national eDelivery AP (if applicable). Evidence providers have the option to implement a self-managed backend service to interact with the eDelivery system. In this case, EPs could follow the [Playbook for Evidence Provider](https://ec.europa.eu/digital-building-blocks/sites/display/OOTS/steps+Evidence+Provider)

#### CDS Team @ [cds-support@dits.dmrid.gov.cy](mailto:cds-support@dits.dmrid.gov.cy)
- CyConnect: configuration of the ER SOAP Web Service on the CyConnect API Gateway to receive notifications from AP
- CyLogin/eIDAS Account: Authenticate users (if applicable)
- CyNotify Account: Send email and SMS notifications (if applicable)