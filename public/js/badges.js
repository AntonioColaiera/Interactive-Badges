document.addEventListener("DOMContentLoaded", () => {
  const clickableBadges = document.querySelectorAll(".badge");
  let currentBadge = null;
  clickableBadges.forEach((badge) => {
    badge.addEventListener("click", () => {
      if (currentBadge) {
        currentBadge.classList.remove("clicked-color");
        currentBadge.querySelector(".span").style.color = "black";
      }
      if (currentBadge !== badge) {
        badge.classList.add("clicked-color");
        badge.querySelector(".span").style.color = "white";
        currentBadge = badge;
      } else {
        badge.classList.remove("clicked-color");
        badge.querySelector(".span").style.color = "black";
        currentBadge = null;
      }
    });
  });
  const badgesContainer = document.querySelector(".badges");
  const informationContainer = document.getElementById("information");
  let currentInformation = null;
  badgesContainer.addEventListener("click", (event) => {
    const clickedBadge = event.target.closest(".badge");
    if (clickedBadge) {
      const information = clickedBadge.querySelector(".information");
      if (information) {
        const dynamicContent = information.textContent.trim();
        if (dynamicContent) {
          informationContainer.textContent = dynamicContent;
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
