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
    ],
    Microsurveys: [
      "microsurveys/overview",
      {
        Fields: [
          "microsurveys/fields/long_text",
          "microsurveys/fields/multiple_choice",
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
              "references/sdks/web/introduction",
              "references/sdks/web/advanced",
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
    ],
    "Release Notes": ["release_notes/releases"],
  },
};
