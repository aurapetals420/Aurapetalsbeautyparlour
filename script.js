function pay(a){
  document.getElementById('amt').innerText=a;
  document.getElementById('popup').classList.add('show');
}
function closePay(){
  document.getElementById('popup').classList.remove('show');
}

// WORKING WHATSAPP BOOKING WITH VALIDATION
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('bookingForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Check required fields
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }

    const name = document.getElementById('bname').value.trim();
    const phone = document.getElementById('bphone').value.trim();
    const service = document.getElementById('bservice').value;
    const date = document.getElementById('bdate').value;
    const time = document.getElementById('btime').value;

    const message = `*NEW BOOKING - AURA PETALS*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Time:* ${time}%0A%0AThank you!`;
    
    // This is the correct WhatsApp link that always works
    const url = `https://wa.me/254716397341?text=${message}`;
    
    window.open(url, '_blank');
  });
});
