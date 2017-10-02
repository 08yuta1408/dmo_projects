var resident_2016_october = [0, 0, 0, 0, 0]      //index番号順に、関東・中部・関西・富山・それ以外

/*
  地域区分の定義
    関東：茨城、栃木、群馬、埼玉、千葉、東京、神奈川
    中部：新潟、石川、福井、山梨、長野、岐阜、静岡、愛知
    関西：三重、滋賀、京都、大阪、兵庫、奈良、和歌山
    富山
    その他：上記以外
*/


$(function(){
  $.ajax({url: 'json/2016/data_october.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      switch (parseInt(data[i]["from"])) {
        //関東出身の人々
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          //関西出身の人々をカウント
          resident_2016_october[0]++;
          break;

        //中部地方
        case 15:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
          //中部出身の人々をカウント
          resident_2016_october[1]++;
          break;

        //関西の人々をカウント
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
          //関西出身の人々をカウント
          resident_2016_october[2]++;
          break;

        //富山出身の人々をカウント
        case 16:
          resident_2016_october[3]++;
          break;

        default:
          //その他の人々をカウント
          resident_2016_october[4]++;
          break;

      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

});
