//index.js

//[nike part]
var $nike_contCover = document.querySelector("#cont_01 .cont");
var $nike_contGroup = "";

//랜덤방식으로 이미지 4개 중에서 2개만을 가져온다. (조건, 동일한 숫자는 나오지 않는다.)
var nike_num_arr = []; 
var nike_number;
while(nike_num_arr.length < 2){
  nike_number = Math.floor(Math.random() * 4);  //0 ~ 3
  //최소값 0.0001 =(*4)=> 0.0004 =(Math.floor)=> 0
  //최대값 0.9999 =(*4)=> 3.9996 =(Math.floor)=> 3
  if(nike_num_arr.indexOf(nike_number) == -1){
    nike_num_arr.push(nike_number);
  }
  console.log(nike_num_arr);  //[0, 3]
}
for(i=0; i<nike_num_arr.length; i++){  //i = 0 -> 1
  $nike_contGroup += `<div style="background-image:url(./img/nike_0${nike_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#nike_${nike_num_arr[i]}'"></div>`;
}
$nike_contCover.innerHTML = $nike_contGroup;



//[adidas part]
var $adidas_contCover = document.querySelector("#cont_02 .cont");
var $adidas_contGroup = "";

//랜덤방식으로 이미지 4개 중에서 2개만을 가져온다. (조건, 동일한 숫자는 나오지 않는다.)
var adidas_num_arr = []; 
var adidas_number;
while(adidas_num_arr.length < 2){
  adidas_number = Math.floor(Math.random() * 4);  //0 ~ 3
  //최소값 0.0001 =(*4)=> 0.0004 =(Math.floor)=> 0
  //최대값 0.9999 =(*4)=> 3.9996 =(Math.floor)=> 3
  if(adidas_num_arr.indexOf(adidas_number) == -1){
    adidas_num_arr.push(adidas_number);
  }
  console.log(adidas_num_arr);  //[0, 3]
}
for(i=0; i<adidas_num_arr.length; i++){  //i = 0 -> 1
  $adidas_contGroup += `<div style="background-image:url(./img/adidas_0${adidas_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#adidas_${adidas_num_arr[i]}'"></div>`;
}
$adidas_contCover.innerHTML = $adidas_contGroup;




//[puma part]
var $puma_contCover = document.querySelector("#cont_03 .cont");
var $puma_contGroup = "";

//랜덤방식으로 이미지 4개 중에서 2개만을 가져온다. (조건, 동일한 숫자는 나오지 않는다.)
var puma_num_arr = []; 
var puma_number;
while(puma_num_arr.length < 2){
  puma_number = Math.floor(Math.random() * 4);  //0 ~ 3
  //최소값 0.0001 =(*4)=> 0.0004 =(Math.floor)=> 0
  //최대값 0.9999 =(*4)=> 3.9996 =(Math.floor)=> 3
  if(puma_num_arr.indexOf(puma_number) == -1){
    puma_num_arr.push(puma_number);
  }
  console.log(puma_num_arr);  //[0, 3]
}
for(i=0; i<puma_num_arr.length; i++){  //i = 0 -> 1
  $puma_contGroup += `<div style="background-image:url(./img/puma_0${puma_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#puma_${puma_num_arr[i]}'"></div>`;
}
$puma_contCover.innerHTML = $puma_contGroup;



$(document).ready(function(){
  var $brand = ["nike", "adidas", "puma"];
  
  var slide_arr = [];
  var slide_img;

  while(slide_arr.length < 4){
    //slide_arr = ["nike_02.jpg", "puma_04.jpg", "adidas_01.jpg", "puma_04.jpg"];
    slide_img = `${$brand[Math.floor(Math.random() * 3)]}_0${Math.ceil(Math.random() * 4)}.jpg`;
    console.log(slide_img);
    if(slide_arr.indexOf(slide_img) == -1){
      slide_arr.push(slide_img);
    }
    console.log(slide_arr);  //(4) ['adidas_04.jpg', 'nike_01.jpg', 'nike_03.jpg', 'nike_02.jpg']
  }
  for(v of slide_arr){
    $("main .slider").append(`<div class="slide" style="background-image:url(./img/${v})"></div>`);
  }

  //플러그인의 사용 시점은 구조가 완성된 다음에만 적용 가능
  $(".slider").slick({
    infinite : true,  //무한 반복
    dots : true,  //슬라이드 네비게이터
    slidesToShow : 1,  //한번에 몇장의 이미지를 보여줄 것인가?
    slidesToScroll : 1,  //한번에 이동하는 이미지의 개수
    autoplay : true,  //자동회전여부
    autoplaySpeed : 3000,  //슬라이드의 회전 시간
  });
  


});