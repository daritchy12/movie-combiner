let slider = tns({
    container: '.my-slider',
    loop:true,
    items:1,
    // autoWidth:true,
    // slideBy:'page',
    // lazyload:true,
    // navPosition:"bottom",
    // autoWodth:true,
    mouseDrag:true,
    responsive:{
        640:{
            items:2,
            controls:false,
            nav:false,
        },
        768:{
            items:3,
            controls:true,
            nav:true,
        },
        
    }
})
