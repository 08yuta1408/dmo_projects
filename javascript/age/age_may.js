var age_may = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上


$(function(){
  $.ajax({url: 'json/data_may.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["age"] == "1"){
        age_may[0]++;
      }
      if (data[i]["age"] == "2") {
        age_may[1]++;
      }
      if (data[i]["age"] == "3") {
        age_may[2]++;
      }
      if (data[i]["age"] == "4") {
        age_may[3]++;
      }
      if (data[i]["age"] == "5") {
        age_may[4]++;
      }
      if (data[i]["age"] == "6") {
        age_may[5]++;
      }
      if (data[i]["age"] == "7") {
        age_may[6]++;
      }
      if (data[i]["age"] == "8") {
        age_may[7]++;
      }




    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----5月----");
  for(var i = 0; i < age_may.length; i++){
    console.log(age_may[i]);
  }


});
