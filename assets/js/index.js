// Navbar Size Decrease on Scroll
$(window).on('scroll',()=>{
    if($(window).scrollTop()){
        $('.logo-text').addClass('scrolled');
        $('.navb').addClass('navb-scrolled');
    }else{
        $('.logo-text').removeClass('scrolled');
        $('.navb').removeClass('navb-scrolled');
    }
})

// Navbar Settings
let toggled=false;

$('.toggler-btn').on('click',()=>{
    if(toggled){
        $('.nav-item-slot-m').hide();
        toggled=false;
        $('.toggler-btn').removeClass('fa-times');
    }else{
        $('.nav-item-slot-m').show();
        toggled=true;
        $('.toggler-btn').addClass('fa-times');
    }
})

$('.nav-item-m').on('click',()=>{
    $('.nav-item-slot-m').hide();
    $('.toggler-btn').removeClass('fa-times');
    toggled=false;
});

// timeline event's highlighter
var j = 0;
var boxes = document.querySelectorAll(".timeline-row");
var l = boxes.length;
setInterval(function timelineHighlight(){
    for (i = 0; i < l; i++){
        boxes[i].classList.remove("active");
    }
    boxes[j].classList.add("active");
    j++;
    if (j > l-1){
        j = 0;
    }
}, 5000);
