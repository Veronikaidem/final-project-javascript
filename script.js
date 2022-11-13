//ajax
let textCont = document.getElementById('text')
let divPhotos = document.getElementById('photos')
fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET'
})
.then(function(answer){
    if(answer.status !==200){
        throw response.status;
    }
return answer.json();
})
.then(function(theAnswer){
    let ul = document.createElement('ul');
    theAnswer.forEach(element=> {
                let li = document.createElement('li');
               
                
                li.textContent= `${element.id} ${element.title} ${element.thumbnailUrl}`;
                let image = document.createElement("img");
                image.src = element.url;
                li.appendChild(image);
                ul.appendChild(li);
               
            });
           
    
     document.getElementById('photos').appendChild(ul);

})
.catch(function(error){
    let p = document.createElement('p');
        p.textContent= 'Some error';
        p.style.color='red';
        document.getElementById('photos').appendChild(p);
})


divPhotos.addEventListener('click', function(event){
    textCont.innerHTML = " "
    textCont.classList.toggle('active')
    let idofdivs = event.target;
    console.log(idofdivs);
    let p = document.createElement('p');
    p.textContent = 'Hey! you just clicked on me!'
    textCont.appendChild(p)
})






