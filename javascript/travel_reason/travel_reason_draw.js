$(function(){
  //集計用
  reason_see = [0, 0, 0, 0];                           //index番号順に、自然の景観、史跡・文学碑・建造物、美術館・博物館、寺社仏閣参拝
  reason_eat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];   //index番号順に、海鮮、山の幸、川の幸(あゆ等)、寿司、ぶり・かに、白えび、ほたるいか、その他海鮮、山の幸、川の幸(あゆ)、日本酒、ご当地グルメ(ブラックラーメン等)
  reason_play = [0, 0, 0, 0, 0, 0, 0];                 //index番号順に、工場見学など産業観光、ドライブ・ツーリング、各種体験プログラム、温泉、登山、釣り、祭りやイベント
  reason_buy = [0, 0, 0];                              //index番号順に、街歩き・食べ歩き、伝統工芸、海鮮・生鮮品
  reason_other_feb = [0, 0, 0, 0, 0, 0];                   //index番号順に、ビジネス、友人・親戚を訪問、予算の関係、北陸新幹線が開業したので、近隣県訪問のついでに、その他

  //集計を行う
  for (var i = 0; i < reason_see.length; i++) {
    reason_see[i] = reason_see_feb[i] + reason_see_march[i] + reason_see_april[i] + reason_see_may[i] + reason_see_june[i];
  }
  for (var i = 0; i < reason_eat.length; i++) {
    reason_eat[i] = reason_eat_feb[i] + reason_eat_march[i] + reason_eat_april[i] + reason_eat_may[i] + reason_eat_june[i];
  }
  for (var i = 0; i < reason_play.length; i++) {
    reason_play[i] = reason_play_feb[i] + reason_play_march[i] + reason_play_april[i] + reason_play_may[i] + reason_play_june[i];
  }
  for (var i = 0; i < reason_buy.length; i++) {
    reason_buy[i] = reason_buy_feb[i] + reason_buy_march[i] + reason_buy_april[i] + reason_buy_may[i] + reason_buy_june[i];
  }
  for (var i = 0; i < reason_other_feb.length; i++) {
    reason_other_feb[i] = reason_other_feb[i] + reason_other_march[i] + reason_other_april[i] + reason_other_may[i] + reason_other_june[i];
  }

  console.log("---確認用---");
  for (var i = 0; i < reason_eat.length; i++) {
    console.log(reason_eat[i]);
  }
  // reason_eat[8] = 10;

  //デフォルトは総数グラフ
  jQuery . jqplot(
        'travel_reason_sousu',
        [
            [ [ reason_other_feb[5], 'その他' ], [ reason_other_feb[4], '近隣県訪問のついでに' ], [ reason_other_feb[3], '北陸新幹線が開業したので' ], [ reason_other_feb[2], '予算の関係' ], [ reason_other_feb[1], '友人・親戚を訪問' ], [ reason_other_feb[0], 'ビジネス' ], [ reason_buy[2], '海鮮・生鮮品' ], [ reason_buy[1], '伝統工芸' ], [ reason_buy[0], '街歩き・食べ歩き' ], [ reason_play[6], '祭りやイベント'], [ reason_play[5], '釣り'],　[ reason_play[4], '登山'], [ reason_play[3], '温泉'], [ reason_play[2], '各種体験プログラム'], [ reason_play[1], 'ドライブ・ツーリング'], [ reason_play[0], '工場見学など産業観光'], [reason_eat[11], 'ご当地グルメ(ブラックラーメン等)'], [reason_eat[10], '日本酒'], [reason_eat[9], '川の幸(鮎)'], [reason_eat[8], '山の幸 '], [reason_eat[7], 'その他海鮮'], [reason_eat[6], 'ほたるいか'], [reason_eat[5], '白えび'], [reason_eat[4], 'ぶり・かに'], [reason_eat[3], '寿司'], [reason_eat[2], '川の幸(あゆ等)'], [reason_eat[1], '山の幸'], [reason_eat[0], '海鮮'], [reason_see[3], '寺社仏閣参拝'], [reason_see[2], '美術館・博物館'], [reason_see[1], '史跡・文学碑・建造物'], [reason_see[0], '自然の景観'] ]
        ],
        {
          title: {
              text: '旅行理由 / 総数',
              show: true,
              fontFamily: 'HGP行書体, Serif',
              fontSize: '20px',
              textAlign: 'center',
              textColor: 'black',
          },

            seriesDefaults: {
                renderer: jQuery . jqplot . BarRenderer,
                rendererOptions: {
                    barDirection: 'horizontal',
                    showDataLabels: true,
                },
                pointLabels: {
                    show: true,
                    location: 'e',
                    escapeHTML: false,
                    formatString: '<b style="color: blue;">%d</b>'
                }
            },
            axes: {
                // xaxis:{
                //   label: '人数',
                // },

                yaxis: {
                    renderer: jQuery . jqplot . CategoryAxisRenderer,
                }
            }
        }
    );

    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#travel_reason_sousu').fadeIn(500);
    });

    travel_reason_1 = [ [ reason_other_feb[5], 1 ], [ reason_other_feb[4], 2 ], [ reason_other_feb[3], 3 ], [ reason_other_feb[2], 4 ], [ reason_other_feb[1], 5 ], [ reason_other_feb[0], 6 ], [ reason_buy_feb[2], 7 ], [ reason_buy_feb[1], 8 ], [ reason_buy_feb[0], 9 ], [ reason_play_feb[6], 10], [ reason_play_feb[5], 11],　[ reason_play_feb[4], 12], [ reason_play_feb[3], 13], [ reason_play_feb[2], 14], [ reason_play_feb[1], 15], [ reason_play_feb[0], 16], [reason_eat_feb[11], 17], [reason_eat_feb[10], 18], [reason_eat_feb[9], 19], [reason_eat_feb[8], 20], [reason_eat_feb[7], 21], [reason_eat_feb[6], 22], [reason_eat_feb[5], 23], [reason_eat_feb[4], 24], [reason_eat_feb[3], 25], [reason_eat_feb[2], 26], [reason_eat_feb[1], 27], [reason_eat_feb[0], 28], [reason_see_feb[3], 29], [reason_see_feb[2], 30], [reason_see_feb[1], 31], [reason_see_feb[0], 32] ];

    travel_reason_2 = [ [ reason_other_march[5], 1 ], [ reason_other_march[4], 2 ], [ reason_other_march[3], 3 ], [ reason_other_march[2], 4 ], [ reason_other_march[1], 5 ], [ reason_other_march[0], 6 ], [ reason_buy_march[2], 7 ], [ reason_buy_march[1], 8 ], [ reason_buy_march[0], 9 ], [ reason_play_march[6], 10], [ reason_play_march[5], 11],　[ reason_play_march[4], 12], [ reason_play_march[3], 13], [ reason_play_march[2], 14], [ reason_play_march[1], 15], [ reason_play_march[0], 16], [reason_eat_march[11], 17], [reason_eat_march[10], 18], [reason_eat_march[9], 19], [reason_eat_march[8], 20], [reason_eat_march[7], 21], [reason_eat_march[6], 22], [reason_eat_march[5], 23], [reason_eat_march[4], 24], [reason_eat_march[3], 25], [reason_eat_march[2], 26], [reason_eat_march[1], 27], [reason_eat_march[0], 28], [reason_see_march[3], 29], [reason_see_march[2], 30], [reason_see_march[1], 31], [reason_see_march[0], 32] ];

    travel_reason_3 = [ [ reason_other_april[5], 1 ], [ reason_other_april[4], 2 ], [ reason_other_april[3], 3 ], [ reason_other_april[2], 4 ], [ reason_other_april[1], 5 ], [ reason_other_april[0], 6 ], [ reason_buy_april[2], 7 ], [ reason_buy_april[1], 8 ], [ reason_buy_april[0], 9 ], [ reason_play_april[6], 10], [ reason_play_april[5], 11],　[ reason_play_april[4], 12], [ reason_play_april[3], 13], [ reason_play_april[2], 14], [ reason_play_april[1], 15], [ reason_play_april[0], 16], [reason_eat_april[11], 17], [reason_eat_april[10], 18], [reason_eat_april[9], 19], [reason_eat_april[8], 20], [reason_eat_april[7], 21], [reason_eat_april[6], 22], [reason_eat_april[5], 23], [reason_eat_april[4], 24], [reason_eat_april[3], 25], [reason_eat_april[2], 26], [reason_eat_april[1], 27], [reason_eat_april[0], 28], [reason_see_april[3], 29], [reason_see_april[2], 30], [reason_see_april[1], 31], [reason_see_april[0], 32] ];

    travel_reason_4 = [ [ reason_other_may[5], 1 ], [ reason_other_may[4], 2 ], [ reason_other_may[3], 3 ], [ reason_other_may[2], 4 ], [ reason_other_may[1], 5 ], [ reason_other_may[0], 6 ], [ reason_buy_may[2], 7 ], [ reason_buy_may[1], 8 ], [ reason_buy_may[0], 9 ], [ reason_play_may[6], 10], [ reason_play_may[5], 11],　[ reason_play_may[4], 12], [ reason_play_may[3], 13], [ reason_play_may[2], 14], [ reason_play_may[1], 15], [ reason_play_may[0], 16], [reason_eat_may[11], 17], [reason_eat_may[10], 18], [reason_eat_may[9], 19], [reason_eat_may[8], 20], [reason_eat_may[7], 21], [reason_eat_may[6], 22], [reason_eat_may[5], 23], [reason_eat_may[4], 24], [reason_eat_may[3], 25], [reason_eat_may[2], 26], [reason_eat_may[1], 27], [reason_eat_may[0], 28], [reason_see_may[3], 29], [reason_see_may[2], 30], [reason_see_may[1], 31], [reason_see_may[0], 32] ];

    travel_reason_5 = [ [ reason_other_june[5], 1 ], [ reason_other_june[4], 2 ], [ reason_other_june[3], 3 ], [ reason_other_june[2], 4 ], [ reason_other_june[1], 5 ], [ reason_other_june[0], 6 ], [ reason_buy_june[2], 7 ], [ reason_buy_june[1], 8 ], [ reason_buy_june[0], 9 ], [ reason_play_june[6], 10], [ reason_play_june[5], 11],　[ reason_play_june[4], 12], [ reason_play_june[3], 13], [ reason_play_june[2], 14], [ reason_play_june[1], 15], [ reason_play_june[0], 16], [reason_eat_june[11], 17], [reason_eat_june[10], 18], [reason_eat_june[9], 19], [reason_eat_june[8], 20], [reason_eat_june[7], 21], [reason_eat_june[6], 22], [reason_eat_june[5], 23], [reason_eat_june[4], 24], [reason_eat_june[3], 25], [reason_eat_june[2], 26], [reason_eat_june[1], 27], [reason_eat_june[0], 28], [reason_see_june[3], 29], [reason_see_june[2], 30], [reason_see_june[1], 31], [reason_see_june[0], 32] ];

    yticks = ['その他', '近隣県訪問のついでに', '北陸新幹線が開業したので', '予算の関係', '友人・親戚を訪問', 'ビジネス', '海鮮・生鮮品', '伝統工芸', '街歩き・食べ歩き', '祭りやイベント', '釣り', '登山', '温泉', '各種体験プログラム', 'ドライブ・ツーリング', '工場見学など産業観光', 'ご当地グルメ(ブラックラーメン等)', '日本酒', '川の幸(あゆ)', '山の幸', 'その他海鮮', 'ほたるいか', '白えび', 'ぶり・かに', '寿司', '川の幸(あゆ等)', '山の幸', '海鮮', '寺社仏閣参拝', '美術館・博物館', '史跡・文学碑・建造物', '自然の景観'];


    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#travel_reason_month').fadeIn();

      if(button_count == 1){
        jQuery . jqplot(
            'travel_reason_month',
            [
                travel_reason_1, travel_reason_2, travel_reason_3, travel_reason_4, travel_reason_5

            ],
            {
                title: {
                    text: '旅行理由 / 月別 ',
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
                    },
                },

                series: [
                    {label: '2月'},
                    {label: '3月'},
                    {label: '4月'},
                    {label: '5月'},
                    {label: '6月'}

                ],

                legend: {
                    show: true,
                    // placement: 'outside',
                    location: 'ne',
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
