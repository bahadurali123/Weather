        // Made a function if user input data and clik the searchicon so change weather for given data
        let searchicon = document.getElementById("search-icon");
        let input = document.getElementById("input");
        searchicon.addEventListener('click', function () {
            console.log("input: ", input.value);
            city = input.value;
            getweatherdata(input.value);
            input.value = "";
        });
        getweatherdata();
        // Fetch data from the weather api
        function getweatherdata(city) {
            const options = {
                method: 'GET',
            };

            let data;
            // API KEY IS THIS=49cc8c821cd2aff9af04c9f98c36eb74
            // let data = (city === null) ? `${fetch('https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=49cc8c821cd2aff9af04c9f98c36eb74', options)}` : `${fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49cc8c821cd2aff9af04c9f98c36eb74`, options)}`;
            if (city == undefined) {
                data = fetch('https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=49cc8c821cd2aff9af04c9f98c36eb74', options);
            } else {
                data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49cc8c821cd2aff9af04c9f98c36eb74`, options);
            }

            // let data = fetch('https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=49cc8c821cd2aff9af04c9f98c36eb74', options);
            data.then((response) => {
                console.log(response.status)
                console.log(response.ok)
                return response.json();
            }).then((value) => {
                console.log(value);
                // console.log("Parse",JSON.parse(value));
                // document.getElementById("heading").innerHTML=`${value}`;


                // console.log("base: ", value.base);
                // console.log("clouds: ", value.clouds);
                // console.log("all: ", value.clouds.all);
                // console.log("cod: ", value.cod);
                // // console.log("coord: ",value.coord);
                // console.log("lat: ", value.coord.lat);
                // console.log("lon: ", value.coord.lon);
                // console.log("dt: ", value.dt);
                // console.log("id: ", value.id);
                // // console.log("main: ",value.main);
                // console.log("feels_like: ", value.main.feels_like);
                // console.log("humidity: ", value.main.humidity);
                // console.log("pressure: ", value.main.pressure);
                // console.log("temp: ", value.main.temp);
                // console.log("temp_max: ", value.main.temp_max);
                // console.log("temp_min: ", value.main.temp_min);
                // console.log("name: ", value.name);
                // // console.log("sys",value.sys);
                // console.log("country: ", value.sys.country);
                // console.log("id: ", value.sys.id);
                // console.log("sunrise: ", value.sys.sunrise);
                // console.log("sunset: ", value.sys.sunset);
                // console.log("type: ", value.sys.type);
                // console.log("timezone: ", value.timezone);
                // console.log("visibility: ", value.visibility);
                // // console.log("weather: ",value.weather);
                // console.log("description: ", value.weather[0].description);
                // console.log("icon: ", value.weather[0].icon);
                // console.log("id: ", value.weather[0].id);
                // console.log("main: ", value.weather[0].main);
                // console.log("length: ", value.weather.length);
                // // console.log("wind: ",value.wind);
                // console.log("deg: ", value.wind.deg);
                // console.log("speed: ", value.wind.speed);

                //formula= 0K − 273.15 = -273.1°C
                function kalventocelcus(tempraure) {
                    let celcies = tempraure - 273.15;
                    return celcies
                }

                // set data in html using its ids
                document.getElementById("max-temp").textContent = Math.round(kalventocelcus(value.main.temp_max));
                document.getElementById("min-temp").textContent = Math.round(kalventocelcus(value.main.temp_min));
                document.getElementById("tempetature").textContent = Math.round(kalventocelcus(value.main.temp));
                // console.log(Math.round(kalventocelcus(value.main.temp)));
                document.getElementById("feels-like").textContent = Math.round(kalventocelcus(value.main.feels_like));
                document.getElementById("country").textContent = value.sys.country;
                document.getElementById("city").textContent = value.name;
                // let icon = document.getElementById("main-icon");
                // icon.setAttribute("src", `${value.weather[0].icon}`);
                document.getElementById("temprature-nature").textContent = value.weather[0].description;
                document.getElementById("humidity").textContent = value.main.humidity;
                document.getElementById("pressure").textContent = value.main.pressure;
                document.getElementById("visibility").textContent = value.visibility / 1000;
                document.getElementById("latitude").textContent = value.coord.lat;
                document.getElementById("longitude").textContent = value.coord.lon;
                document.getElementById("dig").textContent = value.wind.deg;
                document.getElementById("speed").textContent = value.wind.speed;
                // document.getElementById("sunrise").textContent = value.sys.sunrise;
                // document.getElementById("sunset").textContent = value.sys.sunset;
                
                
                // Menage picture and icons of weather application
                if (value.weather[0].description === "broken clouds") {
                    document.getElementById("main-icon").setAttribute('src', 'icons/cloud.png');
                    document.getElementById("main-image").setAttribute('src', 'https://c0.wallpaperflare.com/preview/532/447/657/scattered-white-clouds.jpg')
                }
                else if (value.weather[0].description === "thunderstorm wth rain") {
                    document.getElementById("main-icon").setAttribute('src', "icons/cloud-with-lightning.png");
                    document.getElementById("main-image").setAttribute('src', 'https://assets.thehansindia.com/h-upload/2022/05/10/1291296-thunder.webp')
                }
                else if (value.weather[0].description === "overcast clouds") {
                    document.getElementById("main-icon").setAttribute('src', "icons/cloud.png");
                    document.getElementById("main-image").setAttribute('src', 'https://rare-gallery.com/thumbs/5420711-overcast-storm-meterology-storm-cloud-cloudy-cloud-pattern-background-cloudscape-nature-natural-night-night-sky-stormy-cloud-clouds-overcast-day-dramatic-sky-stormy-foreboding-scary-png-images.jpg')
                }
                else if (value.weather[0].description == "smoke") {
                    document.getElementById("main-icon").setAttribute('src', "icons/smoke.png");
                    document.getElementById("main-image").setAttribute('src', 'https://static.manitobacooperator.ca/wp-content/uploads/2021/08/04124049/Smoke__CN_Tower_Toronto_2021-07-20T114519Z_1790233990_RC2AOO957L67_RTRMADP_3_CANADA-WEATHER_REUTERS_CARLOS_OSORIO.jpeg')
                }
                else if (value.weather[0].description === "scattered clouds") {
                    document.getElementById("main-icon").setAttribute('src', "icons/storm.png");
                    document.getElementById("main-image").setAttribute('src', 'https://img.freepik.com/free-photo/scattered-clouds_1204-15.jpg?1&w=826&t=st=1690699064~exp=1690699664~hmac=a7b6bfa45168956726b267eff4999cfbe24091033a831afaa35a4f0b638b72ad')
                }
                else if (value.weather[0].description === "few clouds") {
                    document.getElementById("main-icon").setAttribute('src', "icons/weather.png");
                    document.getElementById("main-image").setAttribute('src', 'https://e0.pxfuel.com/wallpapers/514/997/desktop-wallpaper-clouds-blue-sky-with-few-clouds-background-dark-blue-clouds.jpg')
                }
                else if (value.weather[0].description === "clear sky") {
                    document.getElementById("main-icon").setAttribute('src', "icons/sunn.png");
                    document.getElementById("main-image").setAttribute('src', 'https://www.therightnews.in/wp-content/uploads/2022/06/17-14.jpg')
                }
                else if (value.weather[0].description === "light rain") {
                    document.getElementById("main-icon").setAttribute('src', "icons/rainy.png");
                    document.getElementById("main-image").setAttribute('src', 'https://i.brecorder.com/primary/2023/03/641ca85791b94.jpg')
                }
                else if (value.weather[0].description === "haze") {
                    document.getElementById("main-icon").setAttribute('src', "icons/haze.png");
                    document.getElementById("main-image").setAttribute('src', 'https://www.salina.com/gcdn/authoring/2020/01/14/NSAJ/ghows-KS-9c1c6764-dc32-5196-e053-0100007ffdaf-9242f86b.jpeg?width=660&height=350&fit=crop&format=pjpg&auto=webp')
                } else {
                    document.getElementById("main-icon").setAttribute('src', "icons/weather.png");
                }
                
                // Sunrise and sunset
                // Given sunrise date in number formate but we ndde in string formate because new date() function accept just string formate
                const rise = value.sys.sunrise * 1000;
                
                // Create a new Date object using the rise
                const date = new Date(rise);
                // Extract individual components of the date
                const year = date.getFullYear();
                const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
                const day = date.getDate();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();
                
                // Format the date and time as a string
                // const sunrisedate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                // const sunrisedate = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                
                document.getElementById("sunrise").textContent = `${hours}:${minutes}`;
                // document.getElementById("sunrise").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                
                
                // Given sunset
                const sunset = value.sys.sunset * 1000;
                
                // Create a new Date object using the timestamp
                const sunsetdate = new Date(sunset);
                
                // Extract individual components of the date
                const sunsetyear = sunsetdate.getFullYear();
                const sunsetmonth = sunsetdate.getMonth() + 1; // Months are zero-indexed, so add 1
                const sunsetday = sunsetdate.getDate();
                const sunsethours = sunsetdate.getHours();
                const sunsetminutes = sunsetdate.getMinutes();
                const sunsetseconds = sunsetdate.getSeconds();
                
                // Format the date and time as a string
                let hour
                if (sunsethours > 12) {
                    let hour = sunsethours- 12;
                    // document.getElementById("houers").textContent = in12houre;
                    document.getElementById("sunset").textContent = `${hour}:${sunsetminutes}`;
                    // document.getElementById("sunset").textContent = `${hour}:${sunsetminutes.toString().padStart(2, '0')}`;
                }
                // Subtract sunrise and sunset and find daylength
                let daylengthinstring=rise-sunsetdate;
                let daylength=new Date(daylengthinstring);
                const daylengthhours=daylength.getHours();
                const daylengthminuts=daylength.getMinutes();
                console.log("DAYLENGTH: ",daylengthhours,":",daylengthminuts);
                document.getElementById("daylength").innerText = `${daylengthhours}:${daylengthminuts}`;
           
            }).catch((error) => {
                console.log("API cant work", error);
            })
        }
        getweatherdata();

        // Make a new Date() function thets show date in weather application
        let monthsnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let time = new Date;
        let houers = time.getHours();
        let minets = time.getMinutes();
        let month = time.getMonth();
        let date = time.getDate();
        let year = time.getFullYear();
        if (time.getHours() > 12) {
            let in12houre = time.getHours() - 12;
            document.getElementById("houers").textContent = in12houre;
            document.getElementById("ampm").textContent = "PM";
        } else {
            document.getElementById("houers").textContent = time.getHours();
            document.getElementById("ampm").textContent = "AM";
        }
        document.getElementById("minutes").textContent = time.getMinutes();
        document.getElementById("month").textContent = monthsnames[time.getMonth()];
        document.getElementById("date").textContent = time.getDate();
        document.getElementById("year").textContent = time.getFullYear();