let slider = tns({
    container: '.my-slider',
    loop:true,
    items:3,
    // slideBy:'page',
    // lazyload:true,
    navPosition:"bottom",
    mouseDrag:true,
    responsive:{
        500:{
            items:1,
            controls:false,
            nav:false,
        },
        700:{
            items:2,
            controls:true,
            nav:true,
        },
        900:{
            items:3,
            controls:true,
            nav:true,
        }
    }
})