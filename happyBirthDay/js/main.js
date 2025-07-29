const click= document.querySelector('.click');
const gift= document.querySelector('.gift_box');
const shadow= document.querySelector('.shadow');
const letter= document.querySelector('.letter');
const cake= document.querySelector('.img');




click.addEventListener('click',()=>{
    if (click.className==='click'){
        click.classList.add('active');
        setTimeout(()=>click.style.display= "none", 1000);
        setTimeout(()=>gift.style.display= "none", 1000);
        setTimeout(()=>shadow.style.display= "none", 1000);
        // setTimeout(()=>cake.style.opacity= "1", 1100);
        setTimeout(()=>letter.style.opacity= "1", 1200);
        // click.classList.add('img');
    }else {
        click.classList.remove('active');
    }

})
