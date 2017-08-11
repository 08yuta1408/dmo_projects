var stay_with_may = [0, 0, 0, 0, 0, 0];      //index番号順に、一人旅行、夫婦・カップル、家族・親子、友人、職場・学校等の団体旅行、その他


$(function(){
  $.ajax({url: 'json/data_may.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["with"] == "1"){
        stay_with_may[0]++;
      }
      if (data[i]["with"] == "2") {
        stay_with_may[1]++;
      }
      if (data[i]["with"] == "3") {
        stay_with_may[2]++;
      }
      if (data[i]["with"] == "4") {
        stay_with_may[3]++;
      }
      if (data[i]["with"] == "5") {
        stay_with_may[4]++;
      }
      if (data[i]["with"] == "6") {
        stay_with_may[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----5月----");
  for(var i = 0; i < stay_with_may.length; i++){
    console.log(stay_with_may[i]);
  }


});
