var man_feb = 0;      //2月の男性人数
var woman_feb = 0;    //2月の女性人数

$(function(){
  $.ajax({url: 'json/2017/data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_feb = man_feb + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_feb = woman_feb + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log(man_feb);
  console.log(woman_feb);


});
