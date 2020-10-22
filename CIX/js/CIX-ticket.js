function display(element) {                   
	 var now = new Date()                    
	 if (!play) {                             
		   play = true              
		   startTime = now.getTime()
	   }             
			if (now.getTime() - startTime > 10000) {                        
			   element.checked = !element.checked                                                         
			   return              
		   }                       
		   if (element.checked)                                               
		   total++            
		   else                                                  
		   total--                                     
		   element.form.num.value = total                        
		   } 

		   function restart(form) {            
			   total = 0               
			   play = false                      
			   for (var i = 1; i <= 128; ++i) {                      
				   // uncheck current checkbox                          
				   form.elements[i].checked = false                
			   }    
		   } 
	   document.write("<BR>")
	   document.write("<FORM><CENTER>")
	   document.write("잡은좌석 수" + '<INPUT TYPE="text" VALUE="0" NAME="num" SIZE="10"><BR>')
	   document.write("<HR SIZE=1 WIDTH=40%>")
	   for (var i = 0; i < 8; ++i) {	
		   for (var j = 0; j < 8; ++j) {			
				   document.write('<INPUT TYPE="checkbox" onClick="display(this)">')	
		   }	
		   document.write("<p>")
	   }
	   for (var i = 0; i < 8; ++i) {	
		for (var j = 0; j < 8; ++j) {		
				document.write('<INPUT TYPE="checkbox" onClick="display(this)">')	
		}	
		document.write("<BR>")
	}
	   document.write("<HR SIZE=1 WIDTH=40%>")
		   document.write('<INPUT TYPE="button" VALUE="다시시작" onClick="restart(this.form)">')
		   document.write("</CENTER></FORM>")
