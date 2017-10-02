var repeat_2016_october = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上


$(function(){
  $.ajax({url: 'json/2016/data_october.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      switch (parseInt(data[i]["how many time"])) {
        case 0:
          repeat_2016_october[0]++;
          break;
        case 1:
          repeat_2016_october[1]++;
          break;
        case 2:
          repeat_2016_october[2]++;
          break;
        case 3:
          repeat_2016_october[3]++;
          break;
        case 4:
          repeat_2016_october[4]++;
          break;
        case 5:
          repeat_2016_october[5]++;
          break;
        case 6:
          repeat_2016_october[6]++;
          break;
        case 7:
          repeat_2016_october[7]++;
          break;
        case 8:
          repeat_2016_october[8]++;
          break;
        case 9:
          repeat_2016_october[9]++;
          break;
        case 10:
          repeat_2016_october[10]++;
          break;

      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
