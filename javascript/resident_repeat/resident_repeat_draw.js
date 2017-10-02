$(function(){
  //2〜6月の集計結果をまとめるための変数
  var resident_repeat_bosu = 0;
  var resident_repeat_kanto = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
  var resident_repeat_tyubu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var resident_repeat_kansai = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var resident_repeat_toyama = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var resident_repeat_others = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //関東集計
  for (var i = 0; i < resident_repeat_kanto.length; i++) {
    resident_repeat_kanto[i] = resident_repeat_2016_october_kanto[i] + resident_repeat_2016_november_kanto[i] + resident_repeat_2016_december_kanto[i] + resident_repeat_2017_january_kanto[i] + resident_repeat_feb_kanto[i] + resident_repeat_march_kanto[i] + resident_repeat_april_kanto[i] + resident_repeat_may_kanto[i] + resident_repeat_june_kanto[i] + resident_repeat_2017_july_kanto[i] + resident_repeat_2017_august_kanto[i];
  }

  //中部集計
  for (var i = 0; i < resident_repeat_tyubu.length; i++) {
    resident_repeat_tyubu[i] = resident_repeat_2016_october_tyubu[i] + resident_repeat_2016_november_tyubu[i] + resident_repeat_2016_december_tyubu[i] + resident_repeat_2017_january_tyubu[i] + resident_repeat_feb_tyubu[i] + resident_repeat_march_tyubu[i] + resident_repeat_april_tyubu[i] + resident_repeat_may_tyubu[i] + resident_repeat_june_tyubu[i] + resident_repeat_2017_july_tyubu[i] + resident_repeat_2017_august_tyubu[i];
  }

  //関西集計
  for (var i = 0; i < resident_repeat_kansai.length; i++) {
    resident_repeat_kansai[i] = resident_repeat_2016_october_kansai[i] + resident_repeat_2016_november_kansai[i] + resident_repeat_2016_december_kansai[i] + resident_repeat_2017_january_kansai[i] + resident_repeat_feb_kansai[i] + resident_repeat_march_kansai[i] + resident_repeat_april_kansai[i] + resident_repeat_may_kansai[i] + resident_repeat_june_kansai[i] + resident_repeat_2017_july_kansai[i] + resident_repeat_2017_august_kansai[i];
  }

  //富山集計
  for (var i = 0; i < resident_repeat_toyama.length; i++) {
    resident_repeat_toyama[i] = resident_repeat_2016_october_toyama[i] + resident_repeat_2016_november_toyama[i] + resident_repeat_2016_december_toyama[i] + resident_repeat_2017_january_toyama[i] + resident_repeat_feb_toyama[i] + resident_repeat_march_toyama[i] + resident_repeat_april_toyama[i] + resident_repeat_may_toyama[i] + resident_repeat_june_toyama[i] + resident_repeat_2017_july_toyama[i] + resident_repeat_2017_august_toyama[i];
  }

  //その他集計
  for (var i = 0; i < resident_repeat_others.length; i++) {
    resident_repeat_others[i] = resident_repeat_2016_october_others[i] + resident_repeat_2016_november_others[i] + resident_repeat_2016_december_others[i] + resident_repeat_2017_january_others[i] + resident_repeat_feb_others[i] + resident_repeat_march_others[i] + resident_repeat_april_others[i] + resident_repeat_may_others[i] + resident_repeat_june_others[i] + resident_repeat_2017_july_others[i] + resident_repeat_2017_august_others[i];
  }

  //母数計算
  for (var i = 0; i < resident_repeat_kanto.length; i++) {
    resident_repeat_bosu = resident_repeat_bosu + resident_repeat_kanto[i] + resident_repeat_tyubu[i] + resident_repeat_kansai[i] + resident_repeat_toyama[i] + resident_repeat_others[i];
  }

  resident_repeat_1 = [ [resident_repeat_others[0], 1], [resident_repeat_toyama[0], 2], [resident_repeat_kansai[0], 3], [resident_repeat_tyubu[0], 4], [resident_repeat_kansai[0], 5] ];
  resident_repeat_2 = [ [resident_repeat_others[1], 1], [resident_repeat_toyama[1], 2], [resident_repeat_kansai[1], 3], [resident_repeat_tyubu[1], 4], [resident_repeat_kansai[1], 5] ];
  resident_repeat_3 = [ [resident_repeat_others[2], 1], [resident_repeat_toyama[2], 2], [resident_repeat_kansai[2], 3], [resident_repeat_tyubu[2], 4], [resident_repeat_kansai[2], 5] ];
  resident_repeat_4 = [ [resident_repeat_others[3], 1], [resident_repeat_toyama[3], 2], [resident_repeat_kansai[3], 3], [resident_repeat_tyubu[3], 4], [resident_repeat_kansai[3], 5] ];
  resident_repeat_5 = [ [resident_repeat_others[4], 1], [resident_repeat_toyama[4], 2], [resident_repeat_kansai[4], 3], [resident_repeat_tyubu[4], 4], [resident_repeat_kansai[4], 5] ];
  resident_repeat_6 = [ [resident_repeat_others[5], 1], [resident_repeat_toyama[5], 2], [resident_repeat_kansai[5], 3], [resident_repeat_tyubu[5], 4], [resident_repeat_kansai[5], 5] ];
  resident_repeat_7 = [ [resident_repeat_others[6], 1], [resident_repeat_toyama[6], 2], [resident_repeat_kansai[6], 3], [resident_repeat_tyubu[6], 4], [resident_repeat_kansai[6], 5] ];
  resident_repeat_8 = [ [resident_repeat_others[7], 1], [resident_repeat_toyama[7], 2], [resident_repeat_kansai[7], 3], [resident_repeat_tyubu[7], 4], [resident_repeat_kansai[7], 5] ];
  resident_repeat_9 = [ [resident_repeat_others[8], 1], [resident_repeat_toyama[8], 2], [resident_repeat_kansai[8], 3], [resident_repeat_tyubu[8], 4], [resident_repeat_kansai[8], 5] ];
  resident_repeat_10 = [ [resident_repeat_others[9], 1], [resident_repeat_toyama[9], 2], [resident_repeat_kansai[9], 3], [resident_repeat_tyubu[9], 4], [resident_repeat_kansai[9], 5] ];
  resident_repeat_11 = [ [resident_repeat_others[10], 1], [resident_repeat_toyama[10], 2], [resident_repeat_kansai[10], 3], [resident_repeat_tyubu[10], 4], [resident_repeat_kansai[10], 5] ];

  var yticks = [ 'その他', '富山', '関西', '中部', '関東'];

  //デフォルトで総数グラフを表示
  jQuery . jqplot(
      'resident_repeat_sousu',
      [
          resident_repeat_1, resident_repeat_2, resident_repeat_3, resident_repeat_4, resident_repeat_5, resident_repeat_6, resident_repeat_7, resident_repeat_8, resident_repeat_9, resident_repeat_10, resident_repeat_11

      ],
      {
          title: {
              text: '居住地×リピート回数 / 総数 ' + resident_repeat_bosu + "(人)",
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
              location: 'se',
              // location: 'ne',
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

  //総数ボタンを押した
  $('#sosu').click(function(){
    $('.gragh').hide();
    $('#resident_repeat_sousu').fadeIn(500);
  });

  //関東
  resident_repeat_kanto_1 = [ [resident_repeat_2016_october_kanto[0], 1], [resident_repeat_2016_november_kanto[0], 2], [resident_repeat_2016_december_kanto[0], 3], [resident_repeat_2017_january_kanto[0], 4], [resident_repeat_feb_kanto[0], 5], [resident_repeat_march_kanto[0], 6], [resident_repeat_april_kanto[0], 7], [resident_repeat_may_kanto[0], 8], [resident_repeat_june_kanto[0], 9], [resident_repeat_2017_july_kanto[0], 10], [resident_repeat_2017_august_kanto[0], 11] ];
  resident_repeat_kanto_2 = [ [resident_repeat_2016_october_kanto[1], 1], [resident_repeat_2016_november_kanto[1], 2], [resident_repeat_2016_december_kanto[1], 3], [resident_repeat_2017_january_kanto[1], 4], [resident_repeat_feb_kanto[1], 5], [resident_repeat_march_kanto[1], 6], [resident_repeat_april_kanto[1], 7], [resident_repeat_may_kanto[1], 8], [resident_repeat_june_kanto[1], 9], [resident_repeat_2017_july_kanto[1], 10], [resident_repeat_2017_august_kanto[1], 11] ];
  resident_repeat_kanto_3 = [ [resident_repeat_2016_october_kanto[2], 1], [resident_repeat_2016_november_kanto[2], 2], [resident_repeat_2016_december_kanto[2], 3], [resident_repeat_2017_january_kanto[2], 4], [resident_repeat_feb_kanto[2], 5], [resident_repeat_march_kanto[2], 6], [resident_repeat_april_kanto[2], 7], [resident_repeat_may_kanto[2], 8], [resident_repeat_june_kanto[2], 9], [resident_repeat_2017_july_kanto[2], 10], [resident_repeat_2017_august_kanto[2], 11] ];
  resident_repeat_kanto_4 = [ [resident_repeat_2016_october_kanto[3], 1], [resident_repeat_2016_november_kanto[3], 2], [resident_repeat_2016_december_kanto[3], 3], [resident_repeat_2017_january_kanto[3], 4], [resident_repeat_feb_kanto[3], 5], [resident_repeat_march_kanto[3], 6], [resident_repeat_april_kanto[3], 7], [resident_repeat_may_kanto[3], 8], [resident_repeat_june_kanto[3], 9], [resident_repeat_2017_july_kanto[3], 10], [resident_repeat_2017_august_kanto[3], 11] ];
  resident_repeat_kanto_5 = [ [resident_repeat_2016_october_kanto[4], 1], [resident_repeat_2016_november_kanto[4], 2], [resident_repeat_2016_december_kanto[4], 3], [resident_repeat_2017_january_kanto[4], 4], [resident_repeat_feb_kanto[4], 5], [resident_repeat_march_kanto[4], 6], [resident_repeat_april_kanto[4], 7], [resident_repeat_may_kanto[4], 8], [resident_repeat_june_kanto[4], 9], [resident_repeat_2017_july_kanto[4], 10], [resident_repeat_2017_august_kanto[4], 11] ];
  resident_repeat_kanto_6 = [ [resident_repeat_2016_october_kanto[5], 1], [resident_repeat_2016_november_kanto[5], 2], [resident_repeat_2016_december_kanto[5], 3], [resident_repeat_2017_january_kanto[5], 4], [resident_repeat_feb_kanto[5], 5], [resident_repeat_march_kanto[5], 6], [resident_repeat_april_kanto[5], 7], [resident_repeat_may_kanto[5], 8], [resident_repeat_june_kanto[5], 9], [resident_repeat_2017_july_kanto[5], 10], [resident_repeat_2017_august_kanto[5], 11] ];
  resident_repeat_kanto_7 = [ [resident_repeat_2016_october_kanto[6], 1], [resident_repeat_2016_november_kanto[6], 2], [resident_repeat_2016_december_kanto[6], 3], [resident_repeat_2017_january_kanto[6], 4], [resident_repeat_feb_kanto[6], 5], [resident_repeat_march_kanto[6], 6], [resident_repeat_april_kanto[6], 7], [resident_repeat_may_kanto[6], 8], [resident_repeat_june_kanto[6], 9], [resident_repeat_2017_july_kanto[6], 10], [resident_repeat_2017_august_kanto[6], 11] ];
  resident_repeat_kanto_8 = [ [resident_repeat_2016_october_kanto[7], 1], [resident_repeat_2016_november_kanto[7], 2], [resident_repeat_2016_december_kanto[7], 3], [resident_repeat_2017_january_kanto[7], 4], [resident_repeat_feb_kanto[7], 5], [resident_repeat_march_kanto[7], 6], [resident_repeat_april_kanto[7], 7], [resident_repeat_may_kanto[7], 8], [resident_repeat_june_kanto[7], 9], [resident_repeat_2017_july_kanto[7], 10], [resident_repeat_2017_august_kanto[7], 11] ];
  resident_repeat_kanto_9 = [ [resident_repeat_2016_october_kanto[8], 1], [resident_repeat_2016_november_kanto[8], 2], [resident_repeat_2016_december_kanto[8], 3], [resident_repeat_2017_january_kanto[8], 4], [resident_repeat_feb_kanto[8], 5], [resident_repeat_march_kanto[8], 6], [resident_repeat_april_kanto[8], 7], [resident_repeat_may_kanto[8], 8], [resident_repeat_june_kanto[8], 9], [resident_repeat_2017_july_kanto[8], 10], [resident_repeat_2017_august_kanto[8], 11] ];
  resident_repeat_kanto_10 = [ [resident_repeat_2016_october_kanto[9], 1], [resident_repeat_2016_november_kanto[9], 2], [resident_repeat_2016_december_kanto[9], 3], [resident_repeat_2017_january_kanto[9], 4], [resident_repeat_feb_kanto[9], 5], [resident_repeat_march_kanto[9], 6], [resident_repeat_april_kanto[9], 7], [resident_repeat_may_kanto[9], 8], [resident_repeat_june_kanto[9], 9], [resident_repeat_2017_july_kanto[9], 10], [resident_repeat_2017_august_kanto[9], 11] ];
  resident_repeat_kanto_11 = [ [resident_repeat_2016_october_kanto[10], 1], [resident_repeat_2016_november_kanto[10], 2], [resident_repeat_2016_december_kanto[10], 3], [resident_repeat_2017_january_kanto[10], 4], [resident_repeat_feb_kanto[10], 5], [resident_repeat_march_kanto[10], 6], [resident_repeat_april_kanto[10], 7], [resident_repeat_may_kanto[10], 8], [resident_repeat_june_kanto[10], 9], [resident_repeat_2017_july_kanto[10], 10], [resident_repeat_2017_august_kanto[10], 11] ];


  //中部
  resident_repeat_tyubu_1 = [ [resident_repeat_2016_october_tyubu[0], 1], [resident_repeat_2016_november_tyubu[0], 2], [resident_repeat_2016_december_tyubu[0], 3], [resident_repeat_2017_january_tyubu[0], 4], [resident_repeat_feb_tyubu[0], 5], [resident_repeat_march_tyubu[0], 6], [resident_repeat_april_tyubu[0], 7], [resident_repeat_may_tyubu[0], 8], [resident_repeat_june_tyubu[0], 9], [resident_repeat_2017_july_tyubu[0], 10], [resident_repeat_2017_august_tyubu[0], 11] ];
  resident_repeat_tyubu_2 = [ [resident_repeat_2016_october_tyubu[1], 1], [resident_repeat_2016_november_tyubu[1], 2], [resident_repeat_2016_december_tyubu[1], 3], [resident_repeat_2017_january_tyubu[1], 4], [resident_repeat_feb_tyubu[1], 5], [resident_repeat_march_tyubu[1], 6], [resident_repeat_april_tyubu[1], 7], [resident_repeat_may_tyubu[1], 8], [resident_repeat_june_tyubu[1], 9], [resident_repeat_2017_july_tyubu[1], 10], [resident_repeat_2017_august_tyubu[1], 11] ];
  resident_repeat_tyubu_3 = [ [resident_repeat_2016_october_tyubu[2], 1], [resident_repeat_2016_november_tyubu[2], 2], [resident_repeat_2016_december_tyubu[2], 3], [resident_repeat_2017_january_tyubu[2], 4], [resident_repeat_feb_tyubu[2], 5], [resident_repeat_march_tyubu[2], 6], [resident_repeat_april_tyubu[2], 7], [resident_repeat_may_tyubu[2], 8], [resident_repeat_june_tyubu[2], 9], [resident_repeat_2017_july_tyubu[2], 10], [resident_repeat_2017_august_tyubu[2], 11] ];
  resident_repeat_tyubu_4 = [ [resident_repeat_2016_october_tyubu[3], 1], [resident_repeat_2016_november_tyubu[3], 2], [resident_repeat_2016_december_tyubu[3], 3], [resident_repeat_2017_january_tyubu[3], 4], [resident_repeat_feb_tyubu[3], 5], [resident_repeat_march_tyubu[3], 6], [resident_repeat_april_tyubu[3], 7], [resident_repeat_may_tyubu[3], 8], [resident_repeat_june_tyubu[3], 9], [resident_repeat_2017_july_tyubu[3], 10], [resident_repeat_2017_august_tyubu[3], 11] ];
  resident_repeat_tyubu_5 = [ [resident_repeat_2016_october_tyubu[4], 1], [resident_repeat_2016_november_tyubu[4], 2], [resident_repeat_2016_december_tyubu[4], 3], [resident_repeat_2017_january_tyubu[4], 4], [resident_repeat_feb_tyubu[4], 5], [resident_repeat_march_tyubu[4], 6], [resident_repeat_april_tyubu[4], 7], [resident_repeat_may_tyubu[4], 8], [resident_repeat_june_tyubu[4], 9], [resident_repeat_2017_july_tyubu[4], 10], [resident_repeat_2017_august_tyubu[4], 11] ];
  resident_repeat_tyubu_6 = [ [resident_repeat_2016_october_tyubu[5], 1], [resident_repeat_2016_november_tyubu[5], 2], [resident_repeat_2016_december_tyubu[5], 3], [resident_repeat_2017_january_tyubu[5], 4], [resident_repeat_feb_tyubu[5], 5], [resident_repeat_march_tyubu[5], 6], [resident_repeat_april_tyubu[5], 7], [resident_repeat_may_tyubu[5], 8], [resident_repeat_june_tyubu[5], 9], [resident_repeat_2017_july_tyubu[5], 10], [resident_repeat_2017_august_tyubu[5], 11] ];
  resident_repeat_tyubu_7 = [ [resident_repeat_2016_october_tyubu[6], 1], [resident_repeat_2016_november_tyubu[6], 2], [resident_repeat_2016_december_tyubu[6], 3], [resident_repeat_2017_january_tyubu[6], 4], [resident_repeat_feb_tyubu[6], 5], [resident_repeat_march_tyubu[6], 6], [resident_repeat_april_tyubu[6], 7], [resident_repeat_may_tyubu[6], 8], [resident_repeat_june_tyubu[6], 9], [resident_repeat_2017_july_tyubu[6], 10], [resident_repeat_2017_august_tyubu[6], 11] ];
  resident_repeat_tyubu_8 = [ [resident_repeat_2016_october_tyubu[7], 1], [resident_repeat_2016_november_tyubu[7], 2], [resident_repeat_2016_december_tyubu[7], 3], [resident_repeat_2017_january_tyubu[7], 4], [resident_repeat_feb_tyubu[7], 5], [resident_repeat_march_tyubu[7], 6], [resident_repeat_april_tyubu[7], 7], [resident_repeat_may_tyubu[7], 8], [resident_repeat_june_tyubu[7], 9], [resident_repeat_2017_july_tyubu[7], 10], [resident_repeat_2017_august_tyubu[7], 11] ];
  resident_repeat_tyubu_9 = [ [resident_repeat_2016_october_tyubu[8], 1], [resident_repeat_2016_november_tyubu[8], 2], [resident_repeat_2016_december_tyubu[8], 3], [resident_repeat_2017_january_tyubu[8], 4], [resident_repeat_feb_tyubu[8], 5], [resident_repeat_march_tyubu[8], 6], [resident_repeat_april_tyubu[8], 7], [resident_repeat_may_tyubu[8], 8], [resident_repeat_june_tyubu[8], 9], [resident_repeat_2017_july_tyubu[8], 10], [resident_repeat_2017_august_tyubu[8], 11] ];
  resident_repeat_tyubu_10 = [ [resident_repeat_2016_october_tyubu[9], 1], [resident_repeat_2016_november_tyubu[9], 2], [resident_repeat_2016_december_tyubu[9], 3], [resident_repeat_2017_january_tyubu[9], 4], [resident_repeat_feb_tyubu[9], 5], [resident_repeat_march_tyubu[9], 6], [resident_repeat_april_tyubu[9], 7], [resident_repeat_may_tyubu[9], 8], [resident_repeat_june_tyubu[9], 9], [resident_repeat_2017_july_tyubu[9], 10], [resident_repeat_2017_august_tyubu[9], 11] ];
  resident_repeat_tyubu_11 = [ [resident_repeat_2016_october_tyubu[10], 1], [resident_repeat_2016_november_tyubu[10], 2], [resident_repeat_2016_december_tyubu[10], 3], [resident_repeat_2017_january_tyubu[10], 4], [resident_repeat_feb_tyubu[10], 5], [resident_repeat_march_tyubu[10], 6], [resident_repeat_april_tyubu[10], 7], [resident_repeat_may_tyubu[10], 8], [resident_repeat_june_tyubu[10], 9], [resident_repeat_2017_july_tyubu[10], 10], [resident_repeat_2017_august_tyubu[10], 11] ];

  //関西
  resident_repeat_kansai_1 = [ [resident_repeat_2016_october_kansai[0], 1], [resident_repeat_2016_november_kansai[0], 2], [resident_repeat_2016_december_kansai[0], 3], [resident_repeat_2017_january_kansai[0], 4], [resident_repeat_feb_kansai[0], 5], [resident_repeat_march_kansai[0], 6], [resident_repeat_april_kansai[0], 7], [resident_repeat_may_kansai[0], 8], [resident_repeat_june_kansai[0], 9], [resident_repeat_2017_july_kansai[0], 10], [resident_repeat_2017_august_kansai[0], 11] ];
  resident_repeat_kansai_2 = [ [resident_repeat_2016_october_kansai[1], 1], [resident_repeat_2016_november_kansai[1], 2], [resident_repeat_2016_december_kansai[1], 3], [resident_repeat_2017_january_kansai[1], 4], [resident_repeat_feb_kansai[1], 5], [resident_repeat_march_kansai[1], 6], [resident_repeat_april_kansai[1], 7], [resident_repeat_may_kansai[1], 8], [resident_repeat_june_kansai[1], 9], [resident_repeat_2017_july_kansai[1], 10], [resident_repeat_2017_august_kansai[1], 11] ];
  resident_repeat_kansai_3 = [ [resident_repeat_2016_october_kansai[2], 1], [resident_repeat_2016_november_kansai[2], 2], [resident_repeat_2016_december_kansai[2], 3], [resident_repeat_2017_january_kansai[2], 4], [resident_repeat_feb_kansai[2], 5], [resident_repeat_march_kansai[2], 6], [resident_repeat_april_kansai[2], 7], [resident_repeat_may_kansai[2], 8], [resident_repeat_june_kansai[2], 9], [resident_repeat_2017_july_kansai[2], 10], [resident_repeat_2017_august_kansai[2], 11] ];
  resident_repeat_kansai_4 = [ [resident_repeat_2016_october_kansai[3], 1], [resident_repeat_2016_november_kansai[3], 2], [resident_repeat_2016_december_kansai[3], 3], [resident_repeat_2017_january_kansai[3], 4], [resident_repeat_feb_kansai[3], 5], [resident_repeat_march_kansai[3], 6], [resident_repeat_april_kansai[3], 7], [resident_repeat_may_kansai[3], 8], [resident_repeat_june_kansai[3], 9], [resident_repeat_2017_july_kansai[3], 10], [resident_repeat_2017_august_kansai[3], 11] ];
  resident_repeat_kansai_5 = [ [resident_repeat_2016_october_kansai[4], 1], [resident_repeat_2016_november_kansai[4], 2], [resident_repeat_2016_december_kansai[4], 3], [resident_repeat_2017_january_kansai[4], 4], [resident_repeat_feb_kansai[4], 5], [resident_repeat_march_kansai[4], 6], [resident_repeat_april_kansai[4], 7], [resident_repeat_may_kansai[4], 8], [resident_repeat_june_kansai[4], 9], [resident_repeat_2017_july_kansai[4], 10], [resident_repeat_2017_august_kansai[4], 11] ];
  resident_repeat_kansai_6 = [ [resident_repeat_2016_october_kansai[5], 1], [resident_repeat_2016_november_kansai[5], 2], [resident_repeat_2016_december_kansai[5], 3], [resident_repeat_2017_january_kansai[5], 4], [resident_repeat_feb_kansai[5], 5], [resident_repeat_march_kansai[5], 6], [resident_repeat_april_kansai[5], 7], [resident_repeat_may_kansai[5], 8], [resident_repeat_june_kansai[5], 9], [resident_repeat_2017_july_kansai[5], 10], [resident_repeat_2017_august_kansai[5], 11] ];
  resident_repeat_kansai_7 = [ [resident_repeat_2016_october_kansai[6], 1], [resident_repeat_2016_november_kansai[6], 2], [resident_repeat_2016_december_kansai[6], 3], [resident_repeat_2017_january_kansai[6], 4], [resident_repeat_feb_kansai[6], 5], [resident_repeat_march_kansai[6], 6], [resident_repeat_april_kansai[6], 7], [resident_repeat_may_kansai[6], 8], [resident_repeat_june_kansai[6], 9], [resident_repeat_2017_july_kansai[6], 10], [resident_repeat_2017_august_kansai[6], 11] ];
  resident_repeat_kansai_8 = [ [resident_repeat_2016_october_kansai[7], 1], [resident_repeat_2016_november_kansai[7], 2], [resident_repeat_2016_december_kansai[7], 3], [resident_repeat_2017_january_kansai[7], 4], [resident_repeat_feb_kansai[7], 5], [resident_repeat_march_kansai[7], 6], [resident_repeat_april_kansai[7], 7], [resident_repeat_may_kansai[7], 8], [resident_repeat_june_kansai[7], 9], [resident_repeat_2017_july_kansai[7], 10], [resident_repeat_2017_august_kansai[7], 11] ];
  resident_repeat_kansai_9 = [ [resident_repeat_2016_october_kansai[8], 1], [resident_repeat_2016_november_kansai[8], 2], [resident_repeat_2016_december_kansai[8], 3], [resident_repeat_2017_january_kansai[8], 4], [resident_repeat_feb_kansai[8], 5], [resident_repeat_march_kansai[8], 6], [resident_repeat_april_kansai[8], 7], [resident_repeat_may_kansai[8], 8], [resident_repeat_june_kansai[8], 9], [resident_repeat_2017_july_kansai[8], 10], [resident_repeat_2017_august_kansai[8], 11] ];
  resident_repeat_kansai_10 = [ [resident_repeat_2016_october_kansai[9], 1], [resident_repeat_2016_november_kansai[9], 2], [resident_repeat_2016_december_kansai[9], 3], [resident_repeat_2017_january_kansai[9], 4], [resident_repeat_feb_kansai[9], 5], [resident_repeat_march_kansai[9], 6], [resident_repeat_april_kansai[9], 7], [resident_repeat_may_kansai[9], 8], [resident_repeat_june_kansai[9], 9], [resident_repeat_2017_july_kansai[9], 10], [resident_repeat_2017_august_kansai[9], 11] ];
  resident_repeat_kansai_11 = [ [resident_repeat_2016_october_kansai[10], 1], [resident_repeat_2016_november_kansai[10], 2], [resident_repeat_2016_december_kansai[10], 3], [resident_repeat_2017_january_kansai[10], 4], [resident_repeat_feb_kansai[10], 5], [resident_repeat_march_kansai[10], 6], [resident_repeat_april_kansai[10], 7], [resident_repeat_may_kansai[10], 8], [resident_repeat_june_kansai[10], 9], [resident_repeat_2017_july_kansai[10], 10], [resident_repeat_2017_august_kansai[10], 11] ];


  //富山
  resident_repeat_toyama_1 = [ [resident_repeat_2016_october_toyama[0], 1], [resident_repeat_2016_november_toyama[0], 2], [resident_repeat_2016_december_toyama[0], 3], [resident_repeat_2017_january_toyama[0], 4], [resident_repeat_feb_toyama[0], 5], [resident_repeat_march_toyama[0], 6], [resident_repeat_april_toyama[0], 7], [resident_repeat_may_toyama[0], 8], [resident_repeat_june_toyama[0], 9], [resident_repeat_2017_july_toyama[0], 10], [resident_repeat_2017_august_toyama[0], 11] ];
  resident_repeat_toyama_2 = [ [resident_repeat_2016_october_toyama[1], 1], [resident_repeat_2016_november_toyama[1], 2], [resident_repeat_2016_december_toyama[1], 3], [resident_repeat_2017_january_toyama[1], 4], [resident_repeat_feb_toyama[1], 5], [resident_repeat_march_toyama[1], 6], [resident_repeat_april_toyama[1], 7], [resident_repeat_may_toyama[1], 8], [resident_repeat_june_toyama[1], 9], [resident_repeat_2017_july_toyama[1], 10], [resident_repeat_2017_august_toyama[1], 11] ];
  resident_repeat_toyama_3 = [ [resident_repeat_2016_october_toyama[2], 1], [resident_repeat_2016_november_toyama[2], 2], [resident_repeat_2016_december_toyama[2], 3], [resident_repeat_2017_january_toyama[2], 4], [resident_repeat_feb_toyama[2], 5], [resident_repeat_march_toyama[2], 6], [resident_repeat_april_toyama[2], 7], [resident_repeat_may_toyama[2], 8], [resident_repeat_june_toyama[2], 9], [resident_repeat_2017_july_toyama[2], 10], [resident_repeat_2017_august_toyama[2], 11] ];
  resident_repeat_toyama_4 = [ [resident_repeat_2016_october_toyama[3], 1], [resident_repeat_2016_november_toyama[3], 2], [resident_repeat_2016_december_toyama[3], 3], [resident_repeat_2017_january_toyama[3], 4], [resident_repeat_feb_toyama[3], 5], [resident_repeat_march_toyama[3], 6], [resident_repeat_april_toyama[3], 7], [resident_repeat_may_toyama[3], 8], [resident_repeat_june_toyama[3], 9], [resident_repeat_2017_july_toyama[3], 10], [resident_repeat_2017_august_toyama[3], 11] ];
  resident_repeat_toyama_5 = [ [resident_repeat_2016_october_toyama[4], 1], [resident_repeat_2016_november_toyama[4], 2], [resident_repeat_2016_december_toyama[4], 3], [resident_repeat_2017_january_toyama[4], 4], [resident_repeat_feb_toyama[4], 5], [resident_repeat_march_toyama[4], 6], [resident_repeat_april_toyama[4], 7], [resident_repeat_may_toyama[4], 8], [resident_repeat_june_toyama[4], 9], [resident_repeat_2017_july_toyama[4], 10], [resident_repeat_2017_august_toyama[4], 11] ];
  resident_repeat_toyama_6 = [ [resident_repeat_2016_october_toyama[5], 1], [resident_repeat_2016_november_toyama[5], 2], [resident_repeat_2016_december_toyama[5], 3], [resident_repeat_2017_january_toyama[5], 4], [resident_repeat_feb_toyama[5], 5], [resident_repeat_march_toyama[5], 6], [resident_repeat_april_toyama[5], 7], [resident_repeat_may_toyama[5], 8], [resident_repeat_june_toyama[5], 9], [resident_repeat_2017_july_toyama[5], 10], [resident_repeat_2017_august_toyama[5], 11] ];
  resident_repeat_toyama_7 = [ [resident_repeat_2016_october_toyama[6], 1], [resident_repeat_2016_november_toyama[6], 2], [resident_repeat_2016_december_toyama[6], 3], [resident_repeat_2017_january_toyama[6], 4], [resident_repeat_feb_toyama[6], 5], [resident_repeat_march_toyama[6], 6], [resident_repeat_april_toyama[6], 7], [resident_repeat_may_toyama[6], 8], [resident_repeat_june_toyama[6], 9], [resident_repeat_2017_july_toyama[6], 10], [resident_repeat_2017_august_toyama[6], 11] ];
  resident_repeat_toyama_8 = [ [resident_repeat_2016_october_toyama[7], 1], [resident_repeat_2016_november_toyama[7], 2], [resident_repeat_2016_december_toyama[7], 3], [resident_repeat_2017_january_toyama[7], 4], [resident_repeat_feb_toyama[7], 5], [resident_repeat_march_toyama[7], 6], [resident_repeat_april_toyama[7], 7], [resident_repeat_may_toyama[7], 8], [resident_repeat_june_toyama[7], 9], [resident_repeat_2017_july_toyama[7], 10], [resident_repeat_2017_august_toyama[7], 11] ];
  resident_repeat_toyama_9 = [ [resident_repeat_2016_october_toyama[8], 1], [resident_repeat_2016_november_toyama[8], 2], [resident_repeat_2016_december_toyama[8], 3], [resident_repeat_2017_january_toyama[8], 4], [resident_repeat_feb_toyama[8], 5], [resident_repeat_march_toyama[8], 6], [resident_repeat_april_toyama[8], 7], [resident_repeat_may_toyama[8], 8], [resident_repeat_june_toyama[8], 9], [resident_repeat_2017_july_toyama[8], 10], [resident_repeat_2017_august_toyama[8], 11] ];
  resident_repeat_toyama_10 = [ [resident_repeat_2016_october_toyama[9], 1], [resident_repeat_2016_november_toyama[9], 2], [resident_repeat_2016_december_toyama[9], 3], [resident_repeat_2017_january_toyama[9], 4], [resident_repeat_feb_toyama[9], 5], [resident_repeat_march_toyama[9], 6], [resident_repeat_april_toyama[9], 7], [resident_repeat_may_toyama[9], 8], [resident_repeat_june_toyama[9], 9], [resident_repeat_2017_july_toyama[9], 10], [resident_repeat_2017_august_toyama[9], 11] ];
  resident_repeat_toyama_11 = [ [resident_repeat_2016_october_toyama[10], 1], [resident_repeat_2016_november_toyama[10], 2], [resident_repeat_2016_december_toyama[10], 3], [resident_repeat_2017_january_toyama[10], 4], [resident_repeat_feb_toyama[10], 5], [resident_repeat_march_toyama[10], 6], [resident_repeat_april_toyama[10], 7], [resident_repeat_may_toyama[10], 8], [resident_repeat_june_toyama[10], 9], [resident_repeat_2017_july_toyama[10], 10], [resident_repeat_2017_august_toyama[10], 11] ];


  //その他
  resident_repeat_others_1 = [ [resident_repeat_2016_october_others[0], 1], [resident_repeat_2016_november_others[0], 2], [resident_repeat_2016_december_others[0], 3], [resident_repeat_2017_january_others[0], 4], [resident_repeat_feb_others[0], 5], [resident_repeat_march_others[0], 6], [resident_repeat_april_others[0], 7], [resident_repeat_may_others[0], 8], [resident_repeat_june_others[0], 9], [resident_repeat_2017_july_others[0], 10], [resident_repeat_2017_august_others[0], 11] ];
  resident_repeat_others_2 = [ [resident_repeat_2016_october_others[1], 1], [resident_repeat_2016_november_others[1], 2], [resident_repeat_2016_december_others[1], 3], [resident_repeat_2017_january_others[1], 4], [resident_repeat_feb_others[1], 5], [resident_repeat_march_others[1], 6], [resident_repeat_april_others[1], 7], [resident_repeat_may_others[1], 8], [resident_repeat_june_others[1], 9], [resident_repeat_2017_july_others[1], 10], [resident_repeat_2017_august_others[1], 11] ];
  resident_repeat_others_3 = [ [resident_repeat_2016_october_others[2], 1], [resident_repeat_2016_november_others[2], 2], [resident_repeat_2016_december_others[2], 3], [resident_repeat_2017_january_others[2], 4], [resident_repeat_feb_others[2], 5], [resident_repeat_march_others[2], 6], [resident_repeat_april_others[2], 7], [resident_repeat_may_others[2], 8], [resident_repeat_june_others[2], 9], [resident_repeat_2017_july_others[2], 10], [resident_repeat_2017_august_others[2], 11] ];
  resident_repeat_others_4 = [ [resident_repeat_2016_october_others[3], 1], [resident_repeat_2016_november_others[3], 2], [resident_repeat_2016_december_others[3], 3], [resident_repeat_2017_january_others[3], 4], [resident_repeat_feb_others[3], 5], [resident_repeat_march_others[3], 6], [resident_repeat_april_others[3], 7], [resident_repeat_may_others[3], 8], [resident_repeat_june_others[3], 9], [resident_repeat_2017_july_others[3], 10], [resident_repeat_2017_august_others[3], 11] ];
  resident_repeat_others_5 = [ [resident_repeat_2016_october_others[4], 1], [resident_repeat_2016_november_others[4], 2], [resident_repeat_2016_december_others[4], 3], [resident_repeat_2017_january_others[4], 4], [resident_repeat_feb_others[4], 5], [resident_repeat_march_others[4], 6], [resident_repeat_april_others[4], 7], [resident_repeat_may_others[4], 8], [resident_repeat_june_others[4], 9], [resident_repeat_2017_july_others[4], 10], [resident_repeat_2017_august_others[4], 11] ];
  resident_repeat_others_6 = [ [resident_repeat_2016_october_others[5], 1], [resident_repeat_2016_november_others[5], 2], [resident_repeat_2016_december_others[5], 3], [resident_repeat_2017_january_others[5], 4], [resident_repeat_feb_others[5], 5], [resident_repeat_march_others[5], 6], [resident_repeat_april_others[5], 7], [resident_repeat_may_others[5], 8], [resident_repeat_june_others[5], 9], [resident_repeat_2017_july_others[5], 10], [resident_repeat_2017_august_others[5], 11] ];
  resident_repeat_others_7 = [ [resident_repeat_2016_october_others[6], 1], [resident_repeat_2016_november_others[6], 2], [resident_repeat_2016_december_others[6], 3], [resident_repeat_2017_january_others[6], 4], [resident_repeat_feb_others[6], 5], [resident_repeat_march_others[6], 6], [resident_repeat_april_others[6], 7], [resident_repeat_may_others[6], 8], [resident_repeat_june_others[6], 9], [resident_repeat_2017_july_others[6], 10], [resident_repeat_2017_august_others[6], 11] ];
  resident_repeat_others_8 = [ [resident_repeat_2016_october_others[7], 1], [resident_repeat_2016_november_others[7], 2], [resident_repeat_2016_december_others[7], 3], [resident_repeat_2017_january_others[7], 4], [resident_repeat_feb_others[7], 5], [resident_repeat_march_others[7], 6], [resident_repeat_april_others[7], 7], [resident_repeat_may_others[7], 8], [resident_repeat_june_others[7], 9], [resident_repeat_2017_july_others[7], 10], [resident_repeat_2017_august_others[7], 11] ];
  resident_repeat_others_9 = [ [resident_repeat_2016_october_others[8], 1], [resident_repeat_2016_november_others[8], 2], [resident_repeat_2016_december_others[8], 3], [resident_repeat_2017_january_others[8], 4], [resident_repeat_feb_others[8], 5], [resident_repeat_march_others[8], 6], [resident_repeat_april_others[8], 7], [resident_repeat_may_others[8], 8], [resident_repeat_june_others[8], 9], [resident_repeat_2017_july_others[8], 10], [resident_repeat_2017_august_others[8], 11] ];
  resident_repeat_others_10 = [ [resident_repeat_2016_october_others[9], 1], [resident_repeat_2016_november_others[9], 2], [resident_repeat_2016_december_others[9], 3], [resident_repeat_2017_january_others[9], 4], [resident_repeat_feb_others[9], 5], [resident_repeat_march_others[9], 6], [resident_repeat_april_others[9], 7], [resident_repeat_may_others[9], 8], [resident_repeat_june_others[9], 9], [resident_repeat_2017_july_others[9], 10], [resident_repeat_2017_august_others[9], 11] ];
  resident_repeat_others_11 = [ [resident_repeat_2016_october_others[10], 1], [resident_repeat_2016_november_others[10], 2], [resident_repeat_2016_december_others[10], 3], [resident_repeat_2017_january_others[10], 4], [resident_repeat_feb_others[10], 5], [resident_repeat_march_others[10], 6], [resident_repeat_april_others[10], 7], [resident_repeat_may_others[10], 8], [resident_repeat_june_others[10], 9], [resident_repeat_2017_july_others[10], 10], [resident_repeat_2017_august_others[10], 11] ];

  yticks_month = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];
  button_count = 0;

  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#resident_repeat_kanto').fadeIn();
    $('#resident_repeat_tyubu').fadeIn();
    $('#resident_repeat_kansai').fadeIn();
    $('#resident_repeat_toyama').fadeIn();
    $('#resident_repeat_others').fadeIn();

    // $('#resident_repeat_kanto').show();
    //button_countを考慮しないと、グラフの上にグラフが重なっていく
    if(button_count == 1){
      jQuery . jqplot(
          'resident_repeat_kanto',
          [
              resident_repeat_kanto_1, resident_repeat_kanto_2, resident_repeat_kanto_3, resident_repeat_kanto_4, resident_repeat_kanto_5, resident_repeat_kanto_6, resident_repeat_kanto_7, resident_repeat_kanto_8, resident_repeat_kanto_9, resident_repeat_kanto_10, resident_repeat_kanto_11

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (repeat_all_person) + '(人)',
                  text: '関東　居住地×リピート回数',
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
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    // min: 0,
                    // max: 250,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_repeat_tyubu',
          [
              resident_repeat_tyubu_1, resident_repeat_tyubu_2, resident_repeat_tyubu_3, resident_repeat_tyubu_4, resident_repeat_tyubu_5, resident_repeat_tyubu_6, resident_repeat_tyubu_7, resident_repeat_tyubu_8, resident_repeat_tyubu_9, resident_repeat_tyubu_10, resident_repeat_tyubu_11

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (repeat_all_person) + '(人)',
                  text: '中部　居住地×リピート回数',
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
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    max: 200,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_repeat_kansai',
          [
              resident_repeat_kansai_1, resident_repeat_kansai_2, resident_repeat_kansai_3, resident_repeat_kansai_4, resident_repeat_kansai_5, resident_repeat_kansai_6, resident_repeat_kansai_7, resident_repeat_kansai_8, resident_repeat_kansai_9, resident_repeat_kansai_10, resident_repeat_kansai_11

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (repeat_all_person) + '(人)',
                  text: '関西　居住地×リピート回数',
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
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    max: 120,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_repeat_toyama',
          [
              resident_repeat_toyama_1, resident_repeat_toyama_2, resident_repeat_toyama_3, resident_repeat_toyama_4, resident_repeat_toyama_5, resident_repeat_toyama_6, resident_repeat_toyama_7, resident_repeat_toyama_8, resident_repeat_toyama_9, resident_repeat_toyama_10, resident_repeat_toyama_11

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (repeat_all_person) + '(人)',
                  text: '富山　居住地×リピート回数',
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
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    max: 80,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );

      jQuery . jqplot(
          'resident_repeat_others',
          [
              resident_repeat_others_1, resident_repeat_others_2, resident_repeat_others_3, resident_repeat_others_4, resident_repeat_others_5, resident_repeat_others_6, resident_repeat_others_7, resident_repeat_others_8, resident_repeat_others_9, resident_repeat_others_10, resident_repeat_others_11

          ],
          {
              title: {
                  // text: '職業/月別 母数：' + (repeat_all_person) + '(人)',
                  text: 'その他　居住地×リピート回数',
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
                  location: 'se',
                  // location: 'ne',
                  rendererOptions: {
                      numberRows: 2
                  },
              },

              axes: {
                  xaxis:{
                    label: '人数',
                    max: 50,
                  },

                  yaxis: {
                      ticks: yticks_month,
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  }
              }
          }
      );
    }
  });
});
