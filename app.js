var myApp = new Vue({
    el: '#apptitle',
    data: {
		apptitle:true,
		apptitlereturn:false,
		text: 'التطبيق',
		text1: 'العودة'}
})

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
	 
}

var myApp1 = new Vue({
    el: '#appone',
    data: {
		card1: true,
		textproject: 'المسابقة الأولى'}
})

 var myApp2 = new Vue({
    el: '#apptwo',
    data: {
    card2: true,
    textproject: 'المسابقة الثانية'}
})

var myApp3 = new Vue({
    el: '#appthree',
    data: {
		card3: true,
    textproject: 'المسابقة الثالثة'}
})

var myApp4 = new Vue({
    el: '#appfour',
    data: {
		card4: true,
		textproject: 'المسابقة الرابعة'}
})


function clickone () {
myApp2.card2= false;
myApp3.card3= false;
myApp4.card4= false;
myApp1.textproject="فكرة المسابقة الأولى";
apptitlereturn();
}
function clicktwo () {
myApp1.card1= false;
myApp3.card3= false;
myApp4.card4= false;
myApp2.textproject="فكرة المسابقة الثانية";
apptitlereturn();
}
function clickthree () {
myApp1.card1= false;
myApp2.card2= false;
myApp4.card4= false;
myApp3.textproject="فكرة المسابقة الثالثة";
apptitlereturn();
}
function clickfour () {
myApp1.card1= false;
myApp2.card2= false;
myApp3.card3= false;
myApp4.textproject="فكرة المسابقة الرابعة";
apptitlereturn();
}
