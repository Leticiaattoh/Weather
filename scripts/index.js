
// const apiKey = 'afeac74e32ec7a2e7aa03a6a6d713e31';  // Replace with your OpenWeather API key

// // Fetch current weather data
// async function fetchCurrentWeather(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
        
//         if (data.cod === 200) {
//             // Update current weather elements
//             document.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}°C`;
//             document.querySelector('.condition').textContent = data.weather[0].description;
//             document.querySelector('.feels-like p').textContent = `${Math.round(data.main.feels_like)}°C`;
//             document.querySelector('.humidity').innerHTML = `<i class="fa fa-tint"></i> HUMIDITY ${data.main.humidity}%`;
//             document.querySelector('.precipitation p').textContent = `${data.rain ? data.rain['1h'] : 0} mm in the last 1 hour`;

//         } else {
//             alert('City not found!');
//         }
//     } catch (error) {
//         console.error('Error fetching current weather:', error);
//     }
// }

// // Fetch hourly forecast
// async function fetchHourlyForecast(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.cod === "200") {
//             const hourlyItems = document.querySelectorAll('.forecast-item');
//             for (let i = 0; i < hourlyItems.length && i < data.list.length; i++) {
//                 const forecast = data.list[i];
//                 const time = forecast.dt_txt.split(' ')[1].substring(0, 5);
//                 hourlyItems[i].innerHTML = `<p>${time}</p> ${Math.round(forecast.main.temp)}°C <h5>${getWeatherIcon(forecast.weather[0].id)}</h5>`;
//             }
//         } else {
//             console.error('Error fetching hourly forecast:', data.message);
//         }
//     } catch (error) {
//         console.error('Error fetching hourly forecast:', error);
//     }
// }

// // Fetch 10-day forecast
// async function fetchDailyForecast(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=10&units=metric&appid=${apiKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.cod === "200") {
//             const dailyItems = document.querySelectorAll('.forecast-day');
//             for (let i = 0; i < dailyItems.length && i < data.list.length; i++) {
//                 const forecast = data.list[i];
//                 dailyItems[i].innerHTML = `<p>${new Date(forecast.dt * 1000).toLocaleDateString()}</p> ${Math.round(forecast.temp.max)}°C <h5>${getWeatherIcon(forecast.weather[0].id)}</h5>`;
//             }
//         } else {
//             console.error('Error fetching daily forecast:', data.message);
//         }
//     } catch (error) {
//         console.error('Error fetching daily forecast:', error);
//     }
// }

// // Fetch UV Index
// async function fetchUVIndex(lat, lon) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         // Update UV index
//         document.querySelector('.uv-index p').textContent = data.value;
//     } catch (error) {
//         console.error('Error fetching UV index:', error);
//     }
// }

// // Fetch Wind Data
// async function fetchWindData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.cod === 200) {
//             document.querySelector('.wind .text-bold').innerHTML = `${Math.round(data.wind.speed)}<span class="text-[50%]">MPH</span>`;
//         }
//     } catch (error) {
//         console.error('Error fetching wind data:', error);
//     }
// }

// // Function to handle button click
// document.querySelector('.button1').addEventListener('click', async () => {
//     const city = document.querySelector('#city-input').value;
//     if (city) {
//         // Fetch data for the entered city
//         await fetchCurrentWeather(city);
//         await fetchHourlyForecast(city);
//         await fetchDailyForecast(city);
//         await fetchWindData(city);

//         // Fetch UV index using coordinates from the current weather
//         const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
//         const currentWeatherData = await currentWeatherResponse.json();
//         if (currentWeatherData.cod === 200) {
//             const lat = currentWeatherData.coord.lat;
//             const lon = currentWeatherData.coord.lon;
//             await fetchUVIndex(lat, lon);
//         }
//     } else {
//         alert('Please enter a city name');
//     }
// });

// // Helper functions for weather icons
// function getWeatherIcon(code) {
//     const weatherIcons = {
//         200: "⛈️", 300: "🌧️", 500: "🌦️", 600: "🌨️", 800: "☀️", 801: "🌤️", 802: "⛅", 803: "☁️", 804: "☁️"
//     };
//     return weatherIcons[code] || "❓";
// }





const apiKey = 'afeac74e32ec7a2e7aa03a6a6d713e31'; // Replace with your OpenWeather API key

// Fetch Current Weather Data
async function fetchCurrentWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            // Update current weather elements
            document.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}°C`;
            document.querySelector('.condition').textContent = data.weather[0].description;
            document.querySelector('.feels-like p').textContent = `${Math.round(data.main.feels_like)}°C`;
            document.querySelector('.humidity').innerHTML = `<i class="fa fa-tint"></i> HUMIDITY ${data.main.humidity}%`;
            document.querySelector('.precipitation p').textContent = `${data.rain ? data.rain['1h'] : 0} mm in the last 1 hour`;
            document.querySelector('.visibility .font-extrbold').textContent = `${Math.round(data.visibility / 1000)} km`;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Fetch Hourly Forecast
async function fetchHourlyForecast(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === "200") {
            const hourlyItems = document.querySelectorAll('.forecast-item');
            for (let i = 0; i < hourlyItems.length && i < data.list.length; i++) {
                const forecast = data.list[i];
                const time = forecast.dt_txt.split(' ')[1].substring(0, 5);
                hourlyItems[i].innerHTML = `<p>${time}</p> ${Math.round(forecast.main.temp)}°C <h5>${getWeatherIcon(forecast.weather[0].id)}</h5>`;
            }
        } else {
            console.error('Error fetching hourly forecast:', data.message);
        }
    } catch (error) {
        console.error('Error fetching hourly forecast:', error);
    }
}

// Fetch 10-Day Forecast
async function fetchDailyForecast(city) {
    // Use 7-day API due to OpenWeather free plan limitation for daily forecasts
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=10&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === "200") {
            const dailyItems = document.querySelectorAll('.forecast-day');
            for (let i = 0; i < dailyItems.length && i < data.list.length; i++) {
                const forecast = data.list[i];
                dailyItems[i].innerHTML = `<p>${new Date(forecast.dt * 1000).toLocaleDateString()}</p> ${Math.round(forecast.temp.max)}°C <h5>${getWeatherIcon(forecast.weather[0].id)}</h5>`;
            }
        } else {
            console.error('Error fetching daily forecast:', data.message);
        }
    } catch (error) {
        console.error('Error fetching daily forecast:', error);
    }
}

// Fetch UV Index
async function fetchUVIndex(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update UV index
        document.querySelector('.uv-index p').textContent = data.value;
    } catch (error) {
        console.error('Error fetching UV index:', error);
    }
}

// Fetch Wind Data
async function fetchWindData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.querySelector('.wind .text-bold').innerHTML = `${Math.round(data.wind.speed)}<span class="text-[50%]">MPH</span>`;
        }
    } catch (error) {
        console.error('Error fetching wind data:', error);
    }
}

// Handle "Get Weather" Button Click
document.querySelector('.button1').addEventListener('click', async () => {
    const city = document.querySelector('#city-input').value;
    if (city) {
        // Fetch data for the entered city
        await fetchCurrentWeather(city);
        await fetchHourlyForecast(city);
        await fetchDailyForecast(city);
        await fetchWindData(city);

        // Fetch UV index using coordinates from the current weather
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const currentWeatherData = await currentWeatherResponse.json();
        if (currentWeatherData.cod === 200) {
            const lat = currentWeatherData.coord.lat;
            const lon = currentWeatherData.coord.lon;
            await fetchUVIndex(lat, lon);
        }
    } else {
        alert('Please enter a city name');
    }
});

// Helper function to get weather icon based on weather code
function getWeatherIcon(code) {
    const weatherIcons = {
        200: "⛈️", 300: "🌧️", 500: "🌦️", 600: "🌨️", 800: "☀️", 801: "🌤️", 802: "⛅", 803: "☁️", 804: "☁️"
    };
    return weatherIcons[code] || "❓";
}
