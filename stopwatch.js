$(document).ready(() => {

  $("#circle").click(() => {
    $("#body").css('background', '#FFF');
    $("#circle").css({'visibility': 'hidden', 'display': 'none'});
    $("#stopwatch").css({'visibility': 'visible', 'display': 'block'});
    $("#stop").css({'visibility': 'visible', 'display': 'block'});
    $("#container").css('display', 'block');

    var interval = setInterval(() => {
      let time = $("#stopwatch").text().split(':');
      let min = Number(time[0]);
      let sec = Number(time[1]);
      let ml = Number(time[2]);
      let newTime = time;
      ml += 1;

      if (ml == 99){
        if (sec == 59){
          min += 1;
          sec = 0;
          ml = 0;
        }
        else {
          sec += 1;
          ml = 0;
        }
      }

      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      ml = ml < 10 ? '0' + ml : ml;

      newTime = min + ':' + sec + ':' + ml;
      $("#stopwatch").html(newTime);


    } ,10);


    $(".stop").click ( () => {
      clearInterval(interval);
      $(".stop").html('Back');
      $(".stop").attr('class', 'back');
      $(".back").click( () => {
        $("#body").css('background', '#27274e');
        $("#circle").css({'visibility': 'visible', 'display': 'block'});
        $("#stopwatch").css({'visibility': 'hidden', 'display': 'none'});
        $("#stop").css({'visibility': 'hidden', 'display': 'none'});
        $("#container").css('display', 'flex');
        $("#stopwatch").html('00:00:00');
        $(".back").html('Stop').
        $(".back").attr('class', 'stop');
      });
    });

  });
});
