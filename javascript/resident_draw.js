$(function(){
  resident_all = [0, 0, 0, 0, 0];     //index番号順に、2月・3月・4月・5月・6月


  for (var i = 0; i < resident_all.length; i++) {
    switch (i) {
      case 0:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];
        break;

      case 1:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

      case 2:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

      case 3:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

      case 4:
        resident_all[i] = resident_all[i] + resident_feb[i] + resident_march[i] + resident_april[i] + resident_may[i] + resident_june[i];

        break;

    }
  }

  // for (var i = 0; i < resident_all.length; i++) {
  //   console.log(resident_all[i]);
  // }

  console.log(resident_all[0]);


  //居住地の総数を描画する
  jQuery . jqplot(
        'resident_sousu',
        [
            [
                [ '関東', resident_all[0] ],
                [ '中部', resident_all[1] ],
                [ '関西', resident_all[2] ],
                [ '富山県', resident_all[3] ],
                [ 'その他', resident_all[4] ]
            ]
        ],
        {
            title: {
                text: '居住地/総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F78181', '#F7BE81', '#BEF781', '#81DAF5', '#D0A9F5' ],

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
        // {
        //     series: [
        //         {
        //             color: 'red'
        //         },
        //         {
        //             color: 'blue'
        //         },
        //         {
        //             color: 'green'
        //         },
        //         {
        //             color: 'green'
        //         },
        //         {
        //             color: 'green'
        //         },
        //     ]
        // }
    );
  //居住地(月別)を描画する
});
