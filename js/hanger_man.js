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
tab[1] = "Ą";
tab[2] = "B";
tab[3] = "C";
tab[4] = "Ć";
tab[5] = "D";
tab[6] = "E";
tab[7] = "Ę";
tab[8] = "F";
tab[9] = "G";
tab[10] = "H";
tab[11] = "I";
tab[12] = "J";
tab[13] = "K";
tab[14] = "L";
tab[15] = "Ł";
tab[16] = "M";
tab[17] = "N";
tab[18] = "Ń";
tab[19] = "O";
tab[20] = "Ó";
tab[21] = "P";
tab[22] = "Q";
tab[23] = "R";
tab[24] = "S";
tab[25] = "Ś";
tab[26] = "T";
tab[27] = "U";
tab[28] = "V";
tab[29] = "W";
tab[30] = "X";
tab[31] = "Y";
tab[32] = "Z";
tab[33] = "Ż";
tab[34] = "Ź";

function start() 
{
	var inside_div = "";

	for (i=0;i<=34;i++)
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
		document.getElementById("alphabet").innerHTML = 'Udało Ci się uratować Leonarda, brawo!<br/> Podałeś prawidłowe hasło:<br/><span style="font-size:32px; color:green;">'+pass+'</span><br/><br/><span class="reset" onclick="location.reload()" style="cursor:pointer;">JESZCZE RAZ?</span>'
	}

	//przegrana
	if(num_of_fail >= 9)
	{
	document.getElementById("alphabet").innerHTML = 'PRZEGRAŁEŚ!<br/><b>Przez Ciebie Leonardo DiCaprio jest smutny.</b><br/> Prawidłowym hasłem było:<br/><span style="font-size:32px; color:red;">'+pass+'</span><br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
	}
}
