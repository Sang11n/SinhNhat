const click= document.querySelector('.click');
const gift= document.querySelector('.gift_box');
const shadow= document.querySelector('.shadow');
const letter= document.querySelector('.letter');
const cake= document.querySelector('#cake');
const body= document.querySelector('body');





click.addEventListener('click',()=>{
    if (click.className==='click'){
        click.classList.add('active');
        setTimeout(()=>click.style.display= "none", 1000);
        setTimeout(()=>gift.style.display= "none", 1000);
        setTimeout(()=>shadow.style.display= "none", 1000);
        setTimeout(()=>letter.style.opacity= "1", 1000);
        setTimeout(()=>body.style.backgroundColor= "#ce7a7aff", 1000);
    }else {
        click.classList.remove('active');
    }

})
function rain(){
    let e= document.querySelector('.letter');

}
