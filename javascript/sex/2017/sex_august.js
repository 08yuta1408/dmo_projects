var man_2017_august = 0;      //3月の男性人数
var woman_2017_august = 0;    //3月の女性人数

$(function(){
  $.ajax({url: 'json/2017/data_august.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_2017_august = man_2017_august + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_2017_august = woman_2017_august + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log(man_2017_august);
  // console.log(woman_2017_august);


});
