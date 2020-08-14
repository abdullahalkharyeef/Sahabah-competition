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
    textproject: false,
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
        textproject: false,
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

var boxthree = new Vue({
    el: '#boxthree',
    data: {
        boxthree:false,
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
        textproject: false,
        two: true,
        four: true,
        five: true,
        fiveA: "صهيب الرومي",
        fourA: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
        threeA:"سلمان الفارسي",
 	twoA: "سعد بن معاذ",
        oneA: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ"
} })

var boxfour = new Vue({
     el: '#boxfour',     
data: {
        boxfour: false, 
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
        textproject: false,
        two: true,
        four: true,
        five: true,
        fiveA: "صهيب الرومي",
        fourA: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
        threeA:"سلمان الفارسي",
 	twoA: "سعد بن معاذ",
        oneA: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ"
} })

var boxfive = new Vue({
     el: '#boxfive',     
data: {
        boxfive: false,  
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
        textproject: false,
        two: true,
        four: true,
        five: true,
        fiveA: "صهيب الرومي",
        fourA: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
        threeA:"سلمان الفارسي",
 	twoA: "سعد بن معاذ",
        oneA: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ"
} }) 



var myApp1 = new Vue({
    el: '#appone',
    data: {
    cardimg: true,
    point:0,
    card1: true,
    img1:true,
    img2:false,
    text: true,
    textproject: false
  }
})

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

function titlereturn (){
myApp.apptitle=true;
myApp.apptitlereturn=false;
myApp1.card1= true;
myApp1.img1=true; 
myApp1.img2=false;
boxone.guideone=false;
boxone.guidetwo=false;
boxone.guidethree=false;
boxone.guidefour=false;
boxone.guidefive=false;
boxone.answersguide=false;
boxone.boxone=false;
boxone.threeA= "سلمان الفارسي";
boxone.fourA= "صهيب الرومي";
boxone.fiveA= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxone.oneA= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxone.twoA= "سعد بن معاذ";
boxtwo.guideone=false;
boxtwo.guidetwo=false;
boxtwo.guidethree=false;
boxtwo.guidefour=false;
boxtwo.guidefive=false;
boxtwo.answersguide=false;
boxtwo.boxtwo=false;
boxtwo.threeA= "سلمان الفارسي";
boxtwo.fourA= "صهيب الرومي";
boxtwo.fiveA= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxtwo.oneA= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxtwo.twoA= "سعد بن معاذ";
boxthree.guideone=false;
boxthree.guidetwo=false;
boxthree.guidethree=false;
boxthree.guidefour=false;
boxthree.guidefive=false;
boxthree.answersguide=false;
boxthree.boxone=false;
boxthree.threeA= "سلمان الفارسي";
boxthree.fourA= "صهيب الرومي";
boxthree.fiveA= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxthree.oneA= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxthree.twoA= "سعد بن معاذ";
boxfour.guideone=false;
boxfour.guidetwo=false;
boxfour.guidethree=false;
boxfour.guidefour=false;
boxfour.guidefive=false;
boxfour.answersguide=false;
boxfour.boxone=false;
boxfour.threeA= "سلمان الفارسي";
boxfour.fourA= "صهيب الرومي";
boxfour.fiveA= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxfour.oneA= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxfour.twoA= "سعد بن معاذ";
boxfive.guideone=false;
boxfive.guidetwo=false;
boxfive.guidethree=false;
boxfive.guidefour=false;
boxfive.guidefive=false;
boxfive.answersguide=false;
boxfive.boxone=false;
boxfive.threeA= "سلمان الفارسي";
boxfive.fourA= "صهيب الرومي";
boxfive.fiveA= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxfive.oneA= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxfive.twoA= "سعد بن معاذ";
texttitlereturn();
}

function texttitlereturn (){
// myApp1.text= true;
// myApp2.text= true;
// myApp3.text= true;
// myApp4.text= true;
 myApp1.cardimg= false;
 boxone.textproject= false;
 boxtwo.textproject= false;
 boxthree.textproject= false;
 boxfour.textproject= false;
 boxfive.textproject= false;

 }

function clickone () {
// myApp2.card2= false;
// myApp3.card3= false;
// myApp4.card4= false;
myApp1.text=false;
myApp.title=false;
boxone.textproject=true;
myApp1.img1=false;
myApp1.img2=true;
apptitlereturn();
}
// function clicktwo () {
// myApp1.card1= false;
// myApp3.card3= false;
// myApp4.card4= false;
// myApp2.text=false;
// myApp2.textproject=true;
// apptitlereturn();
// }
// function clickthree () {
// myApp1.card1= false;
// myApp2.card2= false;
// myApp4.card4= false;
// myApp3.text=false;
// myApp3.textproject=true;
// apptitlereturn();
// }
// function clickfour () {
// myApp1.card1= false;
// myApp2.card2= false;
// myApp3.card3= false;
// myApp4.text=false;
// myApp4.textproject=true;
// apptitlereturn();
// }



function guide1 (x){
        if(x==1){boxone.textproject=false;
		 boxone.guideone=true;} 
	if(x==2){boxtwo.textproject=true;
		 boxtwo.guideone=true;}
	if(x==3){boxthree.textproject=true;
		 boxthree.guideone=true;}
	if(x==4){boxfour.textproject=true;
		 boxfour.guideone=true;}
	if(x==5){boxfive.textproject=true;
		 boxfive.guideone=true;}
}

function guide2 (x){
        if(x==1){boxone.guideone=false;  
		 boxone.guidetwo=true;}
	if(x==2){boxtwo.guideone=false;  
		 boxtwo.guidetwo=true;}
	if(x==3){boxthree.guideone=false;  
		 boxthree.guidetwo=true;}
	if(x==4){boxfour.guideone=false;  
		 boxfour.guidetwo=true;}
	if(x==5){boxfive.guideone=false;  
		 boxfive.guidetwo=true;}
}

function guide3 (x){
        if(x==1){boxone.guidetwo=false;   
		 boxone.guidethree=true;}
	if(x==2){boxtwo.guidetwo=false;   
		 boxtwo.guidethree=true;}
	if(x==3){boxthree.guidetwo=false;   
		 boxthree.guidethree=true;}
	if(x==4){boxfour.guidetwo=false;   
		 boxfour.guidethree=true;}
	if(x==5){boxfive.guidetwo=false;   
		 boxfive.guidethree=true;}
}

function guide4 (x){
        if (x==1){ boxone.guidethree=false;	 
		  boxone.guidefour=true;}
	if (x==2){ boxtwo.guidethree=false;	 
		  boxtwo.guidefour=true;}
	if (x==3){ boxthree.guidethree=false;	 
		  boxthree.guidefour=true;}
	if (x==4){ boxfour.guidethree=false;	 
		  boxfour.guidefour=true;}
	if (x==5){ boxfive.guidethree=false;	 
		  boxfive.guidefour=true;}
}

function guide5(x){
        if (x==1){boxone.guidefour=false;
		  boxone.answersguide=true; 
		  boxone.guidefive=true;} 
	if (x==2){boxtwo.guidefour=false;
		  boxtwo.answersguide=true; 
		  boxtwo.guidefive=true;} 
	if (x==3){boxthree.guidefour=false;
		  boxthree.answersguide=true; 
		  boxthree.guidefive=true;} 
	if (x==4){boxfour.guidefour=false;
		  boxfour.answersguide=true; 
		  boxfour.guidefive=true;} 
	if (x==5){boxfive.guidefour=false;
		  boxfive.answersguide=true; 
		  boxfive.guidefive=true;}
}

function ansrguide (x) {
myApp1.cardimg= false;
myApp1.img2= false;
myApp1.img1= false;
 if(x==1){
boxone.answersguide= false;	
boxone.guidefive=false;
myApp1.card1= false;
boxone.optionA=true;
boxone.boxone= true;
boxone.one= true;
boxone.two= true;
boxone.three= true;
boxone.four= true;
boxone.five= true;
} 
 if(x==2){
boxtwo.answersguide= false;	
boxtwo.guidefive=false;
myApp1.card1= false;
boxtwo.optionA=true;
boxtwo.boxtwo= true;
boxtwo.one= true;
boxtwo.two= true;
boxtwo.three= true;
boxtwo.four= true;
boxtwo.five= true;
}
 if(x==3){
boxthree.answersguide= false;	
boxthree.guidefive=false;
myApp1.card1= false;
boxthree.optionA=true;
boxthree.boxthree= true;
boxthree.one= true;
boxthree.two= true;
boxthree.three= true;
boxthree.four= true;
boxthree.five= true;
} 
 if(x==4){
boxfour.answersguide= false;	
boxfour.guidefive=false;
myApp1.card1= false;
boxfour.optionA=true;
boxfour.boxfour= true;
boxfour.one= true;
boxfour.two= true;
boxfour.three= true;
boxfour.four= true;
boxfour.five= true;
} 
 if(x==5){
boxfive.answersguide= false;	
boxfive.guidefive=false;
myApp1.card1= false;
boxfive.optionA=true;
boxfive.boxfive= true;
boxfive.one= true;
boxfive.two= true;
boxfive.three= true;
boxfive.four= true;
boxfive.five= true;}
}

function threeA (x) {
if(boxone.boxone==true){
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

if(boxtwo.boxtwo==true){
 if (boxtwo.optionA==true) {
myApp1.point=myApp1.point+1;
}
boxtwo.optionA= false;
boxtwo.one= false;
boxtwo.two= false;
boxtwo.four= false;
boxtwo.five= false;
boxtwo.threeA= "الإجابة صحيحة";
myApp.title=true;
}

if(boxthree.boxthree==true){
 if (boxthree.optionA==true) {
myApp1.point=myApp1.point+1;
}
boxthree.optionA= false;
boxthree.one= false;
boxthree.two= false;
boxthree.four= false;
boxthree.five= false;
boxthree.threeA= "الإجابة صحيحة";
myApp.title=true;
}

if(boxfour.boxfour==true){
 if (boxfour.optionA==true) {
myApp1.point=myApp1.point+1;
}
boxfour.optionA= false;
boxfour.one= false;
boxfour.two= false;
boxfour.four= false;
boxfour.five= false;
boxfour.threeA= "الإجابة صحيحة";
myApp.title=true;
}

if(boxfive.boxfive==true){
 if (boxfive.optionA==true) {
myApp1.point=myApp1.point+1;
}
boxfive.optionA= false;
boxfive.one= false;
boxfive.two= false;
boxfive.four= false;
boxfive.five= false;
boxfive.threeA= "الإجابة صحيحة";
myApp.title=true;
}

myApp.title=true;
}



function fourA (x) {
if (boxone.boxone==true){
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

if (boxtwo.boxtwo==true){
boxtwo.optionA= false;
if (x=1){
boxtwo.one= true;
boxtwo.two= false;
boxtwo.three= false;
boxtwo.four= false;
boxtwo.five= false;
boxtwo.oneA= "الإجابة خاطئة";}

if (x=2){
boxtwo.one= false;
boxtwo.two= true;
boxtwo.three= false;
boxtwo.four= false;
boxtwo.five= false;
boxtwo.twoA= "الإجابة خاطئة";}  
 
if (x=4){
boxtwo.one= false;
boxtwo.two= false;
boxtwo.three= false;
boxtwo.four= true;
boxtwo.five= false;
boxtwo.fourA= "الإجابة خاطئة";} 

if (x=5){
boxtwo.one= false;
boxtwo.two= false;
boxtwo.three= false;
boxtwo.four= false;
boxtwo.five= true;
boxtwo.fiveA= "الإجابة خاطئة";} 

myApp.title=true;
}

if (boxthree.boxthree==true){
boxthree.optionA= false;
if (x=1){
boxthree.one= true;
boxthree.two= false;
boxthree.three= false;
boxthree.four= false;
boxthree.five= false;
boxthree.oneA= "الإجابة خاطئة";}

if (x=2){
boxthree.one= false;
boxthree.two= true;
boxthree.three= false;
boxthree.four= false;
boxthree.five= false;
boxthree.twoA= "الإجابة خاطئة";}  
 
if (x=4){
boxthree.one= false;
boxthree.two= false;
boxthree.three= false;
boxthree.four= true;
boxthree.five= false;
boxthree.fourA= "الإجابة خاطئة";} 

if (x=5){
boxthree.one= false;
boxthree.two= false;
boxthree.three= false;
boxthree.four= false;
boxthree.five= true;
boxthree.fiveA= "الإجابة خاطئة";} 

myApp.title=true;
}

if (boxfour.boxfour==true){
boxfour.optionA= false;
if (x=1){
boxfour.one= true;
boxfour.two= false;
boxfour.three= false;
boxfour.four= false;
boxfour.five= false;
boxfour.oneA= "الإجابة خاطئة";}

if (x=2){
boxfour.one= false;
boxfour.two= true;
boxfour.three= false;
boxfour.four= false;
boxfour.five= false;
boxfour.twoA= "الإجابة خاطئة";}  
 
if (x=4){
boxfour.one= false;
boxfour.two= false;
boxfour.three= false;
boxfour.four= true;
boxfour.five= false;
boxfour.fourA= "الإجابة خاطئة";} 

if (x=5){
boxfour.one= false;
boxfour.two= false;
boxfour.three= false;
boxfour.four= false;
boxfour.five= true;
boxfour.fiveA= "الإجابة خاطئة";} 

myApp.title=true;
}

if (boxfive.boxfive==true){
boxfive.optionA= false;
if (x=1){
boxfive.one= true;
boxfive.two= false;
boxfive.three= false;
boxfive.four= false;
boxfive.five= false;
boxfive.oneA= "الإجابة خاطئة";}

if (x=2){
boxfive.one= false;
boxfive.two= true;
boxfive.three= false;
boxfive.four= false;
boxfive.five= false;
boxfive.twoA= "الإجابة خاطئة";}  
 
if (x=4){
boxfive.one= false;
boxfive.two= false;
boxfive.three= false;
boxfive.four= true;
boxfive.five= false;
boxfive.fourA= "الإجابة خاطئة";} 

if (x=5){
boxfive.one= false;
boxfive.two= false;
boxfive.three= false;
boxfive.four= false;
boxfive.five= true;
boxfive.fiveA= "الإجابة خاطئة";} 

myApp.title=true;
}

}
