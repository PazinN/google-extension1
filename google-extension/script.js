let nizAdresa=[];
const adresa = document.getElementById('input-el');
let ispis = document.getElementById('ul-el');
let sacuvajUnos= document.querySelector('#button-el');
const obrisiUnos= document.querySelector('#delete-el');
const sacuvajStranicu= document.querySelector('#save-el');

let mojilinkoviIzLokalneBaze=JSON.parse(localStorage.getItem('mojilinkovi'));

const stranica=[

{url:'www.google.com'}

]



if(mojilinkoviIzLokalneBaze){
	nizAdresa=mojilinkoviIzLokalneBaze;
	renderAplikacije(nizAdresa)
}


sacuvajUnos.addEventListener('click',function (){

nizAdresa.push(adresa.value);
adresa.value='';


localStorage.setItem('mojilinkovi',JSON.stringify(nizAdresa));

console.log(nizAdresa);
renderAplikacije(nizAdresa)

console.log(localStorage.getItem('mojilinkovi'));
});


obrisiUnos.addEventListener('dblclick',function (){

localStorage.clear();
nizAdresa=[];
	renderAplikacije(nizAdresa)
});

sacuvajStranicu.addEventListener('click',function(){

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
    nizAdresa.push(tabs[0].url);
    localStorage.setItem('mojilinkovi',JSON.stringify(nizAdresa));
	renderAplikacije(nizAdresa)
  });
	




	
	
}
)

function renderAplikacije(linkovi) {
let i;
let sadrzaj='';
for(i=0;i< linkovi.length; i++){
sadrzaj += `
<li> 

	<a href='${linkovi[i]} ' target='_blank' >

	${linkovi[i]}
	
	

	</a>`
}
ispis.innerHTML=sadrzaj;
}