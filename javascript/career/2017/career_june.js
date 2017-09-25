var career_june = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、農林水産・鉱業、建設業、製造業、卸・小売・飲食業、金融・保険業、不動産業、運輸・通信業、サービス業、公務員、その他・該当なし


$(function(){
  $.ajax({url: 'json/2017/data_june.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["job"] == "1"){
        career_june[0]++;
      }
      if (data[i]["job"] == "2") {
        career_june[1]++;
      }
      if (data[i]["job"] == "3") {
        career_june[2]++;
      }
      if (data[i]["job"] == "4") {
        career_june[3]++;
      }
      if (data[i]["job"] == "5") {
        career_june[4]++;
      }
      if (data[i]["job"] == "6") {
        career_june[5]++;
      }
      if (data[i]["job"] == "7") {
        career_june[6]++;
      }
      if (data[i]["job"] == "8") {
        career_june[7]++;
      }
      if (data[i]["job"] == "9") {
        career_june[8]++;
      }
      if (data[i]["job"] == "10") {
        career_june[9]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----6月----");
  for(var i = 0; i < career_june.length; i++){
    // console.log(career_june[i]);

    switch (i) {
      case 1:
        console.log("農林水産・鉱業： " + career_june[i] + "人");
        break;
      case 2:
        console.log("建設業： " + career_june[i] + "人");
        break;
      case 3:
        console.log("製造業： " + career_june[i] + "人");
        break;
      case 4:
        console.log("卸・小売・飲食業： " + career_june[i] + "人");
        break;
      case 5:
        console.log("金融・保険業： " + career_june[i] + "人");
        break;
      case 6:
        console.log("不動産業： " + career_june[i] + "人");
        break;
      case 7:
        console.log("運輸・通信業： " + career_june[i] + "人");
        break;
      case 8:
        console.log("サービス業： " + career_june[i] + "人");
        break;
      case 9:
        console.log("公務員： " + career_june[i] + "人");
        break;
      case 10:
        console.log("その他・該当なし： " + career_june[i] + "人");
        break;

    }
  }


});
