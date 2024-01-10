// Your function
function fetchJoke() {
    let fetchRes = fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,political"); // Fetch data from the API while making sure not to get any sexist, racist, or political jokes.

    fetchRes
    .then(res => res.json())
    .then(d => {
        document.getElementById('output').innerHTML = d.joke;
    })
    .catch(err => console.error('Fetch Error:', err));
}

// Attaching the function to the <a> tag
document.getElementById('jokeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link (i.e., navigating to a different page)
    fetchJoke(); // Calls your function when the link is clicked
});
