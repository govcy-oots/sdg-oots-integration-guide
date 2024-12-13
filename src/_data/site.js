module.exports = {
  buildTime: new Date(),
  isMultiLanguage : false,
  url : "https://govcy-oots.github.io/oots-integration-guide/",
  showTOC: true,
  showDraft: false,
  showVersion: true,
  dsUpdateDate : "12/12/2024",
  version:"0.1.0", 
  cssCDN: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system@v3.0.0/dist/css/govcy.uds.min.css" integrity="sha384-1zLHWOtnS0hOIz5mVEPZp0UH5gUE6eo0CQcCGA3sF2TyYhHyKOd3Ni8Iy/NjEASU" crossorigin="anonymous">`,
  jsCDN: `<script src="https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system@v3.0.0/dist/js/govcy.uds.min.js" integrity="sha384-zOuDuogVaaTveh/Ou2iYwCk14zFiSmMk7Ax8yRnXDtOJMyKZH5+ZNibNVwZSKtw+" crossorigin="anonymous"></script>`,
  github : {
    homeUrl: 'https://github.com/gov-cy/govcy-design-system',
    dsWebsiteUrl: 'https://github.com/gov-cy/oots-integration-guide',
    currentVersion: 'https://github.com/gov-cy/govcy-design-system/tree/v3.0.0',
    updateDate: `2/5/2024`
  },
  previousVersions: [
    {label: 'Ver. 2x', url: 'https://gov-cy.github.io/oots-integration-guide-v2/'}
    ,{label: 'Ver. 0x', url: 'https://gov-cy.github.io/oots-integration-guide-v0/'}
  ],
  languages: [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Ελληνικά",
      code: "el",
    },
  ],
  localization: {
    "el" : {
      "title" : "gov.cy",
      "subtitle" : "OOTS Integration Guide",
      "description" : "Integration guide for OOTS",
      "menu" : "Μενού",
      "side_title" : "Σελίδες ενότητας",
      "draft" : "DRAFT",
      "version" : "ver.",
      "url" : "",
      "TOC_title" : "Περιεχόμενα",
      "privacy_label":"Όροι Χρήσης",
      "cookie_label":"Προστασία Προσωπικών Δεδομένων",
      "accessibility_label":"Προσβασιμότητα",
      "copyright_label":"© Κυπριακή Δημοκρατία, 2025",
      "search_placeholder":"Έρευνα",
      "skip_to_main" : "Μετάβαση στο κυρίως περιεχόμενο",
      "search_button_aria_label" : "Search, expands search text box when clicked",
      "got_to_gov_cy" : "Μετάβαση στο GOV.CY",
      //"older_version_banner" : "For older version visit <a href='https://gov-cy.github.io/oots-integration-guide-v2/'>v2 documentation</a>"
    },
    "en" : {
      "title" : "gov.cy",
      "subtitle" : "Integration guide for OOTS",
      "description" : "Design your services using gov.cy styles, components and patterns.",
      "menu" : "Menu",
      "side_title" : "Pages in this section",
      "draft" : "DRAFT",
      // "version" : "TESTING Ver.",
      "version" : "ver.",
      "url" : "",
      "TOC_title" : "On this page",
      "privacy_label":"Privacy statement",
      "cookie_label":"Cookies",
      "accessibility_label":"Accessibility",
      "copyright_label":"© Republic of Cyprus, 2025",
      "search_placeholder":"Search the site",
      "skip_to_main" : "Skip to main content",
      "search_button_aria_label" : "Search, expands search text box when clicked",
      "funding_by_EY" : "Funded by the EU Next Generation EU",
      "funding_by_EY_link_title" : "Go to EU Website",
      "cyprus_tomorrow" : "Cyprus tomorrow, recovery and resilience plan",
      "cyprus_tomorrow_link_title" : "Go to Cyprus to tomorrow website",
      "got_to_gov_cy" : "Go to the GOV.CY homepage",
      //"older_version_banner" : "For the older version visit <a href='https://gov-cy.github.io/oots-integration-guide-v2/'>v2 documentation</a>"
      // "older_version_banner" : "This is a test website. For the actual documentation please visit the <a href='https://gov-cy.github.io/oots-integration-guide/'>gov.cy design system</a>"
    }
  }
};