$(function(){
  var traffic_in_toyama = [0, 0, 0, 0, 0, 0, 0];  //index番号順に、自家用車、鉄道、高速・路線バス、レンタカー、貸切バス、タクシー、その他

  //集計
  for (var i = 0; i < traffic_in_toyama.length; i++) {
    traffic_in_toyama[i] = traffic_in_toyama_2017_january[i] + traffic_in_toyama_feb[i] + traffic_in_toyama_march[i] + traffic_in_toyama_april[i] + traffic_in_toyama_may[i] +  traffic_in_toyama_june[i] + traffic_in_toyama_2017_july[i] + traffic_in_toyama_2017_august[i];
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'traffic_in_toyama_sousu',

        [
            [
                //ここにデータの値を入力
                [ '自家用車:' + traffic_in_toyama[0] + '人', traffic_in_toyama[0] ],
                [ '鉄道:' + traffic_in_toyama[1] + '人', traffic_in_toyama[1] ],
                [ '高速・路線バス:' + traffic_in_toyama[2] + '人', traffic_in_toyama[2] ],
                [ 'レンタカー:' + traffic_in_toyama[3] + '人', traffic_in_toyama[3] ],
                [ '貸切バス:' + traffic_in_toyama[4] + '人', traffic_in_toyama[4] ],
                [ 'タクシー:' + traffic_in_toyama[5] + '人', traffic_in_toyama[5] ],
                [ 'その他:' + traffic_in_toyama[6] + '人', traffic_in_toyama[6] ],



            ]
        ],
        {
            title: {
                text: '富山県での交通手段 /総数 ',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#D8D8D8'],

            seriesDefaults: {
                renderer: jQuery . jqplot . PieRenderer,
                rendererOptions: {
                    padding: 10,
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
      $('#traffic_in_toyama_sousu').fadeIn(500);
    });

    traffic_in_toyama_1 = [ [traffic_in_toyama_2017_january[0], 1], [traffic_in_toyama_feb[0], 2], [traffic_in_toyama_march[0], 3], [traffic_in_toyama_april[0], 4], [traffic_in_toyama_may[0], 5], [traffic_in_toyama_june[0], 6], [traffic_in_toyama_2017_july[0], 7], [traffic_in_toyama_2017_august[0], 8]];
    traffic_in_toyama_2 = [ [traffic_in_toyama_2017_january[1], 1], [traffic_in_toyama_feb[1], 2], [traffic_in_toyama_march[1], 3], [traffic_in_toyama_april[1], 4], [traffic_in_toyama_may[1], 5], [traffic_in_toyama_june[1], 6], [traffic_in_toyama_2017_july[1], 7], [traffic_in_toyama_2017_august[1], 8]];
    traffic_in_toyama_3 = [ [traffic_in_toyama_2017_january[2], 1], [traffic_in_toyama_feb[2], 2], [traffic_in_toyama_march[2], 3], [traffic_in_toyama_april[2], 4], [traffic_in_toyama_may[2], 5], [traffic_in_toyama_june[2], 6], [traffic_in_toyama_2017_july[2], 7], [traffic_in_toyama_2017_august[2], 8]];
    traffic_in_toyama_4 = [ [traffic_in_toyama_2017_january[3], 1], [traffic_in_toyama_feb[3], 2], [traffic_in_toyama_march[3], 3], [traffic_in_toyama_april[3], 4], [traffic_in_toyama_may[3], 5], [traffic_in_toyama_june[3], 6], [traffic_in_toyama_2017_july[3], 7], [traffic_in_toyama_2017_august[3], 8]];
    traffic_in_toyama_5 = [ [traffic_in_toyama_2017_january[4], 1], [traffic_in_toyama_feb[4], 2], [traffic_in_toyama_march[4], 3], [traffic_in_toyama_april[4], 4], [traffic_in_toyama_may[4], 5], [traffic_in_toyama_june[4], 6], [traffic_in_toyama_2017_july[4], 7], [traffic_in_toyama_2017_august[4], 8]];
    traffic_in_toyama_6 = [ [traffic_in_toyama_2017_january[5], 1], [traffic_in_toyama_feb[5], 2], [traffic_in_toyama_march[5], 3], [traffic_in_toyama_april[5], 4], [traffic_in_toyama_may[5], 5], [traffic_in_toyama_june[5], 6], [traffic_in_toyama_2017_july[5], 7], [traffic_in_toyama_2017_august[5], 8]];
    traffic_in_toyama_7 = [ [traffic_in_toyama_2017_january[6], 1], [traffic_in_toyama_feb[6], 2], [traffic_in_toyama_march[6], 3], [traffic_in_toyama_april[6], 4], [traffic_in_toyama_may[6], 5], [traffic_in_toyama_june[6], 6], [traffic_in_toyama_2017_july[6], 7], [traffic_in_toyama_2017_august[6], 8]];

    yticks = ['2017/ 1月', '2017/ 2月', '2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月', '2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#traffic_in_toyama_month').fadeIn();

      if(button_count == 1){
        jQuery . jqplot(
            'traffic_in_toyama_month',
            [
                traffic_in_toyama_1, traffic_in_toyama_2, traffic_in_toyama_3, traffic_in_toyama_4, traffic_in_toyama_5, traffic_in_toyama_6, traffic_in_toyama_7

            ],
            {
                title: {
                    text: '富山県での交通手段/月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#D8D8D8'],

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
                  { label: '自家用車' },
                  { label: '鉄道' },
                  { label: '高速・路線バス' },
                  { label: 'レンタカー' },
                  { label: '貸切バス' },
                  { label: 'タクシー' },
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
