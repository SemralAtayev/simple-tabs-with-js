function tabs(tabContentSelector, tabsSelector, tabsParentSelector, tabsItemActive) {
  // 2 Tabs
  const tabContent = document.querySelectorAll(tabContentSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function tabsHide() {
    tabContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove(tabsItemActive);
    });
  }

  function showTab(i = 0) {
    tabContent[i].classList.add("show", "fade");
    tabContent[i].classList.remove("hide");

    tabs[i].classList.add(tabsItemActive);
  }

  tabsHide();
  showTab();

  tabsParent.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (event.target == item) {
          tabsHide();
          showTab(i);
        }
      });
    }
  });
}

export default tabs;