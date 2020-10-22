// ZOMATO API KEY //
const api= {
    key: "211a37c27d46db44c2e65076d081b87b",
    base: "https://cors-anywhere.herokuapp.com/"+"https://developers.zomato.com/api/v2.1/",
    crossOrigin: null
}

//GOOGLE MAPS API KEY //
const api= {
    key: "AIzaSyDHWqTqHS4iUxPTAddHwqSOOHJ4XDGO0qc",
    base:" ",
    crossOrigin: null
}
// THIS IS THE INPUT BOX CLICK FUNCTION //
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

//ACTION ON PRESSING ENTER BUTTON//
function setQuery(evt) {
    if (evt.keyCode === 13) {
        getResults(searchbox.value);
        //console.log(searchbox.value);
    }
}

//FUNCTION TO FETCH ZOMATO API //
function getResults (query) {
    fetch(`${api.base}/cuisine?q=${query}&APPID=${api.key}`)
    .then(cuisine => {
        return cuisine.json();
        }).then (displayResults);  
    }
//DISPLAY ZOMATO API RESULTS //
function displayResults (cuisine) {
    console.log(cuisine);
}




