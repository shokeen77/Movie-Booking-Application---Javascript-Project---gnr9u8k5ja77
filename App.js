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

//  -------------------- Payment Mode -------------------
function showPayment(payment) {
    let temp = showPayment()
        .then((response) => response.json())
        .then((response) => {
            let tempId = 0;
            let pay= ""
            response.results.map(data => {
                
                result += `<div id=" $(data.id)" class="payment">
                <div class="form-group" id="bankacct">
                    <input type="text" class="inputbox" id="bankaccount" placeholder="Bank-Account" />
                </div>
                <div class="form-group" id="accttype">
                    <label> Account Type</label> <br />
                    <select class="inputbox" name="accounttype" id="accounttype">
                        <option value="check"> Current</option>
                        <option value="save"> Savings</option>
                    </select>
                    <br />
                </div>

                <div class="form-group" id="debitday">
                    <label for="day">Debit Day</label> <br />
                    <select name="day" id="day">
                        <option value="10"> 10</option>
                        <option value="25"> 25</option>
                    </select>
                </div>
            </div>

             <div id=" $(data.id)" class="payment" >
                <div class="form-group" id="bankacct">
                    <input type="text" class="inputbox" id="bankaccount" placeholder="Bank-Account" />
                </div>
                <div class="form-group" id="accttype">
                    <label> Account Type</label> <br />
                    <select class="inputbox" name="accounttype" id="accounttype">
                       
                        <option value="save"> Savings</option>
                    </select>
                    <br />
                </div>

                <div class="form-group" id="debitday">
                    <label for="day">Debit Day</label> <br />
                    <select name="day" id="day">
                        
                        <option value="25"> 25</option>
                    </select>
                </div>
            </div>

             
                <div id=" $(data.id)" class="payment">
                <div class="form-group" id="bankacct">
                    <input type="text" class="inputbox" id="bankaccount" placeholder="Bank-Account" />
                </div>
                <div class="form-group" id="accttype">
                    <label> Account Type</label> <br />
                    <select class="inputbox" name="accounttype" id="accounttype">
                        <option value="check"> Current</option>
                        <option value="save"> Savings</option>
                    </select>
                    <br />
                </div>

                <div class="form-group" id="debitday">
                    <label for="day">Debit Day</label> <br />
                    <select name="day" id="day">
                        <option value="10"> 10</option>
                        <option value="25"> 25</option>
                    </select>
                </div>
            </div>`
            }).join()
            document.getElementById("box-right").innerHTML = pay;
        });

}
showPayment();


// // --------------------For Credit Card-------------------

// function displayPayment() {
//     var pay_method = document.getElementById("pay_method");
//     var divc = document.getElementById("card-payment");
    
//     divc.style.display = pay_method.value == "C" ? "none" : "inline-block";
   

// }



// // --------------------For Debit Card-------------------

// function displayPay() {
//     var pays_method = document.getElementById("pays_method");
   
//     var divb = document.getElementById("debit-payment");
    
//     divb.style.display = pays_method.value == "B" ? "none" :  "inline" ;

// }

// // --------------------For UPI-------------------

// function displayUpi() {
//     var payss_method = document.getElementById("payss_method");
   
//     var diva = document.getElementById("upi-payment");
    
//     divb.style.display = pays_method.value == "A" ? "none" :  "inline" ;

// }



