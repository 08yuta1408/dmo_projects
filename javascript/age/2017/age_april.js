var age_april = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上


$(function(){
  $.ajax({url: 'json/2017/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["age"] == "1"){
        age_april[0]++;
      }
      if (data[i]["age"] == "2") {
        age_april[1]++;
      }
      if (data[i]["age"] == "3") {
        age_april[2]++;
      }
      if (data[i]["age"] == "4") {
        age_april[3]++;
      }
      if (data[i]["age"] == "5") {
        age_april[4]++;
      }
      if (data[i]["age"] == "6") {
        age_april[5]++;
      }
      if (data[i]["age"] == "7") {
        age_april[6]++;
      }
      if (data[i]["age"] == "8") {
        age_april[7]++;
      }




    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月----");
  for(var i = 0; i < age_april.length; i++){
    console.log(age_april[i]);
  }


});
