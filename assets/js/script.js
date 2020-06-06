$(document).ready(function(){
    console.log('Jquery Works Here');
})
window.onload = function(){
    if(localStorage.getItem('current')){
        console.log(localStorage.getItem('current'))
        showReview(localStorage.getItem('current'))
    }
    else{
        localStorage.setItem('current',null)
    }
}
