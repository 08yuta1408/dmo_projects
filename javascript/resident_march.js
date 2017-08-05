var resident_march = [0, 0, 0, 0, 0]      //index番号順に、関東・中部・関西・富山・それ以外

/*
  地域区分の定義
    関東：茨城、栃木、群馬、埼玉、千葉、東京、神奈川
    中部：新潟、石川、福井、山梨、長野、岐阜、静岡、愛知
    関西：三重、滋賀、京都、大阪、兵庫、奈良、和歌山
    富山
    その他：上記以外
*/

var resident_march_kanto = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20歳未満・20代・30代・40代・50代・60代・70代・80歳以上
var resident_march_tyubu = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20歳未満・20代・30代・40代・50代・60代・70代・80歳以上
var resident_march_kansai = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20歳未満・20代・30代・40代・50代・60代・70代・80歳以上
var resident_march_toyama = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20歳未満・20代・30代・40代・50代・60代・70代・80歳以上
var resident_march_others = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20歳未満・20代・30代・40代・50代・60代・70代・80歳以上

$(function(){
  $.ajax({url: 'json/data_march.json', dataType: 'json', async: false}).done(function(data){

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
          //関西出身の人々をカウント
          resident_march[0]++;

          //関東出身の中で、年代別に分類し、カウント
          if(data[i]["age"] == 1){
            resident_march_kanto[0] = resident_march_kanto[0] + 1;
          }
          else if (data[i]["age"] == 2) {
            resident_march_kanto[1] = resident_march_kanto[1] + 1;
          }
          else if (data[i]["age"] == 3) {
            resident_march_kanto[2] = resident_march_kanto[2] + 1;
          }
          else if (data[i]["age"] == 4) {
            resident_march_kanto[3] = resident_march_kanto[3] + 1;
          }
          else if (data[i]["age"] == 5) {
            resident_march_kanto[4] = resident_march_kanto[4] + 1;
          }
          else if (data[i]["age"] == 6) {
            resident_march_kanto[5] = resident_march_kanto[5] + 1;
          }
          else if (data[i]["age"] == 7) {
            resident_march_kanto[6] = resident_march_kanto[6] + 1;
          }
          else if (data[i]["age"] == 8) {
            resident_march_kanto[7] = resident_march_kanto[7] + 1;
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
          //中部出身の人々をカウント
          resident_march[1]++;

          //中部出身の人を年代別でカウント
          if(data[i]["age"] == 1){
            resident_march_tyubu[0] = resident_march_tyubu[0] + 1;
          }
          else if (data[i]["age"] == 2) {
            resident_march_tyubu[1] = resident_march_tyubu[1] + 1;
          }
          else if (data[i]["age"] == 3) {
            resident_march_tyubu[2] = resident_march_tyubu[2] + 1;
          }
          else if (data[i]["age"] == 4) {
            resident_march_tyubu[3] = resident_march_tyubu[3] + 1;
          }
          else if (data[i]["age"] == 5) {
            resident_march_tyubu[4] = resident_march_tyubu[4] + 1;
          }
          else if (data[i]["age"] == 6) {
            resident_march_tyubu[5] = resident_march_tyubu[5] + 1;
          }
          else if (data[i]["age"] == 7) {
            resident_march_tyubu[6] = resident_march_tyubu[6] + 1;
          }
          else if (data[i]["age"] == 8) {
            resident_march_tyubu[7] = resident_march_tyubu[7] + 1;
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
          resident_march[2]++;

          //関西出身の人を年代別でカウント
          if(data[i]["age"] == 1){
            resident_march_kansai[0] = resident_march_kansai[0] + 1;
          }
          else if (data[i]["age"] == 2) {
            resident_march_kansai[1] = resident_march_kansai[1] + 1;
          }
          else if (data[i]["age"] == 3) {
            resident_march_kansai[2] = resident_march_kansai[2] + 1;
          }
          else if (data[i]["age"] == 4) {
            resident_march_kansai[3] = resident_march_kansai[3] + 1;
          }
          else if (data[i]["age"] == 5) {
            resident_march_kansai[4] = resident_march_kansai[4] + 1;
          }
          else if (data[i]["age"] == 6) {
            resident_march_kansai[5] = resident_march_kansai[5] + 1;
          }
          else if (data[i]["age"] == 7) {
            resident_march_kansai[6] = resident_march_kansai[6] + 1;
          }
          else if (data[i]["age"] == 8) {
            resident_march_kansai[7] = resident_march_kansai[7] + 1;
          }

          break;

        //富山出身の人々をカウント
        case 16:
          resident_march[3]++;

          //富山出身の人を年代別でカウント
          if(data[i]["age"] == 1){
            resident_march_toyama[0] = resident_march_toyama[0] + 1;
          }
          else if (data[i]["age"] == 2) {
            resident_march_toyama[1] = resident_march_toyama[1] + 1;
          }
          else if (data[i]["age"] == 3) {
            resident_march_toyama[2] = resident_march_toyama[2] + 1;
          }
          else if (data[i]["age"] == 4) {
            resident_march_toyama[3] = resident_march_toyama[3] + 1;
          }
          else if (data[i]["age"] == 5) {
            resident_march_toyama[4] = resident_march_toyama[4] + 1;
          }
          else if (data[i]["age"] == 6) {
            resident_march_toyama[5] = resident_march_toyama[5] + 1;
          }
          else if (data[i]["age"] == 7) {
            resident_march_toyama[6] = resident_march_toyama[6] + 1;
          }
          else if (data[i]["age"] == 8) {
            resident_march_toyama[7] = resident_march_toyama[7] + 1;
          }

          break;

        default:
          //その他の人々をカウント
          resident_march[4]++;

          //その他出身の人を年代別でカウント
          if(data[i]["age"] == 1){
            resident_march_others[0] = resident_march_others[0] + 1;
          }
          else if (data[i]["age"] == 2) {
            resident_march_others[1] = resident_march_others[1] + 1;
          }
          else if (data[i]["age"] == 3) {
            resident_march_others[2] = resident_march_others[2] + 1;
          }
          else if (data[i]["age"] == 4) {
            resident_march_others[3] = resident_march_others[3] + 1;
          }
          else if (data[i]["age"] == 5) {
            resident_march_others[4] = resident_march_others[4] + 1;
          }
          else if (data[i]["age"] == 6) {
            resident_march_others[5] = resident_march_others[5] + 1;
          }
          else if (data[i]["age"] == 7) {
            resident_march_others[6] = resident_march_others[6] + 1;
          }
          else if (data[i]["age"] == 8) {
            resident_march_others[7] = resident_march_others[7] + 1;
          }

          break;

      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  console.log("関東出身の人々(3月)は" + resident_march[0] + "人です");
  for (var i = 0; i < resident_march_kanto.length; i++) {
    console.log("関東：" + (i + 1) * 10 + "代の人々は" + resident_march_kanto[i] + "人です");
  }

  console.log("-----------------");

  console.log("中部出身の人々(3月)は" + resident_march[1] + "人です");
  for (var i = 0; i < resident_march_tyubu.length; i++) {
    console.log("中部：" + (i + 1) * 10 + "代の人々は" + resident_march_tyubu[i] + "人です");
  }

  console.log("-----------------");

  console.log("関西出身の人々(3月)は" + resident_march[2] + "人です");
  for (var i = 0; i < resident_march_kansai.length; i++) {
    console.log("関西：" + (i + 1) * 10 + "代の人々は" + resident_march_kansai[i] + "人です");
  }

  console.log("-----------------");

  console.log("富山出身の人々(3月)は" + resident_march[3] + "人です");
  for (var i = 0; i < resident_march_toyama.length; i++) {
    console.log("富山：" + (i + 1) * 10 + "代の人々は" + resident_march_toyama[i] + "人です");
  }

  console.log("-----------------");

  console.log("その他出身の人々(3月)は" + resident_march[4] + "人です");
  for (var i = 0; i < resident_march_others.length; i++) {
    console.log("その他：" + (i + 1) * 10 + "代の人々は" + resident_march_others[i] + "人です");
  }
});
