//  -------------------- For FETCH API -------------------

const image_base_path = "https://image.tmdb.org/t/p/w500";
function fetchAPIExample() {
    let temp = fetch("https://api.themoviedb.org/3/tv/popular?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&page=1")
        .then((response) => response.json())
        .then((response) => {
            let tempId = 0;
            let result = ""
            // response.results.sort((a, b) => a.name - b.name)
            response.results.map(data => {
                    const imgeUrl = image_base_path + data.poster_path;
                    result += `<div class="main-container" >
             <div class="poster-container" >
             <button class="m-button"  type="button"  data-bs-toggle="modal" data-bs-target="#${data.id}" href="#" ><img  src="${imgeUrl}" class="poster"/></button>
             <div class="modal fade" id="${data.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog modal-dialog-centered">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                  
                     <img src = "${imgeUrl}" />
                  <div class = "title.main"><span class="main-title">${data.original_name}</span> 
                 
                  </br>
                  <div class = "center-text"> 
                  <span class = "lang">  ${data.original_language.toUpperCase()} </span> 
                 
                  <span class = "rating-board.main">⭐️${data.vote_average}</span> 
                  <span class = "rating-board.main">₹250</span>
                 </div>
                 
                  <div class = "desc">${data.overview}</div>
                  <a href = "checkout-page.html"> <button class="glow-on-hover data-bs-dismiss="modal" onclick= "storeName('` + data.original_name+ `')">Book Now ! </a></button>
                    </div> 
                  </div>
                 <div class = "title"> </div>
                 
                  
                 
                 </div>
             </div>
         </div>
             </div>
            <div class="box-container">
               <div class="ticket__content">
                  <h5 class="movie-title">
                     ${data.original_name}
                  </h5>
                  
                  <h6 class="movie-info">Lang : ${data.original_language.toUpperCase()} <span class="rating">${data.vote_average}</span></h6>
                
               </div>
            </div>
         </div>`
                }).join()
            document.getElementById("hero-container").innerHTML = result;

        });

}
fetchAPIExample()


// -------------------- For Genre List -------------------

function genreList() {
    const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US";
    let genreList = "";
    fetch(GENRE_URL)
     .then(res => res.json())
     .then(res => {
        for (const genre of res.genres) {
          genreList += `<button class = "genre-btn" onclick="searchMovie('${genre.name}')"><li class="menu-item menu-item-type-post_type" id="${genre.id}">
          ${genre.name}</button></li>`;
        }
        document.getElementById("genre-list").innerHTML = genreList;
      })
     .catch(err => console.log(err));
  }
  genreList();

//  -------------------- For Search Functionality -------------------

function searchMovie(movieName) {
    // event.preventDefault(); -- form sends data to server and reloads the page but data is not going anywhere
    const MOVIE_BASE = "https://api.themoviedb.org/3/search/movie?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&query=";
    const MOVIE_URL_SUFFIX = "&page=1&include adult=false";
    let searchTerm = document.getElementById("search-field").value;
    if (movieName != undefined) {
        searchTerm = movieName
    }
const movieUrl = MOVIE_BASE + searchTerm + MOVIE_URL_SUFFIX;
    fetch(movieUrl)
        .then((response) => response.json())
        .then((response) => {
            let tempId = 0;
            let result = ""
            response.results.map(data => {
                console.log(data.original_title);
                let imgeUrl = ""
                if (data.poster_path == null || data.poster_path == undefined) {
                    imgeUrl = "avatar-wow.jpg"
                } else {
                    imgeUrl = image_base_path + data.poster_path
                }
                result += `<div class="main-container" >
           <div class="poster-container" >
             <button class="m-button"  type="button"  data-bs-toggle="modal" data-bs-target="#${data.id}" href="#" ><img  src="${imgeUrl}" class="poster"/></button>
             <div class="modal fade" id="${data.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog modal-dialog-centered">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                  
                     <img src = "${imgeUrl}" />
                  <div class = "title.main"><span class="main-title">${data.original_title}</span> 
                 
                  </br>
                  <div class = "center-text"> 
                  <span class = "lang">  ${data.original_language.toUpperCase()} </span> 
                 
                  <span class = "rating-board.main">⭐️${data.vote_average}</span> 
                  <span class = "rating-board.main">₹250</span>
                 </div>
                 
                  <div class = "desc">${data.overview}</div>
                 <a href = "checkout-page.html"> <button class="glow-on-hover" type="button">Book Now !</button></a>
                  </div> 
                  </div>
                 <div class = "title"> </div>
                 
                 </div>
             </div>
         </div>
             </div>
            <div class="box-container">
               <div class="ticket__content">
                  <h5 class="movie-title">
                     ${data.original_title}
                  </h5>
                  
                  <h6 class="movie-info">Lang : ${data.original_language.toUpperCase()} <span class="rating">${data.vote_average}</span></h6>
                
               </div>
            </div>
         </div>`
            }).join()
            document.getElementById("hero-container").innerHTML = result;
        });

}





//  -------------------- For Movie Name -------------------

function storeName(name) {
    localStorage.setItem("moviename", name);

}


// --------------------For Credit Card-------------------

function displayPayment() {

    var divc = document.getElementById("payment-area-credit");
    let radioChoice = document.querySelectorAll('input[name="payment"]:checked')
    radioChoice.checked = false;
    divc.style.display = radioChoice[0].value == "C" ? "inline" : "none";
    var diva = document.getElementById("payment-area-upi");
    diva.style.display = "none";
    var divb = document.getElementById("payment-area-debit");
    divb.style.display = "none";

}



// // --------------------For Debit Card-------------------

function displayPay() {
    let radioChoice = document.querySelectorAll('input[name="payment"]:checked')
    var divb = document.getElementById("payment-area-debit");
    divb.style.display = radioChoice[0].value == "B" ? "inline" : "none";
    var divc = document.getElementById("payment-area-credit");
    divc.style.display = "none";
    var diva = document.getElementById("payment-area-upi");
    diva.style.display = "none";
}

// // --------------------For UPI-------------------

function displayUpi() {
    let radioChoice = document.querySelectorAll('input[name="payment"]:checked')
    var diva = document.getElementById("payment-area-upi");
    diva.style.display = radioChoice[0].value == "A" ? "inline" : "none";
    var divb = document.getElementById("payment-area-debit");
    divb.style.display = "none";
}


function showTotal() {
    var storage = document.getElementById("notickets")
    var tax = document.getElementById("fees")
    var notickets = parseInt(storage.value)
    var convenienceFee = 1.75 * (250 / 100) * notickets
    var fees = document.getElementById("fees")
    fees.innerHTML = convenienceFee;
}
//    showTotal(); 

function setTotal() {

    var price = document.getElementById("notickets");
    var notickets = parseInt(price.value);
    var convenienceFee = 1.75 * (250 / 100) * notickets;
    var total = convenienceFee + (notickets * 250);

    console.log(total);
    document.getElementById("finalFees").innerHTML = total;
}
setTotal();

function storeName(name){
    localStorage.setItem("moviename", name);
}

    // function paySubmit(){
    //     alert("THANK YOU. Your Seats are Booked and Ticket are sent to your Email address");
    // }
    // paySubmit();
