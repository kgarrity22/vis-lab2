
 

let attractions;

// load the data
// asynchronous function - everything to do with the data needs to happen inside here
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		
	// takes a list of json objects in one category, sorts them by visitor number and returns the top 5 most visited
	  function filterData(category) {
		  console.log(category)
		  category.sort(function (a, b) {
			  // sort the category by visitors, most to least
			  return b.Visitors - a.Visitors;
		  })
		  console.log("In filter data, the category is ", category.slice(0,5))
		  return category.slice(0,5);
	  } // end filterData


	  renderBarChart(filterData(attractions));
	  
	  let menu = document.querySelector("#attraction-category")
	  // listen for when the dropdown is changes
	  menu.addEventListener("change", function (event) {
		  let category = event.target.value;
		  //console.log(category);
		  

		  let subset = attractions.filter(function(a){
			  //console.log("The category is ", category)
			  if (category == "all") {
				return attractions;
			  } else {
				  return a.Category == category;
			  }
			  
		  })
		  //console.log("The new data is: ", subset)
		  let filtered = filterData(subset);
		  renderBarChart(filtered);
	  });// end event listener

	});







