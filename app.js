var myApp = new Vue({
    el: '#apptitle',
    data: {
    title: true,
    apptitle:true,
    apptitlereturn:false,
    text: 'التطبيق',
    text1: 'العودة'
}
})

var boxone = new Vue({
    el: '#boxone',
    data: {
		boxone: false,
    optionA: false,
    three: false,
    one: false,
    two: false,
    four: false,
    five: false,
    fiveA: "صهيب الرومي",
    fourA: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
    threeA:"سلمان الفارسي",
    twoA: "سعد بن معاذ",
    oneA: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ",
    optionA2: false,
    three2: false,
    one2: false,
    two2: false,
    four2: false,
    five2: false,
    fiveA2: "",
    fourA2: "",
    threeA2:"عمار بن ياسر",
    twoA2: "",
    oneA2: ""
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
    guideone: false,
    guidetwo: false,
    guidethree: false,
    guidefour: false,
    guidefive: false,
    guide11: "انتقل بين البلدان ليصحب الرجال الصالحين من القساوسة، إلى أن وصف له أحدهم ظهور نبي في بلاد العرب محمد صلى الله عليه وسلم",
    guide12: "أعلى النبي صلى الله عليه وسلم من منزلته، فقد روى أنس بن مالك عن النبي صلى الله عليه وسلم قوله: «الجنة تشتاق إلى ثلاثة:...» وذكره منهم. /سنن الترمذي» كتاب المناقب",
    guide13: "قال عنه الخليفة علي بن أبي طالب رضي الله عنه: «أدرك العلم الأول، والعلم الآخر، بحر لا يدرك قعره، وهو منا أهل البيت». /سير أعلام النبلاء",
    guide14: "قال رضي الله عنه: «شهدت مع رسول الله صلى الله عليه وسلم الخندق، ثم لم يفتني معه مشهد». رواه الإمام أحمد في مسنده برقم ٢٣٧٣٧",
    guide15: "روى الإمام أحمد في مسنده من حديث الحسن قال: لما احتضر (...) بكى، وقال: إن رسول الله صلى الله عليه وسلم عهد إلينا عهدًا، فتركنا ما عهد إلينا، أن يكون بلغة أحدنا من الدنيا كزاد الراكب، قال: ثم نظرنا فيما ترك، فإذا قيمة ما ترك بضعة وعشرون درهمًا، أو بضعة وثلاثون درهمًا. توفي سنة خمس وثلاثين من هجرة الرسول صلى الله عليه وسلم آخر خلافة عثمان رضي الله عنه",
    answersguide1: false,
    optionansr1: false,
    guideone2: false,
    guidetwo2: false,
    guidethree2: false,
    guidefour2: false,
    guidefive2: false,
    guide21: "صحابي كان من موالي بني مخزوم، ومن السابقين إلى الإسلام، ومن المستضعفين الذين عُذّبوا ليتركوا دين الإسلام",
    guide22: "كان بنو مخزوم لا يتركون عمار حتى ينال من النبي محمد، ويذكر آلهتهم بخير، فلما أتى عمار النبي محمد، سأله النبي: «ما وراءك؟»، قال عمار: «شر يا رسول الله. والله ما تُرِكْتُ حتى نلت منك، وذكرت آلهتهم بخير»، فقال النبي: «فكيف تجد قلبك؟»، قال: «مطمئن بالإيمان»، فقال النبي: «فإن عادوا فعد»، سير أعلام النبلاء",
    guide23: "كان لعمار مكانته الرفيعة عند النبي محمد، فقد روى أنس بن مالك عن النبي محمد قوله: «ثلاثة تشتاق إليهم الجنة: علي وسلمان وعمار»المستدرك على الصحيحين، وروى علي بن أبي طالب أن (...) استأذن على النبي محمد، فقال: «من هذا؟»، قال: «...»، قال: «مرحبًا بالطَيّبِ المُطَيَّبِ»،",
    guide24: "بعد وفاة النبي محمد، شارك عمار في حروب الردة، واستبسل يوم اليمامة لما اشتدّ القتال، ورأى تأزّم الموقف في القتال، فاعتلى صخرة، وصاح: «يا معشر المسلمين، أمن الجنة تفرون؟ أنا عمار بن ياسر، هلموا إلي»الطبقات الكبرى لابن سعد.، وقد قطعت أذنه يومئذ٫ الإصابة في تمييز الصحابة.، فكانت تتذبذب، وهو يقاتل أشد القتال٫ سير أعلام النبلاء",
    guide25: "انحاز (...) إلى جانب علي بن أبي طالب في حربه مع معاوية بن أبي سفيان بعد مقتل عثمان بن عفان، فشهد موقعة الجمل، ثم وقعة صفين. قُتل (...) في وقعة صفين في صفر سنة 37 هـ، وعمره 93 سنة، وهو يقاتل في صفوف جيش علي بن أبي طالب وهو شيخ طاعن في السن في يده حربة ترعد. الطبقات الكبرى لابن سعد",
    answersguide2: false,
    optionansr2: false
}
})

function guideone1 (){
   myApp1.textproject=false;
   myApp1.guideone=true;
}
function guideone2 (){
   myApp1.guideone=false;
   myApp1.guidetwo=true;
}
function guideone3 (){
   myApp1.guidetwo=false;
   myApp1.guidethree=true;
}
function guideone4 (){
   myApp1.guidethree=false;
	 myApp1.guidefour=true;
}
function guideone5 (){
   myApp1.guidefour=false;
 myApp1.answersguide1=true;
   myApp1.guidefive=true;
}
function ansrguide1 () {
myApp1.answersguide1= false;
myApp1.guidefive= false;
myApp1.card1= false;
myApp1.img2= false;
myApp1.optionansr1= true;
boxone.optionA=true;
boxone.boxone= true;
boxone.one= true;
boxone.two= true;
boxone.three= true;
boxone.four= true;
boxone.five= true;
}
function fouoneA () { 
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

function fouroneA (x) {
boxone.optionA= false;
if (x==1){
boxone.one= true;
boxone.two= false;
boxone.three= false;
boxone.four= false;
boxone.five= false;
boxone.oneA= "الإجابة خاطئة";
}
if (x==2){
boxone.one= false;
boxone.two= true;
boxone.three= false;
boxone.four= false;
boxone.five= false;
boxone.twoA= "الإجابة خاطئة";
}
if (x==4){
boxone.one= false;
boxone.two= false;
boxone.three= false;
boxone.four= true;
boxone.five= false;
boxone.fourA="الإجابة خاطئة";
}
if (x==5){
boxone.one= false;
boxone.two= false;
boxone.three= false;
boxone.four= false;
boxone.five= true;
boxone.fiveA= "الإجابة خاطئة";
}
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

function titlereturn (){
myApp.apptitle=true;
myApp.apptitlereturn=false;
myApp1.card1= true;
myApp1.img1=true; 
myApp1.optionansr1=false;
boxone.optionA= false
boxone.three= false;
boxone.one= false;
boxone.two= false;
boxone.four= false;
boxone.five= false;
myApp1.img2=false;
myApp1.guideone=false;
myApp1.guidetwo=false;
myApp1.guidethree=false;
myApp1.guidefour=false;
myApp1.guidefive=false;
myApp1.answersguide1=false;
boxone.boxone=false;
boxone.fiveA= "صهيب الرومي";
boxone.fourA= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxone.threeA= "سلمان الفارسي";
boxone.twoA= "سعد بن معاذ";
boxone.oneA= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
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
