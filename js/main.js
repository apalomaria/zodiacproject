
//"aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"]
var zodiacNames = [
{  zName : "aquarius",
  dates: "January 20 - February 18",
  img: "img/aquarius.jpg"
},
{
  zName: "pisces",
  dates: "February 19 - March 20",
  img: "img/pisces.jpg"
},
{
  zName: "aries",
  dates: "March 21 - April 19",
  img:  "img/aries.jpg"
},
{
  zName: "taurus",
  dates: "April 20 - May 20",
  img:  "img/taurus.jpg"
},
{
  zName: "gemini",
  dates: "May 21 - June 20",
  img:  "img/gemini.jpg"
},
{
  zName: "cancer",
  dates: "June 21 - July 22",
  img:  "img/cancer.jpg"
},
{
  zName: "leo",
  dates: "June 21 - July 22",
  img:  "img/leo.jpg"
},
{
  zName: "virgo",
  dates: "August 23 – September 22",
  img:  "img/virgo.jpg"
},
{
  zName: "libra",
  dates: "September 23 - October 22",
  img:  "img/libra.jpg"
},
{
  zName: "scorpio",
  dates: "October 23 - November 21",
  img:  "img/scorpio.jpg"
},
{
  zName: "sagittarius",
  dates: "November 22 - December 21",
  img:  "img/sagittarius.jpg"
},
{
  zName: "capricorn",
  dates: "December 22 - January 19",
  img:  "img/capricorn.jpg"
}
];

//here is when  you enter text in the input field that it will be stored in console WITH the function of the button
function getInfo() {
  var sign = document.getElementById("sign");
  console.log("zodiac name entered:" + sign.value); // anything that was entered will display in console

for (var i=0; i < zodiacNames.length; i++) {
  //for the loop - to go through all zodiac names, display the name in lowercase in console
  console.log(sign.value.toLowerCase());
  console.log("current sign in loop is "+ zodiacNames[i].zName);
    if (sign.value.toLowerCase() === zodiacNames[i].zName){
      //when the name entered in input field is equal to the name displayed in array list. then display that "correct zodiac name ran"
    console.log("correct zodiac name ran");
    //when this is true - display the name value (how it is written in input field) to display the same way
    console.log("name typed in:" + sign.value);
    // then call out the name image per zodiac Name in console
    console.log("image to display:" + zodiacNames[i].img);
    console.log("dates are:" + zodiacNames[i].dates); // call out the dates per zodiac names
    //here is where once all the above is entered in input field, and its equal in value, the bottom will display in divs accordingly
    document.getElementById("name").textContent = sign.value;
    document.getElementById("image").src=zodiacNames[i].img;
    document.getElementById("dates").textContent= "Dates are: "+ zodiacNames[i].dates;
    return; // here is where it will stop the loop.
    //IMP - i did not have this displayed at first. and this threw off if user enters correct, it'll display the error message instead of zodiac name
  }; //the following is for when the zodiac name entered in input is not equal to the zNames list
  //tried using else statement and it worked at first but once entered incorrectly, it would not display accordingly
  //when entering correct zodiac name for second time. it will not loop again (did not display correctly)
  console.log("entered wrong zodiac name");
  document.getElementById("name").textContent="Entered wrong zodiac name. Please try again!";
  document.getElementById("dates").textContent="";
  document.getElementById("image").src="";
  };
};

var btn=document.getElementById("sign");
  btn.addEventListener('keypress', function enterKey(e){
    if(e.keyCode == 13){
        getInfo();
    };
  }, false);
