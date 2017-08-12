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
    age_stay_with_one[i] = age_stay_with_feb_one[i] + age_stay_with_march_one[i] + age_stay_with_april_one[i] + age_stay_with_may_one[i] + age_stay_with_june_one[i];
  }

  //カップル旅行集計
  for (var i = 0; i < age_stay_with_couple.length; i++) {
    age_stay_with_couple[i] = age_stay_with_feb_couple[i] + age_stay_with_march_couple[i] + age_stay_with_april_couple[i] + age_stay_with_may_couple[i] + age_stay_with_june_couple[i];
  }

  //家族旅行集計
  for (var i = 0; i < age_stay_with_parent.length; i++) {
    age_stay_with_parent[i] = age_stay_with_feb_parent[i] + age_stay_with_march_parent[i] + age_stay_with_april_parent[i] + age_stay_with_may_parent[i] + age_stay_with_june_parent[i];
  }

  //友人旅行集計
  for (var i = 0; i < age_stay_with_friend.length; i++) {
    age_stay_with_friend[i] = age_stay_with_feb_friend[i] + age_stay_with_march_friend[i] + age_stay_with_april_friend[i] + age_stay_with_may_friend[i] + age_stay_with_june_friend[i];
  }

  //団体旅行集計
  for (var i = 0; i < age_stay_with_group.length; i++) {
    age_stay_with_group[i] = age_stay_with_feb_group[i] + age_stay_with_march_group[i] + age_stay_with_april_group[i] + age_stay_with_may_group[i] + age_stay_with_june_group[i];
  }

  //その他集計
  for (var i = 0; i < age_stay_with_others.length; i++) {
    age_stay_with_others[i] = age_stay_with_feb_others[i] + age_stay_with_march_others[i] + age_stay_with_april_others[i] + age_stay_with_may_others[i] + age_stay_with_june_others[i];
  }

  for(var i = 0; i < 8; i++){
    age_stay_with_all = age_stay_with_all + age_stay_with_one[i] + age_stay_with_couple[i] + age_stay_with_parent[i] + age_stay_with_friend[i] + age_stay_with_group[i] + age_stay_with_others[i];
  }

  //データが正しく出力できるか確かめる用
  console.log("----集計(その他旅行)----");
  for (var i = 0; i < age_stay_with_others.length; i++) {
    console.log(age_stay_with_others[i]);
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

  //2月集計
  age_stay_with_feb_1 = [ [age_stay_with_feb_others[0], 1], [age_stay_with_feb_group[0], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[0], 4], [age_stay_with_feb_couple[0], 5], [age_stay_with_feb_one[0], 6] ];
  age_stay_with_feb_2 = [ [age_stay_with_feb_others[1], 1], [age_stay_with_feb_group[1], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[1], 4], [age_stay_with_feb_couple[1], 5], [age_stay_with_feb_one[1], 6] ];
  age_stay_with_feb_3 = [ [age_stay_with_feb_others[2], 1], [age_stay_with_feb_group[2], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[2], 4], [age_stay_with_feb_couple[2], 5], [age_stay_with_feb_one[2], 6] ];
  age_stay_with_feb_4 = [ [age_stay_with_feb_others[3], 1], [age_stay_with_feb_group[3], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[3], 4], [age_stay_with_feb_couple[3], 5], [age_stay_with_feb_one[3], 6] ];
  age_stay_with_feb_5 = [ [age_stay_with_feb_others[4], 1], [age_stay_with_feb_group[4], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[4], 4], [age_stay_with_feb_couple[4], 5], [age_stay_with_feb_one[4], 6] ];
  age_stay_with_feb_6 = [ [age_stay_with_feb_others[5], 1], [age_stay_with_feb_group[5], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[5], 4], [age_stay_with_feb_couple[5], 5], [age_stay_with_feb_one[5], 6] ];
  age_stay_with_feb_7 = [ [age_stay_with_feb_others[6], 1], [age_stay_with_feb_group[6], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[6], 4], [age_stay_with_feb_couple[6], 5], [age_stay_with_feb_one[6], 6] ];
  age_stay_with_feb_8 = [ [age_stay_with_feb_others[7], 1], [age_stay_with_feb_group[7], 2], [age_stay_with_feb_friend[0], 3], [age_stay_with_feb_parent[7], 4], [age_stay_with_feb_couple[7], 5], [age_stay_with_feb_one[7], 6] ];

  //3月集計
  age_stay_with_march_1 = [ [age_stay_with_march_others[0], 1], [age_stay_with_march_group[0], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[0], 4], [age_stay_with_march_couple[0], 5], [age_stay_with_march_one[0], 6] ];
  age_stay_with_march_2 = [ [age_stay_with_march_others[1], 1], [age_stay_with_march_group[1], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[1], 4], [age_stay_with_march_couple[1], 5], [age_stay_with_march_one[1], 6] ];
  age_stay_with_march_3 = [ [age_stay_with_march_others[2], 1], [age_stay_with_march_group[2], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[2], 4], [age_stay_with_march_couple[2], 5], [age_stay_with_march_one[2], 6] ];
  age_stay_with_march_4 = [ [age_stay_with_march_others[3], 1], [age_stay_with_march_group[3], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[3], 4], [age_stay_with_march_couple[3], 5], [age_stay_with_march_one[3], 6] ];
  age_stay_with_march_5 = [ [age_stay_with_march_others[4], 1], [age_stay_with_march_group[4], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[4], 4], [age_stay_with_march_couple[4], 5], [age_stay_with_march_one[4], 6] ];
  age_stay_with_march_6 = [ [age_stay_with_march_others[5], 1], [age_stay_with_march_group[5], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[5], 4], [age_stay_with_march_couple[5], 5], [age_stay_with_march_one[5], 6] ];
  age_stay_with_march_7 = [ [age_stay_with_march_others[6], 1], [age_stay_with_march_group[6], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[6], 4], [age_stay_with_march_couple[6], 5], [age_stay_with_march_one[6], 6] ];
  age_stay_with_march_8 = [ [age_stay_with_march_others[7], 1], [age_stay_with_march_group[7], 2], [age_stay_with_march_friend[0], 3], [age_stay_with_march_parent[7], 4], [age_stay_with_march_couple[7], 5], [age_stay_with_march_one[7], 6] ];

  //4月集計
  age_stay_with_april_1 = [ [age_stay_with_april_others[0], 1], [age_stay_with_april_group[0], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[0], 4], [age_stay_with_april_couple[0], 5], [age_stay_with_april_one[0], 6] ];
  age_stay_with_april_2 = [ [age_stay_with_april_others[1], 1], [age_stay_with_april_group[1], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[1], 4], [age_stay_with_april_couple[1], 5], [age_stay_with_april_one[1], 6] ];
  age_stay_with_april_3 = [ [age_stay_with_april_others[2], 1], [age_stay_with_april_group[2], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[2], 4], [age_stay_with_april_couple[2], 5], [age_stay_with_april_one[2], 6] ];
  age_stay_with_april_4 = [ [age_stay_with_april_others[3], 1], [age_stay_with_april_group[3], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[3], 4], [age_stay_with_april_couple[3], 5], [age_stay_with_april_one[3], 6] ];
  age_stay_with_april_5 = [ [age_stay_with_april_others[4], 1], [age_stay_with_april_group[4], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[4], 4], [age_stay_with_april_couple[4], 5], [age_stay_with_april_one[4], 6] ];
  age_stay_with_april_6 = [ [age_stay_with_april_others[5], 1], [age_stay_with_april_group[5], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[5], 4], [age_stay_with_april_couple[5], 5], [age_stay_with_april_one[5], 6] ];
  age_stay_with_april_7 = [ [age_stay_with_april_others[6], 1], [age_stay_with_april_group[6], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[6], 4], [age_stay_with_april_couple[6], 5], [age_stay_with_april_one[6], 6] ];
  age_stay_with_april_8 = [ [age_stay_with_april_others[7], 1], [age_stay_with_april_group[7], 2], [age_stay_with_april_friend[0], 3], [age_stay_with_april_parent[7], 4], [age_stay_with_april_couple[7], 5], [age_stay_with_april_one[7], 6] ];

  //5月集計
  age_stay_with_may_1 = [ [age_stay_with_may_others[0], 1], [age_stay_with_may_group[0], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[0], 4], [age_stay_with_may_couple[0], 5], [age_stay_with_may_one[0], 6] ];
  age_stay_with_may_2 = [ [age_stay_with_may_others[1], 1], [age_stay_with_may_group[1], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[1], 4], [age_stay_with_may_couple[1], 5], [age_stay_with_may_one[1], 6] ];
  age_stay_with_may_3 = [ [age_stay_with_may_others[2], 1], [age_stay_with_may_group[2], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[2], 4], [age_stay_with_may_couple[2], 5], [age_stay_with_may_one[2], 6] ];
  age_stay_with_may_4 = [ [age_stay_with_may_others[3], 1], [age_stay_with_may_group[3], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[3], 4], [age_stay_with_may_couple[3], 5], [age_stay_with_may_one[3], 6] ];
  age_stay_with_may_5 = [ [age_stay_with_may_others[4], 1], [age_stay_with_may_group[4], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[4], 4], [age_stay_with_may_couple[4], 5], [age_stay_with_may_one[4], 6] ];
  age_stay_with_may_6 = [ [age_stay_with_may_others[5], 1], [age_stay_with_may_group[5], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[5], 4], [age_stay_with_may_couple[5], 5], [age_stay_with_may_one[5], 6] ];
  age_stay_with_may_7 = [ [age_stay_with_may_others[6], 1], [age_stay_with_may_group[6], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[6], 4], [age_stay_with_may_couple[6], 5], [age_stay_with_may_one[6], 6] ];
  age_stay_with_may_8 = [ [age_stay_with_may_others[7], 1], [age_stay_with_may_group[7], 2], [age_stay_with_may_friend[0], 3], [age_stay_with_may_parent[7], 4], [age_stay_with_may_couple[7], 5], [age_stay_with_may_one[7], 6] ];

  //6月集計
  age_stay_with_june_1 = [ [age_stay_with_june_others[0], 1], [age_stay_with_june_group[0], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[0], 4], [age_stay_with_june_couple[0], 5], [age_stay_with_june_one[0], 6] ];
  age_stay_with_june_2 = [ [age_stay_with_june_others[1], 1], [age_stay_with_june_group[1], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[1], 4], [age_stay_with_june_couple[1], 5], [age_stay_with_june_one[1], 6] ];
  age_stay_with_june_3 = [ [age_stay_with_june_others[2], 1], [age_stay_with_june_group[2], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[2], 4], [age_stay_with_june_couple[2], 5], [age_stay_with_june_one[2], 6] ];
  age_stay_with_june_4 = [ [age_stay_with_june_others[3], 1], [age_stay_with_june_group[3], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[3], 4], [age_stay_with_june_couple[3], 5], [age_stay_with_june_one[3], 6] ];
  age_stay_with_june_5 = [ [age_stay_with_june_others[4], 1], [age_stay_with_june_group[4], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[4], 4], [age_stay_with_june_couple[4], 5], [age_stay_with_june_one[4], 6] ];
  age_stay_with_june_6 = [ [age_stay_with_june_others[5], 1], [age_stay_with_june_group[5], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[5], 4], [age_stay_with_june_couple[5], 5], [age_stay_with_june_one[5], 6] ];
  age_stay_with_june_7 = [ [age_stay_with_june_others[6], 1], [age_stay_with_june_group[6], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[6], 4], [age_stay_with_june_couple[6], 5], [age_stay_with_june_one[6], 6] ];
  age_stay_with_june_8 = [ [age_stay_with_june_others[7], 1], [age_stay_with_june_group[7], 2], [age_stay_with_june_friend[0], 3], [age_stay_with_june_parent[7], 4], [age_stay_with_june_couple[7], 5], [age_stay_with_june_one[7], 6] ];


  var button_count = 0;
  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#age_stay_with_feb').show();
    $('#age_stay_with_march').show();
    $('#age_stay_with_april').show();
    $('#age_stay_with_may').show();
    $('#age_stay_with_june').show();

    // $('#resident_age_kanto').show();
    //button_countを考慮しないと、グラフの上にグラフが重なっていく
    if(button_count == 1){
      jQuery . jqplot(
          'age_stay_with_feb',
          [
            age_stay_with_feb_1, age_stay_with_feb_2, age_stay_with_feb_3, age_stay_with_feb_4, age_stay_with_feb_5, age_stay_with_feb_6, age_stay_with_feb_7, age_stay_with_feb_8
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '2月　年齢×同行者属性',
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
                  text: '3月　年齢×同行者属性',
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
                  text: '4月　年齢×同行者属性',
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
                  text: '5月　年齢×同行者属性',
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
                  text: '6月　年齢×同行者属性',
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
