)<!doctype html>
<html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="style.css">
      <!-- MDUI CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css" integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw" crossorigin="anonymous"/>
      <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
      <script src="../script/vue.js"></script>
    </head>
    <body style="margin-top: 78px;">
  
  
 <form onsubmit="return Load(this)">
  <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide">
    <div class="mdui-toolbar mdui-color-indigo">
      <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
      <a href="javascript:;" class="mdui-typo-headline">App Tools</a>
      <div class="mdui-toolbar-spacer"></div>
      <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a></div>
  </div>
  <div class="mdui-container-fluid mdui-typo">
 <div id="load">
  <div class="mdui-typo-display-2">工具</div>
  <div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">标题</label>
  <input class="mdui-textfield-input" type="text" name="title"/>
</div>

  <div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">时间</label>
  <input class="mdui-textfield-input" type="text"/>
 </div> 
  <div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">封面链接</label>
  <input class="mdui-textfield-input" type="url"/>
</div>  
  <div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">分割线</label>
  <input class="mdui-textfield-input" type="text"/>
</div>

<div class="mdui-textfield">
  <textarea class="mdui-textfield-input" rows="4" placeholder="body"></textarea>
</div>
<div class="mdui-row-xs-2">
  <div class="mdui-col">
    <button class="mdui-btn mdui-btn-block mdui-color-indigo mdui-ripple" onclick="javascript:Load();">提交</button>
  </div>
  </div>
  
  
</div>  
  
  </form>
  
    

<script
  src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"
  integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A"
  crossorigin="anonymous"
></script>
<script>
function Click(){
    mdui.snackbar({
  message: '该页面暂未开发完毕，预计${YEARS}年后上线。'
});
}


function Load(form)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("load").innerHTML=xmlhttp.responseText;
        }
    }
    let formData = new FormData(form);
    let title = formData.get('title');
    xmlhttp.open("POST","creat_json.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("?title=$title");
}


</script>
    </body>
</html>)