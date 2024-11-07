document.getElementById('getJoke').addEventListener('click', fetchJoke);  
document.getElementById('clearJoke').addEventListener('click', clearJoke);  

async function fetchJoke() {  
    try {  
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');  
        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        let joke = '';  

        if (data.type === 'single') {  
            joke = data.joke;  
        } else {  
            joke = `${data.setup} ${data.delivery}`;  // Fixed the string interpolation
        }  
        
        document.getElementById('joke').innerText = joke;  
        document.getElementById('charCount').innerText = `Character count: ${joke.length}`;  // Fixed the string interpolation
    } catch (error) {  
        document.getElementById('joke').innerText = 'Error fetching joke!';  
        document.getElementById('charCount').innerText = `'Character count: 0'`;  
        console.error('Fetch error:', error);  
    }  
}  

function clearJoke() {  
    document.getElementById('joke').innerText = 'Press the button for a joke!';  
    document.getElementById('charCount').innerText = 'Character count: 0';  
}