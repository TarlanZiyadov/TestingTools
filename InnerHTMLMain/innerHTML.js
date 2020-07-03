let render = (template, selector)=> {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};


let mainPageTittle = "Welcome to-Software for testing-Web page!";
let hoverTxt ="Please hover on the left side of the page or tape on the menu on the left side to see available menus."
let descrpHelper="Helper++ is a simple text editor with possibility to have "+
"all created files in one place. Yet you have possibility to create several file types."+
" Supported file types: <strong>.txt .json .rtf .doc .html .js .css .cs</strong>. Helper ++ also includes a timer "+
"that allows you to perform session-based testing without losing focus..";
let descrpSeleniumByGUI="SeleniumByGUI is great tool for automation of input fields with huge list of naughty strings."+
" Software runs based on traditional Selenium WebDriver. More information can be found in user manual inside of software.";
let descrpFastCapture="Take fast screenshots while you are in test session. Supports up to 8K resolution capture. No more no less.";
let descrpAbout="I am a technical tester with two years vocational education but as a hobby, I develop testing tools softwares and web applications for test.";
let descrpHelp="Here will be soon help information hold on.......";


render(mainPageTittle, '#documentTxt');
render(hoverTxt,'#frontPageHoverText');
render(descrpHelper, '#descriptionHelper');
render(descrpSeleniumByGUI, '#descriptionSeleniumByGUI');
render(descrpFastCapture, '#descriptionFastCapture');
render(descrpAbout, '#descriptionAbout');
render(descrpHelp, '#descriptionHelp');