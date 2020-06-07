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
})
// $('#button').on('click')
