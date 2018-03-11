﻿(function() {
    var designWidth = document.getElementsByTagName('head')[0].getAttribute('design-width');

    function auto_size() {
        var deviceWidth = document.documentElement.clientWidth;
        // console.log(deviceWidth + '   ' + designWidth);
        if (deviceWidth > designWidth)
            deviceWidth = designWidth;
        document.documentElement.style.fontSize = deviceWidth / (designWidth / 100) + 'px';
    }

    auto_size()
    window.addEventListener('resize', auto_size, false);

    var media = document.createElement('style')
    media.innerHTML = "@media(min-width:" + designWidth + "px){.wap-module{margin: 0 auto;width: " + designWidth + "px;}.pc{left: 50%!important;right: initial!important;-webkit-transform: translate(-50%, 0);-ms-transform: translate(-50%, 0);-o-transform: translate(-50%, 0);transform: translate(-50%, 0);width: " + designWidth + "px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}}";
    document.getElementsByTagName('head')[0].appendChild(media);
}());
