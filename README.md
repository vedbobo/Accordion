# Accordionjs
**手风琴幻灯**
需要引入jq
#### HTML 代码 HTML codes
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="Accordionjs.css">
    <title>手风琴幻灯</title>
</head>
<body>
<div class="banner" >
    <div class="mbanner">
    
    </div>
</div>
<script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="Accordionjs.js"></script>
<script>
        $(".mbanner").Accordion({
            mod: "mouse",
            dtime: 1000,
            auto: false,
            img:[
                {url:'images/1.jpg',title:'大海',href:'http://www.baidu.com'},
                {url:'images/2.jpg',title:'冰山',href:'http://www.qq.com'},
                {url:'images/3.jpg',title:'秋叶'}]
        })
</script>
</body>
</html>
```

#### 使用：
``` js
$(".mbanner").Accordion({//banner幻灯
            mod: "mouse",//mouse鼠标移上去模式，click点击切换模式
            dtime: 1000,//延迟
            auto: false,//自动切换
            img:[//自定义图片信息,url图片地址,title标题,href跳转地址
                {url:'images/1.jpg',title:'大海',href:'http://www.baidu.com'},
                {url:'images/2.jpg',title:'冰山',href:'http://www.qq.com'},
                {url:'images/3.jpg',title:'秋叶'}]//无地址，不需跳转
        })
```

