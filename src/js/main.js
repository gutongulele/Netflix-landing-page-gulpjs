const tabs = document.querySelectorAll(".js-tab");
const tabContent = document.querySelectorAll(".js-tab-content");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    //remove show class for each tab content item
    tabContent.forEach(content => content.classList.remove("show"));
    // add show class to tab content item which was clicked
    tabContent[i].classList.add("show");
    //remove border-bottom for each tab
    tabs.forEach(tab => tab.classList.remove("tab-border-bottom"));
    //add border-bottom to tab
    tab.classList.add("tab-border-bottom");
  });
});
