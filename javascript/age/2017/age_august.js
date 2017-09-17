var age_2017_august = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上


$(function(){
  $.ajax({url: 'json/2017/data_august.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["age"] == "1"){
        age_2017_august[0]++;
      }
      if (data[i]["age"] == "2") {
        age_2017_august[1]++;
      }
      if (data[i]["age"] == "3") {
        age_2017_august[2]++;
      }
      if (data[i]["age"] == "4") {
        age_2017_august[3]++;
      }
      if (data[i]["age"] == "5") {
        age_2017_august[4]++;
      }
      if (data[i]["age"] == "6") {
        age_2017_august[5]++;
      }
      if (data[i]["age"] == "7") {
        age_2017_august[6]++;
      }
      if (data[i]["age"] == "8") {
        age_2017_august[7]++;
      }




    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----2017/8月----");
  for(var i = 0; i < age_2017_august.length; i++){
    console.log(age_2017_august[i]);
  }


});
