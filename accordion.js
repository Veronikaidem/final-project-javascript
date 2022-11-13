//accordion logic
let accordion = document.querySelector('.container');
let plusbutton = document.getElementById('acctitle');
plusbutton.addEventListener('click', function(){
     accordion.classList.toggle('active');
    
})