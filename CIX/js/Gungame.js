  function pang(){
      var theone=Math.floor(Math.random()*7)
  
      if (theone<=document.fire.bullets.value-1)
          alert("당신은 죽었습니다....다음 기회에")
      else{
          document.fire.message.value="당신은 살 기회가 생겼군....."
          setTimeout("document.fire.message.value='총은 돌아가고 있다.. 긴장해 ..'",500)
      }
  }
