var man_may = 0;      //5月の男性人数
var woman_may = 0;    //5月の女性人数

$(function(){
  $.ajax({url: 'json/2017/data_may.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_may = man_may + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_may = woman_may + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log(man_may);
  console.log(woman_may);


});
