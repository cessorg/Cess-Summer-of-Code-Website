$(window).on('scroll',()=>{
    if($(window).scrollTop()){
        $('.logo-text').addClass('scrolled');
        $('.navb').addClass('navb-scrolled');
    }else{
        $('.logo-text').removeClass('scrolled');
        $('.navb').removeClass('navb-scrolled');
    }
})

let toggled=false;

$('.toggler-btn').on('click',()=>{
    if(toggled){
        $('.nav-item-slot-m').hide();
        toggled=false;
    }else{
        $('.nav-item-slot-m').show();
        toggled=true;
    }
})