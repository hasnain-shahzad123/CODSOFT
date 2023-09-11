let hamBurger=document.getElementById('Menu');
let LinkButtons=document.querySelectorAll('.linkButtons li')
let reference=document.querySelector('.linkButtons');
console.log(LinkButtons)
hamBurger.addEventListener('click',()=>{
    hamBurger.classList.toggle('active');
    if(hamBurger.classList.contains('active')){
        LinkButtons.forEach((element)=>{
            element.style.visibility='visible'
        })
        reference.style.backgroundColor='brown';
    }
    else{
        LinkButtons.forEach((element)=>{
            element.style.visibility='hidden'
        })
        reference.style.backgroundColor='transparent';
    }
    
})