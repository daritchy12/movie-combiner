const [movieReleased,Director,Actor,Writers,Plot,Rewards,Genre] = document.querySelectorAll('span.data'); 
const poster =document.querySelector('.poster > img');
const title =document.querySelector('.poster > figcaption');
const reviewStatElem = document.querySelector('#review');
const [positiveElem , negativeElem] = document.querySelectorAll('#bottom .card');
console.log(positiveElem)
// console.log(poster);
// let d = null;
// let fet = confirm('Do you wanna fetch?')
// showReview()
// console.log(data)
async function showReview(name){
    
    d = await fetch(`https://combnr.herokuapp.com/search=${name}`)
        .then(res=>res.json())
        .then(d=>d)

    if(d['message']){
        console.log('Not Here');
        return;
    }
    // if(!d.ok){
    //     console.log('It did not ok');
    //     return;
    // }
    let {data,review} = d;
    console.log(d)
        
    poster.setAttribute('src',data.Poster);
    poster.setAttribute('alt',`Poster for ${data.Title}`)
    localStorage.setItem("current",data.Title);
    title.textContent = data.Title;
    movieReleased.textContent = data.Released;
    Director.textContent = data.Director;
    Actor.textContent = data.Actors;
    Writers.textContent = data.Writer;
    Plot.textContent = data.Plot;
    Rewards.textContent = data.Awards;
    Genre.textContent = data.Genre;

    const [IMDB,ROTTEN_TOMATOES,METACRITIC] = data['Ratings']
    reviewStatElem.dataset.imdb=IMDB['Value'].slice(0,3);
    reviewStatElem.dataset.rotten=ROTTEN_TOMATOES['Value'].slice(0,ROTTEN_TOMATOES['Value'].indexOf('%'));
    reviewStatElem.dataset.metacritic=METACRITIC['Value'].slice(0,METACRITIC['Value'].indexOf('/'));

    if(reviewStatElem.classList.contains('imdb')){
        console.log('yes')
        let p = reviewStatElem.querySelector('p');
        p.textContent = reviewStatElem.dataset.imdb;
    }
    
    // positiveElem.querySelector('.rev').classList.remove(['bad,mixed,good']);
    // negativeElem.querySelector('.rev p').classList.remove(['bad,mixed,good']);


    positiveElem.querySelector('.rev p').textContent = review['highestRating']['rating'];
    negativeElem.querySelector('.rev p').textContent = review['lowestRating']['rating'];
    
    positiveElem.querySelector('p.text').textContent = review['highestRating']['text']
    negativeElem.querySelector('p.text').textContent = review['lowestRating']['text']

    positiveElem.querySelector('span.author').textContent = review['highestRating']['author']
    negativeElem.querySelector('span.author').textContent = review['lowestRating']['author']

    positiveElem.querySelector('a').setAttribute('href',review['highestRating']['articleURL'])
    negativeElem.querySelector('a').setAttribute('href',review['lowestRating']['articleURL'])
    // MainCast.textContent = 
}


