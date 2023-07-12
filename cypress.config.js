const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1000,
  viewportWidth:1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl:"https://www.google.com",
    "video":false ,//video kaydının alınmasını engeller
    "retire":2 ,//Fail olan testlerin 2 kere çalışmasını sağlar
    projectId: "q5uc9f"
  },
  
  
});
