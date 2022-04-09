
burger=document.querySelector('.burger')
list=document.querySelector('.list')
bar=document.querySelector('.bars')
cont=document.querySelector('.cc')
burger.addEventListener('click',()=>{
    bar.classList.toggle('high')
    list.classList.toggle('v-clss')
    cont.classList.toggle('v-clss')
})



