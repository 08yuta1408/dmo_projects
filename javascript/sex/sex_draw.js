$(function(){
  var sex_all_man = 0;
  var sex_all_woman = 0;

  //総数
  sex_all_man = man_2016_october + man_2016_november + man_2016_december + man_2017_january + man_feb + man_march + man_april + man_may + man_june + man_2017_july + man_2017_august;
  sex_all_woman = woman_2016_october + woman_2016_november + woman_2016_december + woman_2017_january + woman_feb + woman_march + woman_april + woman_may + woman_june + woman_2017_july + woman_2017_august;

  // console.log(sex_all_man);
  // console.log(sex_all_woman);

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'sex_sousu',

        [
            [
                //ここにデータの値を入力
                [ '男性:' + sex_all_man + '人', sex_all_man ],
                [ '女性:' + sex_all_woman + '人', sex_all_woman ],

            ]
        ],
        {
            title: {
                text: '性別/総数 母数：' + (sex_all_man + sex_all_woman) + '(人)',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#81DAF5', '#F78181' ],

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

    man_1 = [ [man_2016_october, 1], [man_2016_november, 2], [man_2016_december, 3], [man_2017_january, 4], [man_feb, 5], [man_march, 6], [man_april, 7], [man_may, 8], [man_june, 9], [man_2017_july, 10], [man_2017_august, 11] ];
    woman_1 = [ [woman_2016_october, 1], [woman_2016_november, 2], [woman_2016_december, 3], [woman_2017_january, 4], [woman_feb, 5], [woman_march, 6], [woman_april, 7], [woman_may, 8], [woman_june, 9], [woman_2017_july, 10], [woman_2017_august, 11] ];

    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

  //総数ボタンを押した
  $('#sosu').click(function(){
    $('.gragh').hide();
    $('#sex_sousu').show();
  });

  var button_count = 0;
  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#sex_month').fadeIn(500);

    if(button_count == 1){

      jQuery . jqplot(
          'sex_month',
          [
            man_1, woman_1
          ],
          {
              title: {
                  text: '性別　月別',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              stackSeries: true,

              seriesColors:[ '#2E9AFE','#F6D8CE'],

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
                  { label: '男性' },
                  { label: '女性' }
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
    }

  });

});
