/*
  定義
    one：一人旅行
    couple：カップル・夫婦
    parent:家族・親子
    friend：友人
    group：団体旅行
    others：その他
*/

var age_stay_with_june_one = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var age_stay_with_june_couple = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var age_stay_with_june_parent = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var age_stay_with_june_friend = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var age_stay_with_june_group = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上
var age_stay_with_june_others = [0, 0, 0, 0, 0, 0, 0, 0];    //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上



$(function(){
  $.ajax({url: 'json/2017/data_june.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      switch (parseInt(data[i]["with"])){

        case 1:
          //一人旅行する人の年代を求める
          if(data[i]["age"] == "1"){
            age_stay_with_may_one[0]++;
          }
          if(data[i]["age"] == "2"){
            age_stay_with_june_one[1]++;
          }
          if(data[i]["age"] == "3"){
            age_stay_with_june_one[2]++;
          }
          if(data[i]["age"] == "4"){
            age_stay_with_june_one[3]++;
          }
          if(data[i]["age"] == "5"){
            age_stay_with_june_one[4]++;
          }
          if(data[i]["age"] == "6"){
            age_stay_with_june_one[5]++;
          }
          if(data[i]["age"] == "7"){
            age_stay_with_june_one[6]++;
          }
          if(data[i]["age"] == "8"){
            age_stay_with_june_one[7]++;
          }

          break;

        case 2:
          //夫婦・カップルで旅行する人の年代を求める
          if(data[i]["age"] == "1"){
            age_stay_with_june_couple[0]++;
          }
          if(data[i]["age"] == "2"){
            age_stay_with_june_couple[1]++;
          }
          if(data[i]["age"] == "3"){
            age_stay_with_june_couple[2]++;
          }
          if(data[i]["age"] == "4"){
            age_stay_with_june_couple[3]++;
          }
          if(data[i]["age"] == "5"){
            age_stay_with_june_couple[4]++;
          }
          if(data[i]["age"] == "6"){
            age_stay_with_june_couple[5]++;
          }
          if(data[i]["age"] == "7"){
            age_stay_with_june_couple[6]++;
          }
          if(data[i]["age"] == "8"){
            age_stay_with_june_couple[7]++;
          }

          break;

          case 3:
            //家族・親子で旅行する人の年代を求める
            if(data[i]["age"] == "1"){
              age_stay_with_june_parent[0]++;
            }
            if(data[i]["age"] == "2"){
              age_stay_with_june_parent[1]++;
            }
            if(data[i]["age"] == "3"){
              age_stay_with_june_parent[2]++;
            }
            if(data[i]["age"] == "4"){
              age_stay_with_june_parent[3]++;
            }
            if(data[i]["age"] == "5"){
              age_stay_with_june_parent[4]++;
            }
            if(data[i]["age"] == "6"){
              age_stay_with_june_parent[5]++;
            }
            if(data[i]["age"] == "7"){
              age_stay_with_june_parent[6]++;
            }
            if(data[i]["age"] == "8"){
              age_stay_with_june_parent[7]++;
            }

            break;

          case 4:
            //友達で旅行する人の年代を求める
            if(data[i]["age"] == "1"){
              age_stay_with_june_friend[0]++;
            }
            if(data[i]["age"] == "2"){
              age_stay_with_june_friend[1]++;
            }
            if(data[i]["age"] == "3"){
              age_stay_with_june_friend[2]++;
            }
            if(data[i]["age"] == "4"){
              age_stay_with_june_friend[3]++;
            }
            if(data[i]["age"] == "5"){
              age_stay_with_june_friend[4]++;
            }
            if(data[i]["age"] == "6"){
              age_stay_with_june_friend[5]++;
            }
            if(data[i]["age"] == "7"){
              age_stay_with_june_friend[6]++;
            }
            if(data[i]["age"] == "8"){
              age_stay_with_june_friend[7]++;
            }

            break;

          case 5:
            //家族・親子で旅行する人の年代を求める
            if(data[i]["age"] == "1"){
              age_stay_with_june_group[0]++;
            }
            if(data[i]["age"] == "2"){
              age_stay_with_june_group[1]++;
            }
            if(data[i]["age"] == "3"){
              age_stay_with_june_group[2]++;
            }
            if(data[i]["age"] == "4"){
              age_stay_with_june_group[3]++;
            }
            if(data[i]["age"] == "5"){
              age_stay_with_june_group[4]++;
            }
            if(data[i]["age"] == "6"){
              age_stay_with_june_group[5]++;
            }
            if(data[i]["age"] == "7"){
              age_stay_with_june_group[6]++;
            }
            if(data[i]["age"] == "8"){
              age_stay_with_june_group[7]++;
            }

            break;

          case 6:
            //その他で旅行する人の年代を求める
            if(data[i]["age"] == "1"){
              age_stay_with_june_others[0]++;
            }
            if(data[i]["age"] == "2"){
              age_stay_with_june_others[1]++;
            }
            if(data[i]["age"] == "3"){
              age_stay_with_june_others[2]++;
            }
            if(data[i]["age"] == "4"){
              age_stay_with_june_others[3]++;
            }
            if(data[i]["age"] == "5"){
              age_stay_with_june_others[4]++;
            }
            if(data[i]["age"] == "6"){
              age_stay_with_june_others[5]++;
            }
            if(data[i]["age"] == "7"){
              age_stay_with_june_others[6]++;
            }
            if(data[i]["age"] == "8"){
              age_stay_with_june_others[7]++;
            }

            break;

      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----6月(一人旅行)----");
  for(var i = 0; i < age_stay_with_june_one.length; i++){
    console.log(age_stay_with_june_one[i]);
  }


});
