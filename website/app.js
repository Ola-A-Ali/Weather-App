/* Global Variables */
let getKey = "&appid=";
let degree = "&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'b15e6fcb0619382a5323c66385eb2ab5';


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// /* Function called by event listener */
function performAction(e){
let NewTemp =  document.getElementById('zip').value;
let feelings =  document.getElementById('feelings').value;


//getWeatherData('/',)
getWeatherData(baseURL,NewTemp,getKey, apiKey, degree)

  .then(function(data){
    postData('/add', {newDate:newDate, NewTemp:NewTemp, feelings:feelings} );
  })
  .then(
    updateUI()
  )
};
  
    
/* Function to GET Web API Data*/
const getWeatherData = async (baseURL,temp,keyId, key,degree)=>{
    const res = await fetch(baseURL + temp + keyId + key + degree);
    try {  
      const data = await res.json();
      return data;
    }  
    catch(error) {
      console.log("error", error);
    }
};


/* Function to POST data */
const postData = async ( url = '', data = {})=>{
      const res = await fetch(url, {
      method: 'POST', 
      apiKey: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

    try {
        const newData = await res.json();
        
        return newData;
    }
    catch(error) {
      console.log("error ", error);
    }
};

//update UI
const updateUI = async () => {
    const res = await fetch('/all');
 
    try{
      const data = await res.json();
      console.log(JSON.stringify(data) + " update")

      document.getElementById('date').innerHTML = data.newDate;
      document.getElementById('temp').innerHTML = data.NewTemp;
      document.getElementById('content').innerHTML = data.feelings;
    }
    catch(error){
      console.log("error", error);
    }
  };