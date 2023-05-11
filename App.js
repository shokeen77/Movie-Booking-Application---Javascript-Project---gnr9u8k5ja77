// const image_base_path = "https://image.tmdb.org/t/p/w500"

// const API_URL = https://api.themoviedb.org/3/tv/213713/images?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US

// const SEARCH_API = https://api.themoviedb.org/3/search/movie?api_key=f7deed720cf5347ef72ca2f166de2c19&query=


// val poster = image_base_path + data.poster_path



      function fetchAPIExample() {
        let promiseObject = fetch("https://api.themoviedb.org/3/tv/213713/images?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US");
        promiseObject
          .then((response) => response.json())
          .then((response) => console.log("response -> ", response));
      }

      fetchAPIExample();

    
  
  