//api example https://api.themoviedb.org/3/movie/550?api_key=69d0884c48d221c5200875c320e145b4
//api key 69d0884c48d221c5200875c320e145b4
// api use https://www.themoviedb.org/documentation/api/discover
// img api https://image.tmdb.org/t/p/w500
// search &query=
const API_KEY = "api_key=69d0884c48d221c5200875c320e145b4"
const BASE_URL ="https://api.themoviedb.org/3"
const API_URL= BASE_URL+"/discover/movie?sort_by=popularity.desc&"+ API_KEY
const IMG_URL ="https://image.tmdb.org/t/p/w500"
const main= document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")
const searchurl = BASE_URL+"/search/movie?"+API_KEY
const icon = document.getElementById("icon")
const movieinfo = document.getElementById("movieinfo")
const heart_icon=document.getElementById("heart-icon")
    

   
function getmovie(url){
    fetch(url).then(respones=>respones.json()).then(data=>{
        showmovie(data.results)
        console.log(data.results)
    })
}
getmovie(API_URL)

function showmovie(datas){
    main.innerHTML=''
    
    datas.forEach(movie=>{
        const {title ,overview,poster_path,vote_average}=movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML=
        `<img src="${IMG_URL+poster_path}"alt="${title}">
        <div class="movieinfo">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <div id="heart-icon" class="heart" ><i class="fas fa-heart"></i></div>
            <h3>Overview</h3>
            ${overview}
            </div>`

            main.appendChild(movieEl)
    })
    
}

function getcolor(vote){
     if(vote>8){
    return 'green'
     }
     else if(vote>=5){
        return 'orange'
         }
         else{
            return 'red'
             }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(search.value){
        getmovie(searchurl+"&query="+search.value)
    }
})
function myfunction(){
    document.body.classList.toggle("light")
}



    




  

