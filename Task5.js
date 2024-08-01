// script.js
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let output = '<ul>';
        data.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        output += '</ul>';
        document.getElementById('apiData').innerHTML = output;
    })
    .catch(error => console.error('Error fetching data:', error));
