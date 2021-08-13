module.exports = {
  someSidebar: {
    Introduction: ["overview/getting-started"],
    Developers: [
      "developers/overview",
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
              "developers/sdks/web/introduction",
              "developers/sdks/web/reference/index",
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
    "Release Notes": ["release_notes/releases"],
  },
};
