window.addEventListener('load' ,() =>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperaturedescription");
    let temperatureDegree= document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
      let temperatureSection = document.querySelector(".tempreture");
        let temperatureSpan= document.querySelector(".temperature Span");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


       const api = `http://api.weatherapi.com/v1/current.json?key= e817dd484a064348baf222702221511&q=${lat},${long}&aqi=no`;
             fetch(api)
        .then(Response =>{
            return Response.json();
        })
        .then(data =>{
            // console.log(data);
            const { temp_c,temp_f, condition } = data.current;
            // set dom element from api
            temperatureDegree.textContent =temp_c;
            temperatureDescription.textContent = condition.text;
            locationTimezone.textContent = data.timezone;

            icon.src=condition.icon;
                temperatureSection.addEventListener("click",()=>{
                    if(temperatureSpan.textContent==="F"){
                    //    temperatureSpan.textContent=temp_c;
                      temperatureSpan.textContent="C";
                    }else{
                        // tempertureDegree.textContent=temp_f;
                    temperatureSpan.textContent="F";
                    }
                })
              })
                .catch(error=>console.log(error));
        });
    }
});
            
   