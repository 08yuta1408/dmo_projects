var frequency_april = [0, 0, 0, 0, 0, 0, 0];      //index番号順に、毎月1回程度、年に4回以上、年に２〜3回、年に1回程度、2年に1回程度、3年に1回程度、それ以下


$(function(){
  $.ajax({url: 'json/2017/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["frequency"] == "1"){
        frequency_april[0]++;
      }
      if (data[i]["frequency"] == "2") {
        frequency_april[1]++;
      }
      if (data[i]["frequency"] == "3") {
        frequency_april[2]++;
      }
      if (data[i]["frequency"] == "4") {
        frequency_april[3]++;
      }
      if (data[i]["frequency"] == "5") {
        frequency_april[4]++;
      }
      if (data[i]["frequency"] == "6") {
        frequency_april[5]++;
      }
      if (data[i]["frequency"] == "7") {
        frequency_april[6]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月----");
  for(var i = 0; i < frequency_april.length; i++){
    console.log(frequency_april[i]);
  }


});
