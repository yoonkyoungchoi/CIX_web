var count = 0; matter = 0;

function hunsukbirthday(){
    var h = prompt("현석이의 생일은 언제일까요??", "(예 : 1월 1일)")
    if(h == "9월 8일"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }

  function hunsukname(){
 
    hunsukname = prompt("현석이의 본명은 무엇일까요???", "(예 : 마동석")
    if(hunsukname == "윤현석"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }

  function BXname(){
 
    BXname = prompt("BX의 본명은 무엇일까요???", "(예 : 이철호)")
    if(BXname == "9월 8일"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }

  function BXstar(){
  
    BXstar = prompt("BX의 별명중 한가지는 무엇일까요???", "(예 : 완두콩)");
    if(BXstar == "삐약곤"|| BXstar=="약곤" || BXstar=="고니" || BXstar=="공룡"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }
  function baegrup(){
  
    baegrup = prompt("배진영의 전 그룹 이름은???", "(예 : 우나운)")
    if(baegrup == "9월 8일"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }
  function seanghunbangsong(){
    
    seanghunbangsong = prompt("승훈이가 나간 프로그램 이름은??", "(예 : K-pop 스타)")
    if(date == "믹스나인","YG보석함"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }
  function seanghunfanname(){
    
    seanghunfanname = prompt("승훈이가 팬들을 부를때 쓰는 말은???", "(예 : 내꼬)")
    if(seanghunfanname == "내편들"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }
  function younghe(){
    
    younghe = prompt("용희가 제일 좋아하는 음식은????", "(예 : 과자)")
    if(younghe == "시리얼"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }
  function younghejum(){

    younghejum = prompt("용희의 점 위치는??", "(예 : 배꼽)")
    if(younghejum == "눈 밑"){
      alert("정답!");
      count++; 
    }
    else{
      alert("설마,,CIX 모르는건 아니죠??");
    }
    matter++;
  }
  
  function score(){
    if(count==9){
      alert("맞은 개수 : " + count + "개\n축하합니다!! CIX의 팬이신가요?~~!!");
    }
    else if (count < 9 && count > 5){
      alert("맞은 개수 : " + count + "개\n조금만 더 덕질하면 팬이 될수 있어요!!");
    }
    else if (count < 6 && count >2){
      alert("맞은 개수 : " + count + "개\n제 홈페이지는 보시긴 하신거죠,,,?");
    }
    else if (count < 3 && count >= 0){
      alert("맞은 개수 : " + count + "개\ 저기요 주무셨나요?")
    }
  }
  