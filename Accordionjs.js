// 2018年2月27日 09:57:47
(function (jQuery) {
    jQuery.fn.extend({
        Accordion: function (option) {
            var setting = {
                distance: 100,
                auto: false,
                dtime: 2000,
                mod: "click",
                img:[{url:'images/1.jpg',title:'标题',href:'https://github.com/vedbobo/Accordionjs'},
                {url:'images/2.jpg',title:'标题',href:'https://github.com/vedbobo/Accordionjs'},]
            };
            jQuery.extend(setting, option);
            var that = jQuery(this);
            var imgLen = setting.img.length;
            for(var i=0;i<imgLen;i++){
                var ac = i==imgLen-1?1:0
                that.append(
                    '<div data-ac='+ac+'>'+
                        (setting.img[i].href?('<a href="'+setting.img[i].href+'" target="_blank">'):('<a href="javascript:void(0);">'))+
                            '<img class="banner1" src="'+setting.img[i].url+'"/>'+
                        '</a>'+
                        '<span>'+setting.img[i].title+'</span>'+
                    '</div>'
                )
            }
            var l = that.children().length;
            var d = (l - 1) * setting.distance;
            var timeloop, i = 0;
            var int = function () {
                that.children().css("width", "calc(100% - " + d + "px)");
                jQuery.map(that.children(), function (o, i) {
                    jQuery(o).css("left", setting.distance * i + "px");
                })
            };
            int();
            if (setting.mod == "click") {
                that.children().on("click", function () {
                    setcss(jQuery(this));
                })
            }
            if (setting.mod == "mouse") {
                that.children().on("mouseover", function () {
                    clearInterval(timeloop);
                    setcss(jQuery(this));
                });
                that.children().on("mouseleave", function () {
                    if (setting.auto) time();
                })
            }
            if (setting.auto) {
                time();
            }
            function time() {
                timeloop = setInterval(function () {
                    i = that.children("div[data-ac=1]").index() + 1;
                    i = i < l ? i + 1 : 1;
                    var dom = that.children("div:nth-child(" + (i) + ")");
                    that.children("div").attr("data-ac", 0);
                    dom.attr("data-ac", 1);
                    setcss(dom);
                }, setting.dtime)
            }
            function setcss(ob) {
                var i = ob.index();
                var index = i + 1;
                var childrenWidth = ob.width();
                ob.css("left", (i * setting.distance) + "px");
                ob.children("span").css("transform", "translateX(0px) translateY(0px) rotate(0deg)");
                that.children().removeClass("op");
                ob.addClass("op");
                that.children("div").attr("data-ac", 0);
                ob.attr("data-ac", 1);
                for (var n = index; n < l; n++) {//后面div样式
                    that.children("div:nth-child(" + n + ")").next().css("left", (childrenWidth + setting.distance * (n - 1)) + "px");
                    that.children("div:nth-child(" + n + ")").next().children("span").css("transform", "translateX(10px) translateY(10px) rotate(-90deg)");
                }
                for (var m = i; m > 0; m--) {//前面div样式
                    that.children("div:nth-child(" + m + ")").css("left", (setting.distance * (m - 1)) + "px");
                    that.children("div:nth-child(" + m + ")").children("span").css("transform", "translateX(10px) translateY(10px) rotate(-90deg)");
                }
            }
        }
    })
})(jQuery);