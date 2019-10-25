
$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
         
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});


let captionOffset = $("#main").offset().top; 


  


$(window).scroll(function(){
    
    let scrollTop = $(window).scrollTop();
    
      if(scrollTop > captionOffset){
          
          $("#demo").css("backgroundColor", "rgba(0,0,0,0.7)");
      }
    else
        {
             $("#demo").css("backgroundColor", "rgba(0,0,0,0)");
            
        }
    
    
    if(scrollTop > 800)
        {
            $("#btnUp").fadeIn(500)
            
        }
    else
        {
            $("#btnUp").fadeOut(500)
        }
        
        
})


$("#btnUp").click(function(){
    
    
    $("body,html").animate({scrollTop:0}, 1000)
    
    
})




$("a").click(function(){
    
    let aHref = $(this).attr("href");
    let profileKnow = $(aHref).offset().top;
    $("body, html").animate({scrollTop:profileKnow},1000)
    
    
})



$(document).ready(function(){
    
    
    $("#loading").fadeOut(2000,function(){
        
        $("body").css("overflow","auto");
        
        
    });
    
    
})


let numberOffset = $("#procces").offset().top;

//alert(numberOffset);
let flag = false;

$(window).scroll(function(){
    

    
    let TopScroll = $(window).scrollTop();
                console.log(TopScroll)

    if (TopScroll > numberOffset-100 && flag == false )
        {
            flag = true;
            
            $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
            
        }
    
    
    
    
    
    
    
    
    
})
            
            





















$(".carousel-item").mouseenter(function(){
    $("#nexBtn").animate({left:'100%' , opacity:1} , 500)
})

$(".carousel-item").mouseleave(function(){
    $("#nexBtn").animate({left:'102%' , opacity:0} , 500)
})




