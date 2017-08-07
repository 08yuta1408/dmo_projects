var man_march = 0;      //3月の男性人数
var woman_march = 0;    //3月の女性人数

$(function(){
  $.ajax({url: 'json/data_march.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_march = man_march + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_march = woman_march + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log(man_march);
  console.log(woman_march);


});
