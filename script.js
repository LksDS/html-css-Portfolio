const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  const elements = document.querySelectorAll('.elemento-animado');
  elements.forEach((element) => {
    observer.observe(element);
  });

  window.addEventListener('scroll', () => {
    observer.takeRecords();
    
  });