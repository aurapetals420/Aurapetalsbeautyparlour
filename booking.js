function aurapetalsBook(e){
  e.preventDefault();
  const selects = document.querySelectorAll('select');
  const inputs = document.querySelectorAll('input');

  let service = selects[0]? selects[0].value : 'Service';
  let name = inputs[0]? inputs[0].value : '';
  let phone = inputs[1]? inputs[1].value : '';
  let date = inputs[2]? inputs[2].value : '';
  let time = inputs[3]? inputs[3].value : '';

  // Fallback for your exact form from screenshot
  // Your form order is: Service(select), Name(input), Phone(input), Date(input), Time(input)
  if(!name || name.includes('/2026') || name.includes(':')){
     // Try to get by placeholder order
     const all = document.querySelectorAll('select, input');
     service = all[0]?.value;
     name = all[1]?.value;
     phone = all[2]?.value;
     date = all[3]?.value;
     time = all[4]?.value;
  }

  if(!name ||!phone){
    alert('Please enter Name and M-Pesa Phone number');
    return;
  }
  if(phone.length < 9){
    alert('Please enter valid M-Pesa phone');
    return;
  }

  // Extract price from service text e.g. "Square French - KSh 700 (Dep 210)"
  let price = 700;
  let m = service.match(/KSh\s*(\d+)/);
  if(m) price = parseInt(m[1]);
  let deposit = Math.round(price * 0.3);

  let msg = `Hello Aurapetals Beauty Parlour 💅\n\n*NEW BOOKING - 30% DEPOSIT*\n\nService: ${service}\nName: ${name}\nM-Pesa Phone: ${phone}\nDate: ${date}\nTime: ${time}\n\nTotal: KSh ${price}\nDeposit to Pay: KSh ${deposit}\n\nM-Pesa: Business 247247\nAccount: 6232\n\nI will send deposit now. Please confirm my slot.`;

  let waNumber = '254716397341';
  let url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

  // Show success
  alert(`Perfect ${name}! \n\nService: ${service}\nDeposit: KSh ${deposit}\n\nPlease send KSh ${deposit} to:\nM-Pesa Business 247247\nAccount 6232\n\nClick OK to send WhatsApp confirmation.`);

  window.open(url, '_blank');
}

// Attach to button
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('button');
  if(btn){
    btn.type = 'button';
    btn.onclick = aurapetalsBook;
  }
  // Also attach to form
  const form = document.querySelector('form');
  if(form){
    form.onsubmit = aur
cd ~/Aurapetalsbeautyparlour

cat > booking.js <<'JS'
function aurapetalsBook(e){
  if(e) e.preventDefault();
  var all = document.querySelectorAll('select, input');
  var service = all[0]? all[0].value : 'Square French';
  var name = all[1]? all[1].value : '';
  var phone = all[2]? all[2].value : '';
  var date = all[3]? all[3].value : '';
  var time = all[4]? all[4].value : '';

  if(!name ||!phone){
    alert('Please enter Name and M-Pesa Phone');
    return false;
  }

  var price = 700;
  var m = service.match(/KSh\s*(\d+)/);
  if(m) price = parseInt(m[1],10);
  var deposit = Math.round(price * 0.3);

  var msg = "Hello Aurapetals Beauty Parlour\n\nNEW BOOKING\n\nService: " + service + "\nName: " + name + "\nPhone: " + phone + "\nDate: " + date + "\nTime: " + time + "\n\nTotal: KSh " + price + "\nDeposit: KSh " + deposit + "\nM-Pesa Business 247247 Account 6232\n\nI will send deposit now.";

  alert("Perfect " + name + "!\n\nDeposit: KSh " + deposit + "\nSend to Business 247247\nAccount 6232\n\nOK to WhatsApp us");

  var wa = "254716397341";
  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank");
  return false;
}

document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('button');
  if(btn){
    btn.type = 'button';
    btn.setAttribute('onclick','aurapetalsBook(event)');
  }
});
