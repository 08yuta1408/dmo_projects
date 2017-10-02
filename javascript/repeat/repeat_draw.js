$(function(){
  repeat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
  repeat_bosu = 0;  //母数

  //集計
  for (var i = 0; i < repeat.length; i++) {
    repeat[i] = repeat_2016_october[i] + repeat_2016_november[i] + repeat_2016_december[i] + repeat_2017_january[i] + repeat_feb[i] + repeat_march[i] + repeat_april[i] + repeat_may[i] + repeat_june[i] + repeat_2017_july[i] + + repeat_2017_august[i];
  }
  //母数計算
  for (var i = 0; i < repeat.length; i++) {
    repeat_bosu += repeat[i];
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'repeat_sousu',

        [
            [
                //ここにデータの値を入力
                [ '富山県在住:' + repeat[0] + '人', repeat[0] ],
                [ '1回目:' + repeat[1] + '人', repeat[1] ],
                [ '2回目:' + repeat[2] + '人', repeat[2] ],
                [ '3回目:' + repeat[3] + '人', repeat[3] ],
                [ '4回目:' + repeat[4] + '人', repeat[4] ],
                [ '5回目:' + repeat[5] + '人', repeat[5] ],
                [ '6回目:' + repeat[6] + '人', repeat[6] ],
                [ '7回目:' + repeat[7] + '人', repeat[7] ],
                [ '8回目:' + repeat[8] + '人', repeat[8] ],
                [ '9回目:' + repeat[9] + '人', repeat[9] ],
                [ '10回目以上:' + repeat[10] + '人', repeat[10] ],


            ]
        ],
        {
            title: {
                text: 'リピート回数/総数 母数：' + (repeat_bosu) + '(人)',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F78181', '#F79F81', '#F7BE81', '#F5DA81', '#F3F781', '#D8F781', '#9FF781', '#81F7F3', '#819FF7', '#DA81F5', '#D8D8D8'],

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
                    numberRows: 3
                },
            }
        }
    );

    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#repeat_sousu').fadeIn(500);
    });

    repeat_1 = [ [repeat_2016_october[0], 1], [repeat_2016_november[0], 2], [repeat_2016_december[0], 3], [repeat_2017_january[0], 4], [repeat_feb[0], 5], [repeat_march[0], 6], [repeat_april[0], 7], [repeat_may[0], 8], [repeat_june[0], 9], [repeat_2017_july[0], 10], [repeat_2017_august[0], 11] ];
    repeat_2 = [ [repeat_2016_october[1], 1], [repeat_2016_november[1], 2], [repeat_2016_december[1], 3], [repeat_2017_january[1], 4], [repeat_feb[1], 5], [repeat_march[1], 6], [repeat_april[1], 7], [repeat_may[1], 8], [repeat_june[1], 9], [repeat_2017_july[1], 10], [repeat_2017_august[1], 11] ];
    repeat_3 = [ [repeat_2016_october[2], 1], [repeat_2016_november[2], 2], [repeat_2016_december[2], 3], [repeat_2017_january[2], 4], [repeat_feb[2], 5], [repeat_march[2], 6], [repeat_april[2], 7], [repeat_may[2], 8], [repeat_june[2], 9], [repeat_2017_july[2], 10], [repeat_2017_august[2], 11] ];
    repeat_4 = [ [repeat_2016_october[3], 1], [repeat_2016_november[3], 2], [repeat_2016_december[3], 3], [repeat_2017_january[3], 4], [repeat_feb[3], 5], [repeat_march[3], 6], [repeat_april[3], 7], [repeat_may[3], 8], [repeat_june[3], 9], [repeat_2017_july[3], 10], [repeat_2017_august[3], 11] ];
    repeat_5 = [ [repeat_2016_october[4], 1], [repeat_2016_november[4], 2], [repeat_2016_december[4], 3], [repeat_2017_january[4], 4], [repeat_feb[4], 5], [repeat_march[4], 6], [repeat_april[4], 7], [repeat_may[4], 8], [repeat_june[4], 9], [repeat_2017_july[4], 10], [repeat_2017_august[4], 11] ];
    repeat_6 = [ [repeat_2016_october[5], 1], [repeat_2016_november[5], 2], [repeat_2016_december[5], 3], [repeat_2017_january[5], 4], [repeat_feb[5], 5], [repeat_march[5], 6], [repeat_april[5], 7], [repeat_may[5], 8], [repeat_june[5], 9], [repeat_2017_july[5], 10], [repeat_2017_august[5], 11] ];
    repeat_7 = [ [repeat_2016_october[6], 1], [repeat_2016_november[6], 2], [repeat_2016_december[6], 3], [repeat_2017_january[6], 4], [repeat_feb[6], 5], [repeat_march[6], 6], [repeat_april[6], 7], [repeat_may[6], 8], [repeat_june[6], 9], [repeat_2017_july[6], 10], [repeat_2017_august[6], 11] ];
    repeat_8 = [ [repeat_2016_october[7], 1], [repeat_2016_november[7], 2], [repeat_2016_december[7], 3], [repeat_2017_january[7], 4], [repeat_feb[7], 5], [repeat_march[7], 6], [repeat_april[7], 7], [repeat_may[7], 8], [repeat_june[7], 9], [repeat_2017_july[7], 10], [repeat_2017_august[7], 11] ];
    repeat_9 = [ [repeat_2016_october[8], 1], [repeat_2016_november[8], 2], [repeat_2016_december[8], 3], [repeat_2017_january[8], 4], [repeat_feb[8], 5], [repeat_march[8], 6], [repeat_april[8], 7], [repeat_may[8], 8], [repeat_june[8], 9], [repeat_2017_july[8], 10], [repeat_2017_august[8], 11] ];
    repeat_10 = [ [repeat_2016_october[9], 1], [repeat_2016_november[9], 2], [repeat_2016_december[9], 3], [repeat_2017_january[9], 4], [repeat_feb[9], 5], [repeat_march[9], 6], [repeat_april[9], 7], [repeat_may[9], 8], [repeat_june[9], 9], [repeat_2017_july[9], 10], [repeat_2017_august[9], 11] ];
    repeat_11 = [ [repeat_2016_october[10], 1], [repeat_2016_november[10], 2], [repeat_2016_december[10], 3], [repeat_2017_january[10], 4], [repeat_feb[10], 5], [repeat_march[10], 6], [repeat_april[10], 7], [repeat_may[10], 8], [repeat_june[10], 9], [repeat_2017_july[10], 10], [repeat_2017_august[10], 11] ];

    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#repeat_month').fadeIn();

      if(button_count == 1){
        jQuery . jqplot(
            'repeat_month',
            [
              repeat_1, repeat_2, repeat_3, repeat_4, repeat_5, repeat_6, repeat_7, repeat_8, repeat_9, repeat_10, repeat_11
            ],
            {
                title: {
                    text: 'リピート回数/月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F78181', '#F79F81', '#F7BE81', '#F5DA81', '#F3F781', '#D8F781', '#9FF781', '#81F7F3', '#819FF7', '#DA81F5', '#D8D8D8'],

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
                    { label: '富山県在住' },
                    { label: '1回目' },
                    { label: '2回目' },
                    { label: '3回目' },
                    { label: '4回目' },
                    { label: '5回目' },
                    { label: '6回目' },
                    { label: '7回目' },
                    { label: '8回目' },
                    { label: '9回目' },
                    { label: '10回以上' }
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
