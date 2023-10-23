export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '464bea8d7fmshe60525f3dbf268ep1a2abcjsn4aa5a344fa93',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers,});

        const result = await response.json();

        return result;
    }