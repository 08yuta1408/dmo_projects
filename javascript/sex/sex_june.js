var man_june = 0;      //6月の男性人数
var woman_june = 0;    //6月の女性人数

$(function(){
  $.ajax({url: 'json/data_june.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_june = man_june + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_june = woman_june + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log(man_june);
  console.log(woman_june);


});
