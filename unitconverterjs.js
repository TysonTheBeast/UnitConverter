/*jslint browser */
var unit1 = document.getElementById("unit1");
var unit2 = document.getElementById("unit2");
var unit3 = document.getElementById("unit3");
var lengthmain = document.getElementById("lengthmain");
var weightmain = document.getElementById("weightmain");
var pressuremain = document.getElementById("pressuremain");
//screen sizes
var resunit = document.getElementById("resunit");
var resunit2 = document.getElementById("resunit2");
var resunit3 = document.getElementById("resunit3");
var x = window.matchMedia("(min-width: 0px) and (max-width: 399px)");
//bools
var b1 = false;
var b2 = false;
var b3 = false;
//listeners
unit1.addEventListener("click", myFunction);
unit2.addEventListener("click", myFunction2);
unit3.addEventListener("click", myFunction3);
function myFunction()
{
    b1 = true;
    b2 = false;
    b3 = false;
    unit1.classList.add("unitchange");
    unit2.classList.remove("unitchange");
    unit3.classList.remove("unitchange");
    if(x.matches)
    {
        lengthmain.style.display = "flex";
        lengthmain.style.flexDirection = "column";
        weightmain.style.display = "none";
        pressuremain.style.display = "none";
        resunit.size = "1";
    }
    else
    {
        lengthmain.style.display = "flex";
        lengthmain.style.flexDirection = "row";
        weightmain.style.display = "none";
        pressuremain.style.display = "none";
    }
}
function myFunction2()
{
    b1 = false;
    b2 = true;
    b3 = false;
    unit1.classList.remove("unitchange");
    unit2.classList.add("unitchange");
    unit3.classList.remove("unitchange");
    if(x.matches)
    {
        lengthmain.style.display = "none";
        weightmain.style.display = "flex";
        weightmain.style.flexDirection = "column";
        pressuremain.style.display = "none";
        resunit2.size = "1";
    }
    else
    {
        lengthmain.style.display = "none";
        weightmain.style.display = "flex";
        weightmain.style.flexDirection = "row";
        pressuremain.style.display = "none";
    }
}
function myFunction3()
{
    b1 = false;
    b2 = false;
    b3 = true;
    unit1.classList.remove("unitchange");
    unit2.classList.remove("unitchange");
    unit3.classList.add("unitchange");
    if(x.matches)
    {
        lengthmain.style.display = "none";
        weightmain.style.display = "none";
        pressuremain.style.display = "flex";
        pressuremain.style.flexDirection = "column";
        resunit3.size = "1";
    }
    else
    {
        lengthmain.style.display = "none";
        weightmain.style.display = "none";
        pressuremain.style.display = "flex";
        pressuremain.style.flexDirection = "row";
    }
}
//button changes
//for length
var col1 = document.getElementById("col1");
var col2 = document.getElementById("col2");
var col3 = document.getElementById("col3");
//for weight
var col4 = document.getElementById("col4");
var col5 = document.getElementById("col5");
var col6 = document.getElementById("col6");
//for pressure
var col7 = document.getElementById("col7");
var col8 = document.getElementById("col8");
var col9 = document.getElementById("col9");
//for length
function mocol()
{
    col1.style.border = "2px solid rgb(16, 93, 236)";
    col1.style.borderBottom = "0px";
    //col1.style.borderBottom = "1px solid grey";
    col1.style.backgroundColor = "grey";
    col1.style.cursor = "pointer";
    col2.style.border = "2px solid rgb(16, 93, 236)";
    col2.style.borderTop = "0px";
    //col1.style.borderTop = "1px solid grey";
    col2.style.backgroundColor = "grey";
    col2.style.cursor = "pointer";
    col3.style.cursor = "pointer";
}
function moutcol()
{
    col1.style.border = "1px solid grey";
    col1.style.borderBottom = "0px";
    //col1.style.borderBottom = "1px solid lightgrey";
    col1.style.backgroundColor = "lightgrey";
    col2.style.border = "1px solid grey";
    col2.style.borderTop = "0px";
    //col2.style.borderTop = "1px solid lightgrey";
    col2.style.backgroundColor = "lightgrey";
}
//for weight
function mocol2()
{
    col4.style.border = "2px solid rgb(16, 93, 236)";
    col4.style.borderBottom = "0px";
    col4.style.backgroundColor = "grey";
    col4.style.cursor = "pointer";
    col6.style.border = "2px solid rgb(16, 93, 236)";
    col6.style.borderTop = "0px";
    col6.style.backgroundColor = "grey";
    col6.style.cursor = "pointer";
    col5.style.cursor = "pointer";
}
function moutcol2()
{
    col4.style.border = "1px solid grey";
    col4.style.borderBottom = "0px";
    col4.style.backgroundColor = "lightgrey";
    col6.style.border = "1px solid grey";
    col6.style.borderTop = "0px";
    col6.style.backgroundColor = "lightgrey";
}
//for pressure
function mocol3()
{
    col7.style.border = "2px solid rgb(16, 93, 236)";
    col7.style.borderBottom = "0px";
    col7.style.backgroundColor = "grey";
    col7.style.cursor = "pointer";
    col9.style.border = "2px solid rgb(16, 93, 236)";
    col9.style.borderTop = "0px";
    col9.style.backgroundColor = "grey";
    col9.style.cursor = "pointer";
    col8.style.cursor = "pointer";
}
function moutcol3()
{
    col7.style.border = "1px solid grey";
    col7.style.borderBottom = "0px";
    col7.style.backgroundColor = "lightgrey";
    col9.style.border = "1px solid grey";
    col9.style.borderTop = "0px";
    col9.style.backgroundColor = "lightgrey";
}
/*------------------------------------------------*/
//results for length
var inp = document.getElementById("lenunit");
var reskm = document.getElementById("reskm");
var resm = document.getElementById("resm");
var rescm = document.getElementById("rescm");
var resmm = document.getElementById("resmm");
//results for weight
var inp2 = document.getElementById("lenunit2");
var reskg = document.getElementById("reskg");
var resg = document.getElementById("resg");
var resmg = document.getElementById("resmg");
var resT = document.getElementById("resT");
var resma = document.getElementById("resma");
//results for pressure
var inp3 = document.getElementById("lenunit3");
var respa = document.getElementById("respa");
var reskpa = document.getElementById("reskpa");
var resbar = document.getElementById("resbar");
//function for length
col1.addEventListener("touchstart", pasteInp);
col2.addEventListener("touchstart", pasteInp);
col3.addEventListener("touchstart", pasteInp);
col4.addEventListener("touchstart", pasteInp2);
col5.addEventListener("touchstart", pasteInp2);
col6.addEventListener("touchstart", pasteInp2);
col7.addEventListener("touchstart", pasteInp3);
col8.addEventListener("touchstart", pasteInp3);
col9.addEventListener("touchstart", pasteInp3);
col1.addEventListener("click", pasteInp);
col2.addEventListener("click", pasteInp);
col3.addEventListener("click", pasteInp);
//functions on click
function pasteInp()
{
    var a = inp.value;
    var b = resunit.options[resunit.selectedIndex].value;
    if(a > 999999999999 || a < 1)
    {
        inp.value = "";
    }
    else if(b == "km")
    {
        reskm.innerHTML = a + " " + "km";
        resm.innerHTML = a*1000 + " " + "m";
        rescm.innerHTML = a*100000 + " " + "cm";
        resmm.innerHTML = a*1000000 + " " + "mm";
    }
    else if(b == "m")
    {
        reskm.innerHTML = a/1000 + " " + "km";
        resm.innerHTML = a + " " + "m";
        rescm.innerHTML = a*100 + " " + "cm";
        resmm.innerHTML = a*1000 + " " + "mm";
    }
    else if(b == "cm")
    {
        reskm.innerHTML = a/100000 + " " + "km";
        resm.innerHTML = a/100 + " " + "m";
        rescm.innerHTML = a + " " + "cm";
        resmm.innerHTML = a*10 + " " + "mm";
    }
    else if(b == "mm")
    {
        reskm.innerHTML = a/1000000 + " " + "km";
        resm.innerHTML = a/1000 + " " + "m";
        rescm.innerHTML = a/10 + " " + "cm";
        resmm.innerHTML = a + " " + "mm";
    }
}
//function for weight-------------------------------------
col4.addEventListener("click", pasteInp2);
col5.addEventListener("click", pasteInp2);
col6.addEventListener("click", pasteInp2);
function pasteInp2()
{
    var c = inp2.value;
    var d = resunit2.options[resunit2.selectedIndex].value;
    if(c > 999999999999 || c < 1)
    {
        inp2.value = "";
    }
    else if(d == "kg")
    {
        var num = "26";
        reskg.innerHTML = c + " " + "kg";
        resg.innerHTML = c*1000 + " " + "g";
        resmg.innerHTML = c*1000000 + " " + "mg";
        resT.innerHTML = c/1000 + " " + "T";
        resma.innerHTML = c*6.02 + " " + "×" + "10" + num.sup() + " " + "ma";
    }
    else if(d == "g")
    {
        var num2 = "23";
        reskg.innerHTML = c/1000 + " " + "kg";
        resg.innerHTML = c + " " + "g";
        resmg.innerHTML = c*1000 + " " + "mg";
        resT.innerHTML = c/1000000 + " " + "T";
        resma.innerHTML = c*6.02 + " " + "×" + "10" + num2.sup() + " " + "ma";
    }
    else if(d == "mg")
    {
        var num3 = "20";
        reskg.innerHTML = c/1000000 + " " + "kg";
        resg.innerHTML = c/1000 + " " + "g";
        resmg.innerHTML = c + " " + "mg";
        resT.innerHTML = c/1000000000 + " " + "T";
        resma.innerHTML = c*6.02 + " " + "×" + "10" + num3.sup() + " " + "ma";
    }
    else if(d == "T")
    {
        var num4 = "29";
        reskg.innerHTML = c*1000 + " " + "kg";
        resg.innerHTML = c*1000000 + " " + "g";
        resmg.innerHTML = c*1000000000 + " " + "mg";
        resT.innerHTML = c + " " + "T";
        resma.innerHTML = c*6.02 + " " + "×" + "10" + num4.sup() + " " + "ma";
    }
    else if(d == "ma")
    {
        var num5 = "-27";
        var num6 = "-24";
        var num7 = "-21";
        var num8 = "-30";
        reskg.innerHTML = c*1.66 + " " + "×" + "10" + num5.sup() + " " + "kg";
        resg.innerHTML = c*1.66 + " " + "×" + "10" + num6.sup() + " " + "g";
        resmg.innerHTML = c*1.66 + " " + "×" + "10" + num7.sup() + " " + "mg";
        resT.innerHTML = c*1.66 + " " + "×" + "10" + num8.sup() + " " + "T";
        resma.innerHTML = c + " " + "ma";
    }
}
//function for pressure----------------------------------------
col7.addEventListener("click", pasteInp3);
col8.addEventListener("click", pasteInp3);
col9.addEventListener("click", pasteInp3);
function pasteInp3()
{
    var e = inp3.value;
    var f = resunit3.options[resunit3.selectedIndex].value;
    if(e > 999999999999 || e < 1)
    {
        inp3.value = "";
    }
    else if(f == "pa")
    {
        var num9 = "-5";
        respa.innerHTML = e + " " + "Pa";
        reskpa.innerHTML = e/1000 + " " + "kPa";
        resbar.innerHTML = e*1 + "×" + "10" + num9.sup() + " " + "bar";
    }
    else if(f == "kpa")
    {
        respa.innerHTML = e*1000 + " " + "Pa";
        reskpa.innerHTML = e + " " + "kPa";
        resbar.innerHTML = e/100 + " " + "bar";
    }
    else if(f == "b")
    {
        respa.innerHTML = e*100000 + " " + "Pa";
        reskpa.innerHTML = e*100 + " " + "kPa";
        resbar.innerHTML = e + " " + "bar";
    }
}