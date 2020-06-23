 
 // this function animates downloading banner in down side of page
 function downloading() {
    let dwnload = document.getElementById("waitDownloading");
    dwnload.className = "show";
    setTimeout(function(){ dwnload.className = dwnload.className.replace("show", ""); }, 2000);
  }
  
   
  // this function is for helper++ card
  function openHelper(evt, helperPlusPluss) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(helperPlusPluss).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // this function is for seleniumbygui card
  function openSeleniumByGUI(evt, selenium) {
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
  
  
  // this function is for fastcapture card
  function openFastCapture(evt, fast) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(fast).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

  
  // this function is for about card
  function openAbout(evt, aboutCreater) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(aboutCreater).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

  
  // this function is for help card
  function openHelp(evt, helpCard) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(helpCard).style.display = "block";
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


// Here we show the first card on load always 
window.onload =function(){
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    if(i==0){
      tabcontent[i].style.display = "block";
    }
  }
}