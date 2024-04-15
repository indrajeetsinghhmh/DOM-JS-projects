const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#results");
  const fitness = document.querySelector("#weight-guide");
  let bmi;

  if (height === "" || height < 0 || isNaN(height) || weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'height must be in cm & weight in kg';
  } else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }

  if(bmi<18.5){
    fitness.innerHTML = `<span>under weight, gain weight bro</span>`;
}
else if(bmi>18.5 && bmi<24.9){
      fitness.innerHTML = `<span>normal weight, maintain your fitness...Good Work!</span>`;
  }
else if(bmi<29.9 && bmi>24.9){
      fitness.innerHTML = `<span>Over weight, focus on your diet and do exercises</span>`;
    }
    else{
        fitness.innerHTML = `<span>Obesity, kya kr rha h bhai tu.......</span>`;
  }
});
