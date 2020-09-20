words = ['Awesome', '2222', '3333', '4444', '5555'];
var count = 0,
total = words.length,
pressed = 0,
spread,
spread2,
clicked=0,
mun=900,
num=0;


$(document).ready( () => {
  setTimeout(removeGif, 10102)
  setInterval(randWord, 330)
} )

function randWord() {
  if (!pressed) {
    if (count >= total) {
      count = 0
    }
    else{
  
      $('h1').text(words[count]);
      $('.gifs-layer').css('background-image', 'url(' + 'img/' + words[count] + '.gif' + ')');
      $('.gifs-layer').css('opacity', 0);
      count ++
    }
    
  } 
}


$(".click-layer").mousedown(function () {
  $('.frames').css('display', 'none');
  pressed = 1;
  $('.gifs-layer').css('opacity', 1);
})
  .mouseup(function () {
      pressed = 0;
      $('.gifs-layer').css('opacity', 0);
      $('.frames').css('display', 'block');
  })

/* ----------------------------  */


$(".change").on('click', () => {
  $('.border-in').toggleClass('red')
  $('.border-out').toggleClass('black')
  clicked = !clicked;
  $('.line-r').toggleClass('line-red')
  $('.line-l').toggleClass('line-red')
  $('.face1').toggleClass('face1-1')
  $('.face2').toggleClass('face2-2')
  $('.btn-link').toggleClass('link-face')
  $('.lang-link').toggleClass('lang-link-w')
  $('.UzRu, .EnTr').toggleClass('lang-border')
  $('.globe').toggleClass('globe-black')
  $('.comp-name').toggleClass('comp-name-white')
  $('.motto').toggleClass('motto-black')
  $('.change').toggleClass('change-black')
  $('.bg-logo').toggleClass('white')
  // $('.frames').fadeOut().toggleClass('white').fadeIn()
  $('.main-logo').toggleClass('logo-white')
  $('.element-1').toggleClass('elem-1W')
  $('.element-2').toggleClass('elem-2W')
  
  if(clicked){
    $('.frames').animate({
      backgroundColor: 'white'
    },500)
  //   setInterval(changeBgW, 1);
  //   clearInterval(changeBgB)
  }  
  else{
    $('.frames').animate({
      backgroundColor: 'black'
    },500)
  //   setInterval(changeBgB, 1);
  //   clearInterval(changeBgW)
  }  


});

function removeGif(){
  $('.video-layer').fadeOut('slow').css('background-image', 'none')
  $('.video-layer').css('z-index', '-50')
}


function changeBgW() {
  if(num<900){
    spread = num + 'px ' + num + 'px ' + num*2 + 'px ' +  num*3 + 'px ' + " white"
    $('.bg-w').css('box-shadow', spread)
    num++;
  }
}
function changeBgB(){
  if(num != 0){    
    spread = mun + 'px ' + mun + 'px ' + mun*2 + 'px ' +  mun*3 + 'px ' + " black"
    $('.bg-w').css('box-shadow', spread)
    num--;
  }
}
// function btnShadow(){
//   if(num<900){
//   $('.change').css('box-shadow', spread)
//   $('.change').css('z-index', '-1')
//   spread = num + 'px ' + num + 'px ' + num*2 + 'px ' +  num*3 + 'px ' + " white"
//   num++;}
//   else{
//    $('.change').css('z-index', '1')
//    $('.change').css('box-shadow', "none")
//    
   
//   }
  
// }












/*  ------------------------     */
