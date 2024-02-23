import { displayWeather } from './Dom.js';


export function getLocationName() {
    const form = document.querySelector('form');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', () => {
        const locationName = getLocation(form);
        displayWeather(locationName);
    })
}

function getLocation(form) {
    const inputValue = document.querySelector('.search-bar').value;
    form.addEventListener('submit', (e) => { e.preventDefault(); });
    document.querySelector('.search-bar').value = '';
    return inputValue;
}




