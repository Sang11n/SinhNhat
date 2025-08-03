const click= document.querySelector('.click');
const gift= document.querySelector('.gift_box');
const shadow= document.querySelector('.shadow');
const letter= document.querySelector('.letter');
const cake= document.querySelector('#cake');
const body= document.querySelector('body');
const card= document.querySelector('.card');
// const click1= document.querySelector('.click1');
// const openText= document.querySelector('.text');





click.addEventListener('click',()=>{
    if (click.className==='click'){
        click.classList.add('active');
        setTimeout(()=>click.style.display= "none", 1000);
        setTimeout(()=>gift.style.display= "none", 1000);
        setTimeout(()=>shadow.style.display= "none", 1000);
        setTimeout(()=>letter.style.opacity= "1", 1000)
        setTimeout(()=>body.style.backgroundColor= 'rgba(238, 166, 166, 1)', 1000);
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
}, 500)

