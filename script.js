function pay(a){document.getElementById('amt').innerText=a;document.getElementById('popup').classList.add('show')}
function closePay(){document.getElementById('popup').classList.remove('show')}

// NEW VALIDATION - from your screenshot
const form = document.getElementById('bookingForm');
if(form){
  form.addEventListener('submit', function(event){
    if(!form.checkValidity()){
      event.preventDefault();
      form.reportValidity();
      return false;
    }
    event.preventDefault();
    // If everything is filled, send to WhatsApp
    let n=document.getElementById('bname').value;
    let p=document.getElementById('bphone').value;
    let s=document.getElementById('bservice').value;
    let d=document.getElementById('bdate').value;
    let t=document.getElementById('btime').value;
    let m=`Hello Aura Petals! I want to book:%0AName: ${n}%0APhone: ${p}%0AService: ${s}%0ADate: ${d}%0ATime: ${t}`;
    window.open(`https://wa.me/254716397341?text=${m}`,'_blank');
  });
}
