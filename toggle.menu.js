let toggleBar = document.getElementById('toggle-menu');



toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navbar.classList.toggle("overlay");
})

 toggleBar.addEventListener('click', function(){
    
      navbar.classList.toggle('active');
 })