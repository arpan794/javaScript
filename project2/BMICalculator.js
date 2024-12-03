const form = document.querySelector("form")

form.addEventListener('submit',function(e){
e.preventDefault();

const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const result = document.querySelector("#result")
const results = document.querySelector("#results")

if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `PLease give a valid Height!`;
    results.innerHTML = `PLease give a valid Height!`;
}
else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `PLease give a valid weight!`;
    results.innerHTML = `PLease give a valid weight!`;
}
else  {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>BMI = ${bmi}<span>`;

    if (bmi < 18.6) {
        results.innerHTML = `You are under weight}`;
    }
    else if (bmi > 24.9) {
        results.innerHTML = `You are over weight`;
    }
    else {
        results.innerHTML = `You BMI is normal`;
    }
}

})