---
title: "Integration APIs"
date: 2022-02-01 00:01:01Z
order: 3
tags : ['top_menu']
showCategoryMenu : true
---

<!-- # Integration APIs -->

## Overview

### Option 1: Intermediate Platforms Integration
Government backend systems have the option to use the central components (Intermediary platforms) to integrate with the national OOTS. The procedure portal (ER) and/or the Preview Space (EP) components can use the central components (Backend Service, OOTS Integration API) to interact with the national eDelivery Access Point and EU Common Services and validation API. Access/connectivity to the intermediate platforms is provided via the CyConnect component.

[ ![OOTS Integration APIs](../../img/OOTS-CY-ER-EP-v2.1.png) ](../../img/OOTS-CY-ER-EP-v2.1.png)

### Option 2: Direct eDelivery Integration
External organizations (and Government departments) have the option to develop their own backend services and other components to integrate with the national OOTS via the CyConnect building block. The procedure portal (ER) and/or the Preview Space (EP) components can still use the OOTS Integration API to interact with the EU Common Services and validation API. Access/connectivity to the eDelivery Access Point is provided via the CyConnect component.  The Backend Service is implemented/hosted in the ER/EP domain.

[ ![OOTS Integration APIs](../../img/OOTS-CY-ER-EP-v1.1.png) ](../../img/OOTS-CY-ER-EP-v1.1.png)
