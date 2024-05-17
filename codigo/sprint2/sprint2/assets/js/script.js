/*FUNCIONALIDADE DO CABEÇALHO FEITO SEM BOOTSTRAP*/
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').scr = "assets/img/menu_white_36dp.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').scr = "assets/img/close_white_36dp.svg";
    }
}

/*PARTE DE LINKS*/ 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        // Fetch data from JSON (Assuming data.json is the JSON file)
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Filter data based on search term
                const filteredData = data.filter(item => {
                    return item.toLowerCase().includes(searchTerm);
                });

                // Display filtered results
                displayResults(filteredData);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    function displayResults(results) {
        // Clear previous results
        searchResults.innerHTML = '';

        // Display new results
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            searchResults.appendChild(li);
        });
    }
});

