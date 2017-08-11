$(function(){
  //母数計算用
  var resident_frequency_all = 0;

  //2〜6月の集計結果をまとめるための変数
  var resident_frequency_kanto = [0, 0, 0, 0, 0, 0, 0];
  var resident_frequency_tyubu = [0, 0, 0, 0, 0, 0, 0];
  var resident_frequency_kansai = [0, 0, 0, 0, 0, 0, 0];
  var resident_frequency_toyama = [0, 0, 0, 0, 0, 0, 0];
  var resident_frequency_others = [0, 0, 0, 0, 0, 0, 0];

  //関東集計
  for (var i = 0; i < resident_frequency_kanto.length; i++) {
    resident_frequency_kanto[i] = resident_frequency_feb_kanto[i] + resident_frequency_march_kanto[i] + resident_frequency_april_kanto[i] + resident_frequency_may_kanto[i] + resident_frequency_june_kanto[i];
  }
  //中部集計
  for (var i = 0; i < resident_frequency_tyubu.length; i++) {
    resident_frequency_tyubu[i] = resident_frequency_feb_tyubu[i] + resident_frequency_march_tyubu[i] + resident_frequency_april_tyubu[i] + resident_frequency_may_tyubu[i] + resident_frequency_june_tyubu[i];
  }
  //関西集計
  for (var i = 0; i < resident_frequency_kansai.length; i++) {
    resident_frequency_kansai[i] = resident_frequency_feb_kansai[i] + resident_frequency_march_kansai[i] + resident_frequency_april_kansai[i] + resident_frequency_may_kansai[i] + resident_frequency_june_kansai[i];
  }
  //富山集計
  for (var i = 0; i < resident_frequency_toyama.length; i++) {
    resident_frequency_toyama[i] = resident_frequency_feb_toyama[i] + resident_frequency_march_toyama[i] + resident_frequency_april_toyama[i] + resident_frequency_may_toyama[i] + resident_frequency_june_toyama[i];
  }
  //その他集計
  for (var i = 0; i < resident_frequency_others.length; i++) {
    resident_frequency_others[i] = resident_frequency_feb_others[i] + resident_frequency_march_others[i] + resident_frequency_april_others[i] + resident_frequency_may_others[i] + resident_frequency_june_others[i];
  }

  //母数の算出
  for(var i = 0; i < 7; i++){
    resident_frequency_all = resident_frequency_all + resident_frequency_kanto[i] + resident_frequency_tyubu[i] + resident_frequency_kansai[i] + resident_frequency_toyama[i] + resident_frequency_others[i];
  }

  console.log("----関東集計(2~6月)----");
  for (var i = 0; i < resident_frequency_kanto.length; i++) {
    console.log(resident_frequency_kanto[i]);
  }


  // frequency_1 = [ [frequency_feb[0], 1], [frequency_march[0], 2], [frequency_april[0], 3], [frequency_may[0], 4], [frequency_june[0], 5] ];

  resident_frequency_1 = [ [resident_frequency_others[0], 1], [resident_frequency_toyama[0], 2], [resident_frequency_kansai[0], 3], [resident_frequency_tyubu[0], 4], [resident_frequency_kansai[0], 5] ];
  resident_frequency_2 = [ [resident_frequency_others[1], 1], [resident_frequency_toyama[1], 2], [resident_frequency_kansai[1], 3], [resident_frequency_tyubu[1], 4], [resident_frequency_kansai[1], 5] ];
  resident_frequency_3 = [ [resident_frequency_others[2], 1], [resident_frequency_toyama[2], 2], [resident_frequency_kansai[2], 3], [resident_frequency_tyubu[2], 4], [resident_frequency_kansai[2], 5] ];
  resident_frequency_4 = [ [resident_frequency_others[3], 1], [resident_frequency_toyama[3], 2], [resident_frequency_kansai[3], 3], [resident_frequency_tyubu[3], 4], [resident_frequency_kansai[3], 5] ];
  resident_frequency_5 = [ [resident_frequency_others[4], 1], [resident_frequency_toyama[4], 2], [resident_frequency_kansai[4], 3], [resident_frequency_tyubu[4], 4], [resident_frequency_kansai[4], 5] ];
  resident_frequency_6 = [ [resident_frequency_others[5], 1], [resident_frequency_toyama[5], 2], [resident_frequency_kansai[5], 3], [resident_frequency_tyubu[5], 4], [resident_frequency_kansai[5], 5] ];
  resident_frequency_7 = [ [resident_frequency_others[6], 1], [resident_frequency_toyama[6], 2], [resident_frequency_kansai[6], 3], [resident_frequency_tyubu[6], 4], [resident_frequency_kansai[6], 5] ];

  var yticks = [ 'その他', '関東', '中部', '関西', '富山'];
    // yticks = ['2月', '3月', '4月', '5月', '6月'];

  console.log("--------");
  for (var i = 0; i < resident_frequency_1.length; i++) {
    console.log(resident_frequency_1[i]);
  }

  //デフォルトで総数グラフを表示
  jQuery . jqplot(
      'resident_frequency_sousu',
      [
          resident_frequency_1, resident_frequency_2, resident_frequency_3, resident_frequency_4, resident_frequency_5, resident_frequency_6, resident_frequency_7

      ],
      {
          title: {
              text: '居住地×国内旅行頻度/総数 母数：' + (resident_frequency_all) + '(人)',
              show: true,
              fontFamily: 'HGP行書体, Serif',
              fontSize: '20px',
              textAlign: 'center',
              textColor: 'black',
          },

          stackSeries: true,

          seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

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
              { label: '毎月1回程度' },
              { label: '年に4回程度' },
              { label: '年に２〜3回程度' },
              { label: '年に1回程度' },
              { label: '2年に1回程度' },
              { label: '3年に1回程度' },
              { label: 'それ以下' }
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
    $('#resident_frequency_sousu').show();
  });

  //関東
  resident_frequency_kanto_1 = [[resident_frequency_feb_kanto[0], 1], [resident_frequency_march_kanto[0], 2],  [resident_frequency_april_kanto[0], 3],  [resident_frequency_may_kanto[0], 4],  [resident_frequency_june_kanto[0], 5] ];
  resident_frequency_kanto_2 = [[resident_frequency_feb_kanto[1], 1], [resident_frequency_march_kanto[1], 2],  [resident_frequency_april_kanto[1], 3],  [resident_frequency_may_kanto[1], 4],  [resident_frequency_june_kanto[1], 5] ];
  resident_frequency_kanto_3 = [[resident_frequency_feb_kanto[2], 1], [resident_frequency_march_kanto[2], 2],  [resident_frequency_april_kanto[2], 3],  [resident_frequency_may_kanto[2], 4],  [resident_frequency_june_kanto[2], 5] ];
  resident_frequency_kanto_4 = [[resident_frequency_feb_kanto[3], 1], [resident_frequency_march_kanto[3], 2],  [resident_frequency_april_kanto[3], 3],  [resident_frequency_may_kanto[3], 4],  [resident_frequency_june_kanto[3], 5] ];
  resident_frequency_kanto_5 = [[resident_frequency_feb_kanto[4], 1], [resident_frequency_march_kanto[4], 2],  [resident_frequency_april_kanto[4], 3],  [resident_frequency_may_kanto[4], 4],  [resident_frequency_june_kanto[4], 5] ];
  resident_frequency_kanto_6 = [[resident_frequency_feb_kanto[5], 1], [resident_frequency_march_kanto[5], 2],  [resident_frequency_april_kanto[5], 3],  [resident_frequency_may_kanto[5], 4],  [resident_frequency_june_kanto[5], 5] ];
  resident_frequency_kanto_7 = [[resident_frequency_feb_kanto[6], 1], [resident_frequency_march_kanto[6], 2],  [resident_frequency_april_kanto[6], 3],  [resident_frequency_may_kanto[6], 4],  [resident_frequency_june_kanto[6], 5] ];

  //中部
  resident_frequency_tyubu_1 = [[resident_frequency_feb_tyubu[0], 1], [resident_frequency_march_tyubu[0], 2],  [resident_frequency_april_tyubu[0], 3],  [resident_frequency_may_tyubu[0], 4],  [resident_frequency_june_tyubu[0], 5] ];
  resident_frequency_tyubu_2 = [[resident_frequency_feb_tyubu[1], 1], [resident_frequency_march_tyubu[1], 2],  [resident_frequency_april_tyubu[1], 3],  [resident_frequency_may_tyubu[1], 4],  [resident_frequency_june_tyubu[1], 5] ];
  resident_frequency_tyubu_3 = [[resident_frequency_feb_tyubu[2], 1], [resident_frequency_march_tyubu[2], 2],  [resident_frequency_april_tyubu[2], 3],  [resident_frequency_may_tyubu[2], 4],  [resident_frequency_june_tyubu[2], 5] ];
  resident_frequency_tyubu_4 = [[resident_frequency_feb_tyubu[3], 1], [resident_frequency_march_tyubu[3], 2],  [resident_frequency_april_tyubu[3], 3],  [resident_frequency_may_tyubu[3], 4],  [resident_frequency_june_tyubu[3], 5] ];
  resident_frequency_tyubu_5 = [[resident_frequency_feb_tyubu[4], 1], [resident_frequency_march_tyubu[4], 2],  [resident_frequency_april_tyubu[4], 3],  [resident_frequency_may_tyubu[4], 4],  [resident_frequency_june_tyubu[4], 5] ];
  resident_frequency_tyubu_6 = [[resident_frequency_feb_tyubu[5], 1], [resident_frequency_march_tyubu[5], 2],  [resident_frequency_april_tyubu[5], 3],  [resident_frequency_may_tyubu[5], 4],  [resident_frequency_june_tyubu[5], 5] ];
  resident_frequency_tyubu_7 = [[resident_frequency_feb_tyubu[6], 1], [resident_frequency_march_tyubu[6], 2],  [resident_frequency_april_tyubu[6], 3],  [resident_frequency_may_tyubu[6], 4],  [resident_frequency_june_tyubu[6], 5] ];

  //関西
  resident_frequency_kansai_1 = [[resident_frequency_feb_kansai[0], 1], [resident_frequency_march_kansai[0], 2],  [resident_frequency_april_kansai[0], 3],  [resident_frequency_may_kansai[0], 4],  [resident_frequency_june_kansai[0], 5] ];
  resident_frequency_kansai_2 = [[resident_frequency_feb_kansai[1], 1], [resident_frequency_march_kansai[1], 2],  [resident_frequency_april_kansai[1], 3],  [resident_frequency_may_kansai[1], 4],  [resident_frequency_june_kansai[1], 5] ];
  resident_frequency_kansai_3 = [[resident_frequency_feb_kansai[2], 1], [resident_frequency_march_kansai[2], 2],  [resident_frequency_april_kansai[2], 3],  [resident_frequency_may_kansai[2], 4],  [resident_frequency_june_kansai[2], 5] ];
  resident_frequency_kansai_4 = [[resident_frequency_feb_kansai[3], 1], [resident_frequency_march_kansai[3], 2],  [resident_frequency_april_kansai[3], 3],  [resident_frequency_may_kansai[3], 4],  [resident_frequency_june_kansai[3], 5] ];
  resident_frequency_kansai_5 = [[resident_frequency_feb_kansai[4], 1], [resident_frequency_march_kansai[4], 2],  [resident_frequency_april_kansai[4], 3],  [resident_frequency_may_kansai[4], 4],  [resident_frequency_june_kansai[4], 5] ];
  resident_frequency_kansai_6 = [[resident_frequency_feb_kansai[5], 1], [resident_frequency_march_kansai[5], 2],  [resident_frequency_april_kansai[5], 3],  [resident_frequency_may_kansai[5], 4],  [resident_frequency_june_kansai[5], 5] ];
  resident_frequency_kansai_7 = [[resident_frequency_feb_kansai[6], 1], [resident_frequency_march_kansai[6], 2],  [resident_frequency_april_kansai[6], 3],  [resident_frequency_may_kansai[6], 4],  [resident_frequency_june_kansai[6], 5] ];

  //富山
  resident_frequency_toyama_1 = [[resident_frequency_feb_toyama[0], 1], [resident_frequency_march_toyama[0], 2],  [resident_frequency_april_toyama[0], 3],  [resident_frequency_may_toyama[0], 4],  [resident_frequency_june_toyama[0], 5] ];
  resident_frequency_toyama_2 = [[resident_frequency_feb_toyama[1], 1], [resident_frequency_march_toyama[1], 2],  [resident_frequency_april_toyama[1], 3],  [resident_frequency_may_toyama[1], 4],  [resident_frequency_june_toyama[1], 5] ];
  resident_frequency_toyama_3 = [[resident_frequency_feb_toyama[2], 1], [resident_frequency_march_toyama[2], 2],  [resident_frequency_april_toyama[2], 3],  [resident_frequency_may_toyama[2], 4],  [resident_frequency_june_toyama[2], 5] ];
  resident_frequency_toyama_4 = [[resident_frequency_feb_toyama[3], 1], [resident_frequency_march_toyama[3], 2],  [resident_frequency_april_toyama[3], 3],  [resident_frequency_may_toyama[3], 4],  [resident_frequency_june_toyama[3], 5] ];
  resident_frequency_toyama_5 = [[resident_frequency_feb_toyama[4], 1], [resident_frequency_march_toyama[4], 2],  [resident_frequency_april_toyama[4], 3],  [resident_frequency_may_toyama[4], 4],  [resident_frequency_june_toyama[4], 5] ];
  resident_frequency_toyama_6 = [[resident_frequency_feb_toyama[5], 1], [resident_frequency_march_toyama[5], 2],  [resident_frequency_april_toyama[5], 3],  [resident_frequency_may_toyama[5], 4],  [resident_frequency_june_toyama[5], 5] ];
  resident_frequency_toyama_7 = [[resident_frequency_feb_toyama[6], 1], [resident_frequency_march_toyama[6], 2],  [resident_frequency_april_toyama[6], 3],  [resident_frequency_may_toyama[6], 4],  [resident_frequency_june_toyama[6], 5] ];

  //その他
  resident_frequency_others_1 = [[resident_frequency_feb_others[0], 1], [resident_frequency_march_others[0], 2],  [resident_frequency_april_others[0], 3],  [resident_frequency_may_others[0], 4],  [resident_frequency_june_others[0], 5] ];
  resident_frequency_others_2 = [[resident_frequency_feb_others[1], 1], [resident_frequency_march_others[1], 2],  [resident_frequency_april_others[1], 3],  [resident_frequency_may_others[1], 4],  [resident_frequency_june_others[1], 5] ];
  resident_frequency_others_3 = [[resident_frequency_feb_others[2], 1], [resident_frequency_march_others[2], 2],  [resident_frequency_april_others[2], 3],  [resident_frequency_may_others[2], 4],  [resident_frequency_june_others[2], 5] ];
  resident_frequency_others_4 = [[resident_frequency_feb_others[3], 1], [resident_frequency_march_others[3], 2],  [resident_frequency_april_others[3], 3],  [resident_frequency_may_others[3], 4],  [resident_frequency_june_others[3], 5] ];
  resident_frequency_others_5 = [[resident_frequency_feb_others[4], 1], [resident_frequency_march_others[4], 2],  [resident_frequency_april_others[4], 3],  [resident_frequency_may_others[4], 4],  [resident_frequency_june_others[4], 5] ];
  resident_frequency_others_6 = [[resident_frequency_feb_others[5], 1], [resident_frequency_march_others[5], 2],  [resident_frequency_april_others[5], 3],  [resident_frequency_may_others[5], 4],  [resident_frequency_june_others[5], 5] ];
  resident_frequency_others_7 = [[resident_frequency_feb_others[6], 1], [resident_frequency_march_others[6], 2],  [resident_frequency_april_others[6], 3],  [resident_frequency_may_others[6], 4],  [resident_frequency_june_others[6], 5] ];


  yticks_month = ['2月', '3月', '4月', '5月', '6月'];


  var button_count = 0;
  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#resident_frequency_kanto').show();
    $('#resident_frequency_tyubu').show();
    $('#resident_frequency_kansai').show();
    $('#resident_frequency_toyama').show();
    $('#resident_frequency_others').show();

    // $('#resident_frequency_kanto').show();
    //button_countを考慮しないと、グラフの上にグラフが重なっていく
    if(button_count == 1){
      jQuery . jqplot(
          'resident_frequency_kanto',
          [
              resident_frequency_kanto_1, resident_frequency_kanto_2, resident_frequency_kanto_3, resident_frequency_kanto_4, resident_frequency_kanto_5, resident_frequency_kanto_6, resident_frequency_kanto_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '関東　居住地×国内旅行頻度',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

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
                  { label: '毎月1回程度' },
                  { label: '年に4回程度' },
                  { label: '年に２〜3回程度' },
                  { label: '年に1回程度' },
                  { label: '2年に1回程度' },
                  { label: '3年に1回程度' },
                  { label: 'それ以下' }
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
          'resident_frequency_tyubu',
          [
              resident_frequency_tyubu_1, resident_frequency_tyubu_2, resident_frequency_tyubu_3, resident_frequency_tyubu_4, resident_frequency_tyubu_5, resident_frequency_tyubu_6, resident_frequency_tyubu_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '中部　居住地×国内旅行頻度',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

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
                  { label: '毎月1回程度' },
                  { label: '年に4回程度' },
                  { label: '年に２〜3回程度' },
                  { label: '年に1回程度' },
                  { label: '2年に1回程度' },
                  { label: '3年に1回程度' },
                  { label: 'それ以下' }
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
          'resident_frequency_kansai',
          [
              resident_frequency_kansai_1, resident_frequency_kansai_2, resident_frequency_kansai_3, resident_frequency_kansai_4, resident_frequency_kansai_5, resident_frequency_kansai_6, resident_frequency_kansai_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '関西　居住地×国内旅行頻度',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

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
                  { label: '毎月1回程度' },
                  { label: '年に4回程度' },
                  { label: '年に２〜3回程度' },
                  { label: '年に1回程度' },
                  { label: '2年に1回程度' },
                  { label: '3年に1回程度' },
                  { label: 'それ以下' }
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
          'resident_frequency_toyama',
          [
              resident_frequency_toyama_1, resident_frequency_toyama_2, resident_frequency_toyama_3, resident_frequency_toyama_4, resident_frequency_toyama_5, resident_frequency_toyama_6, resident_frequency_toyama_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '富山　居住地×国内旅行頻度',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

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
                  { label: '毎月1回程度' },
                  { label: '年に4回程度' },
                  { label: '年に２〜3回程度' },
                  { label: '年に1回程度' },
                  { label: '2年に1回程度' },
                  { label: '3年に1回程度' },
                  { label: 'それ以下' }
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
          'resident_frequency_others',
          [
              resident_frequency_others_1, resident_frequency_others_2, resident_frequency_others_3, resident_frequency_others_4, resident_frequency_others_5, resident_frequency_others_6, resident_frequency_others_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: 'その他　居住地×国内旅行頻度',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

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
                  { label: '毎月1回程度' },
                  { label: '年に4回程度' },
                  { label: '年に２〜3回程度' },
                  { label: '年に1回程度' },
                  { label: '2年に1回程度' },
                  { label: '3年に1回程度' },
                  { label: 'それ以下' }
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
