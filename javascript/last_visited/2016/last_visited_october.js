var last_visited_2016_october = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県在住、1ヶ月未満、1〜3ヶ月未満、4〜6ヶ月未満、7〜9ヶ月未満、９~12ヶ月未満、1年前、2年前、3年前、4年前、5年前、6年前、7年前、8年前、9年前、10年前


$(function(){
  $.ajax({url: 'json/2016/data_october.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      switch (parseInt(data[i]["when last visited"])) {
        case 0:
          last_visited_2016_october[0]++;
          break;
        case 11:
          last_visited_2016_october[1]++;
          break;
        case 12:
          last_visited_2016_october[2]++;
          break;
        case 13:
          last_visited_2016_october[3]++;
          break;
        case 14:
          last_visited_2016_october[4]++;
          break;
        case 15:
          last_visited_2016_october[5]++;
          break;
        case 1:
          last_visited_2016_october[6]++;
          break;
        case 2:
          last_visited_2016_october[7]++;
          break;
        case 3:
          last_visited_2016_october[8]++;
          break;
        case 4:
          last_visited_2016_october[9]++;
          break;
        case 5:
          last_visited_2016_october[10]++;
          break;
        case 6:
          last_visited_2016_october[11]++;
          break;
        case 7:
          last_visited_2016_october[12]++;
          break;
        case 8:
          last_visited_2016_october[3]++;
          break;
        case 9:
          last_visited_2016_october[14]++;
          break;
        case 10:
          last_visited_2016_october[15]++;
          break;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });
});
