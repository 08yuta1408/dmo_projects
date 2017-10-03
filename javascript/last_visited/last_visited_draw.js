$(function(){
  var last_visited = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県在住、1ヶ月未満、1〜3ヶ月未満、4〜6ヶ月未満、7〜9ヶ月未満、９~12ヶ月未満、1年前、2年前、3年前、4年前、5年前、6年前、7年前、8年前、9年前、10年前
  last_visited_bosu = 0;  //母数

  //集計
  for (var i = 0; i < last_visited.length; i++) {
    last_visited[i] = last_visited_2016_october[i] + last_visited_2016_november[i] + last_visited_2016_december[i] + last_visited_2017_january[i] + last_visited_feb[i] + last_visited_march[i] + last_visited_april[i] + last_visited_may[i] + last_visited_june[i] + last_visited_2017_july[i] + + last_visited_2017_august[i];
  }
  //母数計算
  for (var i = 0; i < last_visited.length; i++) {
    last_visited_bosu += last_visited[i];
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'last_visited_sousu',

        [
            [
                //ここにデータの値を入力
                [ '富山県在住:' + last_visited[0] + '人', last_visited[0] ],
                [ '1ヶ月未満:' + last_visited[1] + '人', last_visited[1] ],
                [ '1~3ヶ月未満:' + last_visited[2] + '人', last_visited[2] ],
                [ '3~6ヶ月未満:' + last_visited[3] + '人', last_visited[3] ],
                [ '6~9ヶ月未満:' + last_visited[4] + '人', last_visited[4] ],
                [ '9~12ヶ月未満:' + last_visited[5] + '人', last_visited[5] ],
                [ '1年前:' + last_visited[6] + '人', last_visited[6] ],
                [ '2年前:' + last_visited[7] + '人', last_visited[7] ],
                [ '3年前:' + last_visited[8] + '人', last_visited[8] ],
                [ '4年前:' + last_visited[9] + '人', last_visited[9] ],
                [ '5年前:' + last_visited[10] + '人', last_visited[10] ],
                [ '6年前:' + last_visited[11] + '人', last_visited[11] ],
                [ '7年前:' + last_visited[12] + '人', last_visited[12] ],
                [ '8年前:' + last_visited[13] + '人', last_visited[13] ],
                [ '9年前:' + last_visited[14] + '人', last_visited[14] ],
                [ '10年前:' + last_visited[15] + '人', last_visited[15] ],


            ]
        ],
        {
            title: {
                text: '前回訪問時期 / 総数 母数：' + (last_visited_bosu) + '(人)',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F78181', '#F79F81', '#F7BE81', '#F5DA81', '#F3F781', '#D8F781', '#BEF781', '#81F781', '#81F79F', '#81F7F3', '#81DAF5', '#819FF7', '#8181F7', '#9F81F7', '#F781F3', '#D8D8D8'],

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
      $('#last_visited_sousu').fadeIn(500);
    });

    last_visited_1 = [ [last_visited_2016_october[0], 1], [last_visited_2016_november[0], 2], [last_visited_2016_december[0], 3], [last_visited_2017_january[0], 4], [last_visited_feb[0], 5], [last_visited_march[0], 6], [last_visited_april[0], 7], [last_visited_may[0], 8], [last_visited_june[0], 9], [last_visited_2017_july[0], 10], [last_visited_2017_august[0], 11] ];
    last_visited_2 = [ [last_visited_2016_october[1], 1], [last_visited_2016_november[1], 2], [last_visited_2016_december[1], 3], [last_visited_2017_january[1], 4], [last_visited_feb[1], 5], [last_visited_march[1], 6], [last_visited_april[1], 7], [last_visited_may[1], 8], [last_visited_june[1], 9], [last_visited_2017_july[1], 10], [last_visited_2017_august[1], 11] ];
    last_visited_3 = [ [last_visited_2016_october[2], 1], [last_visited_2016_november[2], 2], [last_visited_2016_december[2], 3], [last_visited_2017_january[2], 4], [last_visited_feb[2], 5], [last_visited_march[2], 6], [last_visited_april[2], 7], [last_visited_may[2], 8], [last_visited_june[2], 9], [last_visited_2017_july[2], 10], [last_visited_2017_august[2], 11] ];
    last_visited_4 = [ [last_visited_2016_october[3], 1], [last_visited_2016_november[3], 2], [last_visited_2016_december[3], 3], [last_visited_2017_january[3], 4], [last_visited_feb[3], 5], [last_visited_march[3], 6], [last_visited_april[3], 7], [last_visited_may[3], 8], [last_visited_june[3], 9], [last_visited_2017_july[3], 10], [last_visited_2017_august[3], 11] ];
    last_visited_5 = [ [last_visited_2016_october[4], 1], [last_visited_2016_november[4], 2], [last_visited_2016_december[4], 3], [last_visited_2017_january[4], 4], [last_visited_feb[4], 5], [last_visited_march[4], 6], [last_visited_april[4], 7], [last_visited_may[4], 8], [last_visited_june[4], 9], [last_visited_2017_july[4], 10], [last_visited_2017_august[4], 11] ];
    last_visited_6 = [ [last_visited_2016_october[5], 1], [last_visited_2016_november[5], 2], [last_visited_2016_december[5], 3], [last_visited_2017_january[5], 4], [last_visited_feb[5], 5], [last_visited_march[5], 6], [last_visited_april[5], 7], [last_visited_may[5], 8], [last_visited_june[5], 9], [last_visited_2017_july[5], 10], [last_visited_2017_august[5], 11] ];
    last_visited_7 = [ [last_visited_2016_october[6], 1], [last_visited_2016_november[6], 2], [last_visited_2016_december[6], 3], [last_visited_2017_january[6], 4], [last_visited_feb[6], 5], [last_visited_march[6], 6], [last_visited_april[6], 7], [last_visited_may[6], 8], [last_visited_june[6], 9], [last_visited_2017_july[6], 10], [last_visited_2017_august[6], 11] ];
    last_visited_8 = [ [last_visited_2016_october[7], 1], [last_visited_2016_november[7], 2], [last_visited_2016_december[7], 3], [last_visited_2017_january[7], 4], [last_visited_feb[7], 5], [last_visited_march[7], 6], [last_visited_april[7], 7], [last_visited_may[7], 8], [last_visited_june[7], 9], [last_visited_2017_july[7], 10], [last_visited_2017_august[7], 11] ];
    last_visited_9 = [ [last_visited_2016_october[8], 1], [last_visited_2016_november[8], 2], [last_visited_2016_december[8], 3], [last_visited_2017_january[8], 4], [last_visited_feb[8], 5], [last_visited_march[8], 6], [last_visited_april[8], 7], [last_visited_may[8], 8], [last_visited_june[8], 9], [last_visited_2017_july[8], 10], [last_visited_2017_august[8], 11] ];
    last_visited_10 = [ [last_visited_2016_october[9], 1], [last_visited_2016_november[9], 2], [last_visited_2016_december[9], 3], [last_visited_2017_january[9], 4], [last_visited_feb[9], 5], [last_visited_march[9], 6], [last_visited_april[9], 7], [last_visited_may[9], 8], [last_visited_june[9], 9], [last_visited_2017_july[9], 10], [last_visited_2017_august[9], 11] ];
    last_visited_11 = [ [last_visited_2016_october[10], 1], [last_visited_2016_november[10], 2], [last_visited_2016_december[10], 3], [last_visited_2017_january[10], 4], [last_visited_feb[10], 5], [last_visited_march[10], 6], [last_visited_april[10], 7], [last_visited_may[10], 8], [last_visited_june[10], 9], [last_visited_2017_july[10], 10], [last_visited_2017_august[10], 11] ];
    last_visited_12 = [ [last_visited_2016_october[11], 1], [last_visited_2016_november[11], 2], [last_visited_2016_december[11], 3], [last_visited_2017_january[11], 4], [last_visited_feb[11], 5], [last_visited_march[11], 6], [last_visited_april[11], 7], [last_visited_may[11], 8], [last_visited_june[11], 9], [last_visited_2017_july[11], 10], [last_visited_2017_august[11], 11] ];
    last_visited_13 = [ [last_visited_2016_october[12], 1], [last_visited_2016_november[12], 2], [last_visited_2016_december[12], 3], [last_visited_2017_january[12], 4], [last_visited_feb[12], 5], [last_visited_march[12], 6], [last_visited_april[12], 7], [last_visited_may[12], 8], [last_visited_june[12], 9], [last_visited_2017_july[12], 10], [last_visited_2017_august[12], 11] ];
    last_visited_14 = [ [last_visited_2016_october[13], 1], [last_visited_2016_november[13], 2], [last_visited_2016_december[13], 3], [last_visited_2017_january[13], 4], [last_visited_feb[13], 5], [last_visited_march[13], 6], [last_visited_april[13], 7], [last_visited_may[13], 8], [last_visited_june[13], 9], [last_visited_2017_july[13], 10], [last_visited_2017_august[13], 11] ];
    last_visited_15 = [ [last_visited_2016_october[14], 1], [last_visited_2016_november[14], 2], [last_visited_2016_december[14], 3], [last_visited_2017_january[14], 4], [last_visited_feb[14], 5], [last_visited_march[14], 6], [last_visited_april[14], 7], [last_visited_may[14], 8], [last_visited_june[14], 9], [last_visited_2017_july[14], 10], [last_visited_2017_august[14], 11] ];
    last_visited_16 = [ [last_visited_2016_october[15], 1], [last_visited_2016_november[15], 2], [last_visited_2016_december[15], 3], [last_visited_2017_january[15], 4], [last_visited_feb[15], 5], [last_visited_march[15], 6], [last_visited_april[15], 7], [last_visited_may[15], 8], [last_visited_june[15], 9], [last_visited_2017_july[15], 10], [last_visited_2017_august[15], 11] ];


    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#last_visited_month').fadeIn();

      if(button_count == 1){
        jQuery . jqplot(
            'last_visited_month',
            [
              last_visited_1, last_visited_2, last_visited_3, last_visited_4, last_visited_5, last_visited_6, last_visited_7, last_visited_8, last_visited_9, last_visited_10, last_visited_11, last_visited_12, last_visited_13, last_visited_14, last_visited_15, last_visited_16
            ],
            {
                title: {
                    text: '前回訪問時期 / 月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F78181', '#F79F81', '#F7BE81', '#F5DA81', '#F3F781', '#D8F781', '#BEF781', '#81F781', '#81F79F', '#81F7F3', '#81DAF5', '#819FF7', '#8181F7', '#9F81F7', '#F781F3', '#D8D8D8'],

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
                    { label: '1ヶ月未満' },
                    { label: '1~3ヶ月未満' },
                    { label: '3~6ヶ月未満' },
                    { label: '6~9ヶ月未満' },
                    { label: '9~12ヶ月未満' },
                    { label: '1年未満' },
                    { label: '2年未満' },
                    { label: '3年未満' },
                    { label: '4年未満' },
                    { label: '5年未満' },
                    { label: '6年未満' },
                    { label: '7年未満' },
                    { label: '8年未満' },
                    { label: '9年未満' },
                    { label: '10年未満' }
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
