import fetch from "node-fetch";

const baseUrl = "https://swapi.dev/api/";

async function fetchObj () {
    const response = await fetch(baseUrl + 'people/1/', {
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
}

fetchObj().then(console.log)