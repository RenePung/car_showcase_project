import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '464bea8d7fmshe60525f3dbf268ep1a2abcjsn4aa5a344fa93',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers,});

        const result = await response.json();

        return result;
    }


/*  The Following Goes for Above :
1.Function Declaration: This code defines an asynchronous function named fetchCars.
The async keyword indicates that this function will return a promise.

2.Request Headers: Inside the function, you define an object called headers which contains two headers for the API request. 
These headers are used to authenticate and specify the target host for the API.

3.API Request: The fetch function is used to make an HTTP request to the specified URL, which is the API endpoint: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'. 
It also includes the headers object in the request for authentication.

4.Awaiting the Response: await is used to wait for the response from the API. 
This is important in an asynchronous function because it ensures that the code will not continue until the response is received.

5.Parsing the Response: Once the response is received, the response.json() method is used to parse the response data as JSON. 
This is because API responses are usually in JSON format.

6.Returning the Result: Finally, the parsed JSON data is returned as the result of the function.



This function is used to fetch car data from the specified API and returns the data in a format that can be easily used in your application. 
*/


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };





/*Car Images API*/

export const generateCarImageUrl = (car: CarProps, angle? : string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ') [0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}