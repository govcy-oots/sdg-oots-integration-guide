---
title: "eDelivery Access Point"
date: 2022-02-01 00:01:00Z
description: "eDelivery Access Point"
---

## Overview

[ ![eDelivery Overview](../../img/e-delivery-1.png) ](../../img/e-delivery-1.png)

The basic functions of the eDelivery AP are described below:

1. Sender (C1) sends message to sending AP (C2) 
2. AP (C2): Process message
    - a. Validate and compress the message
    - b. Sign the compressed message
    - c. Encrypt the message
3. AP (C3): Receive message
    - a. Receive and decrypt message
    - b. Verification of signature
    - c. Decompression of message
    - d. Validation on message
    - e. Send acknowledgement to sending AP (C2)
    - f. Store the user message for download by C4
4. Recipient (C4): Receive message

While the existence of eDelivery is worth mentioning, most of its functionality is abstracted by the SDG OOTS Integration APIs and is therefore outside the scope of this Integration Document.  A basic description of the eDelivery architecture used for the evidence exchange is provided below:

In this version of OOTS, implementations of eDelivery for OOTS must support the following features of eDelivery AS4 1.15:

- the Common Profile 
- the Four Corner Profile enhancement  

These are defined in chapter 3 and 4.1 and the conformance clauses 6.1 and 6.2 of eDelivery AS4 1.15. 

The OASIS ebMS3 and AS4 specifications are specifications for point-to-point message exchange between two Message Service Handlers. However, eDelivery AS4 is also used in situations where Access Points exchange messages on behalf of other parties. This message exchange pattern is also followed in OOTS. The four parties are conventionally referred to using Cn labels, where C stands for "corner", and the n is one of the digits 1 to 4:

- C1 is the original sender party, which can be:
    - The Evidence Requester that submits an Evidence Request Query;
    - The Evidence Provider submitting an Evidence Response asynchronously to an Evidence Request Query.
- C2 is an Access Point that sends messages on behalf of C1.
- C3 is an Access Point that receives messages on behalf of C4.
- C4 is the final recipient party, which can be:
    - the Evidence Provider that receives the Evidence Request Query;
    - the Evidence Requester receiving an Evidence Response asynchronously to an Evidence Request Query.

More information regarding the eDelivery AS4 specification is available at the following link:  
https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eDelivery+AS4+-+1.15

## eDelivery Four-Corner Model Architecture
[ ![eDelivery Four-Corner Model Architecture](../../img/e-delivery-2.png) ](../../img/e-delivery-2.png)

The diagram above presents a more detailed view with the required integration components for message exchange:

1. C1 - Backend: the backend system of the sender. This might be the Evidence Requester's Procedure Portal (Service)
2. C1 - SOAP WS: The ER's Backend SOAP Web Service to receive notifications from the sending AP (C2)
3. C2 - Domibus/WS Plugin: The sending eDelivery Access Point 
4. C3 - Domibus/WS Plugin: The receiving eDelivery Access Point
5. C4 - Backend: the backend system of the receiver. This component might be the Evidence Provider's Data Service
6. C4 - SOAP WS: The EP's Backend SOAP Web Service to receive notifications from the receiving AP (C4)
