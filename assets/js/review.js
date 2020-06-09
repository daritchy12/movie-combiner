const [movieReleased,Director,Actor,Writers,Plot,Rewards,Genre] = document.querySelectorAll('span.data'); 
const poster =document.querySelector('.poster > img');
const title =document.querySelector('.poster > figcaption');
const reviewStatElem = document.querySelector('#review');
const [positiveElem , negativeElem] = document.querySelectorAll('#bottom .card');

async function showReview(name){
    
    d = await fetch(`https://combnr.herokuapp.com/search=${name}`)
        .then(res=>res.json())
        .then(d=>d)

     if(d['message']){
        $('#NotFoundModal').modal('show');
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
    reviewStatElem.dataset.imdb=IMDB ? IMDB['Value'].slice(0,3) : 'n/a';
    reviewStatElem.dataset.rotten=ROTTEN_TOMATOES ? ROTTEN_TOMATOES['Value'] .slice(0,ROTTEN_TOMATOES['Value'].indexOf('%')) : 'n/a';
    reviewStatElem.dataset.metacritic= METACRITIC ? METACRITIC['Value'].slice(0,METACRITIC['Value'].indexOf('/')) : 'n/a';

    switch(reviewStatElem.dataset.identifier){
        case "imdb":
            reviewStatElem.classList.remove('bad','mixed','good','rotten','imdb');
            reviewStatElem.classList.add('imdb');
            p.textContent = reviewStatElem.dataset.imdb;
            reviewStatElem.dataset.identifier = "imdb";
            break;
        case "metacritic":
            reviewStatElem.classList.remove('bad','mixed','good','rotten','imdb');
            const score = parseInt(reviewStatElem.dataset.metacritic);
            reviewStatElem.classList.add(score >=60 ? 'good' : score >= 50 ? 'mixed' : 'bad');
            p.textContent = reviewStatElem.dataset.metacritic;
            reviewStatElem.dataset.identifier = "metacritic";
            break;
        case "rotten":
            reviewStatElem.classList.remove('bad','mixed','good','rotten','imdb');
            reviewStatElem.classList.add('rotten');
            p.textContent = reviewStatElem.dataset.rotten;
            reviewStatElem.dataset.identifier="rotten"
            break;
    }


    positiveElem.querySelector('.rev p').textContent = review['highestRating']['rating'];
    negativeElem.querySelector('.rev p').textContent = review['lowestRating']['rating'];
    
    positiveElem.querySelector('p.text').textContent = review['highestRating']['text'] == "" ? "Sorry couldn't find reviews" : review['highestRating']['text']
    negativeElem.querySelector('p.text').textContent = review['lowestRating']['text'] == "" ? "Sorry couldn't find reviews" : review['lowestRating']['text']

    positiveElem.querySelector('span.author').textContent = review['highestRating']['author']
    negativeElem.querySelector('span.author').textContent = review['lowestRating']['author']

    positiveElem.querySelector('a').setAttribute('href',review['highestRating']['articleURL'])
    negativeElem.querySelector('a').setAttribute('href',review['lowestRating']['articleURL'])
    // MainCast.textContent = 
}


