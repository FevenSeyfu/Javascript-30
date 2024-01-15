const formInput = document.getElementById("searchInput");
const endpoint = "https://restcountries.com/v3.1/all";
const result = document.querySelector(".suggestions");
const countries = [];

const displayResult = (inputValue) => {
  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );
  const Results = filtered.map(
    (filteredCountry) =>
      `<li>
        <span>${filteredCountry.name.common.slice(0,10) || ""}</span>
        <span>${filteredCountry.flag || ""} </span>
        <span>${filteredCountry.population || ""}</span>
      </li>`
  ).join('');

  result.innerHTML = Results;
};

const handleSearch = (e) => {
  let inputValue = e.target.value;
  fetch(`${endpoint}/?fields=name,population,flag`)
    .then((res) => res.json())
    .then((res) => countries.push(...res))
    .catch("error fetching data");

  displayResult(inputValue);
};

formInput.addEventListener("input", handleSearch);
