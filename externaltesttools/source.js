
  // this function is for Jmeter card
  function openJmeter(evt, jmeter) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      if(i!=9){
        $('body').css("width", "100vw"); //Here we change the body width back to origin same same on other functions except testingchallange
      }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
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
    if(i!=9){
      $('body').css("width", "100vw");
    }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(xmind).style.display = "block";
  evt.currentTarget.className += " active";
}

// this function is for testingchallange
function openTestingchallange(evt, testingchallange) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    if(i==9){
      $('body').css("width", "152vw"); // Here we change body width to fit the iframe size
    }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(testingchallange).style.display = "block";
  evt.currentTarget.className += " active";
}


 // this jquery is for animation of sidebar
  $(function(){
      $('.sidenav').hover(function(){
          $(this).animate({width:'30vmin'},50);
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


// For google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-169533728-1');

window.onload=function(){
// Here we show the first card on load always 
  let i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      if(i==0){
        tabcontent[i].style.display = "block";
        if(i!=9){
          $('body').css("width", "100vw");
        }
      }
    }

    // Here we download content from database
  let firebaseConfig = {
    apiKey: "AIzaSyBc8ysyL8bIwcLWEj8y-5ZMXUK6NRamxCA",
    authDomain: "db-web-498d2.firebaseapp.com",
    databaseURL: "https://db-web-498d2.firebaseio.com",
    projectId: "db-web-498d2",
    storageBucket: "db-web-498d2.appspot.com",
    messagingSenderId: "623170844206",
    appId: "1:623170844206:web:64e24c587c46542f6fd1bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    let databaseJmeter = firebase.database().ref().child('externaltesttools/jmeter');
    let databaseExternalTestToolsMain = firebase.database().ref().child('externaltesttools/mainpageText');
   
    databaseJmeter.child('descriptionFirst').on('value', function(snapshot) {
    let descriptionFirst = snapshot.val();
    let jmeterTextFirst = document.getElementById("descriptionJmeter");
    jmeterTextFirst.textContent += descriptionFirst;
    });

    databaseJmeter.child('descriptionSecond').on('value', function(snapshot) {
    let descriptionSecond = snapshot.val();
    let jmeterTextSecond = document.getElementById("jemterFeature");
    jmeterTextSecond.textContent += descriptionSecond;
    });

    databaseJmeter.child('listHeader').on('value', function(snapshot) {
    let listHeader = snapshot.val();
    let jmeterTextThird = document.getElementById("jmeterAbility");
    jmeterTextThird.textContent += listHeader;
    });

    databaseExternalTestToolsMain.child('descriptionFirst').on('value', function(snapshot) {
    let descriptionFirst = snapshot.val();
    let mainTextFirst = document.getElementById("frontPagetxt");
    mainTextFirst.textContent += descriptionFirst;
    });

}