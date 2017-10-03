$(function(){
  $(function(){
    var frequency_all = [0, 0, 0, 0, 0, 0, 0];

    var frequency_all_person = 0;     //母数の計算用

    //frequency_allに全ての月別結果を代入する
    for (var i = 0; i < frequency_all.length; i++) {
      frequency_all[i] = frequency_2016_october[i] + frequency_2016_november[i] + frequency_2016_december[i] + frequency_2017_january[i] + frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i] + frequency_2017_july[i] + frequency_2017_august[i];
    }

    //母数の計算
    for (var i = 0; i < frequency_all.length; i++) {
      frequency_all_person += frequency_all[i];
    }

    //デフォルトは、総数グラフ
    jQuery . jqplot(
          'frequency_sousu',

          [
              [
                  //ここにデータの値を入力
                  [ '毎月1回程度:' + frequency_all[0] + '人', frequency_all[0] ],
                  [ '年に4回以上:' + frequency_all[1] + '人', frequency_all[1] ],
                  [ '年に２〜3回程度:' + frequency_all[2] + '人', frequency_all[2] ],
                  [ '年に1回程度:' + frequency_all[3] + '人', frequency_all[3] ],
                  [ '2年に1回程度:' + frequency_all[4] + '人', frequency_all[4] ],
                  [ '3年に1回程度:' + frequency_all[5] + '人', frequency_all[5] ],
                  [ 'それ以下:' + frequency_all[6] + '人', frequency_all[6] ],
              ]
          ],
          {
              title: {
                  text: '国内旅行頻度/総数 母数：' + (frequency_all_person) + '(人)',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

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
                      numberRows: 2
                  },
              }
          }
      );

    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#frequency_sousu').show();
    });

    frequency_1 = [ [frequency_2016_october[0], 1], [frequency_2016_november[0], 2], [frequency_2016_december[0], 3], [frequency_2017_january[0], 4],  [frequency_feb[0], 5], [frequency_march[0], 6], [frequency_april[0], 7], [frequency_may[0], 8], [frequency_june[0], 9], [frequency_2017_july[0], 10], [frequency_2017_august[0], 11] ];
    frequency_2 = [ [frequency_2016_october[1], 1], [frequency_2016_november[1], 2], [frequency_2016_december[1], 3], [frequency_2017_january[1], 4],  [frequency_feb[1], 5], [frequency_march[1], 6], [frequency_april[1], 7], [frequency_may[1], 8], [frequency_june[1], 9], [frequency_2017_july[1], 10], [frequency_2017_august[1], 11] ];
    frequency_3 = [ [frequency_2016_october[2], 1], [frequency_2016_november[2], 2], [frequency_2016_december[2], 3], [frequency_2017_january[2], 4],  [frequency_feb[2], 5], [frequency_march[2], 6], [frequency_april[2], 7], [frequency_may[2], 8], [frequency_june[2], 9], [frequency_2017_july[2], 10], [frequency_2017_august[2], 11] ];
    frequency_4 = [ [frequency_2016_october[3], 1], [frequency_2016_november[3], 2], [frequency_2016_december[3], 3], [frequency_2017_january[3], 4],  [frequency_feb[3], 5], [frequency_march[3], 6], [frequency_april[3], 7], [frequency_may[3], 8], [frequency_june[3], 9], [frequency_2017_july[3], 10], [frequency_2017_august[3], 11] ];
    frequency_5 = [ [frequency_2016_october[4], 1], [frequency_2016_november[4], 2], [frequency_2016_december[4], 3], [frequency_2017_january[4], 4],  [frequency_feb[4], 5], [frequency_march[4], 6], [frequency_april[4], 7], [frequency_may[4], 8], [frequency_june[4], 9], [frequency_2017_july[4], 10], [frequency_2017_august[4], 11] ];
    frequency_6 = [ [frequency_2016_october[5], 1], [frequency_2016_november[5], 2], [frequency_2016_december[5], 3], [frequency_2017_january[5], 4],  [frequency_feb[5], 5], [frequency_march[5], 6], [frequency_april[5], 7], [frequency_may[5], 8], [frequency_june[5], 9], [frequency_2017_july[5], 10], [frequency_2017_august[5], 11] ];
    frequency_7 = [ [frequency_2016_october[6], 1], [frequency_2016_november[6], 2], [frequency_2016_december[6], 3], [frequency_2017_january[6], 4],  [frequency_feb[6], 5], [frequency_march[6], 6], [frequency_april[6], 7], [frequency_may[6], 8], [frequency_june[6], 9], [frequency_2017_july[6], 10], [frequency_2017_august[6], 11] ];

    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

    //月別ボタンを押した
    $('#month').click(function(){
      $('.gragh').hide();
      $('#frequency_month').show();

      jQuery . jqplot(
          'frequency_month',
          [
              frequency_1, frequency_2, frequency_3, frequency_4, frequency_5, frequency_6, frequency_7

          ],
          {
              title: {
                  text: '国内旅行頻度 / 月別',
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
                  // location: 'e',
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

    });
  });

});
