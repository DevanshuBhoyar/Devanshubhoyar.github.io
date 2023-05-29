var names=new Array();
names[0]="Yashin";
names[1]="Jack";
names[2]="Jim";
names[3]="jibhe";
names[4]="pinl";
names[5]="fault";
names[6]="lutty";
names[7]="padsd";
names[8]="ladfs";
names[9]="jimxc";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}