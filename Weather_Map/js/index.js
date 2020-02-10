$(document).ready(function() {
    var apiKey = "95a6248bb048278cc88dc03e8ccf9d3c"

    var states=[]
    Object.keys(state_info).forEach(function(key){
      states.push(key)
      var state_obj = state_info[key]
      var url =`https://api.darksky.net/forecast/${apiKey}/${state_obj.lat},${state_obj.lng}`;
      //console.log(state_info["CO"])
      $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                var state=this.state
                //console.log(data)

                var temperature = data.currently.temperature
                color="#808080"
                if(temperature<=10){
                  color="#6495ED"
                }
                else if(temperature<=20){
                  color="#7FFFD4"
                }
                else if(temperature<=30){
                  color="#0000FF"
                }
                else if(temperature<=40){
                  color="#008B8B"
                }
                else if(temperature<=50){
                  color="#00BFFF"
                }
                else if(temperature<=60){
                  color="#F08080"
                }
                else if(temperature<=70){
                  color="#CD5C5C"
                }
                else if(temperature<=80){
                  color="#8B0000"
                }
                else if(temperature<=90){
                  color="#B22222"
                }
                else{
                  color="#FF0000"
                }
                //console.log(key,temperature)
                document.querySelectorAll(`#${key} title`)[0].innerHTML=`${key}\nTemp today: ${temperature}F\nWeather: ${data.currently.icon}\nHumidity: ${data.currently.humidity}`
                //document.getElementById(key).setAttribute('title', `${key},${temperature}`)
                $(`#${key}`).css('fill', color);
      });
    })
});
