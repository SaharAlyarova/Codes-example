let sual = document.querySelector("#sual");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let duzcavab = document.querySelector("#duzcavab");
let startbtn = document.querySelector(".startbtn");
let neticebtn = document.querySelector(".neticebtn");
let qebulbtn = document.querySelector(".qebulet");
let conn = document.querySelector(".conn");
let box = document.querySelector(".box");
let spn=document.querySelector(".spn")
let array = JSON.parse(localStorage.getItem("sual")) || [];
startbtn.addEventListener("click", function () {
  let userobj = {
    sual: "",
    a: "",
    b: "",
    c: "",
    d: "",
    duzguncavab: "",
  };

  (userobj.sual = sual.value);
  (userobj.a = a.value);
  (userobj.b = b.value);
  (userobj.c = c.value);
  (userobj.d = d.value);
  (userobj.duzguncavab=duzcavab.value)
  array.push(userobj);

  localStorage.setItem("sual", JSON.stringify(array));
});

conn.addEventListener("click", function () {
  console.log(JSON.parse(localStorage.getItem("sual")));
});

neticebtn.addEventListener("click", function () {
JSON.parse (localStorage.getItem("sual")).forEach((cvb) => {
spn.innerHTML=`<p>${cvb.sual}</p>
<p>${cvb.a}</p>
<p>${cvb.b}</p>
<p>${cvb.c}</p>
<p>${cvb.d}</p>
<p>${cvb.duzguncavab}</p>
` 
box.append(spn); 

});   
 
});