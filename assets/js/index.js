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
        $('.toggler-btn').removeClass('fa-times');
    }else{
        $('.nav-item-slot-m').show();
        toggled=true;
        $('.toggler-btn').addClass('fa-times');
    }
})

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
