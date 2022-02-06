document.addEventListener("DOMContentLoaded", function() {

    showUser();

    document.querySelector("button").onclick = function() {
        addUser();
    }
});


class Kontakt {
    constructor(imie, nazwisko, telefon){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
    }
}

addUser = () => {

    let imie = document.querySelector("#imie").value;
    let nazwisko = document.querySelector("#nazwisko").value;
    let telefon = document.querySelector("#telefon").value;
    let kontakt = new Kontakt(imie, nazwisko, telefon);

    let kontaktyJSON = localStorage.getItem("KT");
    let kontaktyObject = JSON.parse(kontaktyJSON);

    if(kontaktyObject != null){
        kontaktyObject.push(kontakt);
        localStorage.setItem("KT", JSON.stringify(kontaktyObject));
    }
    else{
        localStorage.setItem("KT", JSON.stringify([kontakt]));
    }
    
    showUser();
    
}

showUser = () => {
    
    let kontaktyJSON = localStorage.getItem("KT"); 
    let kontaktyObject = JSON.parse(kontaktyJSON);  

    let html = "";
 
        if(kontaktyObject == null){
            console.log("Nie ma jeszcze żadnego kontaktu w książce.");
        }
        else{
            html += "<ul>";
            for(let i = kontaktyObject.length-1; i >= 0; i--){
    
                html += "<li>";
                    html += `Imię: ${kontaktyObject[i].imie} Nazwisko: ${kontaktyObject[i].nazwisko} Telefon: ${kontaktyObject[i].telefon}`;
                html += "</li>";
                    
                
            }
            html += "</ul>";
        } 

    document.querySelector("#showUser").innerHTML = html;

}