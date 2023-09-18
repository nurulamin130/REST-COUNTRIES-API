const loadcountry = () =>
{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
    
}

loadcountry();
const displayCountry = (countries) =>
{
    console.log(countries);
    for (const country of countries)
    {
        console.log(country.name.common)
    }

}