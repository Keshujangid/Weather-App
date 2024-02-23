import { myApiKey } from "./apiConfig";


export async function getWeatherData(locationName = 'jaipur'){
    // Get the loading element
    const loading = document.getElementById('loading');

    // Show the loading screen
    loading.style.display = 'block';

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myApiKey}&q=${locationName}&days=3`);
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
            
        } else {
            console.error('An unexpected error occurred');
            
        }

        document.querySelector('.container').style.display = 'none';
        document.querySelector('.bg-purple').style.display = 'block';
        
        throw error;
    }
}