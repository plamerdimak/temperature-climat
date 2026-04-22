
const btn = document.querySelector("#btnSend");
const input = document.querySelector("#city");
const emplacementEl = document.querySelector ("#localisation");
const temperatureEl = document.querySelector ("#temperature");
const descriptionEl = document.querySelector ("#description");



    

btn.addEventListener( 'click', () => {
    const city = input.value;
   fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0abc66b311d2ade7c7b7f7c6c36a72a`)

         .then(response => response.json())
         .then (donnees => { 
            emplacementEl.textContent = donnees . name ;
            temperatureEl.textContent = `Temperature : ${donnees.main.temp} °F`;
            descriptionEl.textContent = `Description ${donnees.weather[0].description}`;
         })

          
    
})