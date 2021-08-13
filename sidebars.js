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
    "Release Notes": ["release_notes/releases"],
  },
};
