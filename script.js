document.addEventListener("DOMContentLoaded", function () {
  const siteLogo = document.getElementById("siteLogo");
  const logoModal = document.getElementById("logoModal");
  const logoModalClose = document.getElementById("logoModalClose");
  const menuCheckbox = document.getElementById("menuCheckbox");
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

  if (siteLogo && logoModal && logoModalClose) {
    siteLogo.addEventListener("click", function () {
      logoModal.classList.add("active");
    });

    logoModalClose.addEventListener("click", function () {
      logoModal.classList.remove("active");
    });

    logoModal.addEventListener("click", function (e) {
      if (e.target === logoModal) {
        logoModal.classList.remove("active");
      }
    });
  }

  if (menuCheckbox && dropdownLinks.length) {
    dropdownLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menuCheckbox.checked = false;
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (logoModal) {
        logoModal.classList.remove("active");
      }
      if (menuCheckbox) {
        menuCheckbox.checked = false;
      }
    }
  });
});
