// Coded By MM Nauman For Allbloggertricks.com

$(function(){
    
let autoSlide = true;
    
// variables declaration
    let slide = $(".slide");
    let firstImg = $(".slide img:first-child");
// Declaring Navigation Buttons
    const prevBtn = $("#prev");
    const nextBtn = $("#next");
// getting the next and last images for the next and prev
    
// Creating Array and getting all the image Urls
var slidesContainer = [];
var allSlides = [];
const Effects = ["bounceInRight", "flipInX", "lightSpeedIn", "jackInTheBox", "rollIn", "zoomInDown", "rotateInDownLeft", "fadeInRightBig"];
// declaring logical variables
var indexVal = 0
var j = 0;
var k = 0;
    
//Looping over the slides and getting all the image urls
for(let i = 0; i < slide.length; i++){  
    //Making all the slides display : none
    $(".slide").init().eq(i).hide();
    slidesContainer.push(slide[i].firstElementChild.getAttribute("src")); 
    allSlides.push(slide[i]);
}
// Adding Default Background To the Navigation buttons
prevBtn.css("background", 'url(' + $(".slide").init().eq($(".slide").length - 1).find("img")[0].src+ ')'); 
nextBtn.css("background", 'url(' + $(".slide").init().eq(1).find("img")[0].src+ ')');
// Only showing the first slide
$(".slide").init().eq(0).show();
// Creating Event Listener and adding click event on the navigation buttons
prevBtn.on("click", prevSlides);
nextBtn.on("click", nextSlides);
   
    
// Creating Prev Function that will work on clicking on the previous button
function prevSlides(){
    
     if (indexVal === 0) {
           j = slidesContainer.length;
        indexVal = slidesContainer.length; 
        $(".slide").init().eq(0).hide();
        $(".slide").init().eq(slidesContainer.length-1).show();
    }
    indexVal = indexVal -1; // decrease by one
    
       allSlides.forEach(function(slides){
        slides.style.display = "none";
    });
    
      if(indexVal === slidesContainer.length - 1){
              k = 0;
           console.log(k);
             nextBtn.css("background", 'url(' + $(".slide").init().eq(k).find("img")[0].src+')');
          }else{
               k = 0;
            k = indexVal + 1;
               nextBtn.css("background", 'url(' + $(".slide").init().eq(k).find("img")[0].src+')');
          }
    
    Effects[Math.floor(Math.random() * (Effects.length ))];
    
$(allSlides[indexVal]).fadeIn().animateCss(Effects[Math.floor(Math.random() * Effects.length)], function() {
 $(this).removeClass("animated slideInLeft");
});
        j = indexVal - 1;    
        prevBtn.css("background", 'url(' + $(".slide").init().eq(j).find("img")[0].src+ ')');
    
    //console.log(slidesContainer.length - 1);
     
      if(indexVal === 0){
        k = 0;
        k=indexVal + 1;
         prevBtn.css("background", 'url(' + $(".slide").init().eq($(".slide").length - 1).find("img")[0].src+ ')'); 
        nextBtn.css("background", 'url(' + $(".slide").init().eq(k).find("img")[0].src+ ')');
    }
    
}
    
function nextSlides(){
    indexVal != slidesContainer.length - 1?indexVal++ : indexVal = 0; 
             allSlides.forEach(function(slides){
        slides.style.display = "none";
    });
    
      Effects[Math.floor(Math.random() * (Effects.length ))];
    
$(allSlides[indexVal]).fadeIn().animateCss(Effects[Math.floor(Math.random() * Effects.length)], function() {
 $(this).removeClass("animated slideInLeft");
});
    
        if (indexVal === slidesContainer.length - 1){
             console.log($(".slide"));
        k = 0;
        nextBtn.css("background", 'url(' + $(".slide").init().eq(k).find("img")[0].src+ ')');
    }else{
          k = 0;
     k = indexVal + 1;
         nextBtn.css("background", 'url(' + $(".slide").init().eq(k).find("img")[0].src+ ')');
    }
    
     j = indexVal - 1;
    prevBtn.css("background", 'url(' + $(".slide").init().eq(j).find("img")[0].src+ ')'); 
    
     if(indexVal === 0){
        k = 0;
       j = slidesContainer.length - 1;
        k = indexVal + 1;
        prevBtn.css("background", 'url(' + $(".slide").init().eq(j).find("img")[0].src+ ')'); 
        nextBtn.css("background", 'url(' + $(".slide").init().eq(k).find("img")[0].src+ ')');
    }
    
}
    
if(autoSlide === true){
    setInterval(nextSlides, 3000);   
} 
    
$(".sliderWrap").on('mouseover', () => {
clearInterval(nextSlides);
});
  
$(".sliderWrap").on('mouseout', () => {
 setInterval(nextSlides, 4000);  
});
   
});
