window.addEventListener('load', ()=> {
    
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
      
      firebase.auth().signInAnonymously();

      let databaseStarsHelper = firebase.database().ref().child('helper/starcount');
      let databaseStarsSelenium = firebase.database().ref().child('selenium/starcount');
      let databaseStarsFastCapture = firebase.database().ref().child('fastCapture/starcount');

      let databaseUsersHelper = firebase.database().ref().child('helper/users');
      let databaseUsersSelenium = firebase.database().ref().child('selenium/users');
      let databaseUsersFastCapture = firebase.database().ref().child('fastCapture/users');

      let databaseGetUserUidHelper = firebase.database().ref().child('rate/helper');
      let databaseGetUserUidSelenium = firebase.database().ref().child('rate/selenium');
      let databaseGetUserUidFastCapture = firebase.database().ref().child('rate/fastCapture');

      let databaseGetDownloadCountHelper = firebase.database().ref().child('helper/downloadCount');
      let databaseGetDownloadCountSeleniumByGUI = firebase.database().ref().child('selenium/downloadCount');
      let databaseGetDownloadCountFastCapture = firebase.database().ref().child('fastCapture/downloadCount');

      firebase.auth().onAuthStateChanged(firebaseUser => {

      if(firebaseUser)

        {         
            const user = firebase.auth().currentUser;   

            databaseGetUserUidHelper.once('value', (snapshotHelperUid)=> {
              snapshotHelperUid.forEach((child)=> {
                
                if(child.val()==user.uid){

                  $("#star1Helper").attr('disabled','disabled');
                  $("#star2Helper").attr('disabled','disabled');
                  $("#star3Helper").attr('disabled','disabled');
                  $("#star4Helper").attr('disabled','disabled');
                  $("#star5Helper").attr('disabled','disabled');
                }
              });         
            })

            databaseGetUserUidSelenium.once('value', (snapshotSeleniumUid)=> {
              snapshotSeleniumUid.forEach((child)=> {
                
                if(child.val()==user.uid){

                  $("#star1Selenium").attr('disabled','disabled');
                  $("#star2Selenium").attr('disabled','disabled');
                  $("#star3Selenium").attr('disabled','disabled');
                  $("#star4Selenium").attr('disabled','disabled');
                  $("#star5Selenium").attr('disabled','disabled');
                }
              });         
            })


            databaseGetUserUidFastCapture.once('value', (snapshotFastCaptureUid)=> {
              snapshotFastCaptureUid.forEach((child)=> {
                
                if(child.val()==user.uid){

                  $("#star1FastCapture").attr('disabled','disabled');
                  $("#star2FastCapture").attr('disabled','disabled');
                  $("#star3FastCapture").attr('disabled','disabled');
                  $("#star4FastCapture").attr('disabled','disabled');
                  $("#star5FastCapture").attr('disabled','disabled');
                }
              });         
            })
          

            databaseGetDownloadCountHelper.child('downloaded').once('value', (snapshotCount)=> {

              let downloaded = parseInt(snapshotCount.val());
      
              let dwnlCount = document.getElementById("downloadCounterHelper++");
              dwnlCount.textContent = "";                       
              dwnlCount.textContent += downloaded; 
            });

            databaseGetDownloadCountSeleniumByGUI.child('downloaded').once('value', (snapshotCount)=> {
  
              let downloaded = parseInt(snapshotCount.val());
      
              let dwnlCount = document.getElementById("downloadCounterSeleniumByGUI");
              dwnlCount.textContent = "";                       
              dwnlCount.textContent += downloaded; 
            });

            databaseGetDownloadCountFastCapture.child('downloaded').once('value', (snapshotCount)=> {

              let downloaded = parseInt(snapshotCount.val());
      
              let dwnlCount = document.getElementById("downloadCounterFastCapture");
              dwnlCount.textContent = "";                       
              dwnlCount.textContent += downloaded; 
            });

      // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
      databaseUsersHelper.child('countAllUsers').once('value', (snapshotUsersHelper)=> {
        databaseStarsHelper.child('star5').once('value', (snapshotStar5Helper)=> {    
          databaseStarsHelper.child('star4').once('value', (snapshotStar4Helper)=> {       
            databaseStarsHelper.child('star3').once('value', (snapshotStar3Helper)=> {     
              databaseStarsHelper.child('star2').once('value', (snapshotStar2Helper)=> {  
                databaseStarsHelper.child('star1').once('value', (snapshotStar1Helper)=> {
        
                  let valueOfAllUsersHelper = parseInt(snapshotUsersHelper.val());
            
                  let valueOfStar1Helper = parseInt(snapshotStar1Helper.val());
                  let valueOfStar2Helper = parseInt(snapshotStar2Helper.val());
                  let valueOfStar3Helper = parseInt(snapshotStar3Helper.val());
                  let valueOfStar4Helper = parseInt(snapshotStar4Helper.val());
                  let valueOfStar5Helper = parseInt(snapshotStar5Helper.val());
    
            
                  let summaryHelper=valueOfStar1Helper+valueOfStar2Helper+valueOfStar3Helper+valueOfStar4Helper+valueOfStar5Helper;
                  let rateHelper=Math.round(summaryHelper/valueOfAllUsersHelper);

                  let usersCountHelper = document.getElementById("usersCountHelper");
                  usersCountHelper.textContent = "";
                  usersCountHelper.textContent += valueOfAllUsersHelper;

                  if(rateHelper >0 && rateHelper <2){

                    document.getElementById("star1Helper").checked = true;
                    document.getElementById("star2Helper").checked = false;
                    document.getElementById("star3Helper").checked = false;
                    document.getElementById("star4Helper").checked = false;
                    document.getElementById("star5Helper").checked = false;
                
                  }else if(rateHelper >1 && rateHelper <3){
                    
                    document.getElementById("star1Helper").checked = true;
                    document.getElementById("star2Helper").checked = true;
                    document.getElementById("star3Helper").checked = false;
                    document.getElementById("star4Helper").checked = false;
                    document.getElementById("star5Helper").checked = false;
          
                  
                  }else if(rateHelper >2 && rateHelper <4){

                    document.getElementById("star1Helper").checked = true;
                    document.getElementById("star2Helper").checked = true;
                    document.getElementById("star3Helper").checked = true;
                    document.getElementById("star4Helper").checked = false;
                    document.getElementById("star5Helper").checked = false;
                  
                  }else if(rateHelper >3 && rateHelper <5){

                    document.getElementById("star1Helper").checked = true;
                    document.getElementById("star2Helper").checked = true;
                    document.getElementById("star3Helper").checked = true;
                    document.getElementById("star4Helper").checked = true;
                    document.getElementById("star5Helper").checked = false;
                  
          
                  }else if(rateHelper >4 && rateHelper ==5){

                    document.getElementById("star1Helper").checked = true;
                    document.getElementById("star2Helper").checked = true;
                    document.getElementById("star3Helper").checked = true;
                    document.getElementById("star4Helper").checked = true;
                    document.getElementById("star5Helper").checked = true;
                  
                  }
                  
              });      
            });    
          });    
        }); 
      });   
    });

// Here we get summary of all stars for SeleniumByGUI and get back summary of stars with some mathematic condition 
  databaseUsersSelenium.child('countAllUsers').once('value', (snapshotUsersSelenium)=> {
    databaseStarsSelenium.child('star5').once('value', (snapshotStar5Selenium)=> {    
      databaseStarsSelenium.child('star4').once('value', (snapshotStar4Selenium)=> {       
        databaseStarsSelenium.child('star3').once('value', (snapshotStar3Selenium)=> {     
          databaseStarsSelenium.child('star2').once('value', (snapshotStar2Selenium)=> {  
            databaseStarsSelenium.child('star1').once('value', (snapshotStar1Selenium)=> {
    
              let valueOfAllUsersSelenium = parseInt(snapshotUsersSelenium.val());
        
              let valueOfStar1Selenium = parseInt(snapshotStar1Selenium.val());
              let valueOfStar2Selenium = parseInt(snapshotStar2Selenium.val());
              let valueOfStar3Selenium = parseInt(snapshotStar3Selenium.val());
              let valueOfStar4Selenium = parseInt(snapshotStar4Selenium.val());
              let valueOfStar5Selenium = parseInt(snapshotStar5Selenium.val());

        
              let summarySelenium=valueOfStar1Selenium+valueOfStar2Selenium+valueOfStar3Selenium+valueOfStar4Selenium+valueOfStar5Selenium;
              let rateSelenium=Math.round(summarySelenium/valueOfAllUsersSelenium);

              let usersCountSelenium = document.getElementById("usersCountSelenium");
              usersCountSelenium.textContent = "";
              usersCountSelenium.textContent += valueOfAllUsersSelenium;

            if(rateSelenium >0 && rateSelenium <2){

                    document.getElementById("star1Selenium").checked = true;
                    document.getElementById("star2Selenium").checked = false;
                    document.getElementById("star3Selenium").checked = false;
                    document.getElementById("star4Selenium").checked = false;
                    document.getElementById("star5Selenium").checked = false;
                
                  }else if(rateSelenium >1 && rateSelenium <3){
                    
                    document.getElementById("star1Selenium").checked = true;
                    document.getElementById("star2Selenium").checked = true;
                    document.getElementById("star3Selenium").checked = false;
                    document.getElementById("star4Selenium").checked = false;
                    document.getElementById("star5Selenium").checked = false;
          
                  
                  }else if(rateSelenium >2 && rateSelenium <4){

                    document.getElementById("star1Selenium").checked = true;
                    document.getElementById("star2Selenium").checked = true;
                    document.getElementById("star3Selenium").checked = true;
                    document.getElementById("star4Selenium").checked = false;
                    document.getElementById("star5Selenium").checked = false;
                  
                  }else if(rateSelenium >3 && rateSelenium <5){

                    document.getElementById("star1Selenium").checked = true;
                    document.getElementById("star2Selenium").checked = true;
                    document.getElementById("star3Selenium").checked = true;
                    document.getElementById("star4Selenium").checked = true;
                    document.getElementById("star5Selenium").checked = false;
                  
          
                  }else if(rateSelenium >4 && rateSelenium ==5){

                    document.getElementById("star1Selenium").checked = true;
                    document.getElementById("star2Selenium").checked = true;
                    document.getElementById("star3Selenium").checked = true;
                    document.getElementById("star4Selenium").checked = true;
                    document.getElementById("star5Selenium").checked = true;
                  
                  }
              
            });      
          });    
        });    
      }); 
    });   
  });
    


// Here we get summary of all stars for FastCapture and get back summary of stars with some mathematic condition 
databaseUsersFastCapture.child('countAllUsers').once('value', (snapshotUsersFastCapture)=> {
  databaseStarsFastCapture.child('star5').once('value', (snapshotStar5FastCapture)=> {    
    databaseStarsFastCapture.child('star4').once('value', (snapshotStar4FastCapture)=> {       
      databaseStarsFastCapture.child('star3').once('value', (snapshotStar3FastCapture)=> {     
        databaseStarsFastCapture.child('star2').once('value', (snapshotStar2FastCapture)=> {  
          databaseStarsFastCapture.child('star1').once('value', (snapshotStar1FastCapture)=> {
  
            let valueOfAllUsersFastCapture = parseInt(snapshotUsersFastCapture.val());
      
            let valueOfStar1FastCapture = parseInt(snapshotStar1FastCapture.val());
            let valueOfStar2FastCapture = parseInt(snapshotStar2FastCapture.val());
            let valueOfStar3FastCapture = parseInt(snapshotStar3FastCapture.val());
            let valueOfStar4FastCapture = parseInt(snapshotStar4FastCapture.val());
            let valueOfStar5FastCapture = parseInt(snapshotStar5FastCapture.val());

      
            let summaryFastCapture=valueOfStar1FastCapture+valueOfStar2FastCapture+valueOfStar3FastCapture+valueOfStar4FastCapture+valueOfStar5FastCapture;
            let rateFastCapture=Math.round(summaryFastCapture/valueOfAllUsersFastCapture);

            let usersCountFastCapture = document.getElementById("usersCountFastCapture");
            usersCountFastCapture.textContent = "";
            usersCountFastCapture.textContent += valueOfAllUsersFastCapture;

          if(rateFastCapture >0 && rateFastCapture <2){

                  document.getElementById("star1FastCapture").checked = true;
                  document.getElementById("star2FastCapture").checked = false;
                  document.getElementById("star3FastCapture").checked = false;
                  document.getElementById("star4FastCapture").checked = false;
                  document.getElementById("star5FastCapture").checked = false;
              
                }else if(rateFastCapture >1 && rateFastCapture <3){
                  
                  document.getElementById("star1FastCapture").checked = true;
                  document.getElementById("star2FastCapture").checked = true;
                  document.getElementById("star3FastCapture").checked = false;
                  document.getElementById("star4FastCapture").checked = false;
                  document.getElementById("star5FastCapture").checked = false;
        
                
                }else if(rateFastCapture >2 && rateFastCapture <4){

                  document.getElementById("star1FastCapture").checked = true;
                  document.getElementById("star2FastCapture").checked = true;
                  document.getElementById("star3FastCapture").checked = true;
                  document.getElementById("star4FastCapture").checked = false;
                  document.getElementById("star5FastCapture").checked = false;
                
                }else if(rateFastCapture >3 && rateFastCapture <5){

                  document.getElementById("star1FastCapture").checked = true;
                  document.getElementById("star2FastCapture").checked = true;
                  document.getElementById("star3FastCapture").checked = true;
                  document.getElementById("star4FastCapture").checked = true;
                  document.getElementById("star5FastCapture").checked = false;
                
        
                }else if(rateFastCapture >4 && rateFastCapture ==5){

                  document.getElementById("star1FastCapture").checked = true;
                  document.getElementById("star2FastCapture").checked = true;
                  document.getElementById("star3FastCapture").checked = true;
                  document.getElementById("star4FastCapture").checked = true;
                  document.getElementById("star5FastCapture").checked = true;
                
                }
            
          });      
        });    
      });    
    }); 
  });   
});


 }
})
});

