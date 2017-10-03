$(function(){
  var traffic_to_toyama = [0, 0, 0, 0, 0, 0, 0, 0];   //index番号順に、飛行機、新幹線、自家用車、JR在来線、高速・路線バス、レンタカー、貸切バス、その他

  //集計
  for (var i = 0; i < traffic_to_toyama.length; i++) {
    traffic_to_toyama[i] = traffic_to_toyama_2016_october[i] + traffic_to_toyama_2016_november[i] + traffic_to_toyama_2016_december[i] + traffic_to_toyama_2017_january[i] + traffic_to_toyama_feb[i] + traffic_to_toyama_march[i] + traffic_to_toyama_april[i] + traffic_to_toyama_may[i] +  traffic_to_toyama_june[i] + traffic_to_toyama_2017_july[i] + traffic_to_toyama_2017_august[i];
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'traffic_to_toyama_sousu',

        [
            [
                //ここにデータの値を入力
                [ '飛行機:' + traffic_to_toyama[0] + '人', traffic_to_toyama[0] ],
                [ '新幹線:' + traffic_to_toyama[1] + '人', traffic_to_toyama[1] ],
                [ '自家用車:' + traffic_to_toyama[2] + '人', traffic_to_toyama[2] ],
                [ 'JR線在来線:' + traffic_to_toyama[3] + '人', traffic_to_toyama[3] ],
                [ '高速・路線バス:' + traffic_to_toyama[4] + '人', traffic_to_toyama[4] ],
                [ 'レンタカー:' + traffic_to_toyama[5] + '人', traffic_to_toyama[5] ],
                [ '貸切バス:' + traffic_to_toyama[6] + '人', traffic_to_toyama[6] ],
                [ 'その他:' + traffic_to_toyama[7] + '人', traffic_to_toyama[7] ],


            ]
        ],
        {
            title: {
                text: '富山県までの交通手段 /総数 ',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

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
      $('#traffic_to_toyama_sousu').fadeIn(500);
    });

    traffic_to_toyama_1 = [ [traffic_to_toyama_2016_october[0], 1], [traffic_to_toyama_2016_november[0], 2], [traffic_to_toyama_2016_december[0], 3], [traffic_to_toyama_2017_january[0], 4], [traffic_to_toyama_feb[0], 5], [traffic_to_toyama_march[0], 6], [traffic_to_toyama_april[0], 7], [traffic_to_toyama_may[0], 8], [traffic_to_toyama_june[0], 9], [traffic_to_toyama_2017_july[0], 10], [traffic_to_toyama_2017_august[0], 11] ];
    traffic_to_toyama_2 = [ [traffic_to_toyama_2016_october[1], 1], [traffic_to_toyama_2016_november[1], 2], [traffic_to_toyama_2016_december[1], 3], [traffic_to_toyama_2017_january[1], 4], [traffic_to_toyama_feb[1], 5], [traffic_to_toyama_march[1], 6], [traffic_to_toyama_april[1], 7], [traffic_to_toyama_may[1], 8], [traffic_to_toyama_june[1], 9], [traffic_to_toyama_2017_july[1], 10], [traffic_to_toyama_2017_august[1], 11] ];
    traffic_to_toyama_3 = [ [traffic_to_toyama_2016_october[2], 1], [traffic_to_toyama_2016_november[2], 2], [traffic_to_toyama_2016_december[2], 3], [traffic_to_toyama_2017_january[2], 4], [traffic_to_toyama_feb[2], 5], [traffic_to_toyama_march[2], 6], [traffic_to_toyama_april[2], 7], [traffic_to_toyama_may[2], 8], [traffic_to_toyama_june[2], 9], [traffic_to_toyama_2017_july[2], 10], [traffic_to_toyama_2017_august[2], 11] ];
    traffic_to_toyama_4 = [ [traffic_to_toyama_2016_october[3], 1], [traffic_to_toyama_2016_november[3], 2], [traffic_to_toyama_2016_december[3], 3], [traffic_to_toyama_2017_january[3], 4], [traffic_to_toyama_feb[3], 5], [traffic_to_toyama_march[3], 6], [traffic_to_toyama_april[3], 7], [traffic_to_toyama_may[3], 8], [traffic_to_toyama_june[3], 9], [traffic_to_toyama_2017_july[3], 10], [traffic_to_toyama_2017_august[3], 11] ];
    traffic_to_toyama_5 = [ [traffic_to_toyama_2016_october[4], 1], [traffic_to_toyama_2016_november[4], 2], [traffic_to_toyama_2016_december[4], 3], [traffic_to_toyama_2017_january[4], 4], [traffic_to_toyama_feb[4], 5], [traffic_to_toyama_march[4], 6], [traffic_to_toyama_april[4], 7], [traffic_to_toyama_may[4], 8], [traffic_to_toyama_june[4], 9], [traffic_to_toyama_2017_july[4], 10], [traffic_to_toyama_2017_august[4], 11] ];
    traffic_to_toyama_6 = [ [traffic_to_toyama_2016_october[5], 1], [traffic_to_toyama_2016_november[5], 2], [traffic_to_toyama_2016_december[5], 3], [traffic_to_toyama_2017_january[5], 4], [traffic_to_toyama_feb[5], 5], [traffic_to_toyama_march[5], 6], [traffic_to_toyama_april[5], 7], [traffic_to_toyama_may[5], 8], [traffic_to_toyama_june[5], 9], [traffic_to_toyama_2017_july[5], 10], [traffic_to_toyama_2017_august[5], 11] ];
    traffic_to_toyama_7 = [ [traffic_to_toyama_2016_october[6], 1], [traffic_to_toyama_2016_november[6], 2], [traffic_to_toyama_2016_december[6], 3], [traffic_to_toyama_2017_january[6], 4], [traffic_to_toyama_feb[6], 5], [traffic_to_toyama_march[6], 6], [traffic_to_toyama_april[6], 7], [traffic_to_toyama_may[6], 8], [traffic_to_toyama_june[6], 9], [traffic_to_toyama_2017_july[6], 10], [traffic_to_toyama_2017_august[6], 11] ];
    traffic_to_toyama_8 = [ [traffic_to_toyama_2016_october[7], 1], [traffic_to_toyama_2016_november[7], 2], [traffic_to_toyama_2016_december[7], 3], [traffic_to_toyama_2017_january[7], 4], [traffic_to_toyama_feb[7], 5], [traffic_to_toyama_march[7], 6], [traffic_to_toyama_april[7], 7], [traffic_to_toyama_may[7], 8], [traffic_to_toyama_june[7], 9], [traffic_to_toyama_2017_july[7], 10], [traffic_to_toyama_2017_august[7], 11] ];

    yticks = ['2016/10月', '2016/11月', '2016/12月', '2017/ 1月', '2017/ 2月', '2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月', '2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#traffic_to_toyama_month').fadeIn();

      if(button_count == 1){
        jQuery . jqplot(
            'traffic_to_toyama_month',
            [
                traffic_to_toyama_1, traffic_to_toyama_2, traffic_to_toyama_3, traffic_to_toyama_4, traffic_to_toyama_5, traffic_to_toyama_6, traffic_to_toyama_7, traffic_to_toyama_8

            ],
            {
                title: {
                    text: '富山県までの交通手段/月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

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
                    },
                },

                series: [
                    { label: '飛行機' },
                    { label: '新幹線' },
                    { label: '自家用車' },
                    { label: 'JR在来線' },
                    { label: '高速・路線バス' },
                    { label: 'レンタカー' },
                    { label: '貸切バス' },
                    { label: 'その他' }
                ],

                legend: {
                    show: true,
                    // placement: 'outside',
                    location: 'se',
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
