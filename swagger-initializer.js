window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "./manage_rate_plan_10_35.yaml", name: "Manage Rate Plan" },
      { url: "./shshotelavailabilityv1_1.yaml", name: "Hotel Availability" },
      { url: "./hotelcontentv1_0.yaml", name: "Hotel Content" }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>

// START of new code to change the label
  // Give Swagger UI a moment to render the top bar
  setTimeout(() => {
    const selectorLabel = document.querySelector('.scheme-container label');
    if (selectorLabel && selectorLabel.innerText === 'Select a definition') {
      selectorLabel.innerText = 'Select a Product'; // Your desired new label
    }
    // Alternatively, if the above doesn't work or for more general cases,
    // you might need to target the dropdown directly.
    // const dropdownParent = document.querySelector('.topbar-wrapper .scheme-container');
    // if (dropdownParent) {
    //   const oldLabel = dropdownParent.querySelector('label');
    //   if (oldLabel) {
    //     oldLabel.innerText = 'Select Your API:';
    //   }
    // }
  }, 100); // A small delay to ensure the element exists
  // END of new code to change the label
};


