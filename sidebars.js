module.exports = {
  someSidebar: {
    Introduction: ["introduction/getting-started"],
    Tutorials: ["tutorials/getting-started", "tutorials/churn/index"],
    "How To Guides": [
      "howto/how-to",
      "howto/how-to-install/how-to-install-microsurvey-and-beacon",
    ],
    Workflows: [
      "workflows/overview",
      "workflows/triggers",
      "workflows/data_mapping",
    ],
    Steps: [
      "steps/overview",
      {
        Beacons: ["steps/beacons/overview", "steps/beacons/reference"],
        Microsurveys: [
          "steps/microsurveys/overview",
          {
            Fields: [
              "steps/microsurveys/fields/long_text",
              "steps/microsurveys/fields/multiple_choice",
            ],
          },
          "steps/microsurveys/reference",
        ],
        Webhooks: ["steps/webhooks/overview", "steps/webhooks/reference"],
      },
    ],
    "Technical References": [
      "references/overview",
      {
        type: "category",
        label: "SDKs",
        collapsed: false,
        items: [
          {
            type: "category",
            label: "Javascript",
            collapsed: false,
            items: [
              "references/sdks/web/installation-script",
              "references/sdks/web/installation-gtm/index",
              "references/sdks/web/advanced/index",
              "references/sdks/web/reference/samelogic-js",
              {
                type: "link",
                label: "Releases",
                href: "https://github.com/Samelogic/samelogic.js/releases",
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Steps",
        collapsed: false,
        items: ["references/steps/beacon", "references/steps/webhook"],
      },
    ],
    "Release Notes": ["release_notes/releases"],
  },
};
