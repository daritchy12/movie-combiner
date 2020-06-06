const slides = document.querySelectorAll('#my-slider > a');
for(let i=0;i<slides.length;i++){
    let slide = slides[i];
    slide.addEventListener('click',(e)=>{
        // e.preventDefault();
        // const 
        // console.log(document.querySelector)
        const title = e.target.parentElement.dataset.title;
        console.log(title);
        // console.log(e)
        localStorage.setItem("current",title);
    })
}