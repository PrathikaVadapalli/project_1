document.getElementById("registerForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let marital=document.getElementById("maritalStatus").value;
let dob=document.getElementById("dob").value;

let result=document.getElementById("result");

if(marital==="Married")
{
result.innerHTML="❌ Married users are not allowed to register.";
result.style.color="red";
return;
}

let compatibility=Math.floor(Math.random()*100)+1;

let zodiac=getZodiac(dob);

let trustScore=calculateTrust(marital);

result.innerHTML=
"✔ Profile Created for "+name+
"<br>Compatibility Score: "+compatibility+"%"+
"<br>Zodiac Sign: "+zodiac+
"<br>Trust Score: "+trustScore;

result.style.color="green";

});

function calculateTrust(status){

if(status==="Single")
return "High";

if(status==="Divorced")
return "Medium";

return "Low";
}

function getZodiac(date){

let d=new Date(date);
let day=d.getDate();
let month=d.getMonth()+1;

if((month==3 && day>=21)||(month==4 && day<=19))
return "Aries";

if((month==4 && day>=20)||(month==5 && day<=20))
return "Taurus";

if((month==5 && day>=21)||(month==6 && day<=20))
return "Gemini";

if((month==6 && day>=21)||(month==7 && day<=22))
return "Cancer";

if((month==7 && day>=23)||(month==8 && day<=22))
return "Leo";

if((month==8 && day>=23)||(month==9 && day<=22))
return "Virgo";

if((month==9 && day>=23)||(month==10 && day<=22))
return "Libra";

if((month==10 && day>=23)||(month==11 && day<=21))
return "Scorpio";

if((month==11 && day>=22)||(month==12 && day<=21))
return "Sagittarius";

if((month==12 && day>=22)||(month==1 && day<=19))
return "Capricorn";

if((month==1 && day>=20)||(month==2 && day<=18))
return "Aquarius";

return "Pisces";
}