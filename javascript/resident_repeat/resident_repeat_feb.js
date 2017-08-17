/*
  地域区分の定義
    関東：茨城、栃木、群馬、埼玉、千葉、東京、神奈川
    中部：新潟、石川、福井、山梨、長野、岐阜、静岡、愛知
    関西：三重、滋賀、京都、大阪、兵庫、奈良、和歌山
    富山
    その他：上記以外
*/

var resident_repeat_feb_kanto = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
var resident_repeat_feb_tyubu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
var resident_repeat_feb_kansai = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
var resident_repeat_feb_toyama = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
var resident_repeat_feb_others = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上

$(function(){
  $.ajax({url: 'json/data_february.json', dataType: 'json', async: false}).done(function(data){

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
          if(data[i]["how many time"] == "0"){
            resident_repeat_feb_kanto[0]++;
          }
          if(data[i]["how many time"] == "1"){
            resident_repeat_feb_kanto[1]++;
          }
          if (data[i]["how many time"] == "2") {
            resident_repeat_feb_kanto[2]++;
          }
          if (data[i]["how many time"] == "3") {
            resident_repeat_feb_kanto[3]++;
          }
          if (data[i]["how many time"] == "4") {
            resident_repeat_feb_kanto[4]++;
          }
          if (data[i]["how many time"] == "5") {
            resident_repeat_feb_kanto[5]++;
          }
          if (data[i]["how many time"] == "6") {
            resident_repeat_feb_kanto[6]++;
          }
          if (data[i]["how many time"] == "7") {
            resident_repeat_feb_kanto[7]++;
          }
          if (data[i]["how many time"] == "8") {
            resident_repeat_feb_kanto[8]++;
          }
          if (data[i]["how many time"] == "9") {
            resident_repeat_feb_kanto[9]++;
          }
          if (data[i]["how many time"] == "10") {
            resident_repeat_feb_kanto[10]++;
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
          if(data[i]["how many time"] == "0"){
            resident_repeat_feb_tyubu[0]++;
          }
          if(data[i]["how many time"] == "1"){
            resident_repeat_feb_tyubu[1]++;
          }
          if (data[i]["how many time"] == "2") {
            resident_repeat_feb_tyubu[2]++;
          }
          if (data[i]["how many time"] == "3") {
            resident_repeat_feb_tyubu[3]++;
          }
          if (data[i]["how many time"] == "4") {
            resident_repeat_feb_tyubu[4]++;
          }
          if (data[i]["how many time"] == "5") {
            resident_repeat_feb_tyubu[5]++;
          }
          if (data[i]["how many time"] == "6") {
            resident_repeat_feb_tyubu[6]++;
          }
          if (data[i]["how many time"] == "7") {
            resident_repeat_feb_tyubu[7]++;
          }
          if (data[i]["how many time"] == "8") {
            resident_repeat_feb_tyubu[8]++;
          }
          if (data[i]["how many time"] == "9") {
            resident_repeat_feb_tyubu[9]++;
          }
          if (data[i]["how many time"] == "10") {
            resident_repeat_feb_tyubu[10]++;
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
          if(data[i]["how many time"] == "0"){
            resident_repeat_feb_kansai[0]++;
          }
          if(data[i]["how many time"] == "1"){
            resident_repeat_feb_kansai[1]++;
          }
          if (data[i]["how many time"] == "2") {
            resident_repeat_feb_kansai[2]++;
          }
          if (data[i]["how many time"] == "3") {
            resident_repeat_feb_kansai[3]++;
          }
          if (data[i]["how many time"] == "4") {
            resident_repeat_feb_kansai[4]++;
          }
          if (data[i]["how many time"] == "5") {
            resident_repeat_feb_kansai[5]++;
          }
          if (data[i]["how many time"] == "6") {
            resident_repeat_feb_kansai[6]++;
          }
          if (data[i]["how many time"] == "7") {
            resident_repeat_feb_kansai[7]++;
          }
          if (data[i]["how many time"] == "8") {
            resident_repeat_feb_kansai[8]++;
          }
          if (data[i]["how many time"] == "9") {
            resident_repeat_feb_kansai[9]++;
          }
          if (data[i]["how many time"] == "10") {
            resident_repeat_feb_kansai[10]++;
          }

          break;

        //富山出身の人々をカウント
        case 16:
          if(data[i]["how many time"] == "0"){
            resident_repeat_feb_toyama[0]++;
          }
          if(data[i]["how many time"] == "1"){
            resident_repeat_feb_toyama[1]++;
          }
          if (data[i]["how many time"] == "2") {
            resident_repeat_feb_toyama[2]++;
          }
          if (data[i]["how many time"] == "3") {
            resident_repeat_feb_toyama[3]++;
          }
          if (data[i]["how many time"] == "4") {
            resident_repeat_feb_toyama[4]++;
          }
          if (data[i]["how many time"] == "5") {
            resident_repeat_feb_toyama[5]++;
          }
          if (data[i]["how many time"] == "6") {
            resident_repeat_feb_toyama[6]++;
          }
          if (data[i]["how many time"] == "7") {
            resident_repeat_feb_toyama[7]++;
          }
          if (data[i]["how many time"] == "8") {
            resident_repeat_feb_toyama[8]++;
          }
          if (data[i]["how many time"] == "9") {
            resident_repeat_feb_toyama[9]++;
          }
          if (data[i]["how many time"] == "10") {
            resident_repeat_feb_toyama[10]++;
          }

          break;

        //その他
        default:
          if(data[i]["how many time"] == "0"){
            resident_repeat_feb_others[0]++;
          }
          if(data[i]["how many time"] == "1"){
            resident_repeat_feb_others[1]++;
          }
          if (data[i]["how many time"] == "2") {
            resident_repeat_feb_others[2]++;
          }
          if (data[i]["how many time"] == "3") {
            resident_repeat_feb_others[3]++;
          }
          if (data[i]["how many time"] == "4") {
            resident_repeat_feb_others[4]++;
          }
          if (data[i]["how many time"] == "5") {
            resident_repeat_feb_others[5]++;
          }
          if (data[i]["how many time"] == "6") {
            resident_repeat_feb_others[6]++;
          }
          if (data[i]["how many time"] == "7") {
            resident_repeat_feb_others[7]++;
          }
          if (data[i]["how many time"] == "8") {
            resident_repeat_feb_others[8]++;
          }
          if (data[i]["how many time"] == "9") {
            resident_repeat_feb_others[9]++;
          }
          if (data[i]["how many time"] == "10") {
            resident_repeat_feb_others[10]++;
          }

          break;

      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  console.log("----2月(関東)----");
  for (var i = 0; i < resident_repeat_feb_kanto.length; i++) {
    console.log(resident_repeat_feb_kanto[i]);
  }

});
