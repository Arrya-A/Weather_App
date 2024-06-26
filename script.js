const search = async () => {
    // console.log(input.value);
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
    data.json()
        .then((item) => {
            console.log(item);

            city.innerHTML = item.name + ','
            description.innerHTML = (item.weather[0].description).toUpperCase()

            const iconCode = item.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            icon.src = iconUrl;

            temperature.innerHTML = (item.main.temp - 273.15).toFixed(2) + '°C'
            feelslike.innerHTML = (item.main.feels_like - 273.15).toFixed(2) + '°'
            tempmin.innerHTML = (item.main.temp_min - 273.15).toFixed(2) + '°'
            tempmax.innerHTML = (item.main.temp_max - 273.15).toFixed(2) + '°'
            pressure.innerHTML = item.main.pressure + ' hPa'
            humidity.innerHTML = item.main.humidity + ' %'
            windspeed.innerHTML = item.wind.speed + ' km/h'
            country.innerHTML = item.sys.country
            const now = new Date()
            const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
            const day = days[now.getDay()];
            const date = now.getDate();
            const month = now.toLocaleString('default', { month: 'long' });
            const year = now.getFullYear();
            const hours = now.getHours() % 12 || 12;
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

            current_time.innerHTML = `${hours}:${minutes} ${ampm}`;
            current_day.innerHTML = day;
            current_date.innerHTML = `${month} ${date}, ${year}`;
        })
}

