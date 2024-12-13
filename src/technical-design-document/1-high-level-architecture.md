---
title: "High-Level Architecture"
date: 2022-02-01 00:01:00Z
description: "High-Level Architecture"
---

<!-- # High-Level Architecture -->

## Technical Design Document (TDD)

The TDD includes the technical specifications of the Once Only Technical System and every system component. It is divided in 6 distinct chapters.

The latest version of the TDD is available at the following link:  
**[OOTS Technical Design Documents - RELEASE 1.1.0 (September 2024)](https://ec.europa.eu/digital-building-blocks/sites/display/TDD/OOTS+Technical+Design+Documents+v1.1.0)**

### TDD Chapters
- [Chapter 1: Introduction - High Level Architecture](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=797081656)
- [Chapter 2: User Identification, Authentication and Record Matching](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=797081653)
- [Chapter 3: Common Services](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=797081654)
- [Chapter 4: Evidence Exchange](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=797081657)
- [Chapter 5: Data Models](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=797081655)
- [Chapter 6: OOTS Guidance and UX Recommendations](https://ec.europa.eu/digital-building-blocks/sites/pages/viewpage.action?pageId=797081652)

## OOTS High-Level Architecture

<!-- ![OOTS High-Level Architecture](img/high-level-architecture.png) -->
[ ![OOTS High-Level Architecture](../../img/high-level-architecture.png) ](../../img/high-level-architecture.png)

The reference architecture described in the TDD document (TDD chapter 1) is based on EU Implementing Regulation. It defined the high-level architecture and the 2 basic roles (Evidence Requesters and Providers) and the different components of OOTS.

The system concerns an Evidence Exchange between two separate Member States: the Member State of the citizen wherein the Evidence is stored, and the Member State of the procedure requesting the use of the same Evidence. In the case of the former, the entity storing the Evidence is known as an Evidence Provider (EP), whereas in the latter, the procedure belongs to an Evidence Requester (ER). 

### Core Architectural Elements
The following elements are core elements as they are used for all "once-only" exchanges:

- Online Procedure Portal
- Data Service (Backend Service)
- Evidence Broker and Data Service Directory (Common Services)
- eDelivery Access Point
- Identity (eIDAS)

[ ![OOTS High-Level Architecture](../../img/high-level-architecture-2.png) ](../../img/high-level-architecture-2.png)

The above Figure provides a High Level view of the Once-Only Technical System.

The “Once-Only evidence exchange” process consists of the following steps, all initiated from an Online Procedure Portal (see section 4.2):

1. **"Express Request"** is a step in which the user is asked to express explicitly whether he or she wants to use the Once-Only Technical System. 
2. **“Lookup and Select Evidence Type”** is an optional step in which an “Evidence Type Lookup Service” is used to determine the type of evidence to be retrieved. This service is implemented in an Evidence Broker component (see section 6.2). 
3. **“Lookup and Select Evidence Provider”** is a step in which a “Data Service Lookup Service” is used to determine the competent authority to which the evidence request is made. This service is provided by a Data Service Directory component (see section 6.3).
4. **“Lookup and Request Evidence”** is a step in which a request for available evidences is made to a “Data Service” (see section 5.2) using eDelivery messaging. This service is provided by a “Base Registry” component owned by a competent authority that is an “Evidence Provider”. If any evidences may be available from the contacted Data Services, the response will include hyperlinks that link to a separate "Evidence Preview Service" offered by (or on behalf of) the Evidence Provider. 
5. **"Select for Preview"** is a step in which the user selects one or more available pieces of evidence for consideration. At this stage, the user will be provided the option to follow the hyperlinks to preview and decide on the use of the evidence, and return to the Online Procedure Portal. In parallel, any confirmed pieces of evidences are returned to the Portal using secure eDelivery  messaging.  
6. After returning from the Preview Space, the **“Complete Exchange”** is a step in which the user continues the procedure.

## Reference Documents
- **[OOTS-High-Level-Architecture-v217-20210604_173253.pdf](../../tdd/OOTS-High-Level-Architecture-v217-20210604_173253.pdf)**