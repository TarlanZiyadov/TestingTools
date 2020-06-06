 
 // this function animates downloading banner in down side of page
 function downloading() {
    var dwnload = document.getElementById("waitDownloading");
    dwnload.className = "show";
    setTimeout(function(){ dwnload.className = dwnload.className.replace("show", ""); }, 4000);
  }
  
  
  
  // this function is for helper++ modal
  function openHelper(evt, helperPlusPluss) {
    var i, tabcontent, tablinks;
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
  
  // this function is for seleniumbygui modal
  function openSeleniumByGUI(evt, selenium) {
    var i, tabcontent, tablinks;
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
  
  
  // this function is for fastcapture modal
  function openFastCapture(evt, fast) {
    var i, tabcontent, tablinks;
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
  
  
  
  // this jquery is for animation of sidebar
  $(function(){
      $('.sidenav').hover(function(){
          $(this).animate({width:'28vmin'},50);
          $('.footer').animate({width:'28vmin'},50);
       
        $('.tablinks span').show();
        $('[id^=copyrighttxt]').show();
  
      },function(){
          $(this).animate({width:'9vmin'},50);
          $('.footer').animate({width:'0px'},50);
  
          $('.tablinks span').hide();
          $('[id^=copyrighttxt]').hide();
  
      }).trigger('mouseleave');
  });