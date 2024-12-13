---
title: "Evidence Requester"
date: 2022-02-01 00:01:01Z
description: "Evidence Requester"
---

## Evidence Requester (ER) Integration
[ ![OOTS Integration APIs](../../img/ER.png) ](../../img/ER.png)

### Scope of work for Evidence Requesters
- Implement or Modify Procedure Portal (Service)
- Integration with eIDAS to authenticate user
- Integration with CS to determine evidence type and provider (based on Requirement and MS)
- Implement Backend SOAP Web Service to receive notifications from eDelivery Access Point
- Implement SOAP Client to submit Requests to, and retrieve responses from eDelivery Access Point
- Collaborate with relevant EPs from other MS to Test

### Prerequisites

#### SDG Team @ [sdg@dits.dmrid.gov.cy](mailto:oots-support@dits.dmrid.gov.cy)
- Initiate the SDG/OOTS Integration process as an Evidence Requester according to the legal SDG framework
- Discovery and readiness assessment

#### OOTS Central Team @ [oots-support@dits.dmrid.gov.cy](mailto:oots-support@dits.dmrid.gov.cy)
- eDelivery Access Point Account: Send requests and receive responses from AP
- OOTS Integration API key: Call Common Services and validate messages (if applicable)
- Central Backend Service Account: integration with the national eDelivery AP (if applicable). Evidence requesters have the option to implement a self-managed backend service to interact with the eDelivery system.  In this case, ERs could follow the [Playbook for Evidence Requester](https://ec.europa.eu/digital-building-blocks/sites/display/OOTS/steps+Evidence+Requester)

#### CDS Team @ [cds-support@dits.dmrid.gov.cy](mailto:cds-support@dits.dmrid.gov.cy)
- CyConnect: configuration of the ER SOAP Web Service on the CyConnect API Gateway to receive notifications from AP
- CyLogin/eIDAS Account: Authenticate users (if applicable)
- CyNotify Account: Send email and SMS notifications (if applicable)

