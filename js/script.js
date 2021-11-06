var q=0;
let number=5;
console.log(number);

function press() {
    //alert("ddd")
    const el=document.getElementById("label1");
    el.classList.add('red');
    el.innerHTML="qqw";
    q++;
   
    document.getElementById("labelsum").innerHTML=q;
    // document.write('<p>Привет мир!</p>');
 
}