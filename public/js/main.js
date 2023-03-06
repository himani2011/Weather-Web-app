//const { response } = require("express");

const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const dataHide=document.querySelector('.middle_layer');

const temp_status=document.getElementById('temp_status');


const getInfo = async(event) => {
    event.preventDefault(); //since after hitting search button, the form element tries to reload the page. use 
    //this to prevent it
    let cityVal=cityName.value;
    
    if(cityVal=== ""){
        city_name.innerHTML = "Please write the city name before search!!";
        dataHide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=61c33483a26704bb65a4e92755d43f65`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;

            temp_real_val.innerText=arrData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;

            dataHide.classList.remove('data_hide');

        }catch{
            city_name.innerHTML = "Please enter the correct city name!!"
            dataHide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click',getInfo);