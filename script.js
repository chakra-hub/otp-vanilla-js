let input_container = document.getElementsByClassName('otp_container')[0];
input_container.addEventListener('input',(e)=>{
    const target = e.target;
    const val = target.value;

    if(isNaN(val)){
        val='';
    }
    if(val!=""){
        const nextSibling = target.nextElementSibling;
        console.log(nextSibling)
        nextSibling.focus();
    }   
})


input_container.addEventListener('keyup',(e)=>{
    const target = e.target;
    const key = e.key.toLowerCase();
    console.log(key)
    if(target.value>1){
        target.value = target.value[0]
    }
    

    if(key == 'backspace' || key == 'delete'){
        target.value='';
        const previousSibling = target.previousElementSibling;
        if(previousSibling){
        previousSibling.focus();
        }
    }  
})
