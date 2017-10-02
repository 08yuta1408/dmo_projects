$(function(){
  var stay_all = [0, 0, 0, 0];     //index番号順に、日帰り、１泊、２泊、３泊以上

  var stay_all_person = 0;     //母数の計算用

  //stay_allに全ての月別結果を代入する
  for (var i = 0; i < stay_all.length; i++) {
    stay_all[i] = stay_2016_october[i] + stay_2016_november[i] + stay_2016_december[i] + stay_2017_january[i] + stay_feb[i] + stay_march[i] + stay_april[i] + stay_may[i] +  stay_june[i] + stay_2017_july[i] + stay_2017_august[i];

  }

  for (var i = 0; i < stay_all.length; i++) {
    stay_all_person += stay_all[i];
  }

  // for (var i = 0; i < stay_all.length; i++) {
  //   console.log(((i + 1) * 10) + "代：" + stay_all[i] + "人");
  // }
  // console.log("母数：" + stay_all_person + "人");

  //デフォルトは、総数グラフ
  jQuery . jqplot(
      'stay_sousu',

      [
          [
              //ここにデータの値を入力
              [ '日帰り:' + stay_all[0] + '人', stay_all[0] ],
              [ '1泊:' + stay_all[1] + '人', stay_all[1] ],
              [ '2泊:' + stay_all[2] + '人', stay_all[2] ],
              [ '3泊以上:' + stay_all[3] + '人', stay_all[3] ],
          ]
      ],
      {
          title: {
              text: '宿泊有無/総数 母数：' + (stay_all_person) + '(人)',
              show: true,
              fontFamily: 'HGP行書体, Serif',
              fontSize: '20px',
              textAlign: 'center',
              textColor: 'black',
          },

          seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE'],

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
    $('#stay_sousu').show();
  });

  stay_1 = [ [stay_2016_october[0], 1], [stay_2016_november[0], 2], [stay_2016_december[0], 3], [stay_2017_january[0], 4], [stay_feb[0], 5], [stay_march[0], 6], [stay_april[0], 7], [stay_may[0], 8], [stay_june[0], 9], [stay_2017_july[0], 10], [stay_2017_august[0], 11] ];
  stay_2 = [ [stay_2016_october[1], 1], [stay_2016_november[1], 2], [stay_2016_december[1], 3], [stay_2017_january[1], 4], [stay_feb[1], 5], [stay_march[1], 6], [stay_april[1], 7], [stay_may[1], 8], [stay_june[1], 9], [stay_2017_july[1], 10], [stay_2017_august[1], 11] ];
  stay_3 = [ [stay_2016_october[2], 1], [stay_2016_november[2], 2], [stay_2016_december[2], 3], [stay_2017_january[2], 4], [stay_feb[2], 5], [stay_march[2], 6], [stay_april[2], 7], [stay_may[2], 8], [stay_june[2], 9], [stay_2017_july[2], 10], [stay_2017_august[2], 11] ];
  stay_4 = [ [stay_2016_october[3], 1], [stay_2016_november[3], 2], [stay_2016_december[3], 3], [stay_2017_january[3], 4], [stay_feb[3], 5], [stay_march[3], 6], [stay_april[3], 7], [stay_may[3], 8], [stay_june[3], 9], [stay_2017_july[3], 10], [stay_2017_august[3], 11] ];


  yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

  var button_count = 0;
  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#stay_month').show();

    if(button_count == 1){
      jQuery . jqplot(
          'stay_month',
          [
              stay_1, stay_2, stay_3, stay_4

          ],
          {
              title: {
                  text: '宿泊有無 / 月別',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE'],

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
                  { label: '日帰り' },
                  { label: '1泊' },
                  { label: '2泊' },
                  { label: '3泊以上' }

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
