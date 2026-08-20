// The Date() constructor never takes any arguments
var d = new Date();

document.write("<b>toLocaleString()</b> : " + d.toLocaleString() + "<br>");
document.write("<b>toLocaleString()</b> : " + d.toLocaleString('en-US', { month: 'long' }) + "<br>");
document.write("<b>toLocaleString()</b> : " + d.toLocaleString('en-US', { weekday: 'long' }) + "<br>");
document.write("<b>toLocaleString()</b> : " + d.toLocaleString('en-US', { month: 'long', weekday: 'long' }) + "<br>");

document.write("<b>getHours()</b> : " + d.getHours() + "<br>");
document.write("<b>getDay()</b> : " + d.getDay() + "<br>");
document.write("<b>getMonth()</b> : " + d.getMonth() + "<br>");
document.write("<b>getFullYear()</b> : " + d.getFullYear() + "<br>");
document.write("<b>getMinutes()</b> : " + d.getMinutes() + "<br>");
document.write("<b>getSeconds()</b> : " + d.getSeconds() + "<br>");
