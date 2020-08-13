var myApp = new Vue({
    el: '#apptitle',
    data: {
    title: true,
		apptitle:true,
		apptitlereturn:false,
		text: 'المسابقة',
		text1: 'العودة'

}
})
var boxone = new Vue({
    el: '#boxone',
    data: {	
	boxone: false,
    optionA: true,
	   guideone: false,
    guidetwo: false,
    guidethree: false,
    guidefour: false,
    guidefive: false,
	  guide1: "انتقل بين البلدان ليصحب الرجال الصالحين من القساوسة، إلى أن وصف له أحدهم ظهور نبي في بلاد العرب محمد صلى الله عليه وسلم",
    guide2: "أعلى النبي صلى الله عليه وسلم من منزلته، فقد روى أنس بن مالك عن النبي صلى الله عليه وسلم قوله: «الجنة تشتاق إلى ثلاثة:...» وذكره منهم. /سنن الترمذي» كتاب المناقب",
    guide3: "قال عنه الخليفة علي بن أبي طالب رضي الله عنه: «أدرك العلم الأول، والعلم الآخر، بحر لا يدرك قعره، وهو منا أهل البيت». /سير أعلام النبلاء",
    guide4: "قال رضي الله عنه: «شهدت مع رسول الله صلى الله عليه وسلم الخندق، ثم لم يفتني معه مشهد». رواه الإمام أحمد في مسنده برقم ٢٣٧٣٧",
    guide5: "روى الإمام أحمد في مسنده من حديث الحسن قال: لما احتضر (...) بكى، وقال: إن رسول الله صلى الله عليه وسلم عهد إلينا عهدًا، فتركنا ما عهد إلينا، أن يكون بلغة أحدنا من الدنيا كزاد الراكب، قال: ثم نظرنا فيما ترك، فإذا قيمة ما ترك بضعة وعشرون درهمًا، أو بضعة وثلاثون درهمًا. توفي سنة خمس وثلاثين من هجرة الرسول صلى الله عليه وسلم آخر خلافة عثمان رضي الله عنه",
    answersguide: false,
    optionansr: false,
    three: true,
    one: true,
    two: true,
    four: true,
    five: true,
	  fiveA: "صهيب الرومي",
    fourA: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
    threeA:"سلمان الفارسي",
		twoA: "سعد بن معاذ",
    oneA: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ"
}
})
var boxtwo = new Vue({
    el: '#boxtwo',
    data: {		
	boxtwo: false, 
	optionA: true,
        three: true,
        one: true,
        two: true,
        four: true,
        five: true,	
	fiveA: "صهيب الرومي",
        fourA: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
        threeA:"سلمان الفارسي",		
	twoA: "سعد بن معاذ",
        oneA: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ"
}
})

var myApp1 = new Vue({
    el: '#appone',
    data: {
		point:0,
		card1: true,
    img1:true,
    img2:false,
    text: true,
		textproject: false,
  }
})
function guide1 (x){
 myApp1.textproject=false;
   boxone.guideone=true;
}
function guide2 (x){
   myApp1.guideone=false;
   myApp1.guidetwo=true;
}
function guide3 (x){
   myApp1.guidetwo=false;
   myApp1.guidethree=true;
}
function guide4 (x){
   myApp1.guidethree=false;
	 myApp1.guidefour=true;
}
function guide5 (x){
   boxone.guidefour=false;
   boxone.answersguide=true;
   boxone.guidefive=true;
}

function ansrguide (x) {
boxone.answersguide= false;	
	boxone.guidefive= false;
myApp1.card1= false;
boxone.optionA=true
boxone.boxone= true
boxone.one= true;
boxone.two= true;
boxone.three= true;
boxone.four= true;
boxone.five= true;
}

function threeA (x) {
if (boxone.optionA==true) {
myApp1.point=myApp1.point+1;
}
boxone.optionA= false;
boxone.one= false;
boxone.two= false;
boxone.four= false;
boxone.five= false;
boxone.threeA= "الإجابة صحيحة";
myApp.title=true;
}

function fourA (x) {
boxone.optionA= false;
if (x=1){
boxone.one= true;
boxone.two= false;
boxone.three= false;
boxone.four= false;
boxone.five= false;
boxone.oneA= "الإجابة خاطئة";}

if (x=2){
boxone.one= false;
boxone.two= true;
boxone.three= false;
boxone.four= false;
boxone.five= false;
boxone.twoA= "الإجابة خاطئة";}  
 
if (x=4){
boxone.one= false;
boxone.two= false;
boxone.three= false;
boxone.four= true;
boxone.five= false;
boxone.fourA= "الإجابة خاطئة";} 

if (x=5){
boxone.one= false;
boxone.two= false;
boxone.three= false;
boxone.four= false;
boxone.five= true;
boxone.fiveA= "الإجابة خاطئة";} 

myApp.title=true;


}


 var myApp2 = new Vue({
    el: '#apptwo',
    data: {
    card2: false,
    text: true,
    textproject: false
}
})

var myApp3 = new Vue({
    el: '#appthree',
    data: {
		card3: false,
    text:true,
		textproject: false
}
})

var myApp4 = new Vue({
    el: '#appfour',
    data: {
		card4: false,
		text:true,
		textproject: false
}
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
myApp1.img1=true; 
myApp1.img2=false;
myApp1.guideone=false;
myApp1.guidetwo=false;
myApp1.guidethree=false;
myApp1.guidefour=false;
myApp1.guidefive=false;
myApp1.answersguideone=false;
boxone.boxone=false;
boxone.threeA= "سلمان الفارسي";
boxone.fourA= "صهيب الرومي";
boxone.fiveA= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxone.oneA= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxone.twoA= "سعد بن معاذ";
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
myApp.title=false;
myApp1.textproject=true;
myApp1.img1=false;
myApp1.img2=true;
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
