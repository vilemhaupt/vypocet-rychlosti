// Zakladní proměnné, bez kterého by systém nefungoval
const speedInput = document.getElementById("speed");
const r1h = document.getElementById("speed1h");
const err = document.getElementById("err");



// Proměnná která zajištuje aby se program nepokazil

const maxSupportedValue = 100000000000000000000; 

// Funkce díky které celý program funguje jak má

var calculate = () => { 

    // Zjištění čísla z inputu 

    const speedValue = speedInput.value; 

    // Proměnná která vypočítá průměrnou rychlost v hodině 

    const kmpH = speedValue * 3.6; 

    r1h.innerHTML = kmpH + " km/h ";
    err.innerHTML = "";

    // Zabrání chodu systému pokud uživatel zadal hodnotu 0, nebo ji nevyplnil

    if (speedValue == 0){ 


        err.innerHTML =  "Rychlost nemůže být 0 / nezadaná!";


    } else if (speedValue >= maxSupportedValue){
        r1h.innerHTML = "";
        err.innerHTML =  "Rychlost v m/s nemůže být větší než " + maxSupportedValue;
 

    } else if (speedValue < 0) { 
        r1h.innerHTML = "";
        err.innerHTML =  "Rychlost v m/s nemůže být menší než 0" 
        

    }






}

speedInput.addEventListener("keyup", () => {
    calculate();
});
    
