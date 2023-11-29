document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function () {
      // Get the current scroll position
      const scrollPosition = window.scrollY || window.pageYOffset;

      // Check each section to see if it is in view
      document.querySelectorAll('section').forEach(function (section) {
          const sectionTop = section.offsetTop - 50; // Adjusted for navbar height
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              // Highlight the corresponding navigation link
              const sectionId = section.getAttribute('id');
              navLinks.forEach(function (link) {
                  link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
              });
          }
      });
  });
});
