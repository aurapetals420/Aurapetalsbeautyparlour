let currentAmt=0;
function pay(amount){
 currentAmt=amount;
 document.getElementById('amt').innerText=amount;
 document.getElementById('popup').classList.add('show');
 document.getElementById('waLink').href="https://wa.me/254716397341?text=Hi%20Aura%20Petals%20I%20paid%20"+amount+"KSh%20deposit.%20Business%20247247%20Acc%206232";
}
function closePay(){document.getElementById('popup').classList.remove('show');}
function sendSTK(){
 let ussd="*334*4*4*247247*6232*"+currentAmt+"%23";
 window.location.href="tel:"+ussd;
}
