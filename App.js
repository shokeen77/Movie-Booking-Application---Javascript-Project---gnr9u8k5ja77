const image_base_path = "https://image.tmdb.org/t/p/w500";
function fetchAPIExample() {
   let temp = fetch("https://api.themoviedb.org/3/tv/popular?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&page=1")
    .then((response) => response.json()) 
    .then((response) => {
     
      let result = ""
      response.results.map(data =>  {
         const imgeUrl = image_base_path + data.poster_path;
         result += `<div class="main-container" >
             <div class="poster-container" >
             <button href="#" ><img src="${imgeUrl}" class="poster" onclick = "showDescription('${data.original_name}','description')"/></button>
            </div>
            <div class="box-container">
               <div class="ticket__content">
                  <h5 class="movie-title">
                     ${data.original_name}
                  </h5>
                  <h6 class="movie-info">Lang : ${data.original_language.toUpperCase()} <span class="rating">8.2</span></h6>
               </div>
            </div>
         </div>`
    }).join()
    document.getElementById("hero-container").innerHTML = result;
    });
             
}
fetchAPIExample()




 function genreList(){
   const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US";
   let genreList="";
   fetch(GENRE_URL)
      .then(res => res.json())
      .then(res => {

         res.genres.map(data => {
            genreList += ` <li class="menu-item menu-item-type-post_type" id = $(data.id)>${data.name}</li>`
         }).join();
         document.getElementById("genre-list").innerHTML= genreList;
      }) 
 }
 genreList();


 function searchMovie(event){
   event.preventDefault();
   const MOVIE_BASE = "https://api.themoviedb.org/3/search/movie?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&query=";
   const MOVIE_URL_SUFFIX = "&page=1&include adult=false";
   const searchTerm = document.getElementById("search-field").value;
   const movieUrl = MOVIE_BASE + searchTerm + MOVIE_URL_SUFFIX;
   fetch(movieUrl)
    .then((response) => response.json()) 
    .then((response) => {
     
      let result = ""
      response.results.map(data =>  {
         const imgeUrl = image_base_path + data.poster_path;
         result += `<div class="main-container" >
             <div class="poster-container" >
             <button href="#" ><img src="${imgeUrl !=null && imgeUrl != "" ? imgeUrl : "./avatar-wow.jpg"}" class="poster" onclick = "showDescription('${data.original_name}')"/></button>
            </div>
            <div class="box-container">
               <div class="ticket__content">
                  <h5 class="movie-title">
                     ${data.original_title}
                  </h5>
                  <h6 class="movie-info">Lang : ${data.original_language.toUpperCase()} <span class="rating">8.2</span></h6>
                
               </div>
            </div>
         </div>`
    }).join()
    document.getElementById("hero-container").innerHTML = result;
    });
   
 }
 

function showDescription(movieName , desc) {
  alert("Hey");
  console.log(movieName , desc);
}
