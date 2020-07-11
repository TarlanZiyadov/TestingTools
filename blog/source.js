function openTab(evt, tabContentId) {
  
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabContentId).style.display = "block";
  evt.currentTarget.className += " active";
  }

  
// For google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-169533728-1');


document.addEventListener('DOMContentLoaded', (e)=> {

  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    if(i==0){
      tabcontent[i].style.display = "block";
    }
  }
<<<<<<< HEAD
},true);
=======
},true);
>>>>>>> fbda9a3... beta page is done
