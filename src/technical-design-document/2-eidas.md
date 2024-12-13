---
title: "eIDAS Identity"
date: 2022-02-01 00:01:00Z
description: "eIDAS Identity"
---

<!-- # eIDAS - Identity Matching -->

## Overview
Users must have an eIDAS enabled eID to exchange data or documents automatically through the OOTS system. As a general rule, only users authorized to access data should be able access that data. Where a user requests access to data, the data controller typically identifies a user and compares that identity to the identities that are authorized to access that particular data. In case of a positive match, access can be granted, if not, access is not granted.

Where users wish to use OOTS for providing evidences, the above applies. Therefore, identity matching is needed in every evidence request situation.

## Identity Matching
Evidence providers locate evidence based on request containing
- Minimum
    - Certificate of evidence requester
    - User’s minimum eIDAS attributes
    - First Name
    - Last Name
    - DOB
    - Request for evidence
- Potentially (in cases where record matching was needed)
    - Additional eIDAS attributes
    - Additional attributes requested from the user

## Reference Documents
- **[Identity-Matching-OOTS.pdf](../../tdd/Identity-Matching-OOTS.pdf)**