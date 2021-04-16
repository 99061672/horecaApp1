var frisaantal = 0;
var bieraantal = 0;
var wijnaantal = 0;
var bitterbalachtaantal = 0;
var bitterbalzestienaantal = 0;
var totaalprijs;
var bitterbalprijs;
var frisprijs; 
var wijnprijs;
var bierprijs;
var bitterbalprijsacht;
var bitterbalprijszestien;
const prijsf = 1.50;
const prijsb = 2.25;
const prijsw = 3;
const prijs8 = 3;
const prijs16 = 5;

function aids(){
	    var vraag2 = parseInt(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?"));
        if(vraag2 == "8"){
            bitterbalachtaantal = prompt("Hoeveel schalen van 8 bitterballen wilt u?");
            if(bitterbalachtaantal == "0"){
               alert("Geen bitterballen toegevoegd aan bestelling.");
            }else{
             bitterbalprijsacht = prijs8 * bitterbalachtaantal;
             alert(bitterbalachtaantal + " schaal(en) toegevoegd aan bestelling.");
             console.log("BB8 " +bitterbalachtaantal)

             document.getElementById("Kassabitterbal8").innerHTML = ("aantal bitterballen van 8: " +bitterbalachtaantal);

           }
      
       }else{}
       if(vraag2 == "16"){
        bitterbalzestienaantal = parseInt(prompt("Hoeveel schalen van 16 bitterballen wilt u?"));
           if(bitterbalzestienaantal == "0"){
               alert("Geen bitterballen toegevoegd aan bestelling.");
           }else{
            bitterbalprijszestien = prijs16 * bitterbalzestienaantal;
            alert(bitterbalzestienaantal + " Schaal(en) toegevoegd aan bestelling.");
            console.log("BB16 " +bitterbalzestienaantal)

            document.getElementById("Kassabitterbal16").innerHTML = ("aantal bitterballen van 16: " +bitterbalzestienaantal);
           }
       }
}

function neonazi(){
    frisaantal = parseInt(prompt("Hoeveel fris wilt u?"));
     if(frisaantal == "0"){
         alert("Geen fris toegevoegd.");
         frisaantal = 0;
     }else{
         frisprijs = prijsf * frisaantal;
         alert(frisaantal + " Fris aan bestelling toegevoegd.");
         console.log("fris " +frisaantal);

        document.getElementById("KassaFris").innerHTML = ("aantal fris: " +frisaantal);
     }
}

function tia(){
     bieraantal = parseInt(prompt("Hoeveel bier wilt u?"));
     if(bieraantal == "0"){
         alert("Geen bier toegevoegt");
         bieraantal = 0;
     }else{
         bierprijs = prijsb * bieraantal;
         alert(bieraantal + " Bier aan bestelling toegevoegd.");
         console.log("bier " +bieraantal);

         document.getElementById("KassaBier").innerHTML = ("aantal bier: " +bieraantal);
     }
}

function hoer(){
     wijnaantal = parseInt(prompt("Hoeveel wijn wilt u?"));
     if(wijnaantal == "0"){
         alert("Geen wijn toegevoegd.")
         wijnaantal = 0;
     }else{
         wijnprijs = prijsw * wijnaantal;
         alert(wijnaantal + " Wijn aan bestelling toegevoegd.");
         console.log("aantal wijn " +wijnaantal);

         document.getElementById("KassaWijn").innerHTML = ("aantal wijn: " +wijnaantal);
     }
}



