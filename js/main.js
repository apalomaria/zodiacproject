
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
  console.log(sign.value.toLowerCase());
  console.log("current sign in loop is "+ zodiacNames[i].zName);
    if (sign.value.toLowerCase() === zodiacNames[i].zName){
    console.log("correct zodiac name ran");
    console.log("name typed in:" + sign.value);
    console.log("image to display:" + zodiacNames[i].img);
    console.log("dates are:" + zodiacNames[i].dates);
    document.getElementById("name").textContent = sign.value;
    document.getElementById("image").src=zodiacNames[i].img;
    document.getElementById("dates").textContent= "Dates are: "+ zodiacNames[i].dates;
  } else {
    console.log("entered incorrect zodiac name");
    document.getElementById("name").textContent="Incorrect zodiac name. Please try again.";
    };
  };
};
