var man_2016_november = 0;      //3月の男性人数
var woman_2016_november = 0;    //3月の女性人数

$(function(){
  $.ajax({url: 'json/2016/data_november.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["sex"] == "1"){
        man_2016_november = man_2016_november + 1;
      }
      if (data[i]["sex"] == "2") {
        woman_2016_november = woman_2016_november + 1;
      }


    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log(man_2016_november);
  // console.log(woman_2016_november);


});
