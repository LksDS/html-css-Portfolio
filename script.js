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

  function togglesidebar(){
    $("#sidebar").toggleClass("mostrar")
  }
  function toggleDarkLightMode(){
    $("body").toggleClass("darkmode");
    $(".input-modo-claro-escuro").toggleClass("darkmodeon");
    $("section").toggleClass("darkmode")
  }
  $(".input-modo-claro-escuro").click(function(){
      toggleDarkLightMode();
  });
  $(".nav-anchor").click(function(){
    console.log("a");
    togglesidebar()
  });

  document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Lucas Diniz",""];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("#efeito-escrita").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 150);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }else{
        typeWriter(dataText[0], 0, function(){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);

        });
      }
    }
    StartTextAnimation(0);
    
  });