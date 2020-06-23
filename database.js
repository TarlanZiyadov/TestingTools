document.addEventListener('DOMContentLoaded', function(e) {
    
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
      
        let databaseMainPage = firebase.database().ref().child('mainpage/mainpageText');
      
        databaseMainPage.child('descriptionFirst').on('value', function(snapshot) {
        let descriptionFirst = snapshot.val();
        let mainTextFirstID = document.getElementById("frontPagetxt");
        mainTextFirstID.textContent += descriptionFirst;
        });

        databaseMainPage.child('descriptionSecond').on('value', function(snapshot) {
          let descriptionSecond = snapshot.val();
          let mainTextSecondID = document.getElementById("frontPagetxtForTips");
          mainTextSecondID.textContent += descriptionSecond;
          });

        databaseMainPage.child('regardsText').on('value', function(snapshot) {
          let regardsText = snapshot.val();
          let regardsTextID = document.getElementById("regardsTxt");
          regardsTextID.textContent += regardsText;
          });

    }, true);