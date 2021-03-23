module.exports = {
  someSidebar: {
    Introduction: ['overview/getting-started'],
    Tutorials: ['sections/tutorials/getting-started'],
    "How To Guides": ['sections/howto/getting-started'],
    Workflows: [
      'workflows/overview',
      {
        Triggers: [
          'workflows/triggers/overview', 
          'workflows/triggers/page_load'
        ]
      }
    ],
    Microsurveys: [
      'microsurveys/overview', 
      {
        Fields: ['microsurveys/fields/long_text']
      },
    ],
    "Release Notes": ['sections/release_notes/releases']
  },
};
