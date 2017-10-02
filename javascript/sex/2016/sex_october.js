var man_2016_october = 0;      //3月の男性人数
var woman_2016_october = 0;    //3月の女性人数

$(function(){
  $.ajax({url: 'json/2016/data_october.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_2016_october = man_2016_october + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_2016_october = woman_2016_october + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log(man_2016_october);
  // console.log(woman_2016_october);


});
