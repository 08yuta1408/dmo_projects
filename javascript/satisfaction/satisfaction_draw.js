var satisfaction_gift = [0, 0, 0, 0, 0];      //お土産：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_eat = [0, 0, 0, 0, 0];      //食べ物：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_trip = [0, 0, 0, 0, 0];      //旅行全体：index番号順に、大いに満足、満足、ふつう、不満、大いに不満

$(function(){
  //集計
  for (var i = 0; i < satisfaction_gift.length; i++) {
    satisfaction_gift[i] = satisfaction_gift_2016_october[i] + satisfaction_gift_2016_november[i] + satisfaction_gift_2016_december[i] + satisfaction_gift_2017_january[i] + satisfaction_gift_feb[i] + satisfaction_gift_march[i] + satisfaction_gift_april[i] + satisfaction_gift_may[i] + satisfaction_gift_june[i] + satisfaction_gift_2017_july[i] + satisfaction_gift_2017_august[i];
  }
  for (var i = 0; i < satisfaction_eat.length; i++) {
    satisfaction_eat[i] = satisfaction_eat_2016_october[i] + satisfaction_eat_2016_november[i] + satisfaction_eat_2016_december[i] + satisfaction_eat_2017_january[i] + satisfaction_eat_feb[i] + satisfaction_eat_march[i] + satisfaction_eat_april[i] + satisfaction_eat_may[i] + satisfaction_eat_june[i] + satisfaction_eat_2017_july[i] + satisfaction_eat_2017_august[i];
  }
  for (var i = 0; i < satisfaction_trip.length; i++) {
    satisfaction_trip[i] = satisfaction_trip_2016_october[i] + satisfaction_trip_2016_november[i] + satisfaction_trip_2016_december[i] + satisfaction_trip_2017_january[i] + satisfaction_trip_feb[i] + satisfaction_trip_march[i] + satisfaction_trip_april[i] + satisfaction_trip_may[i] + satisfaction_trip_june[i] + satisfaction_trip_2017_july[i] + satisfaction_trip_2017_august[i];
  }

  //集計結果コンソール
  // console.log("---お土産満足度----");
  // for (var i = 0; i < satisfaction_gift.length; i++) {
  //   console.log(satisfaction_gift[i]);
  // }
  // console.log("---飲食満足度----");
  // for (var i = 0; i < satisfaction_eat.length; i++) {
  //   console.log(satisfaction_eat[i]);
  // }
  // console.log("---旅行全体満足度----");
  // for (var i = 0; i < satisfaction_trip.length; i++) {
  //   console.log(satisfaction_trip[i]);
  // }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'satisfaction_gift_sousu',

        [
            [
                //ここにデータの値を入力
                [ '大いに満足:' + satisfaction_gift[0] + '人', satisfaction_gift[0] ],
                [ '満足:' + satisfaction_gift[1] + '人', satisfaction_gift[1] ],
                [ 'ふつう:' + satisfaction_gift[2] + '人', satisfaction_gift[2] ],
                [ '不満:' + satisfaction_gift[3] + '人', satisfaction_gift[3] ],
                [ '大いに不満:' + satisfaction_gift[4] + '人', satisfaction_gift[4] ],
            ]
        ],
        {
            title: {
                text: 'お土産満足度 / 総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#D8D8D8'],

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
                location: 'e',
                rendererOptions: {
                    numberRows: 5
                },
            }
        }
    );

  jQuery . jqplot(
        'satisfaction_eat_sousu',

        [
            [
                //ここにデータの値を入力
                [ '大いに満足:' + satisfaction_eat[0] + '人', satisfaction_eat[0] ],
                [ '満足:' + satisfaction_eat[1] + '人', satisfaction_eat[1] ],
                [ 'ふつう:' + satisfaction_eat[2] + '人', satisfaction_eat[2] ],
                [ '不満:' + satisfaction_eat[3] + '人', satisfaction_eat[3] ],
                [ '大いに不満:' + satisfaction_eat[4] + '人', satisfaction_eat[4] ],
            ]
        ],
        {
            title: {
                text: '飲食満足度 / 総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#D8D8D8'],

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
                location: 'e',
                rendererOptions: {
                    numberRows: 5
                },
            }
        }
    );

  jQuery . jqplot(
        'satisfaction_trip_sousu',

        [
            [
                //ここにデータの値を入力
                [ '大いに満足:' + satisfaction_trip[0] + '人', satisfaction_trip[0] ],
                [ '満足:' + satisfaction_trip[1] + '人', satisfaction_trip[1] ],
                [ 'ふつう:' + satisfaction_trip[2] + '人', satisfaction_trip[2] ],
                [ '不満:' + satisfaction_trip[3] + '人', satisfaction_trip[3] ],
                [ '大いに不満:' + satisfaction_trip[4] + '人', satisfaction_trip[4] ],
            ]
        ],
        {
            title: {
                text: '旅行全体満足度 / 総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#D8D8D8'],

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
                location: 'e',
                rendererOptions: {
                    numberRows: 5
                },
            }
        }
    );

  //総数ボタンを押した
  $('#sosu').click(function(){
    $('.gragh').hide();
    $('#satisfaction_gift_sousu').fadeIn(500);
    $('#satisfaction_eat_sousu').fadeIn(500);
    $('#satisfaction_trip_sousu').fadeIn(500);
  });

  satisfaction_gift_1 = [ [satisfaction_gift_2016_october[0], 1], [satisfaction_gift_2016_november[0], 2], [satisfaction_gift_2016_december[0], 3], [satisfaction_gift_2017_january[0], 4], [satisfaction_gift_feb[0], 5], [satisfaction_gift_march[0], 6], [satisfaction_gift_april[0], 7], [satisfaction_gift_may[0], 8], [satisfaction_gift_june[0], 9], [satisfaction_gift_2017_july[0], 10], [satisfaction_gift_2017_august[0], 11] ];
  satisfaction_gift_2 = [ [satisfaction_gift_2016_october[1], 1], [satisfaction_gift_2016_november[1], 2], [satisfaction_gift_2016_december[1], 3], [satisfaction_gift_2017_january[1], 4], [satisfaction_gift_feb[1], 5], [satisfaction_gift_march[1], 6], [satisfaction_gift_april[1], 7], [satisfaction_gift_may[1], 8], [satisfaction_gift_june[1], 9], [satisfaction_gift_2017_july[1], 10], [satisfaction_gift_2017_august[1], 11] ];
  satisfaction_gift_3 = [ [satisfaction_gift_2016_october[2], 1], [satisfaction_gift_2016_november[2], 2], [satisfaction_gift_2016_december[2], 3], [satisfaction_gift_2017_january[2], 4], [satisfaction_gift_feb[2], 5], [satisfaction_gift_march[2], 6], [satisfaction_gift_april[2], 7], [satisfaction_gift_may[2], 8], [satisfaction_gift_june[2], 9], [satisfaction_gift_2017_july[2], 10], [satisfaction_gift_2017_august[2], 11] ];
  satisfaction_gift_4 = [ [satisfaction_gift_2016_october[3], 1], [satisfaction_gift_2016_november[3], 2], [satisfaction_gift_2016_december[3], 3], [satisfaction_gift_2017_january[3], 4], [satisfaction_gift_feb[3], 5], [satisfaction_gift_march[3], 6], [satisfaction_gift_april[3], 7], [satisfaction_gift_may[3], 8], [satisfaction_gift_june[3], 9], [satisfaction_gift_2017_july[3], 10], [satisfaction_gift_2017_august[3], 11] ];
  satisfaction_gift_5 = [ [satisfaction_gift_2016_october[4], 1], [satisfaction_gift_2016_november[4], 2], [satisfaction_gift_2016_december[4], 3], [satisfaction_gift_2017_january[4], 4], [satisfaction_gift_feb[4], 5], [satisfaction_gift_march[4], 6], [satisfaction_gift_april[4], 7], [satisfaction_gift_may[4], 8], [satisfaction_gift_june[4], 9], [satisfaction_gift_2017_july[4], 10], [satisfaction_gift_2017_august[4], 11] ];

  satisfaction_eat_1 = [ [satisfaction_eat_2016_october[0], 1], [satisfaction_eat_2016_november[0], 2], [satisfaction_eat_2016_december[0], 3], [satisfaction_eat_2017_january[0], 4], [satisfaction_eat_feb[0], 5], [satisfaction_eat_march[0], 6], [satisfaction_eat_april[0], 7], [satisfaction_eat_may[0], 8], [satisfaction_eat_june[0], 9], [satisfaction_eat_2017_july[0], 10], [satisfaction_eat_2017_august[0], 11] ];
  satisfaction_eat_2 = [ [satisfaction_eat_2016_october[1], 1], [satisfaction_eat_2016_november[1], 2], [satisfaction_eat_2016_december[1], 3], [satisfaction_eat_2017_january[1], 4], [satisfaction_eat_feb[1], 5], [satisfaction_eat_march[1], 6], [satisfaction_eat_april[1], 7], [satisfaction_eat_may[1], 8], [satisfaction_eat_june[1], 9], [satisfaction_eat_2017_july[1], 10], [satisfaction_eat_2017_august[1], 11] ];
  satisfaction_eat_3 = [ [satisfaction_eat_2016_october[2], 1], [satisfaction_eat_2016_november[2], 2], [satisfaction_eat_2016_december[2], 3], [satisfaction_eat_2017_january[2], 4], [satisfaction_eat_feb[2], 5], [satisfaction_eat_march[2], 6], [satisfaction_eat_april[2], 7], [satisfaction_eat_may[2], 8], [satisfaction_eat_june[2], 9], [satisfaction_eat_2017_july[2], 10], [satisfaction_eat_2017_august[2], 11] ];
  satisfaction_eat_4 = [ [satisfaction_eat_2016_october[3], 1], [satisfaction_eat_2016_november[3], 2], [satisfaction_eat_2016_december[3], 3], [satisfaction_eat_2017_january[3], 4], [satisfaction_eat_feb[3], 5], [satisfaction_eat_march[3], 6], [satisfaction_eat_april[3], 7], [satisfaction_eat_may[3], 8], [satisfaction_eat_june[3], 9], [satisfaction_eat_2017_july[3], 10], [satisfaction_eat_2017_august[3], 11] ];
  satisfaction_eat_5 = [ [satisfaction_eat_2016_october[4], 1], [satisfaction_eat_2016_november[4], 2], [satisfaction_eat_2016_december[4], 3], [satisfaction_eat_2017_january[4], 4], [satisfaction_eat_feb[4], 5], [satisfaction_eat_march[4], 6], [satisfaction_eat_april[4], 7], [satisfaction_eat_may[4], 8], [satisfaction_eat_june[4], 9], [satisfaction_eat_2017_july[4], 10], [satisfaction_eat_2017_august[4], 11] ];

  satisfaction_trip_1 = [ [satisfaction_trip_2016_october[0], 1], [satisfaction_trip_2016_november[0], 2], [satisfaction_trip_2016_december[0], 3], [satisfaction_trip_2017_january[0], 4], [satisfaction_trip_feb[0], 5], [satisfaction_trip_march[0], 6], [satisfaction_trip_april[0], 7], [satisfaction_trip_may[0], 8], [satisfaction_trip_june[0], 9], [satisfaction_trip_2017_july[0], 10], [satisfaction_trip_2017_august[0], 11] ];
  satisfaction_trip_2 = [ [satisfaction_trip_2016_october[1], 1], [satisfaction_trip_2016_november[1], 2], [satisfaction_trip_2016_december[1], 3], [satisfaction_trip_2017_january[1], 4], [satisfaction_trip_feb[1], 5], [satisfaction_trip_march[1], 6], [satisfaction_trip_april[1], 7], [satisfaction_trip_may[1], 8], [satisfaction_trip_june[1], 9], [satisfaction_trip_2017_july[1], 10], [satisfaction_trip_2017_august[1], 11] ];
  satisfaction_trip_3 = [ [satisfaction_trip_2016_october[2], 1], [satisfaction_trip_2016_november[2], 2], [satisfaction_trip_2016_december[2], 3], [satisfaction_trip_2017_january[2], 4], [satisfaction_trip_feb[2], 5], [satisfaction_trip_march[2], 6], [satisfaction_trip_april[2], 7], [satisfaction_trip_may[2], 8], [satisfaction_trip_june[2], 9], [satisfaction_trip_2017_july[2], 10], [satisfaction_trip_2017_august[2], 11] ];
  satisfaction_trip_4 = [ [satisfaction_trip_2016_october[3], 1], [satisfaction_trip_2016_november[3], 2], [satisfaction_trip_2016_december[3], 3], [satisfaction_trip_2017_january[3], 4], [satisfaction_trip_feb[3], 5], [satisfaction_trip_march[3], 6], [satisfaction_trip_april[3], 7], [satisfaction_trip_may[3], 8], [satisfaction_trip_june[3], 9], [satisfaction_trip_2017_july[3], 10], [satisfaction_trip_2017_august[3], 11] ];
  satisfaction_trip_5 = [ [satisfaction_trip_2016_october[4], 1], [satisfaction_trip_2016_november[4], 2], [satisfaction_trip_2016_december[4], 3], [satisfaction_trip_2017_january[4], 4], [satisfaction_trip_feb[4], 5], [satisfaction_trip_march[4], 6], [satisfaction_trip_april[4], 7], [satisfaction_trip_may[4], 8], [satisfaction_trip_june[4], 9], [satisfaction_trip_2017_july[4], 10], [satisfaction_trip_2017_august[4], 11] ];

  yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

  var button_count = 0;
  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#satisfaction_gift_month').fadeIn(500);
    $('#satisfaction_eat_month').fadeIn(500);
    $('#satisfaction_trip_month').fadeIn(500);

    if(button_count == 1){
      jQuery . jqplot(
          'satisfaction_gift_month',
          [
              satisfaction_gift_1, satisfaction_gift_2, satisfaction_gift_3, satisfaction_gift_4, satisfaction_gift_5

          ],
          {
              title: {
                  text: 'お土産満足度 / 月別',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#D8D8D8'],

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
                  { label: '大いに満足' },
                  { label: '満足' },
                  { label: 'ふつう' },
                  { label: '不満' },
                  { label: '大いに不満' }

              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'e',
                  // location: 'e',
                  rendererOptions: {
                      numberRows: 1
                  },
              },

              axes: {
                  xaxis:{
                    // max: 700,
                    label: '人数',
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'satisfaction_eat_month',
          [
              satisfaction_eat_1, satisfaction_eat_2, satisfaction_eat_3, satisfaction_eat_4, satisfaction_eat_5

          ],
          {
              title: {
                  text: '飲食満足度 / 月別',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#D8D8D8'],

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
                  { label: '大いに満足' },
                  { label: '満足' },
                  { label: 'ふつう' },
                  { label: '不満' },
                  { label: '大いに不満' }

              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'e',
                  // location: 'e',
                  rendererOptions: {
                      numberRows: 1
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                  },

                  yaxis: {
                      ticks: yticks,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'satisfaction_trip_month',
          [
              satisfaction_trip_1, satisfaction_trip_2, satisfaction_trip_3, satisfaction_trip_4, satisfaction_trip_5

          ],
          {
              title: {
                  text: '旅行全体満足度 / 月別',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#D8D8D8'],

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
                  { label: '大いに満足' },
                  { label: '満足' },
                  { label: 'ふつう' },
                  { label: '不満' },
                  { label: '大いに不満' }

              ],

              legend: {
                  show: true,
                  // placement: 'outside',
                  location: 'e',
                  // location: 'e',
                  rendererOptions: {
                      numberRows: 1
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
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
