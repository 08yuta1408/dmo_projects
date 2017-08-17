$(function(){
  //2〜6月の集計結果をまとめるための変数
  var resident_repeat_kanto = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  //index番号順に、富山県在住、1回目、2回目、3回目、4回目、5回目、6回目、7回目、8回目、9回目、10回以上
  var resident_repeat_tyubu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var resident_repeat_kansai = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var resident_repeat_toyama = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var resident_repeat_others = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //関東集計
  for (var i = 0; i < resident_repeat_kanto.length; i++) {
    resident_repeat_kanto[i] = resident_repeat_feb_kanto[i] + resident_repeat_march_kanto[i] + resident_repeat_april_kanto[i] + resident_repeat_may_kanto[i] + resident_repeat_june_kanto[i];
  }

  //中部集計
  for (var i = 0; i < resident_repeat_tyubu.length; i++) {
    resident_repeat_tyubu[i] = resident_repeat_feb_tyubu[i] + resident_repeat_march_tyubu[i] + resident_repeat_april_tyubu[i] + resident_repeat_may_tyubu[i] + resident_repeat_june_tyubu[i];
  }

  //関西集計
  for (var i = 0; i < resident_repeat_kansai.length; i++) {
    resident_repeat_kansai[i] = resident_repeat_feb_kansai[i] + resident_repeat_march_kansai[i] + resident_repeat_april_kansai[i] + resident_repeat_may_kansai[i] + resident_repeat_june_kansai[i];
  }

  //富山集計
  for (var i = 0; i < resident_repeat_toyama.length; i++) {
    resident_repeat_toyama[i] = resident_repeat_feb_toyama[i] + resident_repeat_march_toyama[i] + resident_repeat_april_toyama[i] + resident_repeat_may_toyama[i] + resident_repeat_june_toyama[i];
  }

  //その他集計
  for (var i = 0; i < resident_repeat_others.length; i++) {
    resident_repeat_others[i] = resident_repeat_feb_others[i] + resident_repeat_march_others[i] + resident_repeat_april_others[i] + resident_repeat_may_others[i] + resident_repeat_june_others[i];
  }

  console.log("----関東集計(2~6月)----");
  for (var i = 0; i < resident_repeat_kanto.length; i++) {
    console.log(resident_repeat_kanto[i]);
  }


  resident_repeat_1 = [ [resident_repeat_others[0], 1], [resident_repeat_toyama[0], 2], [resident_repeat_kansai[0], 3], [resident_repeat_tyubu[0], 4], [resident_repeat_kanto[0], 5] ];
  resident_repeat_2 = [ [resident_repeat_others[1], 1], [resident_repeat_toyama[1], 2], [resident_repeat_kansai[1], 3], [resident_repeat_tyubu[1], 4], [resident_repeat_kanto[1], 5] ];
  resident_repeat_3 = [ [resident_repeat_others[2], 1], [resident_repeat_toyama[2], 2], [resident_repeat_kansai[2], 3], [resident_repeat_tyubu[2], 4], [resident_repeat_kanto[2], 5] ];
  resident_repeat_4 = [ [resident_repeat_others[3], 1], [resident_repeat_toyama[3], 2], [resident_repeat_kansai[3], 3], [resident_repeat_tyubu[3], 4], [resident_repeat_kanto[3], 5] ];
  resident_repeat_5 = [ [resident_repeat_others[4], 1], [resident_repeat_toyama[4], 2], [resident_repeat_kansai[4], 3], [resident_repeat_tyubu[4], 4], [resident_repeat_kanto[4], 5] ];
  resident_repeat_6 = [ [resident_repeat_others[5], 1], [resident_repeat_toyama[5], 2], [resident_repeat_kansai[5], 3], [resident_repeat_tyubu[5], 4], [resident_repeat_kanto[5], 5] ];
  resident_repeat_7 = [ [resident_repeat_others[6], 1], [resident_repeat_toyama[6], 2], [resident_repeat_kansai[6], 3], [resident_repeat_tyubu[6], 4], [resident_repeat_kanto[6], 5] ];
  resident_repeat_8 = [ [resident_repeat_others[7], 1], [resident_repeat_toyama[7], 2], [resident_repeat_kansai[7], 3], [resident_repeat_tyubu[7], 4], [resident_repeat_kanto[7], 5] ];
  resident_repeat_9 = [ [resident_repeat_others[8], 1], [resident_repeat_toyama[8], 2], [resident_repeat_kansai[8], 3], [resident_repeat_tyubu[8], 4], [resident_repeat_kanto[8], 5] ];
  resident_repeat_10 = [ [resident_repeat_others[9], 1], [resident_repeat_toyama[9], 2], [resident_repeat_kansai[9], 3], [resident_repeat_tyubu[9], 4], [resident_repeat_kanto[9], 5] ];
  resident_repeat_11 = [ [resident_repeat_others[10], 1], [resident_repeat_toyama[10], 2], [resident_repeat_kansai[10], 3], [resident_repeat_tyubu[10], 4], [resident_repeat_kanto[10], 5] ];
  var yticks = [ 'その他', '富山', '関西', '中部', '関東'];

  //デフォルトで総数グラフを表示
  jQuery . jqplot(
      'resident_repeat_sousu',
      [
          resident_repeat_1, resident_repeat_2, resident_repeat_3, resident_repeat_4, resident_repeat_5, resident_repeat_6, resident_repeat_7, resident_repeat_8, resident_repeat_9, resident_repeat_10, resident_repeat_11

      ],
      {
          title: {
              text: '居住地×リピート回数/総数',
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

  //関東
  resident_repeat_kanto_1 = [[resident_repeat_feb_kanto[0], 1], [resident_repeat_march_kanto[0], 2],  [resident_repeat_april_kanto[0], 3],  [resident_repeat_may_kanto[0], 4],  [resident_repeat_june_kanto[0], 5] ];
  resident_repeat_kanto_2 = [[resident_repeat_feb_kanto[1], 1], [resident_repeat_march_kanto[1], 2],  [resident_repeat_april_kanto[1], 3],  [resident_repeat_may_kanto[1], 4],  [resident_repeat_june_kanto[1], 5] ];
  resident_repeat_kanto_3 = [[resident_repeat_feb_kanto[2], 1], [resident_repeat_march_kanto[2], 2],  [resident_repeat_april_kanto[2], 3],  [resident_repeat_may_kanto[2], 4],  [resident_repeat_june_kanto[2], 5] ];
  resident_repeat_kanto_4 = [[resident_repeat_feb_kanto[3], 1], [resident_repeat_march_kanto[3], 2],  [resident_repeat_april_kanto[3], 3],  [resident_repeat_may_kanto[3], 4],  [resident_repeat_june_kanto[3], 5] ];
  resident_repeat_kanto_5 = [[resident_repeat_feb_kanto[4], 1], [resident_repeat_march_kanto[4], 2],  [resident_repeat_april_kanto[4], 3],  [resident_repeat_may_kanto[4], 4],  [resident_repeat_june_kanto[4], 5] ];
  resident_repeat_kanto_6 = [[resident_repeat_feb_kanto[5], 1], [resident_repeat_march_kanto[5], 2],  [resident_repeat_april_kanto[5], 3],  [resident_repeat_may_kanto[5], 4],  [resident_repeat_june_kanto[5], 5] ];
  resident_repeat_kanto_7 = [[resident_repeat_feb_kanto[6], 1], [resident_repeat_march_kanto[6], 2],  [resident_repeat_april_kanto[6], 3],  [resident_repeat_may_kanto[6], 4],  [resident_repeat_june_kanto[6], 5] ];
  resident_repeat_kanto_8 = [[resident_repeat_feb_kanto[7], 1], [resident_repeat_march_kanto[7], 2],  [resident_repeat_april_kanto[7], 3],  [resident_repeat_may_kanto[7], 4],  [resident_repeat_june_kanto[7], 5] ];
  resident_repeat_kanto_9 = [[resident_repeat_feb_kanto[8], 1], [resident_repeat_march_kanto[8], 2],  [resident_repeat_april_kanto[8], 3],  [resident_repeat_may_kanto[8], 4],  [resident_repeat_june_kanto[8], 5] ];
  resident_repeat_kanto_10 = [[resident_repeat_feb_kanto[9], 1], [resident_repeat_march_kanto[9], 2],  [resident_repeat_april_kanto[9], 3],  [resident_repeat_may_kanto[9], 4],  [resident_repeat_june_kanto[9], 5] ];
  resident_repeat_kanto_11 = [[resident_repeat_feb_kanto[10], 1], [resident_repeat_march_kanto[10], 2],  [resident_repeat_april_kanto[10], 3],  [resident_repeat_may_kanto[10], 4],  [resident_repeat_june_kanto[10], 5] ];

  //中部
  resident_repeat_tyubu_1 = [[resident_repeat_feb_tyubu[0], 1], [resident_repeat_march_tyubu[0], 2],  [resident_repeat_april_tyubu[0], 3],  [resident_repeat_may_tyubu[0], 4],  [resident_repeat_june_tyubu[0], 5] ];
  resident_repeat_tyubu_2 = [[resident_repeat_feb_tyubu[1], 1], [resident_repeat_march_tyubu[1], 2],  [resident_repeat_april_tyubu[1], 3],  [resident_repeat_may_tyubu[1], 4],  [resident_repeat_june_tyubu[1], 5] ];
  resident_repeat_tyubu_3 = [[resident_repeat_feb_tyubu[2], 1], [resident_repeat_march_tyubu[2], 2],  [resident_repeat_april_tyubu[2], 3],  [resident_repeat_may_tyubu[2], 4],  [resident_repeat_june_tyubu[2], 5] ];
  resident_repeat_tyubu_4 = [[resident_repeat_feb_tyubu[3], 1], [resident_repeat_march_tyubu[3], 2],  [resident_repeat_april_tyubu[3], 3],  [resident_repeat_may_tyubu[3], 4],  [resident_repeat_june_tyubu[3], 5] ];
  resident_repeat_tyubu_5 = [[resident_repeat_feb_tyubu[4], 1], [resident_repeat_march_tyubu[4], 2],  [resident_repeat_april_tyubu[4], 3],  [resident_repeat_may_tyubu[4], 4],  [resident_repeat_june_tyubu[4], 5] ];
  resident_repeat_tyubu_6 = [[resident_repeat_feb_tyubu[5], 1], [resident_repeat_march_tyubu[5], 2],  [resident_repeat_april_tyubu[5], 3],  [resident_repeat_may_tyubu[5], 4],  [resident_repeat_june_tyubu[5], 5] ];
  resident_repeat_tyubu_7 = [[resident_repeat_feb_tyubu[6], 1], [resident_repeat_march_tyubu[6], 2],  [resident_repeat_april_tyubu[6], 3],  [resident_repeat_may_tyubu[6], 4],  [resident_repeat_june_tyubu[6], 5] ];
  resident_repeat_tyubu_8 = [[resident_repeat_feb_tyubu[7], 1], [resident_repeat_march_tyubu[7], 2],  [resident_repeat_april_tyubu[7], 3],  [resident_repeat_may_tyubu[7], 4],  [resident_repeat_june_tyubu[7], 5] ];
  resident_repeat_tyubu_9 = [[resident_repeat_feb_tyubu[8], 1], [resident_repeat_march_tyubu[8], 2],  [resident_repeat_april_tyubu[8], 3],  [resident_repeat_may_tyubu[8], 4],  [resident_repeat_june_tyubu[8], 5] ];
  resident_repeat_tyubu_10 = [[resident_repeat_feb_tyubu[9], 1], [resident_repeat_march_tyubu[9], 2],  [resident_repeat_april_tyubu[9], 3],  [resident_repeat_may_tyubu[9], 4],  [resident_repeat_june_tyubu[9], 5] ];
  resident_repeat_tyubu_11 = [[resident_repeat_feb_tyubu[10], 1], [resident_repeat_march_tyubu[10], 2],  [resident_repeat_april_tyubu[10], 3],  [resident_repeat_may_tyubu[10], 4],  [resident_repeat_june_tyubu[10], 5] ];

  //関西
  resident_repeat_kansai_1 = [[resident_repeat_feb_kansai[0], 1], [resident_repeat_march_kansai[0], 2],  [resident_repeat_april_kansai[0], 3],  [resident_repeat_may_kansai[0], 4],  [resident_repeat_june_kansai[0], 5] ];
  resident_repeat_kansai_2 = [[resident_repeat_feb_kansai[1], 1], [resident_repeat_march_kansai[1], 2],  [resident_repeat_april_kansai[1], 3],  [resident_repeat_may_kansai[1], 4],  [resident_repeat_june_kansai[1], 5] ];
  resident_repeat_kansai_3 = [[resident_repeat_feb_kansai[2], 1], [resident_repeat_march_kansai[2], 2],  [resident_repeat_april_kansai[2], 3],  [resident_repeat_may_kansai[2], 4],  [resident_repeat_june_kansai[2], 5] ];
  resident_repeat_kansai_4 = [[resident_repeat_feb_kansai[3], 1], [resident_repeat_march_kansai[3], 2],  [resident_repeat_april_kansai[3], 3],  [resident_repeat_may_kansai[3], 4],  [resident_repeat_june_kansai[3], 5] ];
  resident_repeat_kansai_5 = [[resident_repeat_feb_kansai[4], 1], [resident_repeat_march_kansai[4], 2],  [resident_repeat_april_kansai[4], 3],  [resident_repeat_may_kansai[4], 4],  [resident_repeat_june_kansai[4], 5] ];
  resident_repeat_kansai_6 = [[resident_repeat_feb_kansai[5], 1], [resident_repeat_march_kansai[5], 2],  [resident_repeat_april_kansai[5], 3],  [resident_repeat_may_kansai[5], 4],  [resident_repeat_june_kansai[5], 5] ];
  resident_repeat_kansai_7 = [[resident_repeat_feb_kansai[6], 1], [resident_repeat_march_kansai[6], 2],  [resident_repeat_april_kansai[6], 3],  [resident_repeat_may_kansai[6], 4],  [resident_repeat_june_kansai[6], 5] ];
  resident_repeat_kansai_8 = [[resident_repeat_feb_kansai[7], 1], [resident_repeat_march_kansai[7], 2],  [resident_repeat_april_kansai[7], 3],  [resident_repeat_may_kansai[7], 4],  [resident_repeat_june_kansai[7], 5] ];
  resident_repeat_kansai_9 = [[resident_repeat_feb_kansai[8], 1], [resident_repeat_march_kansai[8], 2],  [resident_repeat_april_kansai[8], 3],  [resident_repeat_may_kansai[8], 4],  [resident_repeat_june_kansai[8], 5] ];
  resident_repeat_kansai_10 = [[resident_repeat_feb_kansai[9], 1], [resident_repeat_march_kansai[9], 2],  [resident_repeat_april_kansai[9], 3],  [resident_repeat_may_kansai[9], 4],  [resident_repeat_june_kansai[9], 5] ];
  resident_repeat_kansai_11 = [[resident_repeat_feb_kansai[10], 1], [resident_repeat_march_kansai[10], 2],  [resident_repeat_april_kansai[10], 3],  [resident_repeat_may_kansai[10], 4],  [resident_repeat_june_kansai[10], 5] ];


  //富山
  resident_repeat_toyama_1 = [[resident_repeat_feb_toyama[0], 1], [resident_repeat_march_toyama[0], 2],  [resident_repeat_april_toyama[0], 3],  [resident_repeat_may_toyama[0], 4],  [resident_repeat_june_toyama[0], 5] ];
  resident_repeat_toyama_2 = [[resident_repeat_feb_toyama[1], 1], [resident_repeat_march_toyama[1], 2],  [resident_repeat_april_toyama[1], 3],  [resident_repeat_may_toyama[1], 4],  [resident_repeat_june_toyama[1], 5] ];
  resident_repeat_toyama_3 = [[resident_repeat_feb_toyama[2], 1], [resident_repeat_march_toyama[2], 2],  [resident_repeat_april_toyama[2], 3],  [resident_repeat_may_toyama[2], 4],  [resident_repeat_june_toyama[2], 5] ];
  resident_repeat_toyama_4 = [[resident_repeat_feb_toyama[3], 1], [resident_repeat_march_toyama[3], 2],  [resident_repeat_april_toyama[3], 3],  [resident_repeat_may_toyama[3], 4],  [resident_repeat_june_toyama[3], 5] ];
  resident_repeat_toyama_5 = [[resident_repeat_feb_toyama[4], 1], [resident_repeat_march_toyama[4], 2],  [resident_repeat_april_toyama[4], 3],  [resident_repeat_may_toyama[4], 4],  [resident_repeat_june_toyama[4], 5] ];
  resident_repeat_toyama_6 = [[resident_repeat_feb_toyama[5], 1], [resident_repeat_march_toyama[5], 2],  [resident_repeat_april_toyama[5], 3],  [resident_repeat_may_toyama[5], 4],  [resident_repeat_june_toyama[5], 5] ];
  resident_repeat_toyama_7 = [[resident_repeat_feb_toyama[6], 1], [resident_repeat_march_toyama[6], 2],  [resident_repeat_april_toyama[6], 3],  [resident_repeat_may_toyama[6], 4],  [resident_repeat_june_toyama[6], 5] ];
  resident_repeat_toyama_8 = [[resident_repeat_feb_toyama[7], 1], [resident_repeat_march_toyama[7], 2],  [resident_repeat_april_toyama[7], 3],  [resident_repeat_may_toyama[7], 4],  [resident_repeat_june_toyama[7], 5] ];
  resident_repeat_toyama_9 = [[resident_repeat_feb_toyama[8], 1], [resident_repeat_march_toyama[8], 2],  [resident_repeat_april_toyama[8], 3],  [resident_repeat_may_toyama[8], 4],  [resident_repeat_june_toyama[8], 5] ];
  resident_repeat_toyama_10 = [[resident_repeat_feb_toyama[9], 1], [resident_repeat_march_toyama[9], 2],  [resident_repeat_april_toyama[9], 3],  [resident_repeat_may_toyama[9], 4],  [resident_repeat_june_toyama[9], 5] ];
  resident_repeat_toyama_11 = [[resident_repeat_feb_toyama[10], 1], [resident_repeat_march_toyama[10], 2],  [resident_repeat_april_toyama[10], 3],  [resident_repeat_may_toyama[10], 4],  [resident_repeat_june_toyama[10], 5] ];


  //その他
  resident_repeat_others_1 = [[resident_repeat_feb_others[0], 1], [resident_repeat_march_others[0], 2],  [resident_repeat_april_others[0], 3],  [resident_repeat_may_others[0], 4],  [resident_repeat_june_others[0], 5] ];
  resident_repeat_others_2 = [[resident_repeat_feb_others[1], 1], [resident_repeat_march_others[1], 2],  [resident_repeat_april_others[1], 3],  [resident_repeat_may_others[1], 4],  [resident_repeat_june_others[1], 5] ];
  resident_repeat_others_3 = [[resident_repeat_feb_others[2], 1], [resident_repeat_march_others[2], 2],  [resident_repeat_april_others[2], 3],  [resident_repeat_may_others[2], 4],  [resident_repeat_june_others[2], 5] ];
  resident_repeat_others_4 = [[resident_repeat_feb_others[3], 1], [resident_repeat_march_others[3], 2],  [resident_repeat_april_others[3], 3],  [resident_repeat_may_others[3], 4],  [resident_repeat_june_others[3], 5] ];
  resident_repeat_others_5 = [[resident_repeat_feb_others[4], 1], [resident_repeat_march_others[4], 2],  [resident_repeat_april_others[4], 3],  [resident_repeat_may_others[4], 4],  [resident_repeat_june_others[4], 5] ];
  resident_repeat_others_6 = [[resident_repeat_feb_others[5], 1], [resident_repeat_march_others[5], 2],  [resident_repeat_april_others[5], 3],  [resident_repeat_may_others[5], 4],  [resident_repeat_june_others[5], 5] ];
  resident_repeat_others_7 = [[resident_repeat_feb_others[6], 1], [resident_repeat_march_others[6], 2],  [resident_repeat_april_others[6], 3],  [resident_repeat_may_others[6], 4],  [resident_repeat_june_others[6], 5] ];
  resident_repeat_others_8 = [[resident_repeat_feb_others[7], 1], [resident_repeat_march_others[7], 2],  [resident_repeat_april_others[7], 3],  [resident_repeat_may_others[7], 4],  [resident_repeat_june_others[7], 5] ];
  resident_repeat_others_9 = [[resident_repeat_feb_others[8], 1], [resident_repeat_march_others[8], 2],  [resident_repeat_april_others[8], 3],  [resident_repeat_may_others[8], 4],  [resident_repeat_june_others[8], 5] ];
  resident_repeat_others_10 = [[resident_repeat_feb_others[9], 1], [resident_repeat_march_others[9], 2],  [resident_repeat_april_others[9], 3],  [resident_repeat_may_others[9], 4],  [resident_repeat_june_others[9], 5] ];
  resident_repeat_others_11 = [[resident_repeat_feb_others[10], 1], [resident_repeat_march_others[10], 2],  [resident_repeat_april_others[10], 3],  [resident_repeat_may_others[10], 4],  [resident_repeat_june_others[10], 5] ];

  yticks_month = ['2月', '3月', '4月', '5月', '6月'];
  button_count = 0;

  //月別ボタンを押した
  $('#month').click(function(){
    button_count++;
    $('.gragh').hide();
    $('#resident_repeat_kanto').show();
    $('#resident_repeat_tyubu').show();
    $('#resident_repeat_kansai').show();
    $('#resident_repeat_toyama').show();
    $('#resident_repeat_others').show();

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
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
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
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
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
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
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
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
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
                  // text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
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
