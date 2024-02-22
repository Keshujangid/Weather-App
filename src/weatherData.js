import { myApiKey } from "./apiConfig";
// import { create404Page } from "./404";






export async function getWeatherData(locationName = 'jaipur'){
    // Get the loading element
    const loading = document.getElementById('loading');

    // Show the loading screen
    loading.style.display = 'block';

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${myApiKey}&q=${locationName}&days=3`);
        if (!response.ok) {
            // If response is not OK, throw an error
            throw new Error(`Failed to fetch data (${response.status} ${response.statusText})`);
        }

        const data = await response.json();

        // Hide the loading screen
        loading.style.display = 'none';

        return data;
    } catch (error) {
        console.error('Error:', error);

        // Handle the error
        if (error instanceof TypeError) {
            console.error('Network error occurred');
            // Handle network error
        } else {
            console.error('An unexpected error occurred');
            // Handle other errors
        }

        document.querySelector('.container').style.display = 'none';
        document.querySelector('.bg-purple').style.display = 'block';
        // Display the not found page
        // create404Page();

        // Re-throw the error to be caught by the caller if needed
        throw error;
    }
}