'use strict';
document.addEventListener("DOMContentLoaded", () => {
  // Element toggle function
  const toggleElement = (elem) => {
    elem.classList.toggle("active");
  };

  // Sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // Sidebar toggle functionality for mobile
  sidebarBtn.addEventListener("click", () => {
    toggleElement(sidebar);
  });
});


// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

// Testimonials modal toggle function
const toggleModal = () => {
  toggleElement(modalContainer);
  toggleElement(overlay);
};

// Add click event to all modal items
testimonialsItems.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    toggleModal();
  });
});

// Add click event to modal close button and overlay
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

// Toggle select box
select.addEventListener("click", () => {
  toggleElement(select);
});

// Add event to all select items
selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    toggleElement(select);
    filterProjects(selectedValue);
  });
});

// Filter function for projects
const filterProjects = (selectedValue) => {
  const projectItems = document.querySelectorAll("[data-filter-item]");
  projectItems.forEach(item => {
    const category = item.dataset.category.toLowerCase();
    if (selectedValue === "all" || selectedValue === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Filter button variables
const filterButtons = document.querySelectorAll("[data-filter-btn]");
let lastClickedBtn = filterButtons[0];

// Add click event to filter buttons for large screens
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterProjects(selectedValue);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add input event to form inputs for form validation
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add click event to navigation links for page navigation
navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.innerHTML.toLowerCase();
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});

