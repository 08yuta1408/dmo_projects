var man_april = 0;      //3月の男性人数
var woman_april = 0;    //3月の女性人数

$(function(){
  $.ajax({url: 'json/2017/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_april = man_april + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_april = woman_april + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log(man_april);
  // console.log(woman_april);


});
