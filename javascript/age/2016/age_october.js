var age_2016_october = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上


$(function(){
  $.ajax({url: 'json/2016/data_october.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["age"] == "1"){
        age_2016_october[0]++;
      }
      if (data[i]["age"] == "2") {
        age_2016_october[1]++;
      }
      if (data[i]["age"] == "3") {
        age_2016_october[2]++;
      }
      if (data[i]["age"] == "4") {
        age_2016_october[3]++;
      }
      if (data[i]["age"] == "5") {
        age_2016_october[4]++;
      }
      if (data[i]["age"] == "6") {
        age_2016_october[5]++;
      }
      if (data[i]["age"] == "7") {
        age_2016_october[6]++;
      }
      if (data[i]["age"] == "8") {
        age_2016_october[7]++;
      }




    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----2016/10月----");
  for(var i = 0; i < age_2016_october.length; i++){
    console.log(age_2016_october[i]);
  }


});
