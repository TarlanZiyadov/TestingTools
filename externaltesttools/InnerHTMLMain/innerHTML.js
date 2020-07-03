let render = (template, selector)=> {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};


let mainPageTittle = "Test tools to gain more skills!";
let hoverTxt ="Please hover on the left side of the page or tape on the menu on the left side to see available menus.";
let descrpJmeter ="Apache JMeter may be used to test performance both on static and dynamic resources, Web dynamic applications."+
" It can be used to simulate a heavy load on a server, group of servers,network or object to test its strength or to analyze overall performance under different load types.";
let descrpMemreduct="Lightweight real-time memory management application to monitor and clean system memory on your computer.";
let descrpMemtest=" MemTest is a RAM tester that runs under Windows. It verifies that your computer can reliably store and retrieve data from memory."+
" A correctly functioning computer should be able to do this with 100% accuracy day in and day out."+
" A computer that fails these tests, perhaps because of old hardware, damaged hardware, or poorly configured hardware,will be less stable and crash more often."+
" Even worse, it will become even less stable over time as corrupted data is written to your hard disk.";
let descrpRapidReporter="A note taking application that aids in the reporting process of SBTM – Session Based Test Managements."+
" SBTM is a method for managing exploratory tests, which relies on notes taken during an uninterrupted testing session and a review of these notes afterwards."+
" The notes being the most important part of the whole method, there are many techniques and suggestions on how to carry them on, "+
"and some applications that help you do and review them.This tool wasn’t born, however, from a study of all the steps in SBTM (although it is based on such)."+
" It was born from careful observation of sessions performed by me and other testers, and observation of session reviews.During such observations, we noticed "+
"a few things on the dynamics of note taking and review.";
let underDescrpRapidReporter="The tool iterated during many versions where it was tweaked to fit my friend’s reporting activities."+
" Any module that wasn’t immediately necessary for reporting a testing step was removed, and the others made more straightforward.";
let descrpWireshark="Wireshark is the world’s foremost and widely-used network protocol analyzer. It lets you see what’s happening on your network at a "+
"microscopic level and is the de facto (and often de jure) standard across many commercial and non-profit enterprises, government agencies, "+
"and educational institutions. Wireshark development thrives thanks to the volunteercontributions of networking experts around the globe and is the continuation of a "+
"project started by Gerald Combs in 1998.";
let descrpFiddler="Web debugging proxy tool to log all HTTP(S) traffic between your computer and the Internet. Inspect traffic, set breakpoints, and fiddle with request/response.";
let descrpCypressio="Fast, easy and reliable testing for anything that runs in a browser.";
let descrpSeleniumWebDriver ="WebDriver drives a browser natively, as a user would, either locally or on a remote machine using the Selenium server, marks a leap forward in terms of browser automation."+
" Selenium WebDriver refers to both the language bindings and the implementations of the individual browser controlling code. This is commonly referred to as just WebDriver.";
let descrpXmind="Mind, a full-featured mind mapping and brainstorming tool, designed to generate ideas, inspire creativity, brings productivity in a remote WFH team.";
let descrpTestChallanges="Great web page for gaining tester skills! You can learn and get skills of functional testing. Developed by Claudiu Draghia ©";



render(mainPageTittle, '#documentTxt');
render(hoverTxt,'#frontPageHoverText');
render(descrpJmeter, '#descriptionJmeter');
render(descrpMemreduct, '#descriptionMemreduct');
render(descrpMemtest, '#descriptionMemtest');
render(descrpRapidReporter, '#descriptionRapidReporter');
render(underDescrpRapidReporter, '#underdescriptionRapidReporter');
render(descrpWireshark, '#descriptionWireshark');
render(descrpFiddler, '#descriptionFiddler');
render(descrpCypressio, '#descriptionCypressio');
render(descrpSeleniumWebDriver, '#descriptionSeleniumWebDriver');
render(descrpXmind, '#descriptionXmind');
render(descrpTestChallanges, '#descriptionTestingchallange');