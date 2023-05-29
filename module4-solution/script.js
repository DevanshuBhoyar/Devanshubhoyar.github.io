var names=new Array();
names[0]="YaskinS";
names[1]="Josfn";
names[2]="Jean";
names[3]="jasson";
names[4]="pold";
names[5]="frad";
names[6]="land";
names[7]="pauico";
names[8]="lauaa";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}