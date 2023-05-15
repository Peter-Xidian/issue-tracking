// Get all sidebar elements and containers
const sidebarElements = document.querySelectorAll(".scl-link");
const containers = document.querySelectorAll(".mc");
const viewTasks = document.querySelectorAll("#view-tasks");
const backHome = document.querySelectorAll(".back-dashboard");

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

/* ------------- NAVIGATE BACK TO (Dashboard) ------------- */
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
const viewProjects = document.querySelectorAll("#view-projects");

viewProjects.forEach((vp) => {
  vp.addEventListener("click", () => {
    sidebarElements.forEach((elp) => {
      elp.classList.remove("active-scl-link");
    });
    sidebarElements[2].classList.add("active-scl-link");

    containers.forEach((container) => {
      container.classList.remove("active-container");
    });
    containers[2].classList.add("active-container");
  });
});

/* ------------- TOGGLE SIDEMENU USERPROFILE ------------- */
const sideUserProfile = document.getElementById("sc-dropdown");
const scpMenu = document.querySelector(".scp-menu");

sideUserProfile.addEventListener("click", () => {
  // alert("working");
  scpMenu.classList.toggle(".scp-menu-active");
});
