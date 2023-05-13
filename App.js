const image_base_path = "https://image.tmdb.org/t/p/w500";
function fetchAPIExample() {
   let temp = fetch("https://api.themoviedb.org/3/tv/popular?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&page=1")
    .then((response) => response.json()) 
    .then((response) => {
      console.log(response.results);
      let result = ""
      response.results.map(data =>  {
         const imgeUrl = image_base_path + data.poster_path;
         result += `<div class="main-container" >
             <div class="poster-container" >
             <button href="#" ><img src="${imgeUrl}" class="poster" onclick ="show('popup')"/></button>
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

$ = function(id) {
   return document.getElementById(id);
 }
 
 var show = function(id) {
    $(id).style.display ='block';
 }
 


