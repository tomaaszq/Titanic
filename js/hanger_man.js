	var x = Math.floor((Math.random() * 70) + 0);
	var tab_pass = new Array(70);
	tab_pass[0] = "MILECZENIE OWIEC";
	tab_pass[1] = "CO NAGLE TO PO DIABLE";
	tab_pass[2] = "ZIELONA MILA";
	tab_pass[3] = "ZMIERZCH";
	tab_pass[4] = "HARRY POTTER";
	tab_pass[5] = "BAŁWAN";
	tab_pass[6] = "SZAMPNA";
	tab_pass[7] = "FAJERWERKI";
	tab_pass[8] = "HIENA";
	tab_pass[9] = "SŁOŃ";
	tab_pass[10] = "GEKON";
	tab_pass[11] = "JUSTIN BIEBER";
	tab_pass[12] = "LADY GAGA";
	tab_pass[13] = "FRYZJER";
	tab_pass[14] = "BALETNICA";
	tab_pass[15] = "KIEROWCA";
	tab_pass[16] = "NARCIARZ";
	tab_pass[17] = "LEKARZ";
	tab_pass[18] = "UCZEŃ";
	tab_pass[19] = "NIEMOWLAK";
	tab_pass[20] = "SHREK";
	tab_pass[21] = "WĄŻ";
	tab_pass[22] = "PINGWIN";
	tab_pass[23] = "PIES";
	tab_pass[24] = "KOT";
	tab_pass[25] = "MAŁPA";
	tab_pass[26] = "WILK";
	tab_pass[27] = "ZAJĄC";
	tab_pass[28] = "KRÓLIK";
	tab_pass[29] = "PŁYWANIE";
	tab_pass[30] = "MUMIA";
	tab_pass[31] = "SIATKÓWKA";
	tab_pass[32] = "SAMOLOT";
	tab_pass[33] = "PTAK";
	tab_pass[34] = "KARATE";
	tab_pass[35] = "SPRZEDAWCA";
	tab_pass[36] = "WIECZNE PIÓRO";
	tab_pass[37] = "KSIĘGOWY";
	tab_pass[38] = "MATRIX";
	tab_pass[39] = "TAKSÓWKARZ";
	tab_pass[40] = "TITANIC";
	tab_pass[41] = "ŚWIAT WEDŁUG KIEPSKICH";
	tab_pass[42] = "KUBUŚ PUCHATEK";
	tab_pass[43] = "PILOT";
	tab_pass[44] = "PIŁKA NOŻNA";
	tab_pass[45] = "REQUIEM DLA SNU";
	tab_pass[46] = "STRUŚ";
	tab_pass[47] = "BOLEK I LOLEK";
	tab_pass[48] = "LEON ZAWODOWIEC";
	tab_pass[49] = "SZÓSTY ZMYSŁ";
	tab_pass[50] = "REKIN";
	tab_pass[51] = "W GORĄCEJ WODZIE KĄPANY";
	tab_pass[52] = "INCEPCJA";
	tab_pass[53] = "PSZCZOŁA";
	tab_pass[54] = "WETERYNARZ";
	tab_pass[55] = "ŚLIMAK";
	tab_pass[56] = "NUREK";
	tab_pass[57] = "ZEGARMISTRZ";
	tab_pass[58] = "KEVIN SAM W DOMU";
	tab_pass[59] = "WEHIKUŁ CZASU";
	tab_pass[60] = "BARAN";
	tab_pass[61] = "PRZYPADEK";
	tab_pass[62] = "EFEKT MOTYLA";
	tab_pass[63] = "INDIANA JONES";
	tab_pass[64] = "WŁADCA PIERŚCIENI";
	tab_pass[65] = "SZERMIERKA";
	tab_pass[66] = "TOKARZ";
	tab_pass[67] = "KOMAR";
	tab_pass[68] = "BRUDNOPIS";
	tab_pass[69] = "PRZYJACIELE";
	tab_pass[70] = "PĘPEK ŚWIATA";


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
