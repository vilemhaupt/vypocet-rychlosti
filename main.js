// Zakladní proměnné, bez kterého by systém nefungoval
const speedInput = document.getElementById("speed");
const r1h = document.getElementById("speed1h");
const err = document.getElementById("err");
const speedErr = document.getElementById("speedr");
const errWarn = document.getElementById("err-warn");

const maxSupportedValue = 100000000000000000000; // Proměnná která zajištuje aby se program nepokazil

var calculate = () => { // Funkce díky které celý program funguje jak má

    const speedValue = speedInput.value; // Zjištění čísla z inputu 

    const kmpH = speedValue * 3.6; // Proměnná která vypočítá průměrnou rychlost v hodině 

    r1h.innerHTML = kmpH + " km/h ";
    err.innerHTML = "";

    if (speedValue == 0){ // Zabrání chodu systému pokud uživatel zadal hodnotu 0, nebo ji nevyplnil

        r1h.innerHTML = "";
        err.innerHTML =  "Rychlost nemůže být 0 / nezadaná!";

        speedErr.classList.add("hidden");
        errWarn.classList.remove("hidden");
    }



    if (speedValue == maxSupportedValue || speedValue > maxSupportedValue ){ // Zabrání chodu systému pokud uživatel použil větší hodnotu než je povolená
        r1h.innerHTML = "";
        err.innerHTML =  "Rychlost v m/s nemůže být větší než" + " " + maxSupportedValue;
        
        speedErr.classList.add("hidden");
        errWarn.classList.remove("hidden");
    }

    if (speedValue < 0){ // Zabrání chodu systému pokud číslo je menší než 0 (-1 atd)   
        r1h.innerHTML = "";
        err.innerHTML =  "Rychlost v m/s nemůže být menší než 0" 
        
        speedErr.classList.add("hidden");
        errWarn.classList.remove("hidden");
    }

}