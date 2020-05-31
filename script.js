let slider = tns({
    container: '.my-slider',
    loop:true,
    items:1,
    controls:false,
    nav:false,
    // autoWidth:true,
    // slideBy:'page',
    // lazyload:true,
    // navPosition:"bottom",
    // autoWodth:true,
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
