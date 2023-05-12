 function fetchAPIExample() {
   let promiseObject = fetch("https://api.themoviedb.org/3/tv/popular?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&page=1");
    return promiseObject
     .then((response) => response.json()) 
     .then((response) => response.results.map(data => {
     `<div class="main-container">
                    "<div class="poster-container">
                       <img src="./html5.seatheme.net/aside/images/avatar-wow.jpg" class="poster" />
                    </div>
                    <div class="box-container">
                        <div class="ticket__content">
                            <h5 class="movie-title">
                               {data.original_name}
                            </h5>

                            <h6 class="movie-info">Lang : {data.original_language.toUpperCase()} <span class="rating">8.2</span></h6>
                        </div>
                    </div>
                </div>`
               }));
              
 }
   
    document.getElementById("hero-container").innerHTML = fetchAPIExample();
// function fetchAPIExample() {
      //   let promiseObject = fetch("https://api.themoviedb.org/3/tv/popular?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&page=1");
      //   promiseObject
      //     .then((response) => response.json())
      //     .then((response) => console.log("response -> ", response));
      // }

      // fetchAPIExample();

    
  
  