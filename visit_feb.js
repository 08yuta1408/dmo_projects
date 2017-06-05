var region = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];   //左から順に、北海道・東北・南関東・北関東、甲信・北陸・東海・近畿・中国・四国・九州・沖縄

$(function(){
  $.ajax({url: 'data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

});
