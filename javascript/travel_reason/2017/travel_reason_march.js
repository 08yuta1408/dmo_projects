var reason_see_march = [0, 0, 0, 0];                           //index番号順に、自然の景観、史跡・文学碑・建造物、美術館・博物館、寺社仏閣参拝
var reason_eat_march = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];   //index番号順に、海鮮、山の幸、川の幸(あゆ等)、寿司、ぶり・かに、白えび、ほたるいか、その他海鮮、山の幸、川の幸(あゆ)、日本酒、ご当地グルメ(ブラックラーメン等)
var reason_play_march = [0, 0, 0, 0, 0, 0, 0];                 //index番号順に、工場見学など産業観光、ドライブ・ツーリング、各種体験プログラム、温泉、登山、釣り、祭りやイベント
var reason_buy_march = [0, 0, 0];                              //index番号順に、街歩き・食べ歩き、伝統工芸、海鮮・生鮮品
var reason_other_march = [0, 0, 0, 0, 0, 0];                   //index番号順に、ビジネス、友人・親戚を訪問、予算の関係、北陸新幹線が開業したので、近隣県訪問のついでに、その他


var reason_see_max_string = 4;
var reason_eat_max_string = 12;
var reason_play_max_string = 7;
var reason_buy_max_string = 3;
var reason_other_max_string = 6;

var reason_see_string_march = "";
var reason_see_array_march = [];

var reason_eat_string_march = "";
var reason_eat_array_march = [];

var reason_play_string_march = "";
var reason_play_array_march = [];

var reason_buy_string_march = "";
var reason_buy_array_march = [];

var reason_other_string_march = "";
var reason_other_array_march = [];

$(function(){
  $.ajax({url: 'json/2017/data_march.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      reason_see_string_march = data[i]["reason see"];
      reason_see_array_march = [];

      reason_eat_string_march = data[i]["reason eat"];
      reason_eat_array_march = [];

      reason_play_string_march = data[i]["reason play"];
      reason_play_array_march = [];

      reason_buy_string_march = data[i]["reason buy"];
      reason_buy_array_march = [];

      reason_other_string_march = data[i]["reason other"];
      reason_other_array_march = [];

      // console.log(reason_see_string_march);

      //文字に分割
      for (var j = 0; j < reason_see_string_march.length; j++) {
        reason_see_array_march[j] = parseInt(reason_see_string_march.charAt(j));
      }
      for (var j = 0; j < reason_eat_string_march.length; j++) {
        reason_eat_array_march[j] = parseInt(reason_eat_string_march.charAt(j));
      }
      for (var j = 0; j < reason_play_string_march.length; j++) {
        reason_play_array_march[j] = parseInt(reason_play_string_march.charAt(j));
      }
      for (var j = 0; j < reason_buy_string_march.length; j++) {
        reason_buy_array_march[j] = parseInt(reason_buy_string_march.charAt(j));
      }
      for (var j = 0; j < reason_other_string_march.length; j++) {
        reason_other_array_march[j] = parseInt(reason_other_string_march.charAt(j));
      }

      //配列の長さを調整する
      array_length = reason_see_array_march.length;
      if(reason_see_string_march.length != reason_see_max_string){
        for (var k = 0; k < reason_see_max_string - array_length; k++) {
          reason_see_array_march.unshift(0);
        }
      }

      array_length = reason_eat_array_march.length;
      if(reason_eat_string_march.length != reason_eat_max_string){
        for (var k = 0; k < reason_eat_max_string - array_length; k++) {
          reason_eat_array_march.unshift(0);
        }
      }

      array_length = reason_play_array_march.length;
      if(reason_play_string_march.length != reason_play_max_string){
        for (var k = 0; k < reason_play_max_string - array_length; k++) {
          reason_play_array_march.unshift(0);
        }
      }

      array_length = reason_buy_array_march.length;
      if(reason_buy_string_march.length != reason_buy_max_string){
        for (var k = 0; k < reason_buy_max_string - array_length; k++) {
          reason_buy_array_march.unshift(0);
        }
      }

      array_length = reason_other_array_march.length;
      if(reason_other_string_march.length != reason_other_max_string){
        for (var k = 0; k < reason_other_max_string - array_length; k++) {
          reason_other_array_march.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < reason_see_array_march.length; k++) {
        if(reason_see_array_march[k] == 1){
          reason_see_march[k]++;
        }
      }
      for (var k = 0; k < reason_eat_array_march.length; k++) {
        if(reason_eat_array_march[k] == 1){
          reason_eat_march[k]++;
        }
      }
      for (var k = 0; k < reason_play_array_march.length; k++) {
        if(reason_play_array_march[k] == 1){
          reason_play_march[k]++;
        }
      }
      for (var k = 0; k < reason_buy_array_march.length; k++) {
        if(reason_buy_array_march[k] == 1){
          reason_buy_march[k]++;
        }
      }
      for (var k = 0; k < reason_other_array_march.length; k++) {
        if(reason_other_array_march[k] == 1){
          reason_other_march[k]++;
        }
      }

      // console.log(reason_see_array_march);
      // console.log(reason_see_march);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----3月(旅行理由：景観)----");
  for(var i = 0; i < reason_see_march.length; i++){
    console.log(reason_see_march[i]);
  }
  console.log("----3月(旅行理由：飲食)----");
  for(var i = 0; i < reason_eat_march.length; i++){
    console.log(reason_eat_march[i]);
  }
  console.log("----3月(旅行理由：娯楽)----");
  for(var i = 0; i < reason_play_march.length; i++){
    console.log(reason_play_march[i]);
  }
  console.log("----3月(旅行理由：買い物)----");
  for(var i = 0; i < reason_buy_march.length; i++){
    console.log(reason_buy_march[i]);
  }
  console.log("----3月(旅行理由：その他)----");
  for(var i = 0; i < reason_other_march.length; i++){
    console.log(reason_other_march[i]);
  }

});
