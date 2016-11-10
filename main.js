// Create an empty array
movies=[]

// Dynamically add 5 of your favorite movies to the array, one by one (rather than at creation time)
movies.push({title: "Spaceballs",
            director: "Mel Brooks",
            actor_list: ["Mel Brooks, John Candy, Rick Moranis"],
            genre: "Comedy",
            year: "1987" })
movies.push({title: "The Dark Knight",
            director: "Christopher Nolan",
            actor_list: ["Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine, Maggie Gyllenhaal"],
            genre: "Action",
            year: "2008" })
movies.push({title: "American Hustle",
            director: "David O. Russell",
            actor_list: ["Christian Bale, Bradley Cooper, Amy Adams, Jeremy Renner, Jennifer Lawrence"],
            genre: "Suspence",
            year: "2013" })
movies.push({title: "Donnie Darko",
            director: "Richard Kelly",
            actor_list: [" Jake Gyllenhaal, Jena Malone, Mary McDonnel"],
            genre: "Thriller",
            year: "2001"})
movies.push({title: "The Machinist",
            director: "Brad Anderson",
            actor_list: [" Christian Bale, Jennifer Jason Leigh, Aitana Sánchez-Gijón"],
            genre: "Thriller",
            year: "2004"})
// Make sure each movie object has a title, director list, genre, year, and actor list
console.log(movies)

// functions
alphabetize_title = movies.sort(function(x, y){
  return x.title > y.title
})

console.log(JSON.stringify(alphabetize_title))


movies.forEach(function(film) {
  document.getElementById('film').innerHTML += "<td>" + film.title + "</td><td>" + film.director + "</td><td>" + film.genre + "</td><td>" + film.title + "</td>"

})
