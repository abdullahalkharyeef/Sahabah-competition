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
    optionansr1: false,
    optionansr2: false,
    optionA1: false,
    optionA2: false,
    three1: false,
    one1: false,
    two1: false,
    four1: false,
    five1: false,
    three2: false,
    one2: false,
    two2: false,
    four2: false,
    five2: false,
    fiveA1: "صهيب الرومي",
    fourA1: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
    threeA1:"سلمان الفارسي",
    twoA1: "سعد بن معاذ",
    oneA1: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ",
    fiveA2: "صهيب الرومي",
    fourA2: "زيد بن حارثة",
    threeA2:"عمار بن ياسر",
    twoA2: "أبو ذر جندب بن جنادة الغفاري",
    oneA2: "الزبير بن العوام"
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
    guideone1: false,
    guidetwo1: false,
    guidethree1: false,
    guidefour1: false,
    guidefive1: false,
    answersguide1: false,
    guide2: false,
    guideone2: false,
    guidetwo2: false,
    guidethree2: false,
    guidefour2: false,
    guidefive2: false,
    answersguide2: false,
    guide11: "انتقل بين البلدان ليصحب الرجال الصالحين من القساوسة، إلى أن وصف له أحدهم ظهور نبي في بلاد العرب محمد صلى الله عليه وسلم",
    guide12: "أعلى النبي صلى الله عليه وسلم من منزلته، فقد روى أنس بن مالك عن النبي صلى الله عليه وسلم قوله: «الجنة تشتاق إلى ثلاثة:...» وذكره منهم. /سنن الترمذي» كتاب المناقب",
    guide13: "قال عنه الخليفة علي بن أبي طالب رضي الله عنه: «أدرك العلم الأول، والعلم الآخر، بحر لا يدرك قعره، وهو منا أهل البيت». /سير أعلام النبلاء",
    guide14: "قال رضي الله عنه: «شهدت مع رسول الله صلى الله عليه وسلم الخندق، ثم لم يفتني معه مشهد». رواه الإمام أحمد في مسنده برقم ٢٣٧٣٧",
    guide15: "روى الإمام أحمد في مسنده من حديث الحسن قال: لما احتضر (...) بكى، وقال: إن رسول الله صلى الله عليه وسلم عهد إلينا عهدًا، فتركنا ما عهد إلينا، أن يكون بلغة أحدنا من الدنيا كزاد الراكب، قال: ثم نظرنا فيما ترك، فإذا قيمة ما ترك بضعة وعشرون درهمًا، أو بضعة وثلاثون درهمًا. توفي سنة خمس وثلاثين من هجرة الرسول صلى الله عليه وسلم آخر خلافة عثمان رضي الله عنه",
    guide21: "صحابي كان من موالي بني مخزوم، ومن السابقين إلى الإسلام، ومن المستضعفين الذين عُذّبوا ليتركوا دين الإسلام",
    guide22: "كان بنو مخزوم لا يتركون (...) حتى ينال من النبي صلى الله عليه وسلم، ويذكر آلهتهم بخير، فلما أتى النبي، سأله النبي: «ما وراءك؟»، قال: «شر يا رسول الله. والله ما تُرِكْتُ حتى نلت منك، وذكرت آلهتهم بخير»، فقال النبي: «فكيف تجد قلبك؟»، قال: «مطمئن بالإيمان»، فقال النبي: «فإن عادوا فعد»، سير أعلام النبلاء",
    guide23: "كان لـ(...) مكانته الرفيعة عند النبي محمد، فقد روى أنس بن مالك عن النبي محمد قوله: «ثلاثة تشتاق إليهم الجنة: علي وسلمان و(...)»المستدرك على الصحيحين، وروى علي بن أبي طالب أن (...) استأذن على النبي محمد، فقال: «من هذا؟»، قال: «...»، قال: «مرحبًا بالطَيّبِ المُطَيَّبِ»،",
    guide24: "بعد وفاة النبي محمد، شارك في حروب الردة، واستبسل يوم اليمامة لما اشتدّ القتال، ورأى تأزّم الموقف في القتال، فاعتلى صخرة، وصاح: «يا معشر المسلمين، أمن الجنة تفرون؟ أنا (...)، هلموا إلي»الطبقات الكبرى لابن سعد.، وقد قطعت أذنه يومئذ٫ الإصابة في تمييز الصحابة.، فكانت تتذبذب، وهو يقاتل أشد القتال٫ سير أعلام النبلاء",
    guide25: "كان رضي الله عنه مع علي بن أبي طالب رضي الله عنه في حربه مع معاوية بن أبي سفيان رضي الله عنه بعد مقتل عثمان بن عفان، فشهد موقعة الجمل، ثم وقعة صفين. قُتل في وقعة صفين في صفر سنة 37 هـ، وعمره 93 سنة، وهو يقاتل في صفوف جيش علي بن أبي طالب وهو شيخ طاعن في السن في يده حربة ترعد. الطبقات الكبرى لابن سعد"
}
})

function guideone11 (){
   myApp1.textproject=false;
   myApp1.guideone1=true;
}
function guideone12 (){
   myApp1.guideone1=false;
   myApp1.guidetwo1=true;
}
function guideone13 (){
   myApp1.guidetwo1=false;
   myApp1.guidethree1=true;
}
function guideone14 (){
   myApp1.guidethree1=false;
	 myApp1.guidefour1=true;
}
function guideone15 (){
   myApp1.guidefour1=false;
   myApp1.answersguide1=true;
   myApp1.guidefive1=true;
}
function ansrguide1 () {
myApp1.answersguide1= false;
myApp1.guidefive1= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr1= true;
boxone.optionA1=true;
boxone.boxone= true;
boxone.one1= true;
boxone.two1= true;
boxone.three1= true;
boxone.four1= true;
boxone.five1= true;
}
function fouoneA () { 
if (boxone.optionA1==true) {
myApp1.point=myApp1.point+1;
}

myApp1.guide2 = true;
boxone.optionA1= false;
boxone.one1= false;
boxone.two1= false;
boxone.four1= false;
boxone.five1= false;
boxone.threeA1= "الإجابة صحيحة";
}

function fouroneA (x) {
boxone.optionA1= false;
if (x==1){
boxone.one1= true;
boxone.two1= false;
boxone.three1= false;
boxone.four1= false;
boxone.five1= false;
boxone.oneA1= "الإجابة خاطئة";
}
if (x==2){
boxone.one1= false;
boxone.two1= true;
boxone.three1= false;
boxone.four1= false;
boxone.five1= false;
boxone.twoA1= "الإجابة خاطئة";
}
if (x==4){
boxone.one1= false;
boxone.two1= false;
boxone.three1= false;
boxone.four1= true;
boxone.five1= false;
boxone.fourA1="الإجابة خاطئة";
}
if (x==5){
boxone.one1= false;
boxone.two1= false;
boxone.three1= false;
boxone.four1= false;
boxone.five1= true;
boxone.fiveA1= "الإجابة خاطئة";
}
myApp.title=true;
}
function guideone20 (){
   boxone.optionansr1= false;
   boxone.three1= false;
   myApp1.guide2= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone2=true;
}
function guideone21 (){
   myApp1.guideone2=false;
   myApp1.guidetwo2=true;
}
function guideone22 (){
   myApp1.guidetwo2=false;
   myApp1.guidethree2=true;
}
function guideone23 (){
   myApp1.guidethree2=false;
   myApp1.guidefour2=true;
}
function guideone24 (){
   myApp1.guidefour2=false;
   myApp1.answersguide2=true;
   myApp1.guidefive2=true;
}
function ansrguide2 () {
myApp1.answersguide2= false;
myApp1.guidefive2= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr2= true;
boxone.optionA2=true;
boxone.boxone= true;
boxone.one2= true;
boxone.two2= true;
boxone.three2= true;
boxone.four2= true;
boxone.five2= true;
}
function fouoneA2 () { 
if (boxone.optionA2==true) {
myApp1.point=myApp1.point+1;
}
boxone.optionA2= false;
boxone.one2= false;
boxone.two2= false;
boxone.four2= false;
boxone.five2= false;
boxone.threeA2= "الإجابة صحيحة";
myApp.title=true
}

function fouroneA2 (x) {
boxone.optionA2= false;
if (x==1){
boxone.one2= true;
boxone.two2= false;
boxone.three2= false;
boxone.four2= false;
boxone.five2= false;
boxone.oneA2= "الإجابة خاطئة";
}
if (x==2){
boxone.one2= false;
boxone.two2= true;
boxone.three2= false;
boxone.four2= false;
boxone.five2= false;
boxone.twoA2= "الإجابة خاطئة";
}
if (x==4){
boxone.one2= false;
boxone.two2= false;
boxone.three2= false;
boxone.four2= true;
boxone.five2= false;
boxone.fourA2="الإجابة خاطئة";
}
if (x==5){
boxone.one2= false;
boxone.two2= false;
boxone.three2= false;
boxone.four2= false;
boxone.five2= true;
boxone.fiveA2= "الإجابة خاطئة";
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
boxone.optionansr1=false;
boxone.optionA1= false
boxone.three1= false;
boxone.one1= false;
boxone.two1= false;
boxone.four1= false;
boxone.five1= false;
boxone.optionA2= false
boxone.three2= false;
boxone.one2= false;
boxone.two2= false;
boxone.four2= false;
boxone.five2= false;
myApp1.img2=false;
myApp1.guideone1=false;
myApp1.guidetwo1=false;
myApp1.guidethree1=false;
myApp1.guidefour1=false;
myApp1.guidefive1=false;
myApp1.answersguide1=false;
myApp1.guideone2=false;
myApp1.guidetwo2=false;
myApp1.guidethree2=false;
myApp1.guidefour2=false;
myApp1.guidefive2=false;
myApp1.answersguide2=false;
boxone.boxone=false;
boxone.fiveA1= "صهيب الرومي";
boxone.fourA1= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxone.threeA1= "سلمان الفارسي";
boxone.twoA1= "سعد بن معاذ";
boxone.oneA1= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxone.fiveA2= "صهيب الرومي",
boxone.fourA2= "زيد بن حارثة",
boxone.threeA2="عمار بن ياسر",
boxone.twoA2= "أبو ذر جندب بن جنادة الغفاري",
boxone.oneA2= "الزبير بن العوام"
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
