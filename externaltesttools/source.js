
  // this function is for Jmeter card
  function openJmeter(evt, jmeter) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(jmeter).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

// this function is for Memreduct card
function openMemreduct(evt, memreduct) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(memreduct).style.display = "block";
  evt.currentTarget.className += " active";
}



// this function is for Memtest card
function openMemtest(evt, memtest) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(memtest).style.display = "block";
  evt.currentTarget.className += " active";
}

    
 
// this function is for RapidReporter card
function openRapidReporter(evt, rapidReporter) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(rapidReporter).style.display = "block";
  evt.currentTarget.className += " active";
}



 
// this function is for Wireshark card
function openWireshark(evt, wireshark) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(wireshark).style.display = "block";
  evt.currentTarget.className += " active";
}


 
// this function is for Fiddler card
function openFiddler(evt, fiddler) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(fiddler).style.display = "block";
  evt.currentTarget.className += " active";
}


// this function is for Cypress io card
function openCypress(evt, cypress) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cypress).style.display = "block";
  evt.currentTarget.className += " active";
}



// this function is for Selenium WebDriver card
function openSelenium(evt, selenium) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(selenium).style.display = "block";
  evt.currentTarget.className += " active";
}


// this function is for Xmind card
function openXmind(evt, xmind) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(xmind).style.display = "block";
  evt.currentTarget.className += " active";
}




 // this jquery is for animation of sidebar
  $(function(){
      $('.sidenav').hover(function(){
          $(this).animate({width:'28vmin'},50);
        $('.tablinks span').show();
  
      },function(){
          $(this).animate({width:'9vmin'},50);
          $('.tablinks span').hide();
  
      }).trigger('mouseleave');
  });

  // This function is for footer css
  $(function () { 
  $('#footerMainPage').css("position", "fixed");
  $('#footerMainPage').css("bottom", "0");   
});

// This function is for footer image css
$(function () { 
  $('#footerImg').css("position", "fixed");
  $('#footerImg').css("bottom", "-2vmin");   
});

// This function reads text from file
function load() {
  var file = new XMLHttpRequest();
  file.open("GET", "https://github.com/TarlanZiyadov/TestingTools/raw/master/externaltesttools/JmeterDescribtion.txt", true);
  file.onreadystatechange = function() {
    if (file.readyState === 4) {  // Makes sure the document is ready to parse
      if (file.status === 200) {  // Makes sure it's found the file
        text = file.responseText;
        document.getElementById("descriptionJmeter").innerHTML = text;
      }
    }
  }
}
window.onLoad = load();