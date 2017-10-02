var stay_with_2017_january = [0, 0, 0, 0, 0, 0];      //index番号順に、一人旅行、夫婦・カップル、家族・親子、友人、職場・学校等の団体旅行、その他


$(function(){
  $.ajax({url: 'json/2017/data_january.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["with"] == "1"){
        stay_with_2017_january[0]++;
      }
      if (data[i]["with"] == "2") {
        stay_with_2017_january[1]++;
      }
      if (data[i]["with"] == "3") {
        stay_with_2017_january[2]++;
      }
      if (data[i]["with"] == "4") {
        stay_with_2017_january[3]++;
      }
      if (data[i]["with"] == "5") {
        stay_with_2017_january[4]++;
      }
      if (data[i]["with"] == "6") {
        stay_with_2017_january[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
