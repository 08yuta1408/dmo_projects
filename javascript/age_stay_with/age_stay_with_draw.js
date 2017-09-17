/*
  定義
    one：一人旅行
    couple：カップル・夫婦
    parent:家族・親子
    friend：友人
    group：団体旅行
    others：その他
*/

$(function(){
  //集計用
  var age_stay_with_one = [0, 0, 0, 0, 0, 0, 0, 0];     //index番号順に、20代未満、20代、30代、40代、50代、60代、70代、80代以上
  var age_stay_with_couple = [0, 0, 0, 0, 0, 0, 0, 0];     //index番号順に、20代未満、20代、30代、40代、50代、60代、70代、80代以上
  var age_stay_with_parent = [0, 0, 0, 0, 0, 0, 0, 0];     //index番号順に、20代未満、20代、30代、40代、50代、60代、70代、80代以上
  var age_stay_with_friend = [0, 0, 0, 0, 0, 0, 0, 0];     //index番号順に、20代未満、20代、30代、40代、50代、60代、70代、80代以上
  var age_stay_with_group = [0, 0, 0, 0, 0, 0, 0, 0];     //index番号順に、20代未満、20代、30代、40代、50代、60代、70代、80代以上
  var age_stay_with_others = [0, 0, 0, 0, 0, 0, 0, 0];     //index番号順に、20代未満、20代、30代、40代、50代、60代、70代、80代以上

  //母数計算用
  var age_stay_with_all = 0;

  //一人旅行集計
  for (var i = 0; i < age_stay_with_one.length; i++) {
    age_stay_with_one[i] = age_stay_with_2016_october_one[i] + age_stay_with_2016_november_one[i] + age_stay_with_2016_december_one[i] + age_stay_with_feb_one[i] + age_stay_with_march_one[i] + age_stay_with_april_one[i] + age_stay_with_may_one[i] + age_stay_with_june_one[i] + age_stay_with_2017_july_one[i] + age_stay_with_2017_august_one[i];
  }

  //カップル旅行集計
  for (var i = 0; i < age_stay_with_couple.length; i++) {
    age_stay_with_couple[i] = age_stay_with_2016_october_couple[i] + age_stay_with_2016_november_couple[i] + age_stay_with_2016_december_couple[i] + age_stay_with_feb_couple[i] + age_stay_with_march_couple[i] + age_stay_with_april_couple[i] + age_stay_with_may_couple[i] + age_stay_with_june_couple[i] + age_stay_with_2017_july_couple[i] + age_stay_with_2017_august_couple[i];
  }

  //家族旅行集計
  for (var i = 0; i < age_stay_with_parent.length; i++) {
    age_stay_with_parent[i] = age_stay_with_2016_october_parent[i] + age_stay_with_2016_november_parent[i] + age_stay_with_2016_december_parent[i] + age_stay_with_feb_parent[i] + age_stay_with_march_parent[i] + age_stay_with_april_parent[i] + age_stay_with_may_parent[i] + age_stay_with_june_parent[i]+ age_stay_with_2017_july_parent[i] + age_stay_with_2017_august_parent[i];
  }

  //友人旅行集計
  for (var i = 0; i < age_stay_with_friend.length; i++) {
    age_stay_with_friend[i] = age_stay_with_2016_october_friend[i] + age_stay_with_2016_november_friend[i] + age_stay_with_2016_december_parent[i] + age_stay_with_feb_friend[i] + age_stay_with_march_friend[i] + age_stay_with_april_friend[i] + age_stay_with_may_friend[i] + age_stay_with_june_friend[i]+ age_stay_with_2017_july_friend[i] + age_stay_with_2017_august_friend[i];
  }

  //団体旅行集計
  for (var i = 0; i < age_stay_with_group.length; i++) {
    age_stay_with_group[i] = age_stay_with_2016_october_group[i] + age_stay_with_2016_november_group[i] + age_stay_with_2016_december_group[i] + age_stay_with_feb_group[i] + age_stay_with_march_group[i] + age_stay_with_april_group[i] + age_stay_with_may_group[i] + age_stay_with_june_group[i]+ age_stay_with_2017_july_group[i] + age_stay_with_2017_august_group[i];
  }

  //その他集計
  for (var i = 0; i < age_stay_with_others.length; i++) {
    age_stay_with_others[i] = age_stay_with_2016_october_others[i] + age_stay_with_2016_november_others[i] + age_stay_with_2016_december_others[i] + age_stay_with_feb_others[i] + age_stay_with_march_others[i] + age_stay_with_april_others[i] + age_stay_with_may_others[i] + age_stay_with_june_others[i]+ age_stay_with_2017_july_others[i] + age_stay_with_2017_august_others[i];
  }

  for(var i = 0; i < 8; i++){
    age_stay_with_all = age_stay_with_all + age_stay_with_one[i] + age_stay_with_couple[i] + age_stay_with_parent[i] + age_stay_with_friend[i] + age_stay_with_group[i] + age_stay_with_others[i];
  }

  //データが正しく出力できるか確かめる用
  console.log("----集計(その他旅行)----");
  for (var i = 0; i < age_stay_with_others.length; i++) {
    console.log(age_stay_with_others[i]);
  }

  console.log("友人　5月データ");
  for (var i = 0; i < age_stay_with_2016_october_friend.length; i++) {
    console.log(age_stay_with_2016_october_friend[i]);
  }

  age_stay_with_1 = [ [age_stay_with_others[0], 1], [age_stay_with_group[0], 2], [age_stay_with_friend[0], 3], [age_stay_with_parent[0], 4], [age_stay_with_couple[0], 5], [age_stay_with_one[0], 6] ];
  age_stay_with_2 = [ [age_stay_with_others[1], 1], [age_stay_with_group[1], 2], [age_stay_with_friend[1], 3], [age_stay_with_parent[1], 4], [age_stay_with_couple[1], 5], [age_stay_with_one[1], 6] ];
  age_stay_with_3 = [ [age_stay_with_others[2], 1], [age_stay_with_group[2], 2], [age_stay_with_friend[2], 3], [age_stay_with_parent[2], 4], [age_stay_with_couple[2], 5], [age_stay_with_one[2], 6] ];
  age_stay_with_4 = [ [age_stay_with_others[3], 1], [age_stay_with_group[3], 2], [age_stay_with_friend[3], 3], [age_stay_with_parent[3], 4], [age_stay_with_couple[3], 5], [age_stay_with_one[3], 6] ];
  age_stay_with_5 = [ [age_stay_with_others[4], 1], [age_stay_with_group[4], 2], [age_stay_with_friend[4], 3], [age_stay_with_parent[4], 4], [age_stay_with_couple[4], 5], [age_stay_with_one[4], 6] ];
  age_stay_with_6 = [ [age_stay_with_others[5], 1], [age_stay_with_group[5], 2], [age_stay_with_friend[5], 3], [age_stay_with_parent[5], 4], [age_stay_with_couple[5], 5], [age_stay_with_one[5], 6] ];
  age_stay_with_7 = [ [age_stay_with_others[6], 1], [age_stay_with_group[6], 2], [age_stay_with_friend[6], 3], [age_stay_with_parent[6], 4], [age_stay_with_couple[6], 5], [age_stay_with_one[6], 6] ];
  age_stay_with_8 = [ [age_stay_with_others[7], 1], [age_stay_with_group[7], 2], [age_stay_with_friend[7], 3], [age_stay_with_parent[7], 4], [age_stay_with_couple[7], 5], [age_stay_with_one[7], 6] ];

  var yticks = ['その他', '団体旅行', '友人', '家族・親子', 'カップル・夫婦', '一人旅行'];


  //デフォルトで総数グラフを表示
  jQuery . jqplot(
      'age_stay_with_sousu',
      [
        age_stay_with_1, age_stay_with_2, age_stay_with_3, age_stay_with_4, age_stay_with_5, age_stay_with_6, age_stay_with_7, age_stay_with_8
      ],
      {
          title: {
              text: '年齢×同行者属性 総数 母数：' + (age_stay_with_all) + '(人)',
              show: true,
              fontFamily: 'HGP行書体, Serif',
              fontSize: '20px',
              textAlign: 'center',
              textColor: 'black',
          },

          stackSeries: true,

          seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

          seriesDefaults: {
              renderer: jQuery . jqplot . BarRenderer,

              pointLabels: {
                  show: true,
                  location: 'n',
                  ypadding: -5,
                  escapeHTML: false,
                  edgeTolerance: -20,
                  formatString: '<b style="color: blue;">%d</b>',
                  hideZeros: true
              },

              rendererOptions: {
                barDirection: 'horizontal',
                dataLabels: 'percent',
                showDataLabels: true,
              }
          },

          series: [
              { label: '20代未満' },
              { label: '20代' },
              { label: '30代' },
              { label: '40代' },
              { label: '50代' },
              { label: '60代' },
              { label: '70代' },
              { label: '80代以上' }
          ],

          legend: {
              show: true,
              // placement: 'outside',
              location: 'se',
              // location: 'ne',
              rendererOptions: {
                  numberRows: 2
              },
          },

          axes: {
              xaxis:{
                label: '人数',
                // max: 520,
              },

              yaxis: {
                  ticks: yticks,
                  renderer: jQuery . jqplot . CategoryAxisRenderer,

              }
          }
      }
  );

  //総数ボタンを押した
  $('#sosu').click(function(){
    $('.gragh').hide();
    $('#age_stay_with_sousu').show();
  });

  //10月集計
  age_stay_with_2016_october_1 = [ [age_stay_with_2016_october_others[0], 1], [age_stay_with_2016_october_group[0], 2], [age_stay_with_2016_october_friend[0], 3], [age_stay_with_2016_october_parent[0], 4], [age_stay_with_2016_october_couple[0], 5], [age_stay_with_2016_october_one[0], 6] ];
  age_stay_with_2016_october_2 = [ [age_stay_with_2016_october_others[1], 1], [age_stay_with_2016_october_group[1], 2], [age_stay_with_2016_october_friend[1], 3], [age_stay_with_2016_october_parent[1], 4], [age_stay_with_2016_october_couple[1], 5], [age_stay_with_2016_october_one[1], 6] ];
  age_stay_with_2016_october_3 = [ [age_stay_with_2016_october_others[2], 1], [age_stay_with_2016_october_group[2], 2], [age_stay_with_2016_october_friend[2], 3], [age_stay_with_2016_october_parent[2], 4], [age_stay_with_2016_october_couple[2], 5], [age_stay_with_2016_october_one[2], 6] ];
  age_stay_with_2016_october_4 = [ [age_stay_with_2016_october_others[3], 1], [age_stay_with_2016_october_group[3], 2], [age_stay_with_2016_october_friend[3], 3], [age_stay_with_2016_october_parent[3], 4], [age_stay_with_2016_october_couple[3], 5], [age_stay_with_2016_october_one[3], 6] ];
  age_stay_with_2016_october_5 = [ [age_stay_with_2016_october_others[4], 1], [age_stay_with_2016_october_group[4], 2], [age_stay_with_2016_october_friend[4], 3], [age_stay_with_2016_october_parent[4], 4], [age_stay_with_2016_october_couple[4], 5], [age_stay_with_2016_october_one[4], 6] ];
  age_stay_with_2016_october_6 = [ [age_stay_with_2016_october_others[5], 1], [age_stay_with_2016_october_group[5], 2], [age_stay_with_2016_october_friend[5], 3], [age_stay_with_2016_october_parent[5], 4], [age_stay_with_2016_october_couple[5], 5], [age_stay_with_2016_october_one[5], 6] ];
  age_stay_with_2016_october_7 = [ [age_stay_with_2016_october_others[6], 1], [age_stay_with_2016_october_group[6], 2], [age_stay_with_2016_october_friend[6], 3], [age_stay_with_2016_october_parent[6], 4], [age_stay_with_2016_october_couple[6], 5], [age_stay_with_2016_october_one[6], 6] ];
  age_stay_with_2016_october_8 = [ [age_stay_with_2016_october_others[7], 1], [age_stay_with_2016_october_group[7], 2], [age_stay_with_2016_october_friend[7], 3], [age_stay_with_2016_october_parent[7], 4], [age_stay_with_2016_october_couple[7], 5], [age_stay_with_2016_october_one[7], 6] ];

  //11月集計
  age_stay_with_2016_november_1 = [ [age_stay_with_2016_november_others[0], 1], [age_stay_with_2016_november_group[0], 2], [age_stay_with_2016_november_friend[0], 3], [age_stay_with_2016_november_parent[0], 4], [age_stay_with_2016_november_couple[0], 5], [age_stay_with_2016_november_one[0], 6] ];
  age_stay_with_2016_november_2 = [ [age_stay_with_2016_november_others[1], 1], [age_stay_with_2016_november_group[1], 2], [age_stay_with_2016_november_friend[1], 3], [age_stay_with_2016_november_parent[1], 4], [age_stay_with_2016_november_couple[1], 5], [age_stay_with_2016_november_one[1], 6] ];
  age_stay_with_2016_november_3 = [ [age_stay_with_2016_november_others[2], 1], [age_stay_with_2016_november_group[2], 2], [age_stay_with_2016_november_friend[2], 3], [age_stay_with_2016_november_parent[2], 4], [age_stay_with_2016_november_couple[2], 5], [age_stay_with_2016_november_one[2], 6] ];
  age_stay_with_2016_november_4 = [ [age_stay_with_2016_november_others[3], 1], [age_stay_with_2016_november_group[3], 2], [age_stay_with_2016_november_friend[3], 3], [age_stay_with_2016_november_parent[3], 4], [age_stay_with_2016_november_couple[3], 5], [age_stay_with_2016_november_one[3], 6] ];
  age_stay_with_2016_november_5 = [ [age_stay_with_2016_november_others[4], 1], [age_stay_with_2016_november_group[4], 2], [age_stay_with_2016_november_friend[4], 3], [age_stay_with_2016_november_parent[4], 4], [age_stay_with_2016_november_couple[4], 5], [age_stay_with_2016_november_one[4], 6] ];
  age_stay_with_2016_november_6 = [ [age_stay_with_2016_november_others[5], 1], [age_stay_with_2016_november_group[5], 2], [age_stay_with_2016_november_friend[5], 3], [age_stay_with_2016_november_parent[5], 4], [age_stay_with_2016_november_couple[5], 5], [age_stay_with_2016_november_one[5], 6] ];
  age_stay_with_2016_november_7 = [ [age_stay_with_2016_november_others[6], 1], [age_stay_with_2016_november_group[6], 2], [age_stay_with_2016_november_friend[6], 3], [age_stay_with_2016_november_parent[6], 4], [age_stay_with_2016_november_couple[6], 5], [age_stay_with_2016_november_one[6], 6] ];
  age_stay_with_2016_november_8 = [ [age_stay_with_2016_november_others[7], 1], [age_stay_with_2016_november_group[7], 2], [age_stay_with_2016_november_friend[7], 3], [age_stay_with_2016_november_parent[7], 4], [age_stay_with_2016_november_couple[7], 5], [age_stay_with_2016_november_one[7], 6] ];

  //12月集計
  age_stay_with_2016_december_1 = [ [age_stay_with_2016_december_others[0], 1], [age_stay_with_2016_december_group[0], 2], [age_stay_with_2016_december_friend[0], 3], [age_stay_with_2016_december_parent[0], 4], [age_stay_with_2016_december_couple[0], 5], [age_stay_with_2016_december_one[0], 6] ];
  age_stay_with_2016_december_2 = [ [age_stay_with_2016_december_others[1], 1], [age_stay_with_2016_december_group[1], 2], [age_stay_with_2016_december_friend[1], 3], [age_stay_with_2016_december_parent[1], 4], [age_stay_with_2016_december_couple[1], 5], [age_stay_with_2016_december_one[1], 6] ];
  age_stay_with_2016_december_3 = [ [age_stay_with_2016_december_others[2], 1], [age_stay_with_2016_december_group[2], 2], [age_stay_with_2016_december_friend[2], 3], [age_stay_with_2016_december_parent[2], 4], [age_stay_with_2016_december_couple[2], 5], [age_stay_with_2016_december_one[2], 6] ];
  age_stay_with_2016_december_4 = [ [age_stay_with_2016_december_others[3], 1], [age_stay_with_2016_december_group[3], 2], [age_stay_with_2016_december_friend[3], 3], [age_stay_with_2016_december_parent[3], 4], [age_stay_with_2016_december_couple[3], 5], [age_stay_with_2016_december_one[3], 6] ];
  age_stay_with_2016_december_5 = [ [age_stay_with_2016_december_others[4], 1], [age_stay_with_2016_december_group[4], 2], [age_stay_with_2016_december_friend[4], 3], [age_stay_with_2016_december_parent[4], 4], [age_stay_with_2016_december_couple[4], 5], [age_stay_with_2016_december_one[4], 6] ];
  age_stay_with_2016_december_6 = [ [age_stay_with_2016_december_others[5], 1], [age_stay_with_2016_december_group[5], 2], [age_stay_with_2016_december_friend[5], 3], [age_stay_with_2016_december_parent[5], 4], [age_stay_with_2016_december_couple[5], 5], [age_stay_with_2016_december_one[5], 6] ];
  age_stay_with_2016_december_7 = [ [age_stay_with_2016_december_others[6], 1], [age_stay_with_2016_december_group[6], 2], [age_stay_with_2016_december_friend[6], 3], [age_stay_with_2016_december_parent[6], 4], [age_stay_with_2016_december_couple[6], 5], [age_stay_with_2016_december_one[6], 6] ];
  age_stay_with_2016_december_8 = [ [age_stay_with_2016_december_others[7], 1], [age_stay_with_2016_december_group[7], 2], [age_stay_with_2016_december_friend[7], 3], [age_stay_with_2016_december_parent[7], 4], [age_stay_with_2016_december_couple[7], 5], [age_stay_with_2016_december_one[7], 6] ];

  //1月集計
  age_stay_with_2017_january_1 = [ [age_stay_with_2017_january_others[0], 1], [age_stay_with_2017_january_group[0], 2], [age_stay_with_2017_january_friend[0], 3], [age_stay_with_2017_january_parent[0], 4], [age_stay_with_2017_january_couple[0], 5], [age_stay_with_2017_january_one[0], 6] ];
  age_stay_with_2017_january_2 = [ [age_stay_with_2017_january_others[1], 1], [age_stay_with_2017_january_group[1], 2], [age_stay_with_2017_january_friend[1], 3], [age_stay_with_2017_january_parent[1], 4], [age_stay_with_2017_january_couple[1], 5], [age_stay_with_2017_january_one[1], 6] ];
  age_stay_with_2017_january_3 = [ [age_stay_with_2017_january_others[2], 1], [age_stay_with_2017_january_group[2], 2], [age_stay_with_2017_january_friend[2], 3], [age_stay_with_2017_january_parent[2], 4], [age_stay_with_2017_january_couple[2], 5], [age_stay_with_2017_january_one[2], 6] ];
  age_stay_with_2017_january_4 = [ [age_stay_with_2017_january_others[3], 1], [age_stay_with_2017_january_group[3], 2], [age_stay_with_2017_january_friend[3], 3], [age_stay_with_2017_january_parent[3], 4], [age_stay_with_2017_january_couple[3], 5], [age_stay_with_2017_january_one[3], 6] ];
  age_stay_with_2017_january_5 = [ [age_stay_with_2017_january_others[4], 1], [age_stay_with_2017_january_group[4], 2], [age_stay_with_2017_january_friend[4], 3], [age_stay_with_2017_january_parent[4], 4], [age_stay_with_2017_january_couple[4], 5], [age_stay_with_2017_january_one[4], 6] ];
  age_stay_with_2017_january_6 = [ [age_stay_with_2017_january_others[5], 1], [age_stay_with_2017_january_group[5], 2], [age_stay_with_2017_january_friend[5], 3], [age_stay_with_2017_january_parent[5], 4], [age_stay_with_2017_january_couple[5], 5], [age_stay_with_2017_january_one[5], 6] ];
  age_stay_with_2017_january_7 = [ [age_stay_with_2017_january_others[6], 1], [age_stay_with_2017_january_group[6], 2], [age_stay_with_2017_january_friend[6], 3], [age_stay_with_2017_january_parent[6], 4], [age_stay_with_2017_january_couple[6], 5], [age_stay_with_2017_january_one[6], 6] ];
  age_stay_with_2017_january_8 = [ [age_stay_with_2017_january_others[7], 1], [age_stay_with_2017_january_group[7], 2], [age_stay_with_2017_january_friend[7], 3], [age_stay_with_2017_january_parent[7], 4], [age_stay_with_2017_january_couple[7], 5], [age_stay_with_2017_january_one[7], 6] ];

  //2月集計
  age_stay_with_feb_1 = [ [age_stay_with_feb_others[0], 1], [age_stay_with_feb_group[0], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[0], 4], [age_stay_with_feb_couple[0], 5], [age_stay_with_feb_one[0], 6] ];
  age_stay_with_feb_2 = [ [age_stay_with_feb_others[1], 1], [age_stay_with_feb_group[1], 2], [age_stay_with_feb_friend[1], 3], [age_stay_with_feb_parent[1], 4], [age_stay_with_feb_couple[1], 5], [age_stay_with_feb_one[1], 6] ];
  age_stay_with_feb_3 = [ [age_stay_with_feb_others[2], 1], [age_stay_with_feb_group[2], 2], [age_stay_with_feb_friend[2], 3], [age_stay_with_feb_parent[2], 4], [age_stay_with_feb_couple[2], 5], [age_stay_with_feb_one[2], 6] ];
  age_stay_with_feb_4 = [ [age_stay_with_feb_others[3], 1], [age_stay_with_feb_group[3], 2], [age_stay_with_feb_friend[3], 3], [age_stay_with_feb_parent[3], 4], [age_stay_with_feb_couple[3], 5], [age_stay_with_feb_one[3], 6] ];
  age_stay_with_feb_5 = [ [age_stay_with_feb_others[4], 1], [age_stay_with_feb_group[4], 2], [age_stay_with_feb_friend[4], 3], [age_stay_with_feb_parent[4], 4], [age_stay_with_feb_couple[4], 5], [age_stay_with_feb_one[4], 6] ];
  age_stay_with_feb_6 = [ [age_stay_with_feb_others[5], 1], [age_stay_with_feb_group[5], 2], [age_stay_with_feb_friend[5], 3], [age_stay_with_feb_parent[5], 4], [age_stay_with_feb_couple[5], 5], [age_stay_with_feb_one[5], 6] ];
  age_stay_with_feb_7 = [ [age_stay_with_feb_others[6], 1], [age_stay_with_feb_group[6], 2], [age_stay_with_feb_friend[6], 3], [age_stay_with_feb_parent[6], 4], [age_stay_with_feb_couple[6], 5], [age_stay_with_feb_one[6], 6] ];
  age_stay_with_feb_8 = [ [age_stay_with_feb_others[7], 1], [age_stay_with_feb_group[7], 2], [age_stay_with_feb_friend[7], 3], [age_stay_with_feb_parent[7], 4], [age_stay_with_feb_couple[7], 5], [age_stay_with_feb_one[7], 6] ];

  //3月集計
  age_stay_with_march_1 = [ [age_stay_with_march_others[0], 1], [age_stay_with_march_group[0], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[0], 4], [age_stay_with_march_couple[0], 5], [age_stay_with_march_one[0], 6] ];
  age_stay_with_march_2 = [ [age_stay_with_march_others[1], 1], [age_stay_with_march_group[1], 2], [age_stay_with_march_friend[1], 3], [age_stay_with_march_parent[1], 4], [age_stay_with_march_couple[1], 5], [age_stay_with_march_one[1], 6] ];
  age_stay_with_march_3 = [ [age_stay_with_march_others[2], 1], [age_stay_with_march_group[2], 2], [age_stay_with_march_friend[2], 3], [age_stay_with_march_parent[2], 4], [age_stay_with_march_couple[2], 5], [age_stay_with_march_one[2], 6] ];
  age_stay_with_march_4 = [ [age_stay_with_march_others[3], 1], [age_stay_with_march_group[3], 2], [age_stay_with_march_friend[3], 3], [age_stay_with_march_parent[3], 4], [age_stay_with_march_couple[3], 5], [age_stay_with_march_one[3], 6] ];
  age_stay_with_march_5 = [ [age_stay_with_march_others[4], 1], [age_stay_with_march_group[4], 2], [age_stay_with_march_friend[4], 3], [age_stay_with_march_parent[4], 4], [age_stay_with_march_couple[4], 5], [age_stay_with_march_one[4], 6] ];
  age_stay_with_march_6 = [ [age_stay_with_march_others[5], 1], [age_stay_with_march_group[5], 2], [age_stay_with_march_friend[5], 3], [age_stay_with_march_parent[5], 4], [age_stay_with_march_couple[5], 5], [age_stay_with_march_one[5], 6] ];
  age_stay_with_march_7 = [ [age_stay_with_march_others[6], 1], [age_stay_with_march_group[6], 2], [age_stay_with_march_friend[6], 3], [age_stay_with_march_parent[6], 4], [age_stay_with_march_couple[6], 5], [age_stay_with_march_one[6], 6] ];
  age_stay_with_march_8 = [ [age_stay_with_march_others[7], 1], [age_stay_with_march_group[7], 2], [age_stay_with_march_friend[7], 3], [age_stay_with_march_parent[7], 4], [age_stay_with_march_couple[7], 5], [age_stay_with_march_one[7], 6] ];

  //4月集計
  age_stay_with_april_1 = [ [age_stay_with_april_others[0], 1], [age_stay_with_april_group[0], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[0], 4], [age_stay_with_april_couple[0], 5], [age_stay_with_april_one[0], 6] ];
  age_stay_with_april_2 = [ [age_stay_with_april_others[1], 1], [age_stay_with_april_group[1], 2], [age_stay_with_april_friend[1], 3], [age_stay_with_april_parent[1], 4], [age_stay_with_april_couple[1], 5], [age_stay_with_april_one[1], 6] ];
  age_stay_with_april_3 = [ [age_stay_with_april_others[2], 1], [age_stay_with_april_group[2], 2], [age_stay_with_april_friend[2], 3], [age_stay_with_april_parent[2], 4], [age_stay_with_april_couple[2], 5], [age_stay_with_april_one[2], 6] ];
  age_stay_with_april_4 = [ [age_stay_with_april_others[3], 1], [age_stay_with_april_group[3], 2], [age_stay_with_april_friend[3], 3], [age_stay_with_april_parent[3], 4], [age_stay_with_april_couple[3], 5], [age_stay_with_april_one[3], 6] ];
  age_stay_with_april_5 = [ [age_stay_with_april_others[4], 1], [age_stay_with_april_group[4], 2], [age_stay_with_april_friend[4], 3], [age_stay_with_april_parent[4], 4], [age_stay_with_april_couple[4], 5], [age_stay_with_april_one[4], 6] ];
  age_stay_with_april_6 = [ [age_stay_with_april_others[5], 1], [age_stay_with_april_group[5], 2], [age_stay_with_april_friend[5], 3], [age_stay_with_april_parent[5], 4], [age_stay_with_april_couple[5], 5], [age_stay_with_april_one[5], 6] ];
  age_stay_with_april_7 = [ [age_stay_with_april_others[6], 1], [age_stay_with_april_group[6], 2], [age_stay_with_april_friend[6], 3], [age_stay_with_april_parent[6], 4], [age_stay_with_april_couple[6], 5], [age_stay_with_april_one[6], 6] ];
  age_stay_with_april_8 = [ [age_stay_with_april_others[7], 1], [age_stay_with_april_group[7], 2], [age_stay_with_april_friend[7], 3], [age_stay_with_april_parent[7], 4], [age_stay_with_april_couple[7], 5], [age_stay_with_april_one[7], 6] ];

  //5月集計
  age_stay_with_may_1 = [ [age_stay_with_may_others[0], 1], [age_stay_with_may_group[0], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[0], 4], [age_stay_with_may_couple[0], 5], [age_stay_with_may_one[0], 6] ];
  age_stay_with_may_2 = [ [age_stay_with_may_others[1], 1], [age_stay_with_may_group[1], 2], [age_stay_with_may_friend[1], 3], [age_stay_with_may_parent[1], 4], [age_stay_with_may_couple[1], 5], [age_stay_with_may_one[1], 6] ];
  age_stay_with_may_3 = [ [age_stay_with_may_others[2], 1], [age_stay_with_may_group[2], 2], [age_stay_with_may_friend[2], 3], [age_stay_with_may_parent[2], 4], [age_stay_with_may_couple[2], 5], [age_stay_with_may_one[2], 6] ];
  age_stay_with_may_4 = [ [age_stay_with_may_others[3], 1], [age_stay_with_may_group[3], 2], [age_stay_with_may_friend[3], 3], [age_stay_with_may_parent[3], 4], [age_stay_with_may_couple[3], 5], [age_stay_with_may_one[3], 6] ];
  age_stay_with_may_5 = [ [age_stay_with_may_others[4], 1], [age_stay_with_may_group[4], 2], [age_stay_with_may_friend[4], 3], [age_stay_with_may_parent[4], 4], [age_stay_with_may_couple[4], 5], [age_stay_with_may_one[4], 6] ];
  age_stay_with_may_6 = [ [age_stay_with_may_others[5], 1], [age_stay_with_may_group[5], 2], [age_stay_with_may_friend[5], 3], [age_stay_with_may_parent[5], 4], [age_stay_with_may_couple[5], 5], [age_stay_with_may_one[5], 6] ];
  age_stay_with_may_7 = [ [age_stay_with_may_others[6], 1], [age_stay_with_may_group[6], 2], [age_stay_with_may_friend[6], 3], [age_stay_with_may_parent[6], 4], [age_stay_with_may_couple[6], 5], [age_stay_with_may_one[6], 6] ];
  age_stay_with_may_8 = [ [age_stay_with_may_others[7], 1], [age_stay_with_may_group[7], 2], [age_stay_with_may_friend[7], 3], [age_stay_with_may_parent[7], 4], [age_stay_with_may_couple[7], 5], [age_stay_with_may_one[7], 6] ];

  //6月集計
  age_stay_with_june_1 = [ [age_stay_with_june_others[0], 1], [age_stay_with_june_group[0], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[0], 4], [age_stay_with_june_couple[0], 5], [age_stay_with_june_one[0], 6] ];
  age_stay_with_june_2 = [ [age_stay_with_june_others[1], 1], [age_stay_with_june_group[1], 2], [age_stay_with_june_friend[1], 3], [age_stay_with_june_parent[1], 4], [age_stay_with_june_couple[1], 5], [age_stay_with_june_one[1], 6] ];
  age_stay_with_june_3 = [ [age_stay_with_june_others[2], 1], [age_stay_with_june_group[2], 2], [age_stay_with_june_friend[2], 3], [age_stay_with_june_parent[2], 4], [age_stay_with_june_couple[2], 5], [age_stay_with_june_one[2], 6] ];
  age_stay_with_june_4 = [ [age_stay_with_june_others[3], 1], [age_stay_with_june_group[3], 2], [age_stay_with_june_friend[3], 3], [age_stay_with_june_parent[3], 4], [age_stay_with_june_couple[3], 5], [age_stay_with_june_one[3], 6] ];
  age_stay_with_june_5 = [ [age_stay_with_june_others[4], 1], [age_stay_with_june_group[4], 2], [age_stay_with_june_friend[4], 3], [age_stay_with_june_parent[4], 4], [age_stay_with_june_couple[4], 5], [age_stay_with_june_one[4], 6] ];
  age_stay_with_june_6 = [ [age_stay_with_june_others[5], 1], [age_stay_with_june_group[5], 2], [age_stay_with_june_friend[5], 3], [age_stay_with_june_parent[5], 4], [age_stay_with_june_couple[5], 5], [age_stay_with_june_one[5], 6] ];
  age_stay_with_june_7 = [ [age_stay_with_june_others[6], 1], [age_stay_with_june_group[6], 2], [age_stay_with_june_friend[6], 3], [age_stay_with_june_parent[6], 4], [age_stay_with_june_couple[6], 5], [age_stay_with_june_one[6], 6] ];
  age_stay_with_june_8 = [ [age_stay_with_june_others[7], 1], [age_stay_with_june_group[7], 2], [age_stay_with_june_friend[7], 3], [age_stay_with_june_parent[7], 4], [age_stay_with_june_couple[7], 5], [age_stay_with_june_one[7], 6] ];

  //7月集計
  age_stay_with_2017_july_1 = [ [age_stay_with_2017_july_others[0], 1], [age_stay_with_2017_july_group[0], 2], [age_stay_with_2017_july_friend[0], 3], [age_stay_with_2017_july_parent[0], 4], [age_stay_with_2017_july_couple[0], 5], [age_stay_with_2017_july_one[0], 6] ];
  age_stay_with_2017_july_2 = [ [age_stay_with_2017_july_others[1], 1], [age_stay_with_2017_july_group[1], 2], [age_stay_with_2017_july_friend[1], 3], [age_stay_with_2017_july_parent[1], 4], [age_stay_with_2017_july_couple[1], 5], [age_stay_with_2017_july_one[1], 6] ];
  age_stay_with_2017_july_3 = [ [age_stay_with_2017_july_others[2], 1], [age_stay_with_2017_july_group[2], 2], [age_stay_with_2017_july_friend[2], 3], [age_stay_with_2017_july_parent[2], 4], [age_stay_with_2017_july_couple[2], 5], [age_stay_with_2017_july_one[2], 6] ];
  age_stay_with_2017_july_4 = [ [age_stay_with_2017_july_others[3], 1], [age_stay_with_2017_july_group[3], 2], [age_stay_with_2017_july_friend[3], 3], [age_stay_with_2017_july_parent[3], 4], [age_stay_with_2017_july_couple[3], 5], [age_stay_with_2017_july_one[3], 6] ];
  age_stay_with_2017_july_5 = [ [age_stay_with_2017_july_others[4], 1], [age_stay_with_2017_july_group[4], 2], [age_stay_with_2017_july_friend[4], 3], [age_stay_with_2017_july_parent[4], 4], [age_stay_with_2017_july_couple[4], 5], [age_stay_with_2017_july_one[4], 6] ];
  age_stay_with_2017_july_6 = [ [age_stay_with_2017_july_others[5], 1], [age_stay_with_2017_july_group[5], 2], [age_stay_with_2017_july_friend[5], 3], [age_stay_with_2017_july_parent[5], 4], [age_stay_with_2017_july_couple[5], 5], [age_stay_with_2017_july_one[5], 6] ];
  age_stay_with_2017_july_7 = [ [age_stay_with_2017_july_others[6], 1], [age_stay_with_2017_july_group[6], 2], [age_stay_with_2017_july_friend[6], 3], [age_stay_with_2017_july_parent[6], 4], [age_stay_with_2017_july_couple[6], 5], [age_stay_with_2017_july_one[6], 6] ];
  age_stay_with_2017_july_8 = [ [age_stay_with_2017_july_others[7], 1], [age_stay_with_2017_july_group[7], 2], [age_stay_with_2017_july_friend[7], 3], [age_stay_with_2017_july_parent[7], 4], [age_stay_with_2017_july_couple[7], 5], [age_stay_with_2017_july_one[7], 6] ];

  //8月集計
  age_stay_with_2017_august_1 = [ [age_stay_with_2017_august_others[0], 1], [age_stay_with_2017_august_group[0], 2], [age_stay_with_2017_august_friend[0], 3], [age_stay_with_2017_august_parent[0], 4], [age_stay_with_2017_august_couple[0], 5], [age_stay_with_2017_august_one[0], 6] ];
  age_stay_with_2017_august_2 = [ [age_stay_with_2017_august_others[1], 1], [age_stay_with_2017_august_group[1], 2], [age_stay_with_2017_august_friend[1], 3], [age_stay_with_2017_august_parent[1], 4], [age_stay_with_2017_august_couple[1], 5], [age_stay_with_2017_august_one[1], 6] ];
  age_stay_with_2017_august_3 = [ [age_stay_with_2017_august_others[2], 1], [age_stay_with_2017_august_group[2], 2], [age_stay_with_2017_august_friend[2], 3], [age_stay_with_2017_august_parent[2], 4], [age_stay_with_2017_august_couple[2], 5], [age_stay_with_2017_august_one[2], 6] ];
  age_stay_with_2017_august_4 = [ [age_stay_with_2017_august_others[3], 1], [age_stay_with_2017_august_group[3], 2], [age_stay_with_2017_august_friend[3], 3], [age_stay_with_2017_august_parent[3], 4], [age_stay_with_2017_august_couple[3], 5], [age_stay_with_2017_august_one[3], 6] ];
  age_stay_with_2017_august_5 = [ [age_stay_with_2017_august_others[4], 1], [age_stay_with_2017_august_group[4], 2], [age_stay_with_2017_august_friend[4], 3], [age_stay_with_2017_august_parent[4], 4], [age_stay_with_2017_august_couple[4], 5], [age_stay_with_2017_august_one[4], 6] ];
  age_stay_with_2017_august_6 = [ [age_stay_with_2017_august_others[5], 1], [age_stay_with_2017_august_group[5], 2], [age_stay_with_2017_august_friend[5], 3], [age_stay_with_2017_august_parent[5], 4], [age_stay_with_2017_august_couple[5], 5], [age_stay_with_2017_august_one[5], 6] ];
  age_stay_with_2017_august_7 = [ [age_stay_with_2017_august_others[6], 1], [age_stay_with_2017_august_group[6], 2], [age_stay_with_2017_august_friend[6], 3], [age_stay_with_2017_august_parent[6], 4], [age_stay_with_2017_august_couple[6], 5], [age_stay_with_2017_august_one[6], 6] ];
  age_stay_with_2017_august_8 = [ [age_stay_with_2017_august_others[7], 1], [age_stay_with_2017_august_group[7], 2], [age_stay_with_2017_august_friend[7], 3], [age_stay_with_2017_august_parent[7], 4], [age_stay_with_2017_august_couple[7], 5], [age_stay_with_2017_august_one[7], 6] ];


  var button_count = 0;
  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#age_stay_with_2016_october').show();
    $('#age_stay_with_2016_november').show();
    $('#age_stay_with_2016_december').show();
    $('#age_stay_with_2017_january').show();
    $('#age_stay_with_feb').show();
    $('#age_stay_with_march').show();
    $('#age_stay_with_april').show();
    $('#age_stay_with_may').show();
    $('#age_stay_with_june').show();
    $('#age_stay_with_2017_july').show();
    $('#age_stay_with_2017_august').show();

    // $('#resident_age_kanto').show();
    //button_countを考慮しないと、グラフの上にグラフが重なっていく
    if(button_count == 1){
      jQuery . jqplot(
          'age_stay_with_2016_october',
          [
            age_stay_with_2016_october_1, age_stay_with_2016_october_2, age_stay_with_2016_october_3, age_stay_with_2016_october_4, age_stay_with_2016_october_5, age_stay_with_2016_october_6, age_stay_with_2016_october_7, age_stay_with_2016_october_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2016/10月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_2016_november',
          [
            age_stay_with_2016_november_1, age_stay_with_2016_november_2, age_stay_with_2016_november_3, age_stay_with_2016_november_4, age_stay_with_2016_november_5, age_stay_with_2016_november_6, age_stay_with_2016_november_7, age_stay_with_2016_november_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2016/11月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_2016_december',
          [
            age_stay_with_2016_december_1, age_stay_with_2016_december_2, age_stay_with_2016_december_3, age_stay_with_2016_december_4, age_stay_with_2016_december_5, age_stay_with_2016_december_6, age_stay_with_2016_december_7, age_stay_with_2016_december_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2016/12月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_2017_january',
          [
            age_stay_with_2017_january_1, age_stay_with_2017_january_2, age_stay_with_2017_january_3, age_stay_with_2017_january_4, age_stay_with_2017_january_5, age_stay_with_2017_january_6, age_stay_with_2017_january_7, age_stay_with_2017_january_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/1月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_feb',
          [
            age_stay_with_feb_1, age_stay_with_feb_2, age_stay_with_feb_3, age_stay_with_feb_4, age_stay_with_feb_5, age_stay_with_feb_6, age_stay_with_feb_7, age_stay_with_feb_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/2月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_march',
          [
            age_stay_with_march_1, age_stay_with_march_2, age_stay_with_march_3, age_stay_with_march_4, age_stay_with_march_5, age_stay_with_march_6, age_stay_with_march_7, age_stay_with_march_8

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/3月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    max: 100,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_april',
          [
            age_stay_with_april_1, age_stay_with_april_2, age_stay_with_april_3, age_stay_with_april_4, age_stay_with_april_5, age_stay_with_april_6, age_stay_with_april_7, age_stay_with_april_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/4月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_may',
          [
            age_stay_with_may_1, age_stay_with_may_2, age_stay_with_may_3, age_stay_with_may_4, age_stay_with_may_5, age_stay_with_may_6, age_stay_with_may_7, age_stay_with_may_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/5月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_june',
          [
            age_stay_with_june_1, age_stay_with_june_2, age_stay_with_june_3, age_stay_with_june_4, age_stay_with_june_5, age_stay_with_june_6, age_stay_with_june_7, age_stay_with_june_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/6月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_2017_july',
          [
            age_stay_with_2017_july_1, age_stay_with_2017_july_2, age_stay_with_2017_july_3, age_stay_with_2017_july_4, age_stay_with_2017_july_5, age_stay_with_2017_july_6, age_stay_with_2017_july_7, age_stay_with_2017_july_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/7月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'age_stay_with_2017_august',
          [
            age_stay_with_2017_august_1, age_stay_with_2017_august_2, age_stay_with_2017_august_3, age_stay_with_2017_august_4, age_stay_with_2017_august_5, age_stay_with_2017_august_6, age_stay_with_2017_august_7, age_stay_with_2017_august_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2017/8月　年齢×同行者属性',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                      show: true,
                      location: 'n',
                      ypadding: -5,
                      escapeHTML: false,
                      edgeTolerance: -20,
                      formatString: '<b style="color: blue;">%d</b>',
                      hideZeros: true
                  },

                  rendererOptions: {
                    barDirection: 'horizontal',
                    dataLabels: 'percent',
                    showDataLabels: true,
                  }
              },

              series: [
                { label: '20代未満' },
                { label: '20代' },
                { label: '30代' },
                { label: '40代' },
                { label: '50代' },
                { label: '60代' },
                { label: '70代' },
                { label: '80代以上' }
              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );


    }
  });
});
