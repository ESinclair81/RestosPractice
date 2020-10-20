
let cuisinesDiv = document.getElementById('cuisines')
fetch('https://developers.zomato.com/api/v2.1/search')
.then(response = response.json())
.then(cuisine = {
    cuisinesDiv.innerHTML += `<p> ${cuisine.cuisine} </p>`
})