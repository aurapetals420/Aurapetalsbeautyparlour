function pay(amount){
 document.getElementById('amt').innerText=amount;
 document.getElementById('popup').classList.add('show');
}
function closePay(){
 document.getElementById('popup').classList.remove('show');
}
function openImg(src){
 document.getElementById('bigimg').src=src;
 document.getElementById('imgview').classList.add('show');
}
function closeImg(){
 document.getElementById('imgview').classList.remove('show');
}
function sendBooking(){
 let name=document.getElementById('bname').value;
 let phone=document.getElementById('bphone').value;
 let service=document.getElementById('bservice').value;
 let date=document.getElementById('bdate').value;
 let time=document.getElementById('btime').value;
 let msg=`Hello Aura Petals! I want to book:%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADate: ${date}%0ATime: ${time}`;
 window.open(`https://wa.me/254716397341?text=${msg}`,'_blank');
}
