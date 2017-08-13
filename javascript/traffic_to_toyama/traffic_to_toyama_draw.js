$(function(){
  var traffic_to_toyama = [0, 0, 0, 0, 0, 0, 0, 0];   //index番号順に、飛行機、新幹線、自家用車、JR在来線、高速・路線バス、レンタカー、貸切バス、その他

  //集計
  for (var i = 0; i < traffic_to_toyama.length; i++) {
    traffic_to_toyama[i] = traffic_to_toyama_feb[i] + traffic_to_toyama_march[i] + traffic_to_toyama_april[i] + traffic_to_toyama_may[i] + traffic_to_toyama_june[i];
  }

  console.log("集計結果");
  for (var i = 0; i < traffic_to_toyama.length; i++) {
    console.log(traffic_to_toyama[i]);
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

            seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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

    traffic_to_toyama_1 = [ [traffic_to_toyama_feb[0], 1], [traffic_to_toyama_march[0], 2], [traffic_to_toyama_april[0], 3], [traffic_to_toyama_may[0], 4], [traffic_to_toyama_june[0], 5] ];
    traffic_to_toyama_2 = [ [traffic_to_toyama_feb[1], 1], [traffic_to_toyama_march[1], 2], [traffic_to_toyama_april[1], 3], [traffic_to_toyama_may[1], 4], [traffic_to_toyama_june[1], 5] ];
    traffic_to_toyama_3 = [ [traffic_to_toyama_feb[2], 1], [traffic_to_toyama_march[2], 2], [traffic_to_toyama_april[2], 3], [traffic_to_toyama_may[2], 4], [traffic_to_toyama_june[2], 5] ];
    traffic_to_toyama_4 = [ [traffic_to_toyama_feb[3], 1], [traffic_to_toyama_march[3], 2], [traffic_to_toyama_april[3], 3], [traffic_to_toyama_may[3], 4], [traffic_to_toyama_june[3], 5] ];
    traffic_to_toyama_5 = [ [traffic_to_toyama_feb[4], 1], [traffic_to_toyama_march[4], 2], [traffic_to_toyama_april[4], 3], [traffic_to_toyama_may[4], 4], [traffic_to_toyama_june[4], 5] ];
    traffic_to_toyama_6 = [ [traffic_to_toyama_feb[5], 1], [traffic_to_toyama_march[5], 2], [traffic_to_toyama_april[5], 3], [traffic_to_toyama_may[5], 4], [traffic_to_toyama_june[5], 5] ];
    traffic_to_toyama_7 = [ [traffic_to_toyama_feb[6], 1], [traffic_to_toyama_march[6], 2], [traffic_to_toyama_april[6], 3], [traffic_to_toyama_may[6], 4], [traffic_to_toyama_june[6], 5] ];
    traffic_to_toyama_8 = [ [traffic_to_toyama_feb[7], 1], [traffic_to_toyama_march[7], 2], [traffic_to_toyama_april[7], 3], [traffic_to_toyama_may[7], 4], [traffic_to_toyama_june[7], 5] ];
    yticks = ['2月', '3月', '4月', '5月', '6月'];

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

                seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
