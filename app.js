var myApp = new Vue({
    el: '#apptitle',
    data: {
		apptitle:true,
		apptitlereturn:false,
		text: 'المسابقات',
		text1: 'العودة',
	
    }
})


		






var points = new Vue({

    el: '#points',

    data: {points:0,pointstext:"نقاطك هي:",pointsCard:true}})







var myApp1 = new Vue({
    el: '#appone',
    data: {
		card1: true,
                text:true,
		textproject: false
}
})

 var myApp2 = new Vue({
    el: '#apptwo',
    data: {
    card2: true,
    text: true,
    textproject: false
}
})

var myApp3 = new Vue({
    el: '#appthree',
    data: {
		card3: true,
    text:true,
		textproject: false
}
})

var myApp4 = new Vue({
    el: '#appfour',
    data: {
		card4: true,
		text:true,
		textproject: false
}
})
function points () {
	
	
points.points=points.points+1;
}
points.points=0;

function apptitlereturn () {
   myApp.apptitle=false;
myApp.apptitlereturn=true;
}
myApp.apptitle=true;
myApp.apptitlereturn=false;

function titlereturn (){
   myApp.apptitle=true;
myApp.apptitlereturn=false;
	 myApp1.card1= true;
	 myApp2.card2= true;
	 myApp3.card3= true;
   myApp4.card4= true;
	 texttitlereturn();
}

function texttitlereturn (){
  myApp1.text= true;
	myApp2.text= true;
  myApp3.text= true;
  myApp4.text= true;
 myApp1.textproject= false;
 myApp2.textproject= false;
 myApp3.textproject= false;
 myApp4.textproject= false;
}

function clickone () {
myApp2.card2= false;
myApp3.card3= false;
myApp4.card4= false;
myApp1.text=false;
myApp1.textproject=true;
apptitlereturn();
}
function clicktwo () {
myApp1.card1= false;
myApp3.card3= false;
myApp4.card4= false;
myApp2.text=false;
myApp2.textproject=true;
apptitlereturn();
}
function clickthree () {
myApp1.card1= false;
myApp2.card2= false;
myApp4.card4= false;
myApp3.text=false
myApp3.textproject=true;
apptitlereturn();
}
function clickfour () {
myApp1.card1= false;
myApp2.card2= false;
myApp3.card3= false;
myApp4.text=false;
myApp4.textproject=true;
apptitlereturn();
}






