let timer1 = null;
let timer2 = null;
let timer3 = null;
let timerb1 = null;
let timerb2 = null;
let texttimer1=null;
let texttimer2=null;

function BlueRotate(radius, unit_degree) {
    let blue = document.getElementById("blue");
    //x,y表示大圆心坐标
    let ox = 25;
    let oy = 25;
    //起始角度
    let degree = 0;
    clearInterval(timer1);
    timer1 = setInterval(function () {
        //每个50ms +1个角度
        degree += unit_degree;
        //计算弧度
        let rad = Math.PI / 180 * degree;
        //计算大圆上每一个A的x,y
        let x = Math.sin(rad) * radius;
        let y = Math.cos(rad) * radius;
        //
        blue.style.left = ox + x - 10 + "px";
        blue.style.top = oy + y - 10 + "px";
    }, 30);
}


function BlueRotate2(radius, unit_degree) {
    let blue = document.getElementById("blue2");
    //x,y表示大圆心坐标
    let ox = 25;
    let oy = 25;
    //起始角度
    let degree = 0;
    clearInterval(timer2);
    timer2 = setInterval(function () {
        //每个50ms +1个角度
        degree += unit_degree;
        //计算弧度
        let rad = Math.PI / 180 * degree;
        //计算大圆上每一个A的x,y
        let x = Math.sin(rad) * radius;
        let y = Math.cos(rad) * radius;
        //
        blue.style.left = ox + x - 10 + "px";
        blue.style.top = oy + y - 10 + "px";
    }, 30);
}

function BlueRotate3(radius, unit_degree) {
    let blue = document.getElementById("blue3");
    //x,y表示大圆心坐标
    let ox = 25;
    let oy = 25;
    //起始角度
    let degree = 180;
    clearInterval(timer3);
    timer3 = setInterval(function () {
        //每个50ms +1个角度
        degree += unit_degree;
        //计算弧度
        let rad = Math.PI / 180 * degree;
        //计算大圆上每一个A的x,y
        let x = Math.sin(rad) * radius;
        let y = Math.cos(rad) * radius;
        //
        blue.style.left = ox + x - 10 + "px";
        blue.style.top = oy + y - 10 + "px";
    }, 30);
}

function GreySet(radius, number) {
    let gray;
    if (number === 1) {
        gray = document.getElementById("gray");
    } else if (number === 2) {
        gray = document.getElementById("gray2");
    } else if (number === 3) {
        gray = document.getElementById("graycircle1");
    } else {
        gray = document.getElementById("graycircle2");
    }
    gray.style.left = -2 - (radius - 25) + "px";
    gray.style.top = -2 - (radius - 25) + "px";
    gray.style.width = 2 * radius + "px";
    gray.style.height = 2 * radius + "px";

}

function BluePoint1(value) {
    let point = document.getElementById("blue_point1");
    point.style.left = -6 + 50 * value + "px";
    let velo = 1 / (Math.sqrt(value));
    point.style.top = 295 - velo * 50 + "px";
}

function BluePoint2(value) {
    let point = document.getElementById("blue_point2");
    point.style.left = -8 + value * 400 / 16 + "px";
    let velo = Math.sqrt(value);
    point.style.top = 198 - velo * 50 + "px";
}

function setblue() {
    let point = document.getElementById("blue3");
    point.style.left = "15px";
    point.style.top = "115px";
}

function ellipsemove() {
    let point = document.getElementById("blue3");
    let ox = 25;
    let oy = -25;
    let x = -150;
    clearInterval(timer3);
    timer3 = setInterval(function () {
        if (x >= 150) {
            clearInterval(timer3);
        }

        let y = Math.sqrt(20000 - (20000 * x * x) / (150 ** 2));
        //
        point.style.left = ox + y - 10 + "px";
        point.style.top = oy - x - 10 + "px";
        if (x > -70 && x < 70) {
            x += 4;
        } else if (x > -120 && x < 120) {
            x += 3;

        } else if (x > -140 && x < 140) {
            x += 2;
        } else {
            x += 1;
        }
    }, 50);
}

function reset() {
    clearInterval(timer3);
    clearInterval(timerb2);
    clearInterval(timerb1);
    circle1 = document.getElementById("graycircle1");
    circle2 = document.getElementById("graycircle2");
    ellipse0 = document.getElementById("myCanvas");
    circle1.style.opacity="0.5";
    ellipse0.style.display = "none";
    ellipse0.style.opacity="0.7";
    circle2.style.display = "none";
    document.getElementById("arrow1").style.display="block";
    document.getElementById("arrow2").style.display="none";
    clearInterval(texttimer1);
    clearInterval(texttimer2);
    document.getElementById("v3text1").style.opacity="0";
    document.getElementById("v3text2").style.opacity="0";

    document.getElementById("button2").style.border="2px solid black";
    button1 = document.getElementById("button1");
    timerb1 = setInterval(function () {
        if (button1.style.border === "2px solid yellow") {
            button1.style.border = "2px solid black";
        } else button1.style.border = "2px solid yellow";
    }, 500);


    GreySet(100, 3);
    GreySet(200, 4);
    setblue();
}

function drawellipse() {
    let canvas = document.getElementById("myCanvas");
    canvas.height = 450;
    canvas.width = 450;
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.ellipse(225, 175, 141, 150, 0, 0, 2 * Math.PI);
    ctx.setLineDash([5, 10]);
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function emerge(id){
    let obj=document.getElementById(id);
    obj.style.opacity="0";
    let i=0;
    clearInterval(texttimer1);
    texttimer1=setInterval(function () {
        if (i===1)clearInterval(texttimer1);
        obj.style.opacity=""+i;
        i+=0.1;
    },100)
}

function emerge2(id){
    let obj=document.getElementById(id);
    //obj.style.display="block";
    obj.style.opacity="0";
    let i=0;
    clearInterval(texttimer2);
    texttimer2=setInterval(function () {
        if (i===1)clearInterval(texttimer2);
        obj.style.opacity=""+i;
        i+=0.1;
    },100)
}
function drawruler(){
    let canvas = document.getElementById("ruler");
    canvas.height = 450;
    canvas.width = 50;
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = "black";
    ctx.moveTo(25,25);
    ctx.lineTo(25,425);
    ctx.stroke();
    ctx.moveTo(25,25);
    ctx.lineTo(50,25);
    ctx.stroke();
    ctx.moveTo(25,125);
    ctx.lineTo(50,125);
    ctx.stroke();
    ctx.moveTo(25,225);
    ctx.lineTo(50,225);
    ctx.stroke();
    ctx.moveTo(25,325);
    ctx.lineTo(50,325);
    ctx.stroke();
    ctx.moveTo(25,425);
    ctx.lineTo(50,425);
    ctx.stroke();
}

window.onload = function () {
    GreySet(150, 1);
    BlueRotate(150, 1);
    BluePoint1(3);

    let slider_element = document.getElementById("myRange");
    slider_element.oninput = function () {
        let radius = slider_element.value * 50;
        GreySet(radius, 1);
        let unit_degree = Math.sqrt(27 / (slider_element.value ** 3));
        //alert(unit_degree);
        BlueRotate(radius, unit_degree);
        BluePoint1(slider_element.value, 1);
        document.getElementById("radius1").innerHTML = "" + slider_element.value;
        document.getElementById("velo1").innerHTML = "" + (1 / (Math.sqrt(slider_element.value))).toFixed(2);
    };

    GreySet(50, 2);
    temp2_degree = Math.sqrt(27);
    BlueRotate2(50, temp2_degree);
    BluePoint2(1);
    let box_element = document.getElementById("selectbox");
    box_element.onchange = function () {
        let mass = document.getElementById("myRange2").value;
        let radius = box_element.value * 50;
        GreySet(radius, 2);
        let unit_degree = Math.sqrt((27 * mass) / (box_element.value ** 3));
        BlueRotate2(radius, unit_degree);
    };
    let slider_element2 = document.getElementById("myRange2");
    slider_element2.oninput = function () {
        let radius = document.getElementById("selectbox").value * 50;
        GreySet(radius, 2);
        let unit_degree = Math.sqrt((27 * slider_element2.value) / (document.getElementById("selectbox").value ** 3));
        BlueRotate2(radius, unit_degree);
        BluePoint2(slider_element2.value);
        document.getElementById("mass").innerHTML = "" + slider_element2.value;
        document.getElementById("velo2").innerHTML = "" + Math.sqrt(slider_element2.value).toFixed(2);
    };


    //visualization3
    drawellipse();
    reset();
    drawruler();

    let button_1 = document.getElementById("button1");
    button_1.onclick = function () {
        ellipsemove();
        document.getElementById("myCanvas").style.display="block";
        document.getElementById("graycircle1").style.opacity="0.1";
        document.getElementById("button1").style.border="2px solid black";
        document.getElementById("arrow1").style.display="none";
        document.getElementById("arrow2").style.display="block";
        emerge("v3text1");
        clearInterval(timerb1);
        button2 = document.getElementById("button2");
        clearInterval(timerb2);
        timerb2 = setInterval(function () {
            if (button2.style.border === "2px solid yellow") {
                button2.style.border = "2px solid black";
            } else button2.style.border = "2px solid yellow";
        }, 500);

    };
    let button_2 = document.getElementById("button2");
    button_2.onclick = function () {
        let unit_degree = Math.sqrt(27 / (4 ** 3));
        BlueRotate3(200, 1);
        document.getElementById("myCanvas").style.display="block";
        document.getElementById("myCanvas").style.opacity="0.2";
        document.getElementById("graycircle1").style.opacity="0.1";
        document.getElementById("graycircle2").style.display="block";
        document.getElementById("arrow2").style.display="none";
        emerge("v3text2");
        clearInterval(timerb2);
        document.getElementById("button2").style.border="2px solid black";
    };
    let button_3 = document.getElementById("button3");
    button_3.onclick = function () {
        reset();
    };


};