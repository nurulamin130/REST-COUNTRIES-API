const loadcountries = () =>
{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}

loadcountries();
const displayCountries = (countries) =>
{
    // console.log(countries);
    // for (const country of countries)
    // {
    //     console.log(country.name.common)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country =>
    {
         console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>Name:${ country.name.common }</h3>
        <p>Capital:${ country.capital }</p>
        <p>languages:${ country.languages.eng }</p>
        <img src="${ country.flags.png }"width="100%" height="200" alt=""><br>
        <button  onclick="loadCountryByName('${ country.name.common }')">Details</button>

        `
        countriesDiv.appendChild(div)
    });

}

const loadCountryByName = name =>
{
    const url = `https://restcountries.com/v3.1/name/${ name }`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryByName(data[0]))

}

const displayCountryByName = country =>
{
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h3>Name:${ country.name.common }</h3>
        <p>Capital:${ country.capital }</p>
        <p>population:${ country.population }</p>
        <p>region:${ country.region }</p>
        <p>languages:${ country.languages }</p>
        <iframe width="100%" height="400" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=LOCATION&key=${country.maps.googleMaps}"></iframe>';
        

    `    
}
