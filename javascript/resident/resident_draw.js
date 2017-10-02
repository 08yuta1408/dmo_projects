$(function(){
  resident_all = [0, 0, 0, 0, 0];     //index番号順に、関東・中部・関西・富山県・その他
  resident_bosu = 0;


  for (var i = 0; i < resident_all.length; i++) {
      resident_all[i] = resident_all[i] + resident_2016_october[i] + resident_2016_november[i] + resident_2016_december[i] +  resident_2017_january[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i] +  resident_2017_july[i] +  resident_2017_august[i];
  }

  for(var i = 0; i < resident_all.length; i++){
    resident_bosu += resident_all[i];
  }
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
                text: '居住地/総数 ' + resident_bosu + "(人)",
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

  resident_1 = [ [resident_2016_october[0], 1], [resident_2016_november[0], 2], [resident_2016_december[0], 3], [resident_2017_january[0], 4], [resident_feb[0], 5], [resident_march[0], 6], [resident_april[0], 7], [resident_may[0], 8], [resident_june[0], 9], [resident_2017_july[0], 10], [resident_2017_august[0], 11] ];
  resident_2 = [ [resident_2016_october[1], 1], [resident_2016_november[1], 2], [resident_2016_december[1], 3], [resident_2017_january[1], 4], [resident_feb[1], 5], [resident_march[1], 6], [resident_april[1], 7], [resident_may[1], 8], [resident_june[1], 9], [resident_2017_july[1], 10], [resident_2017_august[1], 11] ];
  resident_3 = [ [resident_2016_october[2], 1], [resident_2016_november[2], 2], [resident_2016_december[2], 3], [resident_2017_january[2], 4], [resident_feb[2], 5], [resident_march[2], 6], [resident_april[2], 7], [resident_may[2], 8], [resident_june[2], 9], [resident_2017_july[2], 10], [resident_2017_august[2], 11] ];
  resident_4 = [ [resident_2016_october[3], 1], [resident_2016_november[3], 2], [resident_2016_december[3], 3], [resident_2017_january[3], 4], [resident_feb[3], 5], [resident_march[3], 6], [resident_april[3], 7], [resident_may[3], 8], [resident_june[3], 9], [resident_2017_july[3], 10], [resident_2017_august[3], 11] ];
  resident_5 = [ [resident_2016_october[4], 1], [resident_2016_november[4], 2], [resident_2016_december[4], 3], [resident_2017_january[4], 4], [resident_feb[4], 5], [resident_march[4], 6], [resident_april[4], 7], [resident_may[4], 8], [resident_june[4], 9], [resident_2017_july[4], 10], [resident_2017_august[4], 11] ];


  yticks_month = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

  var button_count = 0;

  // 月別ボタンを押す
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#resident_month').show();

    // $('#resident_frequency_kanto').show();
    //button_countを考慮しないと、グラフの上にグラフが重なっていく
    if(button_count == 1){
      jQuery . jqplot(
          'resident_month',
          [
            resident_1, resident_2, resident_3, resident_4, resident_5
          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                  text: '居住地 / 月別',
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
                  { label: '関東' },
                  { label: '中部' },
                  { label: '関西' },
                  { label: '富山県' },
                  { label: 'その他' }
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
                    // max: 250,
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
