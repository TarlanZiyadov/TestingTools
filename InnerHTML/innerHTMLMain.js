let render = (template, selector)=> {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};

// text
let mainPageTittle = "Welcome to-Software for testing-Web page!";
let frontPaText="This website has been developed to provide the opportunity to try new testing tools. The idea with this site is to share new developed "+
"test tools that are currently lacking and also include tips on the existing tools that may be useful for testers. "+
"Please note that the site is not commercial and is maintained for long periods as a side project.";
let frontPageTipsText="Do you have any tips on good testing tools or maybe you have developed one and want to share it? Then feel free to contact me.";
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

// render
render(mainPageTittle, '#documentTxt');
render(frontPaText,'#frontPagetxt');
render(frontPageTipsText,'#frontPagetxtForTips');
render(hoverTxt,'#frontPageHoverText');
render(descrpHelper, '#descriptionHelper');
render(descrpSeleniumByGUI, '#descriptionSeleniumByGUI');
render(descrpFastCapture, '#descriptionFastCapture');
render(descrpAbout, '#descriptionAbout');
render(descrpHelp, '#descriptionHelp');