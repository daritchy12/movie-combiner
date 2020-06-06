// let fet = confirm('Do you wanna fetch?')
// if(fet){
//     fetch('http://localhost:8080/search=Fantastic%20Mr.%20Fox')
//         .then(res=>res.json())
//         .then(d=>console.log(d))
// }
let slider = tns({
    container: '#my-slider',
    loop:true,
    items:1,
    controls:false,
    nav:false,
    // autoWidth:true,
    // slideBy:'page',
    lazyload:true,
    // navPosition:"bottom",
    // autoWodth:true,
    lazyloadSelector:'.tns-lazy-img',
    mouseDrag:true,
    responsive:{
        640:{
            items:2,
            controls:true,
            nav:true,
        },
        768:{
            items:3,
            controls:true,
            nav:true,
        },
        
    }
})
