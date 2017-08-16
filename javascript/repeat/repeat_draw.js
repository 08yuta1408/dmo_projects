$(function(){
  repeat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
  repeat_bosu = 0;  //母数

  //集計
  for (var i = 0; i < repeat.length; i++) {
    repeat[i] = repeat_feb[i] + repeat_march[i] + repeat_april[i] + repeat_may[i] + repeat_june[i];
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
                    numberRows: 2
                },
            }
        }
    );

    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#repeat_sousu').fadeIn(500);
    });

    repeat_1 = [ [repeat_feb[0], 1], [repeat_march[0], 2], [repeat_april[0], 3], [repeat_may[0], 4], [repeat_june[0], 5] ];
    repeat_2 = [ [repeat_feb[1], 1], [repeat_march[1], 2], [repeat_april[1], 3], [repeat_may[1], 4], [repeat_june[1], 5] ];
    repeat_3 = [ [repeat_feb[2], 1], [repeat_march[2], 2], [repeat_april[2], 3], [repeat_may[2], 4], [repeat_june[2], 5] ];
    repeat_4 = [ [repeat_feb[3], 1], [repeat_march[3], 2], [repeat_april[3], 3], [repeat_may[3], 4], [repeat_june[3], 5] ];
    repeat_5 = [ [repeat_feb[4], 1], [repeat_march[4], 2], [repeat_april[4], 3], [repeat_may[4], 4], [repeat_june[4], 5] ];
    repeat_6 = [ [repeat_feb[5], 1], [repeat_march[5], 2], [repeat_april[5], 3], [repeat_may[5], 4], [repeat_june[5], 5] ];
    repeat_7 = [ [repeat_feb[6], 1], [repeat_march[6], 2], [repeat_april[6], 3], [repeat_may[6], 4], [repeat_june[6], 5] ];
    repeat_8 = [ [repeat_feb[7], 1], [repeat_march[7], 2], [repeat_april[7], 3], [repeat_may[7], 4], [repeat_june[7], 5] ];
    repeat_9 = [ [repeat_feb[8], 1], [repeat_march[8], 2], [repeat_april[8], 3], [repeat_may[8], 4], [repeat_june[8], 5] ];
    repeat_10 = [ [repeat_feb[9], 1], [repeat_march[9], 2], [repeat_april[9], 3], [repeat_may[9], 4], [repeat_june[9], 5] ];
    repeat_11 = [ [repeat_feb[10], 1], [repeat_march[10], 2], [repeat_april[10], 3], [repeat_may[10], 4], [repeat_june[10], 5] ];
    yticks = ['2月', '3月', '4月', '5月', '6月'];

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
