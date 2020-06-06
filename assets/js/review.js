const [movieReleased,Director,Actor,Writers,Plot,Rewards,Genre] = document.querySelectorAll('span.data'); 
const poster =document.querySelector('.poster > img');
const title =document.querySelector('.poster > figcaption');
// console.log(poster);
// let d = null;
// let fet = confirm('Do you wanna fetch?')
// showReview()
// console.log(data)
async function showReview(name){
    
    d = await fetch(`http://localhost:8080/search=${name}`)
        .then(res=>res.json())
        .then(d=>d)
        let {data,review} = d;
        console.log(d)
        
    poster.setAttribute('src',data.Poster);
    poster.setAttribute('alt',`Poster for ${data.Title}`)
    title.textContent = data.Title;
    movieReleased.textContent = data.Released;
    Director.textContent = data.Director;
    Actor.textContent = data.Actors;
    Writers.textContent = data.Writer;
    Plot.textContent = data.Plot;
    Rewards.textContent = data.Awards;
    Genre.textContent = data.Genre;
    
    // MainCast.textContent = 
}
