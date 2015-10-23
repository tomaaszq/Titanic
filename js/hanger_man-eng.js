	var x = Math.floor((Math.random() * 8) + 0);
	var tab_pass = new Array(3);
	tab_pass[0] = "SMRÓD";
	tab_pass[1] = "KUPA";
	tab_pass[2] = "SYF";
	tab_pass[3] = "GNÓJ";
	tab_pass[4] = "KOMPOST";
	tab_pass[5] = "KOMPOSTOWNIK";
	tab_pass[6] = "GNOJOWNIK";
	tab_pass[7] = "ŻUL";
	tab_pass[8] = "KUPSKO";
	var pass = tab_pass[x];

var length = pass.length;
var pass1 = "";
var num_of_fail = 0;


for(i=0; i<length; i++)
{
	if(pass.charAt(i)==" ") pass1 = pass1+" ";
	else pass1=pass1+"-";
}


function write_pass()
{
	document.getElementById("text-container").innerHTML = pass1;
}

window.onload = start;

var tab = new Array(35);
tab[0] = "A";
tab[1] = "B";
tab[2] = "C";
tab[3] = "D";
tab[4] = "E";
tab[5] = "F";
tab[6] = "G";
tab[7] = "H";
tab[8] = "I";
tab[9] = "J";
tab[10] = "K";
tab[11] = "L";
tab[12] = "M";
tab[13] = "N";
tab[14] = "O";
tab[15] = "P";
tab[16] = "Q";
tab[17] = "R";
tab[18] = "S";
tab[19] = "T";
tab[20] = "U";
tab[21] = "V";
tab[22] = "W";
tab[23] = "X";
tab[24] = "Y";
tab[25] = "Z";

function start() 
{
	var inside_div = "";

	for (i=0;i<=25;i++)
	{
		var thing = "letter"+i;
			inside_div = inside_div + '<div class="letter" onclick="check('+i+')" id="'+thing+'">'+tab[i]+'</div>'
	}


	document.getElementById("alphabet").innerHTML=inside_div;


	write_pass();
}

String.prototype.replaceThis = function(place,element)
{
	if(place>this.length-1) return this.toString();
	else return this.substr(0,place)+element+this.substr(place+1);
}

function check(numer)
{
	var hit = false;
	for(i=0;i<length;i++)
	{
		if(pass.charAt(i) == tab[numer])
		{
			pass1 = pass1.replaceThis(i,tab[numer]);
			hit=true;
		}
	}

	if(hit==true)
	{
		var element = "letter"+numer;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00B01A";
		document.getElementById(element).style.cursor = "default";

		write_pass();
	}
	else
	{
		//zly wybor
		num_of_fail++;
		var element = "letter"+numer;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		document.getElementById("hanging-man").innerHTML = '<img src="img/s'+num_of_fail+'.jpg" alt="" />';
	}

	//wygrana
	if(pass==pass1)
	{
		document.getElementById("alphabet").innerHTML = 'You saved Leonardo, congratulation!<br/> You have entered the correct password, which is:<br/><span style="font-size:32px; color:green;">'+pass+'</span><br/><br/><span class="reset" onclick="location.reload()" style="cursor:pointer;">ONE MORE GAME?</span>'
	}

	//przegrana
	if(num_of_fail >= 9)
	{
	document.getElementById("alphabet").innerHTML = 'You failed!<br/><b>Leonardo Dicaprio now is sad because of you!</b><br/>The correct password is:<br/><span style="font-size:32px; color:red;">'+pass+'</span><br/><br/><span class="reset" onclick="location.reload()">ONE MORE GAME?</span>'
	}
}
