document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'badge'
  const clickableBadges = document.querySelectorAll(".badge");
  let currentBadge = null;

  // Add a click event listener to each 'badge' element
  clickableBadges.forEach((badge) => {
    badge.addEventListener("click", () => {
      // Remove the 'clicked-color' class and set text color to black for the previously clicked badge
      if (currentBadge) {
        currentBadge.classList.remove("clicked-color");
        currentBadge.querySelector(".span").style.color = "black";
      }

      // If the clicked badge is not the same as the current one, add the 'clicked-color' class
      // and set text color to white for the clicked badge
      if (currentBadge !== badge) {
        badge.classList.add("clicked-color");
        badge.querySelector(".span").style.color = "white";
        currentBadge = badge;
      } else {
        // Remove the 'clicked-color' class and set text color to black if the same badge is clicked again
        badge.classList.remove("clicked-color");
        badge.querySelector(".span").style.color = "black";
        currentBadge = null;
      }
    });
  });

  // Select the container for badges and the 'information' container
  const badgesContainer = document.querySelector(".badges");
  const informationContainer = document.getElementById("information");
  let currentInformation = null;

  // Add a click event listener to the badges container
  badgesContainer.addEventListener("click", (event) => {
    // Find the closest parent 'badge' element to the clicked target
    const clickedBadge = event.target.closest(".badge");

    if (clickedBadge) {
      const information = clickedBadge.querySelector(".information");

      if (information) {
        const dynamicContent = information.textContent.trim();

        if (dynamicContent) {
          // Display dynamic content in the 'information' container
          informationContainer.textContent = dynamicContent;

          // Toggle visibility of the 'information' container
          if (currentInformation === information) {
            informationContainer.textContent = "";
            currentInformation = null;
            informationContainer.classList.remove("visible");
          } else {
            currentInformation = information;
            informationContainer.classList.add("visible");
          }
        }
      }
    }
  });
});
