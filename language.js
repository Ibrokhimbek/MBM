var state = 1;

$(".globe").click(function(){

    $(".UzRu").slideToggle();
    
    if(state){

        $('.EnTr').show('slide', {direction: "right"});

    }else{

        $('.EnTr').hide('slide', {direction: "right"});

    }
    
    state = !state

  });