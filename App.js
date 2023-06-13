//  -------------------- For FETCH API -------------------

const image_base_path = "https://image.tmdb.org/t/p/w500";
function fetchAPIExample() {
    let temp = fetch("https://api.themoviedb.org/3/tv/popular?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&page=1")
        .then((response) => response.json())
        .then((response) => {
            let tempId = 0;
            let result = ""
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
                  <div class = "title">${data.original_name} </br>
                  <span class = "rating-board"> 8.2/10</span> </br>
                  <span class = "lang"> ${data.original_language.toUpperCase()} </span>
                
                  </div> 
                  </div>
                 <div class = "title"> </div>
                     <div class="modal-footer">
                        <a href = "checkout-page.html"> <button  type="button" class="btn-second" data-bs-dismiss="modal" onclick= "storeName('` + data.original_name+ `')">Book Now</button> </a>
                       
                     </div>
                 </div>
             </div>
         </div>
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


// -------------------- For Genre List -------------------

function genreList() {
    const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US";
    let genreList = "";
    fetch(GENRE_URL)
        .then(res => res.json())
        .then(res => {

            res.genres.map(data => {
                genreList += ` <li class="menu-item menu-item-type-post_type" id = $(data.id)>${data.name}</li>`
            }).join();
            document.getElementById("genre-list").innerHTML = genreList;
        })
}
genreList();


//  -------------------- For Search Functionality -------------------

function searchMovie(event) {
    event.preventDefault();
    const MOVIE_BASE = "https://api.themoviedb.org/3/search/movie?api_key=f7deed720cf5347ef72ca2f166de2c19&language=en-US&query=";
    const MOVIE_URL_SUFFIX = "&page=1&include adult=false";
    const searchTerm = document.getElementById("search-field").value;
    const movieUrl = MOVIE_BASE + searchTerm + MOVIE_URL_SUFFIX;
    fetch(movieUrl)
        .then((response) => response.json())
        .then((response) => {

            let result = ""
            response.results.map(data => {
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

//  -------------------- For Movie Description -------------------

function showDescription(movieName, desc) {
    alert("Hey");
    console.log(movieName, desc);
}

//  -------------------- For Movie Name -------------------

function storeName(name){
    localStorage.setItem("moviename",name);
    
}


 // --------------------For Credit Card-------------------

function displayPayment() {
   
    var divc = document.getElementById("payment-area-credit");
    let radioChoice = document.querySelectorAll('input[name="payment"]:checked')
    radioChoice.checked=false;
    divc.style.display = radioChoice[0].value ==  "C" ? "inline" : "none";
    var diva = document.getElementById("payment-area-upi");
    diva.style.display = "none";
    var divb = document.getElementById("payment-area-debit");
    divb.style.display = "none";
   
}



// // --------------------For Debit Card-------------------

function displayPay() {
    let radioChoice = document.querySelectorAll('input[name="payment"]:checked')
    var divb = document.getElementById("payment-area-debit");
    divb.style.display = radioChoice[0].value ==  "B" ? "inline" : "none";
    var divc = document.getElementById("payment-area-credit");
    divc.style.display = "none" ;
    var diva = document.getElementById("payment-area-upi");
    diva.style.display = "none";
    }

// // --------------------For UPI-------------------

function displayUpi() {
    let radioChoice = document.querySelectorAll('input[name="payment"]:checked')
   var diva = document.getElementById("payment-area-upi");
    diva.style.display = radioChoice[0].value == "A" ? "inline" :  "none"  ;
    var divb = document.getElementById("payment-area-debit");
    divb.style.display = "none";
   }


   function showTotal(){
    var storage = document.getElementById("notickets") 
    var tax = document.getElementById("fees")
    var notickets =  parseInt(storage.value)
    var convenienceFee =  1.75*(250 / 100)*notickets
    var fees = document.getElementById("fees")
    fees.innerHTML = convenienceFee;
   }

   function setTotal() {
    
    var price = document.getElementById("notickets").value;
    var notickets =  parseInt(price.value);
    var convenienceFee =  1.75*(250 / 100)*notickets;
    var total = convenienceFee + (notickets*250) ;
    // console.log(total);
    console.log(convenienceFee);
    console.log(notickets);
    console.log(typeof price);
    
    
    
    // document.getElementById("finalFees").innerHTML = total;
   }
   




