// Get all sidebar elements and containers
const sidebarElements = document.querySelectorAll(".scl-link");
const containers = document.querySelectorAll(".mc");
const viewTasks = document.querySelectorAll("#view-tasks");
const backHome = document.querySelectorAll(".back-dashboard");
const viewProjects = document.getElementById("view-projects");

// Add a click event listener to each sidebar element
sidebarElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Remove active class from all sidebar elements
    sidebarElements.forEach((el) => {
      el.classList.remove("active-scl-link");
    });
    // Add active class to the clicked sidebar element
    element.classList.add("active-scl-link");

    // Remove active class from all containers
    containers.forEach((container) => {
      container.classList.remove("active-container");
    });
    // Add active class to the container with the same index as the clicked sidebar element
    containers[index].classList.add("active-container");
  });
});

/* ------------- View All Tasks ------------- */
viewTasks.forEach((vt) => {
  vt.addEventListener("click", () => {
    sidebarElements.forEach((elt) => {
      elt.classList.remove("active-scl-link");
    });
    sidebarElements[1].classList.add("active-scl-link");

    containers.forEach((container) => {
      container.classList.remove("active-container");
    });
    containers[1].classList.add("active-container");
  });
});

/* ------------- Back (Dashboard) ------------- */
backHome.forEach((bh) => {
  bh.addEventListener("click", () => {
    sidebarElements.forEach((el) => {
      el.classList.remove("active-scl-link");
    });
    sidebarElements[0].classList.add("active-scl-link");

    containers.forEach((container) => {
      container.classList.remove("active-container");
    });

    containers[0].classList.add("active-container");
  });
});

/* ------------- TASKS CONTAINER [TAB NAV TOGGLE] ------------- */
const filterTabs = document.querySelectorAll(".thft");
const tlg = document.querySelectorAll(".t-sub");

filterTabs.forEach((ft, index) => {
  ft.addEventListener("click", () => {
    filterTabs.forEach((ele) => {
      ele.classList.remove("active-filter-tab");
    });
    ft.classList.add("active-filter-tab");

    tlg.forEach((tlgContainer) => {
      tlgContainer.classList.remove("active-taskSub");
    });

    tlg[index].classList.add("active-taskSub");
  });
});

/* ------------- PROJECTS CONTAINER (TOGGLING PROJECT CARDS & DESCRIPTIONS) ------------- */
// Add a click event listener to each sidebar element
sidebarElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Remove active class from all sidebar elements
    sidebarElements.forEach((el) => {
      el.classList.remove("active-scl-link");
    });
    // Add active class to the clicked sidebar element
    element.classList.add("active-scl-link");

    // Remove active class from all containers
    containers.forEach((container) => {
      container.classList.remove("active-container");
    });
    // Add active class to the container with the same index as the clicked sidebar element
    containers[index].classList.add("active-container");
  });
});
