let userCh = prompt("taş, kağıt, makas");

let computerCh = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));

if (userCh === computerCh) {
  console.log('Berabere');

  } else if (userCh === 'kağıt' && computerCh === 'taş') {
    console.log('kazandın yeey!' + " " + 'Bilgisayarın seçimi:' + " " + computerCh);

  } else if (userCh === 'kağıt' && computerCh === 'makas') {
    console.log('kaybettin maalesef nt' + " " + 'Bilgisayarın seçimi:' + " " + computerCh);
  

  } else if (userCh === 'taş' && computerCh === 'kağıt') {
  console.log('kaybettin maalesef nt' + " " + 'Bilgisayarın seçimi:' + " " + computerCh);

  } else if (userCh === 'taş' && computerCh === 'makas') {
  console.log('kazandın yeey!' + " " + 'Bilgisayarın seçimi:' + " " + computerCh);
 
  } else if (userCh === 'makas' && computerCh === 'taş') {
  console.log('kaybettin maalesef nt' + " " + 'Bilgisayarın seçimi:'+ " " + computerCh);
  
  } else if (userCh === 'makas' && computerCh === 'kağıt') {
  console.log('kazandın yeey!' + " " + 'Bilgisayarın seçimi:'+ " " + computerCh);
  
  } else {
  console.log('taş kağıt makas dışı ifade girdiniz. Tekrar deneyiniz.');
 }

//bitti
