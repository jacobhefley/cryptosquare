function romannumeral (array1){
	
}


$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var Str = $("#sentence").val();
		Str = Str.replace(/[^\w\s]|_+/g, "").replace(/\s+/g, '');
		Str = Str.toLowerCase();
		alert(Str.length);
		var arrayOfLetters = Str.split("");
		var Sq = Math.round(Math.sqrt(Str.length));
		for(var z=0; arrayOfLetters.length < (Sq*(Sq+1)); z++){
			arrayOfLetters.push("-1");
		}
        var arr = [];
        var count = 0;
		for(var x = 0; x < Sq+1; x++){
		    arr[x] = [];    
		    for(var y = 0; y < Sq; y++){ 
		        arr[x][y] = arrayOfLetters[count];  
		        count ++;
		    } 
		     
		    console.log(arr[x]);
		}
		var count2 = 0; 
		var something = "here is your Code: ";
		for(var x = 0; x < Sq; x++){  
		 
		    for(var y = 0; y < Sq+1; y++){
		    	if(arr[y][x]!== "-1"){
			    	if(count2%5 === 0){
			        	something += " ";
			        }
			        something +=arr[y][x];
			        count2++;
			    }
		    } 
		   
		}
		// var n = 5;
		// var ret = [];
		// var Rlength = something.length;
		//   for(i = 0; i < Rlength; i += n) {
  //      		ret.push(str.substr(i, n))
  //  			 }


		

			var result = something;
			$("#result").show();
			$("#resultT").text(result);
		

	});
});





