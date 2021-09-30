module.exports = {
  someSidebar: {
    Introduction: ["overview/getting-started"],
    Tutorials: ["tutorials/getting-started", "tutorials/churn/index"],
    "How To Guides": ["howto/getting-started"],
    Workflows: [
      "workflows/overview",
      {
        Triggers: [
          "workflows/triggers/overview",
          "workflows/triggers/filters",
          "workflows/triggers/page_view",
          "workflows/triggers/click_on",
          "workflows/triggers/hover_on",
        ],
      },
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
