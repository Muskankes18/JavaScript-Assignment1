

//Self-invoking function
(function dsiplay(){ 
var table = document.createElement('table');
var tr = document.createElement('tr');
//Creating an array of the header column
var header = ['Name', 'Age', 'DOB', 'Email','Company'];
//Creating an array of all the values for the table
var arr=[{
  Name: "Muskan Kesarwani",
  Age: 20,
DOB:"18-06-2002",
Email:"mk@gmail.com",
Company:"Gemini Solutions"},
{
  Name: "Dev Kesarwani",
  Age: 23,
DOB:"11-02-2000",
Email:"dk@gmail.com",
Company:"Gemini Solutions"},
{
  Name: "Mohit Pareek",
  Age: 25,
DOB:"28-06-1996",
Email:"mp@gmail.com",
Company:"Gemini Solutions"}
,
{
  Name: "Gaurav Kumar",
  Age: 20,
DOB:"13-08-2002",
Email:"gk@gmail.com",
Company:"Gemini Solutions"},
{
  Name: "Kartik  Gupta",
  Age: 28,
DOB:"11-09-1995",
Email:"kg@gmail.com",
Company:"Gemini Solutions"}
];

//Using DOM creating the header columns
for (var j = 0; j < header.length; j++) {
  var th = document.createElement('th'); //column
  var text = document.createTextNode(header[j]); //cell
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);
// Loop to fill the values in the table
for (var i = 0; i < arr.length; i++) {
  //Creating row
  var tr = document.createElement('tr');
//Creating cells
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
//Creating text node
  var text1 = document.createTextNode(arr[i].Name);
  var text2 = document.createTextNode(arr[i].Age);
  var text3 = document.createTextNode(arr[i].DOB);
  var text4 = document.createTextNode(arr[i].Email);
  var text5 = document.createTextNode(arr[i].Company);
  //Appending the text to the cells
  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  table.appendChild(tr);
}
table.setAttribute("border", "solid");

document.body.appendChild(table);

})();
