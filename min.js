const navIconEl = document.querySelector('.nav-icon');
const navCloseEl = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
const navBgOverlayEl = document.querySelector('.nav-bgOverlay');

const navOpen = () => {
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active')
    document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden; transition: .3s ease-in 2s';
}
const navClose = () => {
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style='visibility: visible; height:initial; width:100%; overflow-x:hidden';
    
}
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
// Aos initial
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
});
let validate = document.querySelector('.table-btn');
validate.addEventListener('click', () => {
    let Flavour = document.querySelector('#flavour').value;
    let Input = document.querySelector('#input').value;
    // validate
  
    let bill = (Flavour * Input );
    bill = bill.toFixed(2);
    document.getElementById('amount').innerHTML= bill
})
let FormEl= document.getElementById('form-btn');
function submit() {
    let SubmitReturn= document.getElementById('submit-return');
    SubmitReturn.innerText+= "Thanks for joining our Newsletter watchlist"
    return{
        SubmitReturn:innerText+= ""
    }
}
