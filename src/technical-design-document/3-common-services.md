---
title: "EU Common Services"
date: 2022-02-01 00:01:00Z
description: "EU Common Services"
---
<!-- # EU Common Services APIs -->

## Overview
To support the exchange of evidences between Data Services and Online Procedure Portals, the Once-Only Technical System uses Once-Only supporting services. These are referred to as the Common Services. The Common Services do not process data about citizens or businesses. Instead they contain and serve operational data parameters that support the operation of the Once-Only technical system. There are three Common Services:

[ ![EU Common Services APIs](../../img/cs-1.png) ](../../img/cs-1.png)

The identified Common Services are:

- The **Data Service Directory (DSD)**, which is a common service that acts as a catalogue of Evidence types that the EPs can provide upon request. It is used in the Evidence Exchange process by the Evidence Requesters to discover the Evidence Providers that can provide the evidence they require.
- The **Evidence Broker (EB)**, which is an authoritative system that maps specific data sets as Evidence types that prove specific requirements. The ER consults the EB to find which types of evidence can be requested as evidence for a specific Evidence Subject, taking into account the Subject's location and/or jurisdiction. 
- The **Semantic Repository (SR)** is a common service that acts as a data portal for OOTS, storing commonly agreed information models grouped by domain, providing them under multiple representation techniques.

Online procedures are made up of requirements. For a procedure to be completed, all of its corresponding requirements are to be fulfilled. It is the case therefore that Citizens are, via the ER, able to fulfil one or more requirements using OOTS. To fulfil a requirement, evidence is required to prove (or disprove) the said requirement. To locate the required evidence, the Citizen is to select the evidence type which is presented by OOTS and is derived from the selected requirements. It is therefore the case that Procedures are made up of Requirements, which in turn are made up of Evidence Types.  

As per the OOTS Technical Design, during each Evidence Exchange, ERs are to consult two services known as 1) the **Evidence Broker (EB)** and 2) the **Data Services Directory (DSD)** to gather all the necessary information needed to request Evidence on behalf of a Citizen. The Semantic Repository (SR) is just a common service that acts as a data portal for the technical system and is therefore outside the scope of this Integration Document.

The Common Services APIs responsible for providing the following information:  
1. _Evidence Broker_: Return a list of requirements, given a procedure ID.
2. _Evidence Broker_: Return a list of evidence types, given a requirement ID.
3. _Data Services Directory_: uses the Evidence Types obtained from the EB to retrieve a list of possible EPs and their respective Data Services. 

The above three steps are instrumental for obtaining the required details to be able to issue an Evidence Request, which is essentially an XML metadata file containing information such as EP location and evidence file metadata. This Evidence Request file is then packaged as an eDelivery message and transferred to the national eDelivery Access Point for processing.

## Common Services APIs

### CS API Documentation
- CS API Documentation: https://oots.pages.code.europa.eu/tdd/apidoc/

### CS Testing Environment
- Evidence Broker (EB): https://query.cs.acc.oots.tech.ec.europa.eu/eb/rest/search
- Data Services Dictionary (DSD): https://query.cs.acc.oots.tech.ec.europa.eu/dsd/rest/search

## Reference Documents
- **[Evidence-Broker.pdf](../../tdd/Evidence-Broker.pdf)**
- **[Data-Service-Directory.pdf](../../tdd/Data-Service-Directory.pdf)**
- **[Semantic-Repository.pdf](../../tdd/Semantic-Repository.pdf)**