var age_2016_december = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上


$(function(){
  $.ajax({url: 'json/2016/data_december.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["age"] == "1"){
        age_2016_december[0]++;
      }
      if (data[i]["age"] == "2") {
        age_2016_december[1]++;
      }
      if (data[i]["age"] == "3") {
        age_2016_december[2]++;
      }
      if (data[i]["age"] == "4") {
        age_2016_december[3]++;
      }
      if (data[i]["age"] == "5") {
        age_2016_december[4]++;
      }
      if (data[i]["age"] == "6") {
        age_2016_december[5]++;
      }
      if (data[i]["age"] == "7") {
        age_2016_december[6]++;
      }
      if (data[i]["age"] == "8") {
        age_2016_december[7]++;
      }




    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----2016/12月----");
  for(var i = 0; i < age_2016_december.length; i++){
    console.log(age_2016_december[i]);
  }


});
