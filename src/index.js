module.exports = function zeros(expression) {
var arr = expression.split('*');
var even = 0;
var fives = 0;
var zeros = 0;
var check = 0;
for (var x=0; x<arr.length; x++){
	check++
	var arr2 = [];
	var n;
	var arr3 = [];
	var str = String(arr[x]);

	arr2 = str.split('');
	if(arr2[arr2.length-2] == '!'){
		for(var i =0; i < arr2.length - 2; i++){
			arr3[i]=arr2[i];
		}
		n = +(arr3.join(''));
		if(n % 2 == 0){
			for(var i= (+n)/2; i>0; i--){
				if(i*2 % 10 != 0 ){
					even++;
				}
				else{
					if(i % 25 == 0){
					zeros += 2;
				}
				else{
					zeros++;
				}
				}
			}
		}
		else if(n % 2 != 0){
			for(var i= (+n + 1)/2; i>0; i--){
				if((i*2-1) % 5 == 0){
					if((i*2-1) % 25 == 0){
					fives += 2;
				}
				else{
					fives++;
				}
				}
			}
		}	
	}

	
		
	else{
		for(var i =0; i < arr2.length - 1; i++){
			arr3[i]=arr2[i];
		}
		n = +(arr3.join(''));
		for(var i=n; i>0; i--){
			if(i % 2 == 0 && i % 10 != 0){
				even++;
			}
			if(i % 10 == 0){
				if(i % 25 == 0){
					zeros += 2;
				}
				else{
					zeros++;
				}
			}
			if(i % 5 == 0 && i % 10 !=0){
				if(i % 25 == 0){
					fives += 2;
				}
				else{
					fives++;
				}

			}
		}
	}
	}
	if(fives>=even){
		zeros+= even;
	}
	else{
		zeros+= fives;
	}
	return zeros;
}



