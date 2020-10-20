//Zomato API KEY
//KEY: 211a37c27d46db44c2e65076d081b87b

//Google Maps API KEY //
// KEY: AIzaSyDHWqTqHS4iUxPTAddHwqSOOHJ4XDGO0qc

//The Zomato API Function //

user_key= '211a37c27d46db44c2e65076d081b87b'
function getSearch () {
    
    var searchText = document.querySelector('#search-text').value;
    document.getElementById('search-text').value;
    console.log(event);

    fetch('https://developers.zomato.com/api/v2.1/search').then(function (response) {
	if (response.ok) {
		return response.json();
	}
	return Promise.reject(response);
}).then(function (data) {
	console.log(data);
	render();
}).catch(function (error) {
	console.warn(error);
	render();
});


// Variable for Cuisine Type //
   var cuisine = document.querySelector('#cuisine').value;
   document.getElementById('cuisine').value;
}

