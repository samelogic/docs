module.exports = {
  someSidebar: {
    Introduction: ["overview/getting-started"],
    Tutorials: ["tutorials/getting-started", "tutorials/churn/index"],
    "How To Guides": ["howto/getting-started"],

    Workflows: [
      "workflows/overview",
      {
        Steps: ["workflows/steps/index", "workflows/steps/data_mapping"],
      },

      {
        Triggers: [
          "workflows/triggers/overview",
          "workflows/triggers/filters",
          "workflows/triggers/page_view",
          "workflows/triggers/click_on",
          "workflows/triggers/hover_on",
        ],
      },
    ],
    Steps: [
      "steps/index",
      {
        Microsurveys: [
          "steps/microsurveys/overview",
          {
            Fields: [
              "steps/microsurveys/fields/long_text",
              "steps/microsurveys/fields/multiple_choice",
            ],
          },
        ],
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
        items: [
          "references/steps/beacon",
          "references/steps/microsurvey",
          "references/steps/webhook",
        ],
      },
    ],
    "Release Notes": ["release_notes/releases"],
  },
};
