
fetch('https://coding-week-2024-api.onrender.com/api/data')
.then(response => {
console.log(response)
return response.json();
})
.then((comapletedata) => {
console.log(comapletedata[0])
console.log(comapletedata[1])
const img1 = document.getElementById('im1');
img1.src = comapletedata[0].image;
document.getElementById('i1').innerHTML = comapletedata[0].headline;
document.getElementById('content1').innerHTML = comapletedata[0].content;
document.getElementById('btn1').innerHTML = comapletedata[0].type;
document.getElementById('d1').innerHTML = comapletedata[0].date;

const img2 = document.getElementById('im2');
img2.src = comapletedata[1].image;
document.getElementById('i2').innerHTML = comapletedata[1].headline;
document.getElementById('content2').innerHTML = comapletedata[1].content;
document.getElementById('btn4').innerHTML = comapletedata[1].type;
document.getElementById('d2').innerHTML = comapletedata[1].date;

const img3 = document.getElementById('im3');
img3.src = comapletedata[2].image;
document.getElementById('i3').innerHTML = comapletedata[2].headline;
document.getElementById('content3').innerHTML = comapletedata[2].content;
document.getElementById('btn6').innerHTML = comapletedata[2].type;
document.getElementById('d3').innerHTML = comapletedata[2].date;

const img4 = document.getElementById('im4');
img4.src = comapletedata[3].image;
document.getElementById('i4').innerHTML = comapletedata[3].headline;
document.getElementById('content4').innerHTML = comapletedata[3].content;
document.getElementById('btn8').innerHTML = comapletedata[3].type;
document.getElementById('d4').innerHTML =comapletedata[3].date;

const img5 = document.getElementById('im5');
img5.src = comapletedata[4].image;
document.getElementById('i5').innerHTML = comapletedata[4].headline;
document.getElementById('d5').innerHTML =comapletedata[4].date;

const img6 = document.getElementById('im6');
img6.src = comapletedata[5].image;
document.getElementById('i6').innerHTML = comapletedata[5].headline;
document.getElementById('d6').innerHTML =comapletedata[5].date;

const img7 = document.getElementById('im7');
img7.src = comapletedata[6].image;
document.getElementById('i7').innerHTML = comapletedata[6].headline;
document.getElementById('d7').innerHTML =comapletedata[6].date;

const img8 = document.getElementById('im8');
img8.src = comapletedata[7].image;
document.getElementById('i8').innerHTML = comapletedata[7].headline;
document.getElementById('d8').innerHTML =comapletedata[7].date;

const img9 = document.getElementById('im9');
img9.src = comapletedata[8].image;
document.getElementById('i9').innerHTML = comapletedata[8].headline;
document.getElementById('d9').innerHTML =comapletedata[8].date;

const img10 = document.getElementById('im10');
img10.src = comapletedata[9].image;
document.getElementById('i10').innerHTML = comapletedata[9].headline;
document.getElementById('d10').innerHTML =comapletedata[9].date;
})
.catch(error => console.log(error))
 
