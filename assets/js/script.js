let bookData = {
    bookmarks:[]
};
window.onload = function(){
    if(localStorage.getItem('current')){
        console.log(localStorage.getItem('current'))
        showReview(localStorage.getItem('current'))
    }
    else{
        localStorage.setItem('current',null)
    }

    if(!localStorage.getItem('bookmarks')){
        localStorage.setItem('bookmarks',JSON.stringify([]));
    }
    bookData["bookmarks"] = JSON.parse(localStorage.getItem("bookmarks"));
}

const bookmarkButton = document.querySelector('i#bookmark');
bookmarkButton.addEventListener('click',(e)=>{
    // consol
    let title = document.querySelector('.poster figcaption').textContent;
    if(!bookData['bookmarks'].find(element=> element['title']=== title)){
        add(title)
    }else{
        //Prevent Modal from Popping Up
        e.stopPropagation();
    }
})

function add(obj){
    // console.log(typeof bookData)
    
    bookData['bookmarks'].push({title:obj});
    localStorage.setItem("bookmarks",JSON.stringify(bookData['bookmarks']));
}

const formElem = document.querySelector("form#search");
console.log(formElem);
formElem.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = formElem.querySelector('input[type="search"]');
    console.log(input)
    showReview(input.value)
    input.value = "";
    console.log('It submitted')
});

const navButton = document.querySelectorAll("#bottom li.nav-item");
for(let i=0;i<navButton.length;i++){
    navButton[i].addEventListener('click',(e)=>{
        const tar = e.target.dataset.identifier;
        let p = reviewStatElem.querySelector('p');
        console.log("Yes i'm clicking")
        switch(tar){
            case "imdb":
                console.log("I'm at IMDB");
                if(!reviewStatElem.classList.contains('imdb')){
                    reviewStatElem.classList.remove('bad','mixed','good','rotten','imdb');
                    reviewStatElem.classList.add('imdb');
                }
                p.textContent = reviewStatElem.dataset.imdb;
                break;
            case "metacritic":
                console.log("I'm at Meta");
                reviewStatElem.classList.remove('bad','mixed','good','rotten','imdb');
                const score = parseInt(reviewStatElem.dataset.metacritic);

                reviewStatElem.classList.add(score >=60 ? 'good' : score >= 50 ? 'mixed' : 'bad');
                p.textContent = reviewStatElem.dataset.metacritic;
                break;
            case "rotten":
                console.log("I'm at rotten");
                reviewStatElem.classList.remove('bad','mixed','good','rotten','imdb');
                reviewStatElem.classList.add('rotten');
                p.textContent = reviewStatElem.dataset.rotten;
                break;
        }
    });
}
// $('#button').on('click')
