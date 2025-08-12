const click= document.querySelector('.click');
const gift= document.querySelector('.gift_box');
const shadow= document.querySelector('.shadow');
const letter= document.querySelector('.letter');
const cake= document.querySelector('.cake');
const body= document.querySelector('body');
const card= document.querySelector('.card');
const openCard= document.querySelector('.openCard');





click.addEventListener('click',()=>{
    if (click.className==='click'){
        click.classList.add('active');
        setTimeout(()=>click.style.display= "none", 1000);
        setTimeout(()=>gift.style.display= "none", 1000);
        setTimeout(()=>shadow.style.display= "none", 1000);
        setTimeout(()=>letter.style.opacity= "1", 1000);
        setTimeout(()=>card.style.opacity= "1", 1000);
        setTimeout(()=>body.style.backgroundColor= 'rgba(248, 248, 248, 1)', 1000);
        card.addEventListener('click', ()=>{
        if (card.className==='card'){
            card.classList.add('activeCard');
            setTimeout(()=>openCard.style.opacity= "1", 100);
            setTimeout(()=>card.style.animation= "none", 100);
            
        } else {
            card.classList.remove('activeCard');
        }
    })
    }else {
        click.classList.remove('active');
    }

})



function rain(){
    let letter= document.querySelector('.letter');
    let e= document.createElement('div');
    e.classList.add('drop');
    letter.appendChild(e);
    const icon= ['💓'];
    let left= Math.floor(Math.random()*2000);
    let top= Math.floor(Math.random()*-50);


    e.innerText= icon;

    e.style.left= left + 'px'
    e.style.top= top + 'px'

    setTimeout(function(){
        letter.removeChild(e)
    }, 20000)

}
setInterval(function(){
    rain();
}, 200)

