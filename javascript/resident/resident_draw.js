$(function(){
  resident_all = [0, 0, 0, 0, 0];     //index番号順に、2月・3月・4月・5月・6月


  for (var i = 0; i < resident_all.length; i++) {
    switch (i) {
      case 0:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];
        break;

      case 1:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

      case 2:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

      case 3:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

      case 4:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

    }
  }

  // for (var i = 0; i < resident_all.length; i++) {
  //   console.log(resident_all[i]);
  // }

  console.log(resident_all[0]);


  //居住地の総数を描画する
  jQuery . jqplot(
        'resident_sousu',
        [
            [
                [ '関東: ' + resident_all[0] + '人', resident_all[0] ],
                [ '中部: ' + resident_all[1] + '人', resident_all[1] ],
                [ '関西: ' + resident_all[2] + '人', resident_all[2] ],
                [ '富山県: ' + resident_all[3] + '人', resident_all[3] ],
                [ 'その他: ' + resident_all[4] + '人', resident_all[4] ]
            ]
        ],
        {
            title: {
                text: '居住地/総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F78181', '#F7BE81', '#BEF781', '#81DAF5', '#D0A9F5' ],

            seriesDefaults: {
                renderer: jQuery . jqplot . PieRenderer,
                rendererOptions: {
                    padding: 5,
                    showDataLabels: true,
                    startAngle: -90,
                }
            },
            legend: {
                show: true,
                location: 's',
                rendererOptions: {
                    numberRows: 1
                },
            }
        }
    );
  //総数ボタンを押した
  $('#sosu').click(function(){
    $('.gragh').hide();
    $('#resident_sousu').show();
  });

  //関東
  resident_kanto_1 = [[resident_feb_kanto[0], 1], [resident_march_kanto[0], 2],  [resident_april_kanto[0], 3],  [resident_may_kanto[0], 4],  [resident_june_kanto[0], 5] ];
  resident_kanto_2 = [[resident_feb_kanto[1], 1], [resident_march_kanto[1], 2],  [resident_april_kanto[1], 3],  [resident_may_kanto[1], 4],  [resident_june_kanto[1], 5] ];
  resident_kanto_3 = [[resident_feb_kanto[2], 1], [resident_march_kanto[2], 2],  [resident_april_kanto[2], 3],  [resident_may_kanto[2], 4],  [resident_june_kanto[2], 5] ];
  resident_kanto_4 = [[resident_feb_kanto[3], 1], [resident_march_kanto[3], 2],  [resident_april_kanto[3], 3],  [resident_may_kanto[3], 4],  [resident_june_kanto[3], 5] ];
  resident_kanto_5 = [[resident_feb_kanto[4], 1], [resident_march_kanto[4], 2],  [resident_april_kanto[4], 3],  [resident_may_kanto[4], 4],  [resident_june_kanto[4], 5] ];
  resident_kanto_6 = [[resident_feb_kanto[5], 1], [resident_march_kanto[5], 2],  [resident_april_kanto[5], 3],  [resident_may_kanto[5], 4],  [resident_june_kanto[5], 5] ];
  resident_kanto_7 = [[resident_feb_kanto[6], 1], [resident_march_kanto[6], 2],  [resident_april_kanto[6], 3],  [resident_may_kanto[6], 4],  [resident_june_kanto[6], 5] ];

  //中部
  resident_tyubu_1 = [[resident_feb_tyubu[0], 1], [resident_march_tyubu[0], 2],  [resident_april_tyubu[0], 3],  [resident_may_tyubu[0], 4],  [resident_june_tyubu[0], 5] ];
  resident_tyubu_2 = [[resident_feb_tyubu[1], 1], [resident_march_tyubu[1], 2],  [resident_april_tyubu[1], 3],  [resident_may_tyubu[1], 4],  [resident_june_tyubu[1], 5] ];
  resident_tyubu_3 = [[resident_feb_tyubu[2], 1], [resident_march_tyubu[2], 2],  [resident_april_tyubu[2], 3],  [resident_may_tyubu[2], 4],  [resident_june_tyubu[2], 5] ];
  resident_tyubu_4 = [[resident_feb_tyubu[3], 1], [resident_march_tyubu[3], 2],  [resident_april_tyubu[3], 3],  [resident_may_tyubu[3], 4],  [resident_june_tyubu[3], 5] ];
  resident_tyubu_5 = [[resident_feb_tyubu[4], 1], [resident_march_tyubu[4], 2],  [resident_april_tyubu[4], 3],  [resident_may_tyubu[4], 4],  [resident_june_tyubu[4], 5] ];
  resident_tyubu_6 = [[resident_feb_tyubu[5], 1], [resident_march_tyubu[5], 2],  [resident_april_tyubu[5], 3],  [resident_may_tyubu[5], 4],  [resident_june_tyubu[5], 5] ];
  resident_tyubu_7 = [[resident_feb_tyubu[6], 1], [resident_march_tyubu[6], 2],  [resident_april_tyubu[6], 3],  [resident_may_tyubu[6], 4],  [resident_june_tyubu[6], 5] ];

  //関西
  resident_kansai_1 = [[resident_feb_kansai[0], 1], [resident_march_kansai[0], 2],  [resident_april_kansai[0], 3],  [resident_may_kansai[0], 4],  [resident_june_kansai[0], 5] ];
  resident_kansai_2 = [[resident_feb_kansai[1], 1], [resident_march_kansai[1], 2],  [resident_april_kansai[1], 3],  [resident_may_kansai[1], 4],  [resident_june_kansai[1], 5] ];
  resident_kansai_3 = [[resident_feb_kansai[2], 1], [resident_march_kansai[2], 2],  [resident_april_kansai[2], 3],  [resident_may_kansai[2], 4],  [resident_june_kansai[2], 5] ];
  resident_kansai_4 = [[resident_feb_kansai[3], 1], [resident_march_kansai[3], 2],  [resident_april_kansai[3], 3],  [resident_may_kansai[3], 4],  [resident_june_kansai[3], 5] ];
  resident_kansai_5 = [[resident_feb_kansai[4], 1], [resident_march_kansai[4], 2],  [resident_april_kansai[4], 3],  [resident_may_kansai[4], 4],  [resident_june_kansai[4], 5] ];
  resident_kansai_6 = [[resident_feb_kansai[5], 1], [resident_march_kansai[5], 2],  [resident_april_kansai[5], 3],  [resident_may_kansai[5], 4],  [resident_june_kansai[5], 5] ];
  resident_kansai_7 = [[resident_feb_kansai[6], 1], [resident_march_kansai[6], 2],  [resident_april_kansai[6], 3],  [resident_may_kansai[6], 4],  [resident_june_kansai[6], 5] ];

  //富山
  resident_toyama_1 = [[resident_feb_toyama[0], 1], [resident_march_toyama[0], 2],  [resident_april_toyama[0], 3],  [resident_may_toyama[0], 4],  [resident_june_toyama[0], 5] ];
  resident_toyama_2 = [[resident_feb_toyama[1], 1], [resident_march_toyama[1], 2],  [resident_april_toyama[1], 3],  [resident_may_toyama[1], 4],  [resident_june_toyama[1], 5] ];
  resident_toyama_3 = [[resident_feb_toyama[2], 1], [resident_march_toyama[2], 2],  [resident_april_toyama[2], 3],  [resident_may_toyama[2], 4],  [resident_june_toyama[2], 5] ];
  resident_toyama_4 = [[resident_feb_toyama[3], 1], [resident_march_toyama[3], 2],  [resident_april_toyama[3], 3],  [resident_may_toyama[3], 4],  [resident_june_toyama[3], 5] ];
  resident_toyama_5 = [[resident_feb_toyama[4], 1], [resident_march_toyama[4], 2],  [resident_april_toyama[4], 3],  [resident_may_toyama[4], 4],  [resident_june_toyama[4], 5] ];
  resident_toyama_6 = [[resident_feb_toyama[5], 1], [resident_march_toyama[5], 2],  [resident_april_toyama[5], 3],  [resident_may_toyama[5], 4],  [resident_june_toyama[5], 5] ];
  resident_toyama_7 = [[resident_feb_toyama[6], 1], [resident_march_toyama[6], 2],  [resident_april_toyama[6], 3],  [resident_may_toyama[6], 4],  [resident_june_toyama[6], 5] ];

  //その他
  resident_others_1 = [[resident_feb_others[0], 1], [resident_march_others[0], 2],  [resident_april_others[0], 3],  [resident_may_others[0], 4],  [resident_june_others[0], 5] ];
  resident_others_2 = [[resident_feb_others[1], 1], [resident_march_others[1], 2],  [resident_april_others[1], 3],  [resident_may_others[1], 4],  [resident_june_others[1], 5] ];
  resident_others_3 = [[resident_feb_others[2], 1], [resident_march_others[2], 2],  [resident_april_others[2], 3],  [resident_may_others[2], 4],  [resident_june_others[2], 5] ];
  resident_others_4 = [[resident_feb_others[3], 1], [resident_march_others[3], 2],  [resident_april_others[3], 3],  [resident_may_others[3], 4],  [resident_june_others[3], 5] ];
  resident_others_5 = [[resident_feb_others[4], 1], [resident_march_others[4], 2],  [resident_april_others[4], 3],  [resident_may_others[4], 4],  [resident_june_others[4], 5] ];
  resident_others_6 = [[resident_feb_others[5], 1], [resident_march_others[5], 2],  [resident_april_others[5], 3],  [resident_may_others[5], 4],  [resident_june_others[5], 5] ];
  resident_others_7 = [[resident_feb_others[6], 1], [resident_march_others[6], 2],  [resident_april_others[6], 3],  [resident_may_others[6], 4],  [resident_june_others[6], 5] ];

  yticks_month = ['2月', '3月', '4月', '5月', '6月'];

  var button_count = 0;

  //月別ボタンを押す
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#resident_kanto').show();
    $('#resident_tyubu').show();
    $('#resident_kansai').show();
    $('#resident_toyama').show();
    $('#resident_others').show();

    // $('#resident_frequency_kanto').show();
    //button_countを考慮しないと、グラフの上にグラフが重なっていく
    if(button_count == 1){
      jQuery . jqplot(
          'resident_kanto',
          [
              resident_kanto_1, resident_kanto_2, resident_kanto_3, resident_kanto_4, resident_kanto_5, resident_kanto_6, resident_kanto_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '関東　居住地',
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
          'resident_tyubu',
          [
              resident_tyubu_1, resident_tyubu_2, resident_tyubu_3, resident_tyubu_4, resident_tyubu_5, resident_tyubu_6, resident_tyubu_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '中部 居住地',
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
          'resident_kansai',
          [
              resident_kansai_1, resident_kansai_2, resident_kansai_3, resident_kansai_4, resident_kansai_5, resident_kansai_6, resident_kansai_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '関西　居住地',
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
          'resident_toyama',
          [
              resident_toyama_1, resident_toyama_2, resident_toyama_3, resident_toyama_4, resident_toyama_5, resident_toyama_6, resident_toyama_7

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '富山　居住地',
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
          'resident_others',
          [
              resident_others_1, resident_others_2, resident_others_3, resident_others_4, resident_others_5, resident_others_6, resident_others_7

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
  })
});
