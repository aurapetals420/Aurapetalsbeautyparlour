function pay(amount){
 document.getElementById('amt').innerText=amount;
 document.getElementById('popup').classList.add('show');
}
function closePay(){
 document.getElementById('popup').classList.remove('show');
}
