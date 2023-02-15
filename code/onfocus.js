// 浏览器搞笑标题  快回来!!! 终于回来了
// Based on: https://static.likepoems.com/cdn/javascript/onfocus.js
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '你别走吖 Σ(っ °Д °;)っ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '你回来啦(/≧▽≦/)';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});