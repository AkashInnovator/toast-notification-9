const toast=document.querySelector('.toasts')

function shownotify(msg){
    let div=document.createElement('div');
    if(msg.includes('Success')){
        div.innerHTML=`<i class="fa-solid fa-circle-check"></i>${msg}`
        div.classList.add('suc')
    }
    if(msg.includes('Failure')){
        div.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>${msg}`
        div.classList.add('fai')
    }
    if(msg.includes('Invalid')){
        div.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>${msg}`
        div.classList.add('inv')
    }
    toast.appendChild(div)
    setTimeout(()=>{
        toast.removeChild(div);
    },6000)

}