// Here we render text into paragraphs
let render = (template, selector)=> {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};
 
// Here we render text to the lists
let renderList = (selector)=> {
	var list = document.querySelector(selector);
	if (!list) return;
    list.innerHTML = template();
    data.listItems.length=0;
};

let data = {
	listItems: []
};


let template = ()=> {

return  data.listItems.map(function (item) {
    return '<li>' + item + '</li>';
}).join('');

};



// MAIN PAGE TEXT   
let mainPageTittle = "Test tools to gain more skills!";
let hoverTxt ="Please hover on the left side of the page or tape on the menu on the left side to see available menus.";
// render
render(mainPageTittle, '#documentTxt');
render(hoverTxt,'#frontPageHoverText');


// JMETER CARD
let descrpJmeter ="Apache JMeter may be used to test performance both on static and dynamic resources, Web dynamic applications."+
" It can be used to simulate a heavy load on a server, group of servers,network or object to test its strength or to analyze overall performance under different load types.";
let jmeterFeature="Apache JMeter features include:";
let jmeterAbility="Ability to load and performance test many different applications/server/protocol types:";
// list
let jmeterListText1="Web - HTTP, HTTPS (Java, NodeJS, PHP, ASP.NET, …)";
let jmeterListText2="SOAP / REST Webservices";
let jmeterListText3="FTP";
let jmeterListText4="Database via JDBC";
let jmeterListText5="LDAP";
let jmeterListText6="Message-oriented middleware (MOM) via JMS";
let jmeterListText7="Mail - SMTP(S), POP3(S) and IMAP(S)";
let jmeterListText8="Native commands or shell scripts";
let jmeterListText9="TCP";
let jmeterListText10="Java Objects";
let jmeterListText11="More in the official webpage......";
// render
render(descrpJmeter, '#descriptionJmeter');
render(jmeterFeature, '#jmeterFeature');
render(jmeterAbility, '#jmeterAbility');
data.listItems.push(jmeterListText1,jmeterListText2,jmeterListText3,jmeterListText4,jmeterListText5,jmeterListText6,jmeterListText7,jmeterListText8,jmeterListText9,jmeterListText10,jmeterListText11);
renderList('#featureListJmeter');


// MEMREDUCT CARD
let descrpMemreduct="Lightweight real-time memory management application to monitor and clean system memory on your computer.";
// list
let memreductListText1="The program used undocumented internal system features (Native API) to clear system cache (system working set, working set, standby page lists, modified page lists) with variable result ~10-50%.";
let memreductListText2="Application it is compatible with Windows XP SP3 and higher operating systems, but some general features available only since Windows Vista.";
let memreductListText3="You can download either the installer or portable version. For correct working, need administrator rights.";
let memreductListText4="More in the official webpage......";
// render
render(descrpMemreduct, '#descriptionMemreduct');
data.listItems.push(memreductListText1,memreductListText2,memreductListText3,memreductListText4);
renderList('#featureListMemreduct');


// MEMTEST CARD
let descrpMemtest=" MemTest is a RAM tester that runs under Windows. It verifies that your computer can reliably store and retrieve data from memory."+
" A correctly functioning computer should be able to do this with 100% accuracy day in and day out."+
" A computer that fails these tests, perhaps because of old hardware, damaged hardware, or poorly configured hardware,will be less stable and crash more often."+
" Even worse, it will become even less stable over time as corrupted data is written to your hard disk.";
// list
let memtestListText1="By running MemTest you can ensure that your computer's RAM correctly functions. It is wise to test this when you buy a new computer, "+
"install new RAM, or change the configuration of your machine (for instance, to overclock it).";
let memtestListText2="Are you the sort of user who likes to push the performance of your "+
"machine to the edge? Relying upon whether your machine will boot after your new BIOS tweaks is a poor way to determine the safety of your new settings.";
let memtestListText3="Use Mem Test as a true test of stability.";
let memtestListText4="More in the official webpage......";
// render
render(descrpMemtest, '#descriptionMemtest');
data.listItems.push(memtestListText1,memtestListText2,memtestListText3,memtestListText4);
renderList('#featureListMemtest');


// RAPID REPORTER CARD
let descrpRapidReporter="A note taking application that aids in the reporting process of SBTM – Session Based Test Managements."+
" SBTM is a method for managing exploratory tests, which relies on notes taken during an uninterrupted testing session and a review of these notes afterwards."+
" The notes being the most important part of the whole method, there are many techniques and suggestions on how to carry them on, "+
"and some applications that help you do and review them.This tool wasn’t born, however, from a study of all the steps in SBTM (although it is based on such)."+
" It was born from careful observation of sessions performed by me and other testers, and observation of session reviews.During such observations, we noticed "+
"a few things on the dynamics of note taking and review.";
let underDescrpRapidReporter="The tool iterated during many versions where it was tweaked to fit my friend’s reporting activities."+
" Any module that wasn’t immediately necessary for reporting a testing step was removed, and the others made more straightforward.";
let rapidReporterAbility="The result has the following benefits:";
// list
let rapidReporterListText1="Notes should be easy and quick to take, or there will be fewer/poorer notes";
let rapidReporterListText2="Dealing with the structure of the session report *during* the tests session deviates attention, slows the cognitive process and makes it boring";
let rapidReporterListText3="If the session reports aren’t computerized, doing a final report is a nightmare (we had tried hand-written notes for a while for their simplicity, bad idea)";
let rapidReporterListText4="Session reports that are grouped by section lose their chronology (The two SBTM tools linked above sort by section)";
let rapidReporterListText5="Session reports in binary format are harder to work with as you cannot index, grep or manipulate easily…";
let rapidReporterListText6="A tool that is standalone (no installation required), can be used across different computers from your USB disk-on-key.";
let rapidReporterListText7="It is yellow and always-on-top, so testers don’t need to look for it on their desktop.";
let rapidReporterListText8="Notes are taken one by one, in one-liners. Note types (our name for ‘sections’) can be changed while you type by using directional keys.";
let rapidReporterListText9="To augment the one-liner notes, the application can take screenshots on-demand, and provides an extended rich text format notes area.";
let rapidReporterListText10="All notes are saved in CSV text files, which combine plain text flexibility with spreadsheet manipulation power.";
let rapidReporterListText11="More in the official webpage......";
// render
render(descrpRapidReporter, '#descriptionRapidReporter');
data.listItems.push(rapidReporterListText1,rapidReporterListText2,rapidReporterListText3,rapidReporterListText4,rapidReporterListText5);
renderList('#missingFeautureListRapidReporter');
render(underDescrpRapidReporter, '#underdescriptionRapidReporter');
render(rapidReporterAbility, '#rapidReporterAbility');
data.listItems.push(rapidReporterListText6,rapidReporterListText7,rapidReporterListText8,rapidReporterListText9,rapidReporterListText10,rapidReporterListText11);
renderList('#featureListRapidReporter');




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



render(descrpWireshark, '#descriptionWireshark');
render(descrpFiddler, '#descriptionFiddler');
render(descrpCypressio, '#descriptionCypressio');
render(descrpSeleniumWebDriver, '#descriptionSeleniumWebDriver');
render(descrpXmind, '#descriptionXmind');
render(descrpTestChallanges, '#descriptionTestingchallange');
