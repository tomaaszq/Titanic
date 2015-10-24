	var x = Math.floor((Math.random() * 71) + 0);
	var tab_pass = new Array(72);
	tab_pass[0] = "EXCUSE ME";
	tab_pass[1] = "GOOD LUCK";
	tab_pass[2] = "PROBLEM";
	tab_pass[3] = "STUDY";
	tab_pass[4] = "WHITE";
	tab_pass[5] = "YELLOW";
	tab_pass[6] = "GREEN";
	tab_pass[7] = "BLACK";
	tab_pass[8] = "ONION";
	tab_pass[9] = "SUN";
	tab_pass[10] = "FRUIT";
	tab_pass[11] = "ORANGE";
	tab_pass[12] = "APPLE";
	tab_pass[13] = "PEACH";
	tab_pass[14] = "BEACH";
	tab_pass[15] = "PLUM";
	tab_pass[16] = "CHERRY";
	tab_pass[17] = "APRICOT";
	tab_pass[18] = "STUDENT";
	tab_pass[19] = "FORK";
	tab_pass[20] = "SALT";
	tab_pass[21] = "ASHTRAY";
	tab_pass[22] = "PLATE";
	tab_pass[23] = "CUP";
	tab_pass[24] = "PEPPER";
	tab_pass[25] = "DOG";
	tab_pass[26] = "CAT";
	tab_pass[27] = "FISH";
	tab_pass[28] = "HORSE";
	tab_pass[29] = "MONKEY";
	tab_pass[30] = "RABBIT";
	tab_pass[31] = "CROCODILE";
	tab_pass[32] = "BASIC NECESSITIES";
	tab_pass[33] = "ECO BAGS";
	tab_pass[34] = "BRAND";
	tab_pass[35] = "COMPLAINT";
	tab_pass[36] = "FITTING ROOM";
	tab_pass[37] = "AFFORD";
	tab_pass[38] = "MATRIX";
	tab_pass[39] = "SLOGAN";
	tab_pass[40] = "TITANIC";
	tab_pass[41] = "FLYER";
	tab_pass[42] = "PROMOTE";
	tab_pass[43] = "SPECIAL OFFER";
	tab_pass[44] = "LAYALTY CARD";
	tab_pass[45] = "RESTAURANT";
	tab_pass[46] = "SOUP";
	tab_pass[47] = "COFFEE SHOP";
	tab_pass[48] = "FAST FOOD";
	tab_pass[49] = "BLOOD PRESSURE";
	tab_pass[50] = "ALLERGY";
	tab_pass[51] = "BANDAGE";
	tab_pass[52] = "ACHE";
	tab_pass[53] = "RASH";
	tab_pass[54] = "BREATHTAKING";
	tab_pass[55] = "EXCURSION";
	tab_pass[56] = "FATIGUE";
	tab_pass[57] = "DOWNFALL";
	tab_pass[58] = "CLASS";
	tab_pass[59] = "TIME MACHINE";
	tab_pass[60] = "CHALLENGE";
	tab_pass[61] = "FORTUNE";
	tab_pass[62] = "SARCASM";
	tab_pass[63] = "INDIANA JONES";
	tab_pass[64] = "SCHEDULE";
	tab_pass[65] = "DEVELOPMENT";
	tab_pass[66] = "LANGUAGE";
	tab_pass[67] = "PROGRAMMING";
	tab_pass[68] = "EXPERIENCE";
	tab_pass[69] = "FRIENDS";
	tab_pass[70] = "BEER";
	tab_pass[71] = "FAT CAT";

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
