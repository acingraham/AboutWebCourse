(function() {
    function addStyleSheet() {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        return style.sheet;
    }

    function addCSSRule(sheet, selector, rules, index) {
        try {
            if ('insertRule' in sheet) {
                sheet.insertRule(selector + '{' + rules + '}', index);
            } else if ('addRule' in sheet) {
                sheet.addRule(selector, rules, index);
            }
        } catch(e) {

        }
    }

    var sheet = addStyleSheet();


    addCSSRule(sheet, '@-webkit-keyframes logo-drop', '0%   { bottom: 100px; } 100% { bottom: -10px; }');
    addCSSRule(sheet, '@-moz-keyframes logo-drop', '0%   { bottom: 100px; } 100% { bottom: -10px; }');
    addCSSRule(sheet, '@-o-keyframes logo-drop', '0%   { bottom: 100px; } 100% { bottom: -10px; }');
    addCSSRule(sheet, '@keyframes logo-drop', '0%   { bottom: 100px; } 100% { bottom: -10px; }');

    addCSSRule(sheet, '@-webkit-keyframes logo-rise', '0%   { bottom: -120px; } 100% { bottom: -10px; }');
    addCSSRule(sheet, '@-moz-keyframes logo-rise', '0%   { bottom: -120px; } 100% { bottom: -10px; }');
    addCSSRule(sheet, '@-o-keyframes logo-rise', '0%   { bottom: -120px; } 100% { bottom: -10px; }');
    addCSSRule(sheet, '@keyframes logo-rise', '0%   { bottom: -120px; } 100% { bottom: -10px; }');

    addCSSRule(sheet, '@-webkit-keyframes swipe-right', '0%   { width: 0px; } 100% { width: 100%; }');
    addCSSRule(sheet, '@-moz-keyframes swipe-right', '0%   { width: 0px; } 100% { width: 100%; }');
    addCSSRule(sheet, '@-o-keyframes swipe-right', '0%   { width: 0px; } 100% { width: 100%; }');
    addCSSRule(sheet, '@keyframes swipe-right', '0%   { width: 0px; } 100% { width: 100%; }');

    addCSSRule(sheet, '@-webkit-keyframes darken', '0%   { opacity: 0; } 100% { opacity: 0.8; }');
    addCSSRule(sheet, '@-moz-keyframes darken', '0%   { opacity: 0; } 100% { opacity: 0.8; }');
    addCSSRule(sheet, '@-o-keyframes darken', '0%   { opacity: 0; } 100% { opacity: 0.8; }');
    addCSSRule(sheet, '@keyframes darken', '0%   { opacity: 0; } 100% { opacity: 0.8; }');

    addCSSRule(sheet, '.abt-wrapper', 'width: 100%; height: 100%; position: fixed; top: 0; z-index: 10000; background-color: black; opacity: 0; -webkit-animation: darken 1s forwards; -moz-animation: darken 1s forwards; -o-animation: darken 1s forwards; animation: darken 1s forwards;');
    addCSSRule(sheet, '.abt-logo', 'z-index: 10001; overflow: hidden; position: fixed; top: 40%; text-align: center; font-family: Georgia, serif; font-size: 30px; width: 0px; height: 120px; background-color: #e50000; -webkit-animation: swipe-right 1s 1s forwards; -moz-animation: swipe-right 1s 1s forwards; -o-animation: swipe-right 1s 1s forwards; animation: swipe-right 1s 1s forwards;');
    addCSSRule(sheet, '.abt-circle', 'background-color: white; border-radius: 50px; bottom: 100px; color: #e50000; display: inline-block; height: 100px; line-height: 100px; position: relative; width: 100px; -webkit-animation: logo-drop 1s 2s forwards; -moz-animation: logo-drop 1s 2s forwards; -o-animation: logo-drop 1s 2s forwards; animation: logo-drop 1s 2s forwards;');
    addCSSRule(sheet, '.abt-com', 'bottom: -120px; color: white; display: inline-block; height: 100px; line-height: 100px; position: relative; -webkit-animation: logo-rise 1s 2.35s forwards; -moz-animation: logo-rise 1s 2.35s forwards; -o-animation: logo-rise 1s 2.35s forwards; animation: logo-rise 1s 2.35s forwards;');

    document.body.innerHTML += '<div class="abt-wrapper"></div><a href="http://www.about.com"><div class="abt-logo"><div class="abt-circle">about</div><div class="abt-com">.com</div></div></a>';
})();
