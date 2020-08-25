var myApp = new Vue({
    el: '#apptitle',
    data: {
    title: false,
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
    optionansr3: false,
    optionansr4: false,
    optionansr5: false,
    optionansr6: false,
    optionansr7: false,
    optionansr8: false,
    optionansr9: false,
    optionansr10: false,
    optionA1: false,
    optionA2: false,
    optionA3: false,
    optionA4: false,
    optionA5: false,
    optionA6: false,
    optionA7: false,
    optionA8: false,
    optionA9: false,
    optionA10: false,
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
    three3: false,
    one3: false,
    two3: false,
    four3: false,
    five3: false,
    three4: false,
    one4: false,
    two4: false,
    four4: false,
    five4: false,
    three5: false,
    one5: false,
    two5: false,
    four5: false,
    five5: false,
    three6: false,
    one6: false,
    two6: false,
    four6: false,
    five6: false,
    three7: false,
    one7: false,
    two7: false,
    four7: false,
    five7: false,
    three8: false,
    one8: false,
    two8: false,
    four8: false,
    five8: false,
    three9: false,
    one9: false,
    two9: false,
    four9: false,
    five9: false,
    three10: false,
    one10: false,
    two10: false,
    four10: false,
    five10: false,
    fiveA1: "صهيب الرومي",
    fourA1: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
    threeA1:"سلمان الفارسي",
    twoA1: "سعد بن معاذ",
    oneA1: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ",
    fiveA2: "صهيب الرومي",
    fourA2: "زيد بن حارثة",
    threeA2:"عمار بن ياسر",
    twoA2: "أبو ذر جندب بن جنادة الغفاري",
    oneA2: "عكرمة بن أبي جهل",
    fiveA3: "أبو سفيان صخر بن حرب بن أمية",
    fourA3: "عمرو بن العاص",
    threeA3:"خالد بن الوليد",
    twoA3: "ضرار بن الأزور الأسدي",
    oneA3: "أبو سفيان",
    fiveA4: "",
    fourA4: "",
    threeA4:"أبي ذر جندب بن جنادة الغفاري",
    twoA4: "",
    oneA4: "",
    fiveA5: "",
    fourA5: "",
    threeA5:"",
    twoA5: "",
    oneA5: "",
    fiveA6: "",
    fourA6: "",
    threeA6:"",
    twoA6: "",
    oneA6: "",
    fiveA7: "",
    fourA7: "",
    threeA7:"",
    twoA7: "",
    oneA7: "",
    fiveA8: "",
    fourA8: "",
    threeA8:"",
    twoA8: "",
    oneA8: "",
    fiveA9: "",
    fourA9: "",
    threeA9:"",
    twoA9: "",
    oneA9: "",
    fiveA10: "",
    fourA10: "",
    threeA10:"",
    twoA10: "",
    oneA10: ""
}
})

var myApp1 = new Vue({
    el: '#appone',
    data: {
    point:0,
    card1: false,
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
    guide3: false,
    guideone3: false,
    guidetwo3: false,
    guidethree3: false,
    guidefour3: false,
    guidefive3: false,
    answersguide3: false,
    guide4: false,
    guideone4: false,
    guidetwo4: false,
    guidethree4: false,
    guidefour4: false,
    guidefive4: false,
    answersguide4: false,
    guide5: false,
    guideone5: false,
    guidetwo5: false,
    guidethree5: false,
    guidefour5: false,
    guidefive5: false,
    answersguide5: false,
    guide6: false,
    guideone6: false,
    guidetwo6: false,
    guidethree6: false,
    guidefour6: false,
    guidefive6: false,
    answersguide6: false,
    guide7: false,
    guideone7: false,
    guidetwo7: false,
    guidethree7: false,
    guidefour7: false,
    guidefive7: false,
    answersguide7: false,
    guide8: false,
    guideone8: false,
    guidetwo8: false,
    guidethree8: false,
    guidefour8: false,
    guidefive8: false,
    answersguide8: false,
    guide9: false,
    guideone9: false,
    guidetwo9: false,
    guidethree9: false,
    guidefour9: false,
    guidefive9: false,
    answersguide9: false,
    guide10: false,
    guideone10: false,
    guidetwo10: false,
    guidethree10: false,
    guidefour10: false,
    guidefive10: false,
    answersguide10: false,
    guide11: "انتقل بين البلدان ليصحب الرجال الصالحين من القساوسة، إلى أن وصف له أحدهم ظهور نبي في بلاد العرب محمد صلى الله عليه وسلم",
    guide12: "أعلى النبي صلى الله عليه وسلم من منزلته، فقد روى أنس بن مالك عن النبي صلى الله عليه وسلم قوله: «الجنة تشتاق إلى ثلاثة:...» وذكره منهم. /سنن الترمذي» كتاب المناقب",
    guide13: "قال عنه الخليفة علي بن أبي طالب رضي الله عنه: «أدرك العلم الأول، والعلم الآخر، بحر لا يدرك قعره، وهو منا أهل البيت». /سير أعلام النبلاء",
    guide14: "قال رضي الله عنه: «شهدت مع رسول الله صلى الله عليه وسلم الخندق، ثم لم يفتني معه مشهد». رواه الإمام أحمد في مسنده برقم ٢٣٧٣٧",
    guide15: "روى الإمام أحمد في مسنده من حديث الحسن قال: لما احتضر (...) بكى، وقال: إن رسول الله صلى الله عليه وسلم عهد إلينا عهدًا، فتركنا ما عهد إلينا، أن يكون بلغة أحدنا من الدنيا كزاد الراكب، قال: ثم نظرنا فيما ترك، فإذا قيمة ما ترك بضعة وعشرون درهمًا، أو بضعة وثلاثون درهمًا. توفي سنة خمس وثلاثين من هجرة الرسول صلى الله عليه وسلم آخر خلافة عثمان رضي الله عنه",
    guide21: "صحابي كان من موالي بني مخزوم، ومن السابقين إلى الإسلام، ومن المستضعفين الذين عُذّبوا ليتركوا دين الإسلام",
    guide22: "كان بنو مخزوم لا يتركون (...) حتى ينال من النبي صلى الله عليه وسلم، ويذكر آلهتهم بخير، فلما أتى النبي، سأله النبي: «ما وراءك؟»، قال: «شر يا رسول الله. والله ما تُرِكْتُ حتى نلت منك، وذكرت آلهتهم بخير»، فقال النبي: «فكيف تجد قلبك؟»، قال: «مطمئن بالإيمان»، فقال النبي: «فإن عادوا فعد»، سير أعلام النبلاء",
    guide23: "كان لـ(...) مكانته الرفيعة عند النبي محمد، فقد روى أنس بن مالك عن النبي محمد قوله: «ثلاثة تشتاق إليهم الجنة: علي وسلمان و(...)»المستدرك على الصحيحين، وروى علي بن أبي طالب أن (...) استأذن على النبي محمد، فقال: «من هذا؟»، قال: «...»، قال: «مرحبًا بالطَيّبِ المُطَيَّبِ»،",
    guide24: "بعد وفاة النبي محمد، شارك في حروب الردة، واستبسل يوم اليمامة لما اشتدّ القتال، ورأى تأزّم الموقف في القتال، فاعتلى صخرة، وصاح: «يا معشر المسلمين، أمن الجنة تفرون؟ أنا (...)، هلموا إلي»الطبقات الكبرى لابن سعد.، وقد قطعت أذنه يومئذ٫ الإصابة في تمييز الصحابة.، فكانت تتذبذب، وهو يقاتل أشد القتال٫ سير أعلام النبلاء",
    guide25: "كان رضي الله عنه مع علي بن أبي طالب رضي الله عنه في حربه مع معاوية بن أبي سفيان رضي الله عنه بعد مقتل عثمان بن عفان، فشهد موقعة الجمل، ثم وقعة صفين. قُتل في وقعة صفين في صفر سنة 37 هـ، وعمره 93 سنة، وهو يقاتل في صفوف جيش علي بن أبي طالب وهو شيخ طاعن في السن في يده حربة ترعد. الطبقات الكبرى لابن سعد",
    guide31: "صحابي اعتنق الدين الإسلامي بعد صلح الحديبية، شارك في حملات مختلفة في عهد الرسول، أهمها غزوة مؤتة وفتح مكة",
    guide32: "قص رضي الله عنه على أبي بكر الصديق رضي الله عنه رؤيا رآها في نومه أنه كان في بلاد ضيقة مجدبة، فخرج إلى بلاد خضراء واسعة، فقال له: «مخرجك الذي هداك الله للإسلام، والضيق الذي كنت فيه من الشرك». البداية والنهاية لابن كثير رحمه الله",
    guide33: "كان رضي الله عنه طويلاً بائن الطول، عظيم الجسم والهامة، يميل إلى البياض، كث اللحية، شديد الشبه بعمر بن الخطاب، حتى أن ضعاف النظر كانوا يخلطون بينهما",
    guide34: "قال له أبو بكر الصدّيق -رضي الله عنه- عندما سلّمه لواء الجيش لقتال المُرتدّين: (إنّي سمعت رسول الله -صلّى الله عليه وسلّم- يقول: نِعْمَ عبد الله وأخو العشيرة (...)، سيف من سيوف الله، سلَّه الله على الكُفّار والمُنافِقين) مسند الإمام أحمد",
    guide35: "توفي رضي الله عنه عام واحد وعشرون من هجرة الرسول صلى الله عليه وسلم بعمر يناهز خمسين سنـة",
    guide41: "من السابقين إلى الإسلام، قيل رابع أو خامس من دخل في الإسلام، وأحد الذين جهروا بالإسلام في مكة قبل الهجرة النبوية. قال عنه الذهبي في ترجمته له في كتابه «سير أعلام النبلاء»: «كان رأسًا في الزُهد، والصدق، والعلم والعمل، قوّالاً بالحق، لا تأخذه في الله لومة لائم، على حِدّةٍ فيه»",
    guide42: "",
    guide43: "",
    guide44: "",
    guide45: "",
    guide51: "",
    guide52: "",
    guide53: "",
    guide54: "",
    guide55: "",
    guide61: "",
    guide62: "",
    guide63: "",
    guide64: "",
    guide65: "",
    guide71: "",
    guide72: "",
    guide73: "",
    guide74: "",
    guide75: "",
    guide81: "",
    guide82: "",
    guide83: "",
    guide84: "",
    guide85: "",
    guide91: "",
    guide92: "",
    guide93: "",
    guide94: "",
    guide95: "",
    guide101: "",
    guide102: "",
    guide103: "",
    guide104: "",
    guide105: ""

}
})
var App = new Vue({
    el: '#app',
    data: {
    Audio: true
   }
})

function play() {
  var audio = new Audio('https://storage.googleapis.com/moises-mixer/getmix/15977959205551597795925630.mp3?GoogleAccessId=firebase-adminsdk-rveqc%40spleeter.iam.gserviceaccount.com&Expires=16447017600&Signature=EiTeN0%2B7RTCyB1AwTHQwf80YdrLxZ8NAudwoA2%2BVB1d6pp9cLcRuEP0NpINyt3%2FJp%2B%2FzftBANqNyAXHkPNkaIZRUyix2wKJyTZ3gNn64bM%2BRjuXTwKKY2CLaDaHYfBS%2BwpPgrJDR4gKzrJcIH%2FMyyh6nO5XEZcIEYmWK22NzN5ELNHB4hS2zD%2F094gkBnlF0m9P3wc6tv3xqQcFNdK1QH01lgGpzP7qypmoOSP4WBwurG4ca0gfj8HFyISmaUQOj2nnfZALHZyQCFI5B3WC3lOQPcaGQaBi5tG4MZFZM7BF3JLB1UF5Zm4kGvSTaNwPXu7GBfdVeRJ%2BvvM%2B2nJzP3A%3D%3D');
  audio.play();
  audio.loop = true;
  App.Audio=false;
  myApp1.card1= true;
  myApp.title= true;
}

// Q1
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

// Q2
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
myApp1.guide3 = true;
boxone.optionA2= false;
boxone.one2= false;
boxone.two2= false;
boxone.four2= false;
boxone.five2= false;
boxone.threeA2= "الإجابة صحيحة";
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


// Q3
function guideone30 (){
   boxone.optionansr2= false;
   boxone.three2= false;
   myApp1.guide3= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone3=true;
}
function guideone31 (){
   myApp1.guideone3=false;
   myApp1.guidetwo3=true;
}
function guideone32 (){
   myApp1.guidetwo3=false;
   myApp1.guidethree3=true;
}
function guideone33 (){
   myApp1.guidethree3=false;
   myApp1.guidefour3=true;
}
function guideone34 (){
   myApp1.guidefour3=false;
   myApp1.answersguide3=true;
   myApp1.guidefive3=true;
}
function ansrguide3 () {
myApp1.answersguide3= false;
myApp1.guidefive3= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr3= true;
boxone.optionA3=true;
boxone.boxone= true;
boxone.one3= true;
boxone.two3= true;
boxone.three3= true;
boxone.four3= true;
boxone.five3= true;
}
function fouoneA3 () { 
if (boxone.optionA3==true) {
myApp1.point=myApp1.point+1;
}
myApp1.guide4 = true;
boxone.optionA3= false;
boxone.one3= false;
boxone.two3= false;
boxone.four3= false;
boxone.five3= false;
boxone.threeA3= "الإجابة صحيحة";
}

function fouroneA3 (x) {
boxone.optionA3= false;
if (x==1){
boxone.one3= true;
boxone.two3= false;
boxone.three3= false;
boxone.four3= false;
boxone.five3= false;
boxone.oneA3= "الإجابة خاطئة";
}
if (x==2){
boxone.one3= false;
boxone.two3= true;
boxone.three3= false;
boxone.four3= false;
boxone.five3= false;
boxone.twoA3= "الإجابة خاطئة";
}
if (x==4){
boxone.one3= false;
boxone.two3= false;
boxone.three3= false;
boxone.four3= true;
boxone.five3= false;
boxone.fourA3="الإجابة خاطئة";
}
if (x==5){
boxone.one3= false;
boxone.two3= false;
boxone.three3= false;
boxone.four3= false;
boxone.five3= true;
boxone.fiveA3= "الإجابة خاطئة";
}
myApp.title=true;
}


// Q4
function guideone40 (){
   boxone.optionansr3= false;
   boxone.three3= false;
   myApp1.guide4= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone4=true;
}
function guideone41 (){
   myApp1.guideone4=false;
   myApp1.guidetwo4=true;
}
function guideone42 (){
   myApp1.guidetwo4=false;
   myApp1.guidethree4=true;
}
function guideone43 (){
   myApp1.guidethree4=false;
   myApp1.guidefour4=true;
}
function guideone44 (){
   myApp1.guidefour4=false;
   myApp1.answersguide4=true;
   myApp1.guidefive4=true;
}
function ansrguide4 () {
myApp1.answersguide4= false;
myApp1.guidefive4= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr4= true;
boxone.optionA4=true;
boxone.boxone= true;
boxone.one4= true;
boxone.two4= true;
boxone.three4= true;
boxone.four4= true;
boxone.five4= true;
}
function fouoneA4 () { 
if (boxone.optionA4==true) {
myApp1.point=myApp1.point+1;
}
myApp1.guide5 = true;
boxone.optionA4= false;
boxone.one4= false;
boxone.two4= false;
boxone.four4= false;
boxone.five4= false;
boxone.threeA4= "الإجابة صحيحة";
}

function fouroneA4 (x) {
boxone.optionA4= false;
if (x==1){
boxone.one4= true;
boxone.two4= false;
boxone.three4= false;
boxone.four4= false;
boxone.five4= false;
boxone.oneA4= "الإجابة خاطئة";
}
if (x==2){
boxone.one4= false;
boxone.two4= true;
boxone.three4= false;
boxone.four4= false;
boxone.five4= false;
boxone.twoA4= "الإجابة خاطئة";
}
if (x==4){
boxone.one4= false;
boxone.two4= false;
boxone.three4= false;
boxone.four4= true;
boxone.five4= false;
boxone.fourA4="الإجابة خاطئة";
}
if (x==5){
boxone.one4= false;
boxone.two4= false;
boxone.three4= false;
boxone.four4= false;
boxone.five4= true;
boxone.fiveA4= "الإجابة خاطئة";
}
myApp.title=true;
}


// Q5
function guideone50 (){
   boxone.optionansr5= false;
   boxone.three5= false;
   myApp1.guide5= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone5=true;
}
function guideone51 (){
   myApp1.guideone5=false;
   myApp1.guidetwo5=true;
}
function guideone52 (){
   myApp1.guidetwo5=false;
   myApp1.guidethree5=true;
}
function guideone53 (){
   myApp1.guidethree5=false;
   myApp1.guidefour5=true;
}
function guideone54 (){
   myApp1.guidefour5=false;
   myApp1.answersguide5=true;
   myApp1.guidefive5=true;
}
function ansrguide5 () {
myApp1.answersguide5= false;
myApp1.guidefive5= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr5= true;
boxone.optionA5=true;
boxone.boxone= true;
boxone.one5= true;
boxone.two5= true;
boxone.three5= true;
boxone.four5= true;
boxone.five5= true;
}
function fouoneA5 () { 
if (boxone.optionA5==true) {
myApp1.point=myApp1.point+1;
}
myApp1.guide6 = true;
boxone.optionA5= false;
boxone.one5= false;
boxone.two5= false;
boxone.four5= false;
boxone.five5= false;
boxone.threeA5= "الإجابة صحيحة";
}

function fouroneA5 (x) {
boxone.optionA5= false;
if (x==1){
boxone.one5= true;
boxone.two5= false;
boxone.three5= false;
boxone.four5= false;
boxone.five5= false;
boxone.oneA5= "الإجابة خاطئة";
}
if (x==2){
boxone.one5= false;
boxone.two5= true;
boxone.three5= false;
boxone.four5= false;
boxone.five5= false;
boxone.twoA5= "الإجابة خاطئة";
}
if (x==4){
boxone.one5= false;
boxone.two5= false;
boxone.three5= false;
boxone.four5= true;
boxone.five5= false;
boxone.fourA5="الإجابة خاطئة";
}
if (x==5){
boxone.one5= false;
boxone.two5= false;
boxone.three5= false;
boxone.four5= false;
boxone.five5= true;
boxone.fiveA5= "الإجابة خاطئة";
}
myApp.title=true;
}


// Q6
function guideone60 (){
   boxone.optionansr5= false;
   boxone.three5= false;
   myApp1.guide6= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone6=true;
}
function guideone61 (){
   myApp1.guideone6=false;
   myApp1.guidetwo6=true;
}
function guideone62 (){
   myApp1.guidetwo6=false;
   myApp1.guidethree6=true;
}
function guideone63 (){
   myApp1.guidethree6=false;
   myApp1.guidefour6=true;
}
function guideone64 (){
   myApp1.guidefour6=false;
   myApp1.answersguide6=true;
   myApp1.guidefive6=true;
}
function ansrguide6 () {
myApp1.answersguide6= false;
myApp1.guidefive6= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr6= true;
boxone.optionA6=true;
boxone.boxone= true;
boxone.one6= true;
boxone.two6= true;
boxone.three6= true;
boxone.four6= true;
boxone.five6= true;
}
function fouoneA6 () { 
if (boxone.optionA6==true) {
myApp1.point=myApp1.point+1;
}
myApp1.guide7 = true;
boxone.optionA6= false;
boxone.one6= false;
boxone.two6= false;
boxone.four6= false;
boxone.five6= false;
boxone.threeA6= "الإجابة صحيحة";
}

function fouroneA6 (x) {
boxone.optionA6= false;
if (x==1){
boxone.one6= true;
boxone.two6= false;
boxone.three6= false;
boxone.four6= false;
boxone.five6= false;
boxone.oneA6= "الإجابة خاطئة";
}
if (x==2){
boxone.one6= false;
boxone.two6= true;
boxone.three6= false;
boxone.four6= false;
boxone.five6= false;
boxone.twoA6= "الإجابة خاطئة";
}
if (x==4){
boxone.one6= false;
boxone.two6= false;
boxone.three6= false;
boxone.four6= true;
boxone.five6= false;
boxone.fourA6="الإجابة خاطئة";
}
if (x==5){
boxone.one6= false;
boxone.two6= false;
boxone.three6= false;
boxone.four6= false;
boxone.five6= true;
boxone.fiveA6= "الإجابة خاطئة";
}
myApp.title=true;
}

// Q7
function guideone70 (){
   boxone.optionansr6= false;
   boxone.three6= false;
   myApp1.guide7= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone7=true;
}
function guideone71 (){
   myApp1.guideone7=false;
   myApp1.guidetwo7=true;
}
function guideone72 (){
   myApp1.guidetwo7=false;
   myApp1.guidethree7=true;
}
function guideone73 (){
   myApp1.guidethree7=false;
   myApp1.guidefour7=true;
}
function guideone74 (){
   myApp1.guidefour7=false;
   myApp1.answersguide7=true;
   myApp1.guidefive7=true;
}
function ansrguide7 () {
myApp1.answersguide7= false;
myApp1.guidefive7= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr7= true;
boxone.optionA7=true;
boxone.boxone= true;
boxone.one7= true;
boxone.two7= true;
boxone.three7= true;
boxone.four7= true;
boxone.five7= true;
}
function fouoneA7 () { 
if (boxone.optionA7==true) {
myApp1.point=myApp1.point+1;
}
myApp1.guide8 = true;
boxone.optionA7= false;
boxone.one7= false;
boxone.two7= false;
boxone.four7= false;
boxone.five7= false;
boxone.threeA7= "الإجابة صحيحة";
}

function fouroneA7 (x) {
boxone.optionA7= false;
if (x==1){
boxone.one7= true;
boxone.two7= false;
boxone.three7= false;
boxone.four7= false;
boxone.five7= false;
boxone.oneA7= "الإجابة خاطئة";
}
if (x==2){
boxone.one7= false;
boxone.two7= true;
boxone.three7= false;
boxone.four7= false;
boxone.five7= false;
boxone.twoA7= "الإجابة خاطئة";
}
if (x==4){
boxone.one7= false;
boxone.two7= false;
boxone.three7= false;
boxone.four7= true;
boxone.five7= false;
boxone.fourA7="الإجابة خاطئة";
}
if (x==5){
boxone.one7= false;
boxone.two7= false;
boxone.three7= false;
boxone.four7= false;
boxone.five7= true;
boxone.fiveA7= "الإجابة خاطئة";
}
myApp.title=true;
}


// Q8 
function guideone80 (){
   boxone.optionansr7= false;
   boxone.three7= false;
   myApp1.guide8= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone8=true;
}
function guideone81 (){
   myApp1.guideone8=false;
   myApp1.guidetwo8=true;
}
function guideone82 (){
   myApp1.guidetwo8=false;
   myApp1.guidethree8=true;
}
function guideone83 (){
   myApp1.guidethree8=false;
   myApp1.guidefour8=true;
}
function guideone84 (){
   myApp1.guidefour8=false;
   myApp1.answersguide8=true;
   myApp1.guidefive8=true;
}
function ansrguide8 () {
myApp1.answersguide8= false;
myApp1.guidefive8= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr8= true;
boxone.optionA8=true;
boxone.boxone= true;
boxone.one8= true;
boxone.two8= true;
boxone.three8= true;
boxone.four8= true;
boxone.five8= true;
}
function fouoneA8 () { 
if (boxone.optionA8==true) {
myApp1.point=myApp1.point+1;
}
myApp1.guide9 = true;
boxone.optionA8= false;
boxone.one8= false;
boxone.two8= false;
boxone.four8= false;
boxone.five8= false;
boxone.threeA8= "الإجابة صحيحة";
}

function fouroneA8 (x) {
boxone.optionA8= false;
if (x==1){
boxone.one8= true;
boxone.two8= false;
boxone.three8= false;
boxone.four8= false;
boxone.five8= false;
boxone.oneA8= "الإجابة خاطئة";
}
if (x==2){
boxone.one8= false;
boxone.two8= true;
boxone.three8= false;
boxone.four8= false;
boxone.five8= false;
boxone.twoA8= "الإجابة خاطئة";
}
if (x==4){
boxone.one8= false;
boxone.two8= false;
boxone.three8= false;
boxone.four8= true;
boxone.five8= false;
boxone.fourA8="الإجابة خاطئة";
}
if (x==5){
boxone.one8= false;
boxone.two8= false;
boxone.three8= false;
boxone.four8= false;
boxone.five8= true;
boxone.fiveA8= "الإجابة خاطئة";
}
myApp.title=true;
}


// Q9
function guideone90 (){
   boxone.optionansr8= false;
   boxone.three8= false;
   myApp1.guide9= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone9=true;
}
function guideone91 (){
   myApp1.guideone9=false;
   myApp1.guidetwo9=true;
}
function guideone92 (){
   myApp1.guidetwo9=false;
   myApp1.guidethree9=true;
}
function guideone93 (){
   myApp1.guidethree9=false;
   myApp1.guidefour9=true;
}
function guideone94 (){
   myApp1.guidefour9=false;
   myApp1.answersguide9=true;
   myApp1.guidefive9=true;
}
function ansrguide9 () {
myApp1.answersguide9= false;
myApp1.guidefive9= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr9= true;
boxone.optionA9=true;
boxone.boxone= true;
boxone.one9= true;
boxone.two9= true;
boxone.three9= true;
boxone.four9= true;
boxone.five9= true;
}
function fouoneA9 () { 
if (boxone.optionA9==true) {
myApp1.point=myApp1.point+1;
}
myApp1.guide10 = true;
boxone.optionA9= false;
boxone.one9= false;
boxone.two9= false;
boxone.four9= false;
boxone.five9= false;
boxone.threeA9= "الإجابة صحيحة";
}

function fouroneA9 (x) {
boxone.optionA9= false;
if (x==1){
boxone.one9= true;
boxone.two9= false;
boxone.three9= false;
boxone.four9= false;
boxone.five9= false;
boxone.oneA9= "الإجابة خاطئة";
}
if (x==2){
boxone.one9= false;
boxone.two9= true;
boxone.three9= false;
boxone.four9= false;
boxone.five9= false;
boxone.twoA9= "الإجابة خاطئة";
}
if (x==4){
boxone.one9= false;
boxone.two9= false;
boxone.three9= false;
boxone.four9= true;
boxone.five9= false;
boxone.fourA9="الإجابة خاطئة";
}
if (x==5){
boxone.one9= false;
boxone.two9= false;
boxone.three9= false;
boxone.four9= false;
boxone.five9= true;
boxone.fiveA9= "الإجابة خاطئة";
}
myApp.title=true;
}


// Q10
function guideone100 (){
   boxone.optionansr9= false;
   boxone.three9= false;
   myApp1.guide10= false;
   myApp1.card1= true;
   myApp1.img2= true;
   myApp1.guideone10=true;
}
function guideone101 (){
   myApp1.guideone10=false;
   myApp1.guidetwo10=true;
}
function guideone102 (){
   myApp1.guidetwo10=false;
   myApp1.guidethree10=true;
}
function guideone103 (){
   myApp1.guidethree10=false;
   myApp1.guidefour10=true;
}
function guideone104 (){
   myApp1.guidefour10=false;
   myApp1.answersguide10=true;
   myApp1.guidefive10=true;
}
function ansrguide10 () {
myApp1.answersguide10= false;
myApp1.guidefive10= false;
myApp1.card1= false;
myApp1.img2= false;
boxone.optionansr10= true;
boxone.optionA10=true;
boxone.boxone= true;
boxone.one10= true;
boxone.two10= true;
boxone.three10= true;
boxone.four10= true;
boxone.five10= true;
}
function fouoneA10 () { 
if (boxone.optionA10==true) {
myApp1.point=myApp1.point+1;
}
boxone.optionA10= false;
boxone.one10= false;
boxone.two10= false;
boxone.four10= false;
boxone.five10= false;
boxone.threeA10= "الإجابة صحيحة";
myApp.title=true;
}

function fouroneA10 (x) {
boxone.optionA10= false;
if (x==1){
boxone.one10= true;
boxone.two10= false;
boxone.three10= false;
boxone.four10= false;
boxone.five10= false;
boxone.oneA10= "الإجابة خاطئة";
}
if (x==2){
boxone.one10= false;
boxone.two19= true;
boxone.three10= false;
boxone.four10= false;
boxone.five10= false;
boxone.twoA10= "الإجابة خاطئة";
}
if (x==4){
boxone.one10= false;
boxone.two10= false;
boxone.three10= false;
boxone.four10= true;
boxone.five10= false;
boxone.fourA10="الإجابة خاطئة";
}
if (x==5){
boxone.one10= false;
boxone.two10= false;
boxone.three10= false;
boxone.four10= false;
boxone.five10= true;
boxone.fiveA10= "الإجابة خاطئة";
}
myApp.title=true;
}



//  var myApp2 = new Vue({
//     el: '#apptwo',
//     data: {
//     card2: false,
//     text: true,
//     textproject: false
// }
// })

// var myApp3 = new Vue({
//     el: '#appthree',
//     data: {
//     card3: false,
//     text:true,
//     textproject: false
// }
// })

// var myApp4 = new Vue({
//     el: '#appfour',
//     data: {
// 	card4: false,
// 	text:true,
// 	textproject: false
// }
// })



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
boxone.optionansr1=false;
boxone.optionansr2=false;
boxone.optionansr3=false;
boxone.optionansr4=false;
boxone.optionansr5=false;
boxone.optionansr6=false;
boxone.optionansr7=false;
boxone.optionansr8=false;
boxone.optionansr9=false;
boxone.optionansr10=false;
boxone.optionA1= false
boxone.three1= false;
boxone.one1= false;
boxone.two1= false;
boxone.four1= false;
boxone.five1= false;
boxone.optionA2= false;
boxone.three2= false;
boxone.one2= false;
boxone.two2= false;
boxone.four2= false;
boxone.five2= false;
boxone.optionA3= false;
boxone.three3= false;
boxone.one3= false;
boxone.two3= false;
boxone.four3= false;
boxone.five3= false;
boxone.optionA4= false
boxone.three4= false;
boxone.one4= false;
boxone.two4= false;
boxone.four4= false;
boxone.five4= false;
boxone.optionA5= false;
boxone.three5= false;
boxone.one5= false;
boxone.two5= false;
boxone.four5= false;
boxone.five5= false;
boxone.optionA6= false;
boxone.three6= false;
boxone.one6= false;
boxone.two6= false;
boxone.four6= false;
boxone.five6= false;
boxone.optionA7= false
boxone.three7= false;
boxone.one7= false;
boxone.two7= false;
boxone.four7= false;
boxone.five7= false;
boxone.optionA8= false;
boxone.three8= false;
boxone.one8= false;
boxone.two8= false;
boxone.four8= false;
boxone.five8= false;
boxone.optionA9= false;
boxone.three9= false;
boxone.one9= false;
boxone.two9= false;
boxone.four9= false;
boxone.five9= false;
boxone.optionA10= false;
boxone.three10= false;
boxone.one10= false;
boxone.two10= false;
boxone.four10= false;
boxone.five10= false;
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
myApp1.guideone3=false;
myApp1.guidetwo3=false;
myApp1.guidethree3=false;
myApp1.guidefour3=false;
myApp1.guidefive3=false;
myApp1.answersguide3=false;
myApp1.guideone4=false;
myApp1.guidetwo4=false;
myApp1.guidethree4=false;
myApp1.guidefour4=false;
myApp1.guidefive4=false;
myApp1.answersguide4=false;
myApp1.guideone5=false;
myApp1.guidetwo5=false;
myApp1.guidethree5=false;
myApp1.guidefour5=false;
myApp1.guidefive5=false;
myApp1.answersguide5=false;
myApp1.guideone6=false;
myApp1.guidetwo6=false;
myApp1.guidethree6=false;
myApp1.guidefour6=false;
myApp1.guidefive6=false;
myApp1.answersguide6=false;
myApp1.guideone7=false;
myApp1.guidetwo7=false;
myApp1.guidethree7=false;
myApp1.guidefour7=false;
myApp1.guidefive7=false;
myApp1.answersguide7=false;
myApp1.guideone8=false;
myApp1.guidetwo8=false;
myApp1.guidethree8=false;
myApp1.guidefour8=false;
myApp1.guidefive8=false;
myApp1.answersguide8=false;
myApp1.guideone9=false;
myApp1.guidetwo9=false;
myApp1.guidethree9=false;
myApp1.guidefour9=false;
myApp1.guidefive9=false;
myApp1.answersguide9=false;
myApp1.guideone10=false;
myApp1.guidetwo10=false;
myApp1.guidethree10=false;
myApp1.guidefour10=false;
myApp1.guidefive10=false;
myApp1.answersguide10=false;
boxone.boxone=false;
boxone.fiveA1= "صهيب الرومي";
boxone.fourA1= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
boxone.threeA1= "سلمان الفارسي";
boxone.twoA1= "سعد بن معاذ";
boxone.oneA1= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
boxone.fiveA2= "صهيب الرومي";
boxone.fourA2= "زيد بن حارثة";
boxone.threeA2="عمار بن ياسر";
boxone.twoA2= "أبو ذر جندب بن جنادة الغفاري";
boxone.oneA2= "الزبير بن العوام";
boxone.fiveA3= "أبو سفيان صخر بن حرب بن أمية";
boxone.fourA3= "عمرو بن العاص";
boxone.threeA3= "خالد بن الوليد";
boxone.twoA3= "ضرار بن الأزور الأسدي";
boxone.oneA3= "عكرمة بن أبي جهل";
boxone.fiveA4= "";
boxone.fourA4= "";
boxone.threeA4= "أبي ذر جندب بن جنادة الغفاري";
boxone.twoA4= "";
boxone.oneA4= "";
boxone.fiveA5= "";
boxone.fourA5= "";
boxone.threeA5= "";
boxone.twoA5= "";
boxone.oneA5= "";
boxone.fiveA6= "";
boxone.fourA6= "";
boxone.threeA6= "";
boxone.twoA6= "";
boxone.oneA6= "";
boxone.fiveA7= "";
boxone.fourA7= "";
boxone.threeA7= "";
boxone.twoA7= "";
boxone.oneA7= "";
boxone.fiveA8= "";
boxone.fourA8= "";
boxone.threeA8= "";
boxone.twoA8= "";
boxone.oneA8= "";
boxone.fiveA9= "";
boxone.fourA9= "";
boxone.threeA9= "";
boxone.twoA9= "";
boxone.oneA9= "";
boxone.fiveA10= "";
boxone.fourA10= "";
boxone.threeA10= "";
boxone.twoA10= "";
boxone.oneA10= "";
texttitlereturn();
}

function texttitlereturn (){
 myApp1.text= true;
//  myApp2.text= true;
//  myApp3.text= true;
//  myApp4.text= true;
 myApp1.textproject= false;
//  myApp2.textproject= false;
//  myApp3.textproject= false;
//  myApp4.textproject= false;
 }

function clickone () {
// myApp2.card2= false;
// myApp3.card3= false;
// myApp4.card4= false;
myApp1.text=false;
myApp.title=false;
myApp1.textproject=true;
myApp1.img1=false;
myApp1.img2=true;
apptitlereturn();
}
function clicktwo () {
myApp1.card1= false;
// myApp3.card3= false;
// myApp4.card4= false;
// myApp2.text=false;
// myApp2.textproject=true;
apptitlereturn();
}
function clickthree () {
myApp1.card1= false;
// myApp2.card2= false;
// myApp4.card4= false;
// myApp3.text=false
// myApp3.textproject=true;
apptitlereturn();
}
function clickfour () {
myApp1.card1= false;
// myApp2.card2= false;
// myApp3.card3= false;
// myApp4.text=false;
// myApp4.textproject=true;
apptitlereturn();
}
