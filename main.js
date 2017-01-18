'use strict';

$(document).ready(function() {
console.log("please work");

	$("#movie-input-button").click(function(event) {
		event.preventDefault();
		console.log("help!");


		var $newMovieInput = $('#movie-input').val();
        console.log($newMovieInput);

		$.get("http://omdbapi.com/?s=" + $newMovieInput + "&plot=full&r=json",
			function(data) {
        		var createdHtmlString = "";

				//$("#movieList").html("");
				var movieResults = data.Search;
				console.log(movieResults);

             for (var i=0; i < movieResults.length; i++) {

               var movie = movieResults[i]
               //For each movie object, create a piece of HTML
               var htmlString = "<div class='movieInfo'> " +
                   "<a href='http://imdb.com/title/" +
                   movie['imdbID'] +
                   "/'><img id='posters' src=" +
                   movie['Poster'] +
                   "></img></a>" +
                   "<div class='title'>" +
                   movie['Title']+
                   "</div>" +
                   "</div>"
              	
              	createdHtmlString = createdHtmlString +  htmlString;
             };

             $("#movieList").empty();
             $("#movieList").append(createdHtmlString);

			});
		

	});
	

});


/*function addMovie() {
	var $itemLi = $('li').text(item);
	$list.append($itemLi);
	console.log('something worked');
}
*/


/*var $button = $('#movie-input-button');

var $movieListItems = $('#movie-list');
*/



/*
	var url = "http://omdbapi.com/?s=" + $("#query").val();
	$.get(url, resultsReceived);
}*/

