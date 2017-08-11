// var resident_age_may = [0, 0, 0, 0, 0, 0, 0,]      //index番号順に、関東・中部・関西・富山・それ以外

/*
  地域区分の定義
    関東：茨城、栃木、群馬、埼玉、千葉、東京、神奈川
    中部：新潟、石川、福井、山梨、長野、岐阜、静岡、愛知
    関西：三重、滋賀、京都、大阪、兵庫、奈良、和歌山
    富山
    その他：上記以外
*/

var resident_age_may_kanto = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var resident_age_may_tyubu = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var resident_age_may_kansai = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var resident_age_may_toyama = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var resident_age_may_others = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上

$(function(){
  $.ajax({url: 'json/data_may.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      switch (parseInt(data[i]["from"])){
        //関東出身の人々
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          if(data[i]["age"] == "1"){
            resident_age_may_kanto[0]++;
          }
          if (data[i]["age"] == "2") {
            resident_age_may_kanto[1]++;
          }
          if (data[i]["age"] == "3") {
            resident_age_may_kanto[2]++;
          }
          if (data[i]["age"] == "4") {
            resident_age_may_kanto[3]++;
          }
          if (data[i]["age"] == "5") {
            resident_age_may_kanto[4]++;
          }
          if (data[i]["age"] == "6") {
            resident_age_may_kanto[5]++;
          }
          if (data[i]["age"] == "7") {
            resident_age_may_kanto[6]++;
          }
          if (data[i]["age"] == "8") {
            resident_age_may_kanto[7]++;
          }

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
          if(data[i]["age"] == "1"){
            resident_age_may_tyubu[0]++;
          }
          if (data[i]["age"] == "2") {
            resident_age_may_tyubu[1]++;
          }
          if (data[i]["age"] == "3") {
            resident_age_may_tyubu[2]++;
          }
          if (data[i]["age"] == "4") {
            resident_age_may_tyubu[3]++;
          }
          if (data[i]["age"] == "5") {
            resident_age_may_tyubu[4]++;
          }
          if (data[i]["age"] == "6") {
            resident_age_may_tyubu[5]++;
          }
          if (data[i]["age"] == "7") {
            resident_age_may_tyubu[6]++;
          }
          if (data[i]["age"] == "8") {
            resident_age_may_tyubu[7]++;
          }

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
          if(data[i]["age"] == "1"){
            resident_age_may_kansai[0]++;
          }
          if (data[i]["age"] == "2") {
            resident_age_may_kansai[1]++;
          }
          if (data[i]["age"] == "3") {
            resident_age_may_kansai[2]++;
          }
          if (data[i]["age"] == "4") {
            resident_age_may_kansai[3]++;
          }
          if (data[i]["age"] == "5") {
            resident_age_may_kansai[4]++;
          }
          if (data[i]["age"] == "6") {
            resident_age_may_kansai[5]++;
          }
          if (data[i]["age"] == "7") {
            resident_age_may_kansai[6]++;
          }
          if (data[i]["age"] == "8") {
            resident_age_may_kansai[7]++;
          }

          break;

        //富山出身の人々をカウント
        case 16:
          if(data[i]["age"] == "1"){
            resident_age_may_toyama[0]++;
          }
          if (data[i]["age"] == "2") {
            resident_age_may_toyama[1]++;
          }
          if (data[i]["age"] == "3") {
            resident_age_may_toyama[2]++;
          }
          if (data[i]["age"] == "4") {
            resident_age_may_toyama[3]++;
          }
          if (data[i]["age"] == "5") {
            resident_age_may_toyama[4]++;
          }
          if (data[i]["age"] == "6") {
            resident_age_may_toyama[5]++;
          }
          if (data[i]["age"] == "7") {
            resident_age_may_toyama[6]++;
          }
          if (data[i]["age"] == "8") {
            resident_age_may_toyama[7]++;
          }

          break;

        //その他
        default:
          if(data[i]["age"] == "1"){
            resident_age_may_others[0]++;
          }
          if (data[i]["age"] == "2") {
            resident_age_may_others[1]++;
          }
          if (data[i]["age"] == "3") {
            resident_age_may_others[2]++;
          }
          if (data[i]["age"] == "4") {
            resident_age_may_others[3]++;
          }
          if (data[i]["age"] == "5") {
            resident_age_may_others[4]++;
          }
          if (data[i]["age"] == "6") {
            resident_age_may_others[5]++;
          }
          if (data[i]["age"] == "7") {
            resident_age_may_others[6]++;
          }
          if (data[i]["age"] == "8") {
            resident_age_may_others[7]++;
          }

          break;

      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  console.log("----5月(関東)----");
  for (var i = 0; i < resident_age_may_kanto.length; i++) {
    console.log(resident_age_may_kanto[i]);
  }

});
