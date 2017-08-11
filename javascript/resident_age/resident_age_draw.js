$(function(){
  //母数計算用
  var resident_age_all = 0;
  var resident_age_kanto_all = 0;
  var resident_age_tyubu_all = 0;
  var resident_age_kansai_all = 0;
  var resident_age_toyama_all = 0;
  var resident_age_others_all = 0;

  //2〜6月の集計結果をまとめるための変数
  var resident_age_kanto = [0, 0, 0, 0, 0, 0, 0, 0];
  var resident_age_tyubu = [0, 0, 0, 0, 0, 0, 0, 0];
  var resident_age_kansai = [0, 0, 0, 0, 0, 0, 0, 0];
  var resident_age_toyama = [0, 0, 0, 0, 0, 0, 0, 0];
  var resident_age_others = [0, 0, 0, 0, 0, 0, 0, 0];

  //関東集計
  for (var i = 0; i < resident_age_kanto.length; i++) {
    resident_age_kanto[i] = resident_age_feb_kanto[i] + resident_age_march_kanto[i] + resident_age_april_kanto[i] + resident_age_may_kanto[i] + resident_age_june_kanto[i];
  }
  for (var i = 0; i < resident_age_kanto.length; i++) {
    resident_age_kanto_all += resident_age_kanto[i];    //関東母数
  }

  //中部集計
  for (var i = 0; i < resident_age_tyubu.length; i++) {
    resident_age_tyubu[i] = resident_age_feb_tyubu[i] + resident_age_march_tyubu[i] + resident_age_april_tyubu[i] + resident_age_may_tyubu[i] + resident_age_june_tyubu[i];
  }
  for (var i = 0; i < resident_age_tyubu.length; i++) {
    resident_age_tyubu_all += resident_age_tyubu[i];    //中部母数
  }

  //関西集計
  for (var i = 0; i < resident_age_kansai.length; i++) {
    resident_age_kansai[i] = resident_age_feb_kansai[i] + resident_age_march_kansai[i] + resident_age_april_kansai[i] + resident_age_may_kansai[i] + resident_age_june_kansai[i];
  }
  for (var i = 0; i < resident_age_kansai.length; i++) {
    resident_age_kansai_all += resident_age_kansai[i];    //関西母数
  }

  //富山集計
  for (var i = 0; i < resident_age_toyama.length; i++) {
    resident_age_toyama[i] = resident_age_feb_toyama[i] + resident_age_march_toyama[i] + resident_age_april_toyama[i] + resident_age_may_toyama[i] + resident_age_june_toyama[i];
  }
  for (var i = 0; i < resident_age_toyama.length; i++) {
    resident_age_toyama_all += resident_age_toyama[i];    //富山母数
  }

  //その他集計
  for (var i = 0; i < resident_age_others.length; i++) {
    resident_age_others[i] = resident_age_feb_others[i] + resident_age_march_others[i] + resident_age_april_others[i] + resident_age_may_others[i] + resident_age_june_others[i];
  }
  for (var i = 0; i < resident_age_others.length; i++) {
    resident_age_others_all += resident_age_others[i];    //その他母数
  }


  //母数の算出
  for(var i = 0; i < 8; i++){
    resident_age_all = resident_age_all + resident_age_kanto[i] + resident_age_tyubu[i] + resident_age_kansai[i] + resident_age_toyama[i] + resident_age_others[i];
  }

  console.log("----関東集計(2~6月)----");
  for (var i = 0; i < resident_age_kanto.length; i++) {
    console.log(resident_age_kanto[i]);
  }


  // frequency_1 = [ [frequency_feb[0], 1], [frequency_march[0], 2], [frequency_april[0], 3], [frequency_may[0], 4], [frequency_june[0], 5] ];

  resident_age_1 = [ [resident_age_others[0], 1], [resident_age_toyama[0], 2], [resident_age_kansai[0], 3], [resident_age_tyubu[0], 4], [resident_age_kansai[0], 5] ];
  resident_age_2 = [ [resident_age_others[1], 1], [resident_age_toyama[1], 2], [resident_age_kansai[1], 3], [resident_age_tyubu[1], 4], [resident_age_kansai[1], 5] ];
  resident_age_3 = [ [resident_age_others[2], 1], [resident_age_toyama[2], 2], [resident_age_kansai[2], 3], [resident_age_tyubu[2], 4], [resident_age_kansai[2], 5] ];
  resident_age_4 = [ [resident_age_others[3], 1], [resident_age_toyama[3], 2], [resident_age_kansai[3], 3], [resident_age_tyubu[3], 4], [resident_age_kansai[3], 5] ];
  resident_age_5 = [ [resident_age_others[4], 1], [resident_age_toyama[4], 2], [resident_age_kansai[4], 3], [resident_age_tyubu[4], 4], [resident_age_kansai[4], 5] ];
  resident_age_6 = [ [resident_age_others[5], 1], [resident_age_toyama[5], 2], [resident_age_kansai[5], 3], [resident_age_tyubu[5], 4], [resident_age_kansai[5], 5] ];
  resident_age_7 = [ [resident_age_others[6], 1], [resident_age_toyama[6], 2], [resident_age_kansai[6], 3], [resident_age_tyubu[6], 4], [resident_age_kansai[6], 5] ];

  var yticks = [ 'その他', '関東', '中部', '関西', '富山'];
    // yticks = ['2月', '3月', '4月', '5月', '6月'];

  // console.log("--------");
  // for (var i = 0; i < resident_age_1.length; i++) {
  //   console.log(resident_age_1[i]);
  // }

  //デフォルトで総数グラフを表示
  jQuery . jqplot(
      'resident_age_sousu',
      [
          resident_age_1, resident_age_2, resident_age_3, resident_age_4, resident_age_5, resident_age_6, resident_age_7

      ],
      {
          title: {
              text: '居住地×年齢/総数 母数：' + (resident_age_all) + '(人)',
              show: true,
              fontFamily: 'HGP行書体, Serif',
              fontSize: '20px',
              textAlign: 'center',
              textColor: 'black',
          },

          stackSeries: true,

          seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
                // max: 550,
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
    $('#resident_age_sousu').show();
  });

  //関東
  resident_age_kanto_1 = [[resident_age_feb_kanto[0], 1], [resident_age_march_kanto[0], 2],  [resident_age_april_kanto[0], 3],  [resident_age_may_kanto[0], 4],  [resident_age_june_kanto[0], 5] ];
  resident_age_kanto_2 = [[resident_age_feb_kanto[1], 1], [resident_age_march_kanto[1], 2],  [resident_age_april_kanto[1], 3],  [resident_age_may_kanto[1], 4],  [resident_age_june_kanto[1], 5] ];
  resident_age_kanto_3 = [[resident_age_feb_kanto[2], 1], [resident_age_march_kanto[2], 2],  [resident_age_april_kanto[2], 3],  [resident_age_may_kanto[2], 4],  [resident_age_june_kanto[2], 5] ];
  resident_age_kanto_4 = [[resident_age_feb_kanto[3], 1], [resident_age_march_kanto[3], 2],  [resident_age_april_kanto[3], 3],  [resident_age_may_kanto[3], 4],  [resident_age_june_kanto[3], 5] ];
  resident_age_kanto_5 = [[resident_age_feb_kanto[4], 1], [resident_age_march_kanto[4], 2],  [resident_age_april_kanto[4], 3],  [resident_age_may_kanto[4], 4],  [resident_age_june_kanto[4], 5] ];
  resident_age_kanto_6 = [[resident_age_feb_kanto[5], 1], [resident_age_march_kanto[5], 2],  [resident_age_april_kanto[5], 3],  [resident_age_may_kanto[5], 4],  [resident_age_june_kanto[5], 5] ];
  resident_age_kanto_7 = [[resident_age_feb_kanto[6], 1], [resident_age_march_kanto[6], 2],  [resident_age_april_kanto[6], 3],  [resident_age_may_kanto[6], 4],  [resident_age_june_kanto[6], 5] ];

  //中部
  resident_age_tyubu_1 = [[resident_age_feb_tyubu[0], 1], [resident_age_march_tyubu[0], 2],  [resident_age_april_tyubu[0], 3],  [resident_age_may_tyubu[0], 4],  [resident_age_june_tyubu[0], 5] ];
  resident_age_tyubu_2 = [[resident_age_feb_tyubu[1], 1], [resident_age_march_tyubu[1], 2],  [resident_age_april_tyubu[1], 3],  [resident_age_may_tyubu[1], 4],  [resident_age_june_tyubu[1], 5] ];
  resident_age_tyubu_3 = [[resident_age_feb_tyubu[2], 1], [resident_age_march_tyubu[2], 2],  [resident_age_april_tyubu[2], 3],  [resident_age_may_tyubu[2], 4],  [resident_age_june_tyubu[2], 5] ];
  resident_age_tyubu_4 = [[resident_age_feb_tyubu[3], 1], [resident_age_march_tyubu[3], 2],  [resident_age_april_tyubu[3], 3],  [resident_age_may_tyubu[3], 4],  [resident_age_june_tyubu[3], 5] ];
  resident_age_tyubu_5 = [[resident_age_feb_tyubu[4], 1], [resident_age_march_tyubu[4], 2],  [resident_age_april_tyubu[4], 3],  [resident_age_may_tyubu[4], 4],  [resident_age_june_tyubu[4], 5] ];
  resident_age_tyubu_6 = [[resident_age_feb_tyubu[5], 1], [resident_age_march_tyubu[5], 2],  [resident_age_april_tyubu[5], 3],  [resident_age_may_tyubu[5], 4],  [resident_age_june_tyubu[5], 5] ];
  resident_age_tyubu_7 = [[resident_age_feb_tyubu[6], 1], [resident_age_march_tyubu[6], 2],  [resident_age_april_tyubu[6], 3],  [resident_age_may_tyubu[6], 4],  [resident_age_june_tyubu[6], 5] ];

  //関西
  resident_age_kansai_1 = [[resident_age_feb_kansai[0], 1], [resident_age_march_kansai[0], 2],  [resident_age_april_kansai[0], 3],  [resident_age_may_kansai[0], 4],  [resident_age_june_kansai[0], 5] ];
  resident_age_kansai_2 = [[resident_age_feb_kansai[1], 1], [resident_age_march_kansai[1], 2],  [resident_age_april_kansai[1], 3],  [resident_age_may_kansai[1], 4],  [resident_age_june_kansai[1], 5] ];
  resident_age_kansai_3 = [[resident_age_feb_kansai[2], 1], [resident_age_march_kansai[2], 2],  [resident_age_april_kansai[2], 3],  [resident_age_may_kansai[2], 4],  [resident_age_june_kansai[2], 5] ];
  resident_age_kansai_4 = [[resident_age_feb_kansai[3], 1], [resident_age_march_kansai[3], 2],  [resident_age_april_kansai[3], 3],  [resident_age_may_kansai[3], 4],  [resident_age_june_kansai[3], 5] ];
  resident_age_kansai_5 = [[resident_age_feb_kansai[4], 1], [resident_age_march_kansai[4], 2],  [resident_age_april_kansai[4], 3],  [resident_age_may_kansai[4], 4],  [resident_age_june_kansai[4], 5] ];
  resident_age_kansai_6 = [[resident_age_feb_kansai[5], 1], [resident_age_march_kansai[5], 2],  [resident_age_april_kansai[5], 3],  [resident_age_may_kansai[5], 4],  [resident_age_june_kansai[5], 5] ];
  resident_age_kansai_7 = [[resident_age_feb_kansai[6], 1], [resident_age_march_kansai[6], 2],  [resident_age_april_kansai[6], 3],  [resident_age_may_kansai[6], 4],  [resident_age_june_kansai[6], 5] ];

  //富山
  resident_age_toyama_1 = [[resident_age_feb_toyama[0], 1], [resident_age_march_toyama[0], 2],  [resident_age_april_toyama[0], 3],  [resident_age_may_toyama[0], 4],  [resident_age_june_toyama[0], 5] ];
  resident_age_toyama_2 = [[resident_age_feb_toyama[1], 1], [resident_age_march_toyama[1], 2],  [resident_age_april_toyama[1], 3],  [resident_age_may_toyama[1], 4],  [resident_age_june_toyama[1], 5] ];
  resident_age_toyama_3 = [[resident_age_feb_toyama[2], 1], [resident_age_march_toyama[2], 2],  [resident_age_april_toyama[2], 3],  [resident_age_may_toyama[2], 4],  [resident_age_june_toyama[2], 5] ];
  resident_age_toyama_4 = [[resident_age_feb_toyama[3], 1], [resident_age_march_toyama[3], 2],  [resident_age_april_toyama[3], 3],  [resident_age_may_toyama[3], 4],  [resident_age_june_toyama[3], 5] ];
  resident_age_toyama_5 = [[resident_age_feb_toyama[4], 1], [resident_age_march_toyama[4], 2],  [resident_age_april_toyama[4], 3],  [resident_age_may_toyama[4], 4],  [resident_age_june_toyama[4], 5] ];
  resident_age_toyama_6 = [[resident_age_feb_toyama[5], 1], [resident_age_march_toyama[5], 2],  [resident_age_april_toyama[5], 3],  [resident_age_may_toyama[5], 4],  [resident_age_june_toyama[5], 5] ];
  resident_age_toyama_7 = [[resident_age_feb_toyama[6], 1], [resident_age_march_toyama[6], 2],  [resident_age_april_toyama[6], 3],  [resident_age_may_toyama[6], 4],  [resident_age_june_toyama[6], 5] ];

  //その他
  resident_age_others_1 = [[resident_age_feb_others[0], 1], [resident_age_march_others[0], 2],  [resident_age_april_others[0], 3],  [resident_age_may_others[0], 4],  [resident_age_june_others[0], 5] ];
  resident_age_others_2 = [[resident_age_feb_others[1], 1], [resident_age_march_others[1], 2],  [resident_age_april_others[1], 3],  [resident_age_may_others[1], 4],  [resident_age_june_others[1], 5] ];
  resident_age_others_3 = [[resident_age_feb_others[2], 1], [resident_age_march_others[2], 2],  [resident_age_april_others[2], 3],  [resident_age_may_others[2], 4],  [resident_age_june_others[2], 5] ];
  resident_age_others_4 = [[resident_age_feb_others[3], 1], [resident_age_march_others[3], 2],  [resident_age_april_others[3], 3],  [resident_age_may_others[3], 4],  [resident_age_june_others[3], 5] ];
  resident_age_others_5 = [[resident_age_feb_others[4], 1], [resident_age_march_others[4], 2],  [resident_age_april_others[4], 3],  [resident_age_may_others[4], 4],  [resident_age_june_others[4], 5] ];
  resident_age_others_6 = [[resident_age_feb_others[5], 1], [resident_age_march_others[5], 2],  [resident_age_april_others[5], 3],  [resident_age_may_others[5], 4],  [resident_age_june_others[5], 5] ];
  resident_age_others_7 = [[resident_age_feb_others[6], 1], [resident_age_march_others[6], 2],  [resident_age_april_others[6], 3],  [resident_age_may_others[6], 4],  [resident_age_june_others[6], 5] ];


  yticks_month = ['2月', '3月', '4月', '5月', '6月'];


  var button_count = 0;
  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#resident_age_kanto').show();
    $('#resident_age_tyubu').show();
    $('#resident_age_kansai').show();
    $('#resident_age_toyama').show();
    $('#resident_age_others').show();

    // $('#resident_age_kanto').show();
    //button_countを考慮しないと、グラフの上にグラフが重なっていく
    if(button_count == 1){
      jQuery . jqplot(
          'resident_age_kanto',
          [
              resident_age_kanto_1, resident_age_kanto_2, resident_age_kanto_3, resident_age_kanto_4, resident_age_kanto_5, resident_age_kanto_6, resident_age_kanto_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '関東　居住地×年齢 母数：' + resident_age_kanto_all + '(人)',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
                    max: 250,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_age_tyubu',
          [
              resident_age_tyubu_1, resident_age_tyubu_2, resident_age_tyubu_3, resident_age_tyubu_4, resident_age_tyubu_5, resident_age_tyubu_6, resident_age_tyubu_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '中部　居住地×年齢 母数：' + resident_age_tyubu_all + '(人)',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
                    max: 200,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_age_kansai',
          [
              resident_age_kansai_1, resident_age_kansai_2, resident_age_kansai_3, resident_age_kansai_4, resident_age_kansai_5, resident_age_kansai_6, resident_age_kansai_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '関西　居住地×年齢 母数：' + resident_age_kansai_all + '(人)',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
                    max: 120,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_age_toyama',
          [
              resident_age_toyama_1, resident_age_toyama_2, resident_age_toyama_3, resident_age_toyama_4, resident_age_toyama_5, resident_age_toyama_6, resident_age_toyama_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '富山　居住地×年齢 母数：' + resident_age_toyama_all + '(人)',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
                    max: 80,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_age_others',
          [
              resident_age_others_1, resident_age_others_2, resident_age_others_3, resident_age_others_4, resident_age_others_5, resident_age_others_6, resident_age_others_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: 'その他　居住地×年齢 母数：' + resident_age_others_all + '(人)',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
                    max: 50,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );
    }
  });

});
