// Here stars all work for user rating to and from database for SeleniumByGUI
document.getElementById('star5Selenium').onclick = function() {

   const user = firebase.auth().currentUser;
  
  document.getElementById("star1Selenium").checked = false;
  document.getElementById("star2Selenium").checked = false;
  document.getElementById("star3Selenium").checked = false;
  document.getElementById("star4Selenium").checked = false;
  document.getElementById("star5Selenium").checked = false;


  $("#star1Selenium").attr('disabled','disabled');
  $("#star2Selenium").attr('disabled','disabled');
  $("#star3Selenium").attr('disabled','disabled');
  $("#star4Selenium").attr('disabled','disabled');
  $("#star5Selenium").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('selenium/starcount');
  let databaseUserAdd = firebase.database().ref().child('selenium/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/selenium');

  firebase.auth().onAuthStateChanged(firebaseUser => 
    {

      if(firebaseUser)

        {
          
          let random=databaseAddUserUid.push();
          random.set(
                user.uid);
    
        
          databaseUserAdd.child('countAllUsers').once('value', function(snapshot) {
            let sum=1;
            let valueOfAllUsers = parseInt(snapshot.val());
            sum += valueOfAllUsers;
        
            databaseUserAdd.update({
              'countAllUsers': sum
            });
          });
        
        
        
          databaseStarAdd.child('star5').once('value', function(snapshot) {
            let sum=5;
            let valueOfStar5 = parseInt(snapshot.val());
            sum += valueOfStar5;
        
            databaseStarAdd.update({
              'star5': sum
            }).then(printResult =>{

              // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
              databaseUserAdd.child('countAllUsers').once('value', function(snapshotUsers) {
                databaseStarAdd.child('star5').once('value', function(snapshotStar5) {    
                  databaseStarAdd.child('star4').once('value', function(snapshotStar4) {       
                    databaseStarAdd.child('star3').once('value', function(snapshotStar3) {     
                      databaseStarAdd.child('star2').once('value', function(snapshotStar2) {  
                        databaseStarAdd.child('star1').once('value', function(snapshotStar1) {
                
                          let valueOfAllUsers = parseInt(snapshotUsers.val());
            
                          let valueOfStar1 = parseInt(snapshotStar1.val());
                          let valueOfStar2 = parseInt(snapshotStar2.val());
                          let valueOfStar3 = parseInt(snapshotStar3.val());
                          let valueOfStar4 = parseInt(snapshotStar4.val());
                          let valueOfStar5 = parseInt(snapshotStar5.val());
            
                    
                          let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                          let rate=Math.round(summary/valueOfAllUsers);
                                                   
                          let usersCount = document.getElementById("usersCountSelenium");
                          usersCount.textContent = "";                       
                          usersCount.textContent += valueOfAllUsers; 
            
                          if(rate >0 && rate <2){

                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = false;
                            document.getElementById("star3Selenium").checked = false;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                        
                          }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = false;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                  
                          
                          }else if(rate >2 && rate <4){
        
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = true;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                          
                          }else if(rate >3 && rate <5){
        
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = true;
                            document.getElementById("star4Selenium").checked = true;
                            document.getElementById("star5Selenium").checked = false;
                          
                  
                          }else if(rate >4 && rate ==5){
        
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
            });
          });     
        }
      })
}


  

  
document.getElementById('star4Selenium').onclick = function() {

  const user = firebase.auth().currentUser;

  document.getElementById("star1Selenium").checked = false;
  document.getElementById("star2Selenium").checked = false;
  document.getElementById("star3Selenium").checked = false;
  document.getElementById("star4Selenium").checked = false;
  document.getElementById("star5Selenium").checked = false;


  $("#star1Selenium").attr('disabled','disabled');
  $("#star2Selenium").attr('disabled','disabled');
  $("#star3Selenium").attr('disabled','disabled');
  $("#star4Selenium").attr('disabled','disabled');
  $("#star5Selenium").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('selenium/starcount');
  let databaseUserAdd = firebase.database().ref().child('selenium/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/selenium');
     
     firebase.auth().onAuthStateChanged(firebaseUser => {

     if(firebaseUser)

      {
        
        let random=databaseAddUserUid.push();
        random.set(
              user.uid);

      
        databaseUserAdd.child('countAllUsers').once('value', function(snapshot) {
          let sum=1;
          let valueOfAllUsers = snapshot.val();
          sum += valueOfAllUsers;
      
          databaseUserAdd.update({
            'countAllUsers': sum
          });
        });
      
      
      
        databaseStarAdd.child('star4').once('value', function(snapshot) {
          let sum=4;
          let valueOfStar4 = snapshot.val();
          sum += valueOfStar4;
      
          databaseStarAdd.update({
            'star4': sum
          }).then(printResult =>{

            // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
            databaseUserAdd.child('countAllUsers').once('value', function(snapshotUsers) {
              databaseStarAdd.child('star5').once('value', function(snapshotStar5) {    
                databaseStarAdd.child('star4').once('value', function(snapshotStar4) {       
                  databaseStarAdd.child('star3').once('value', function(snapshotStar3) {     
                    databaseStarAdd.child('star2').once('value', function(snapshotStar2) {  
                      databaseStarAdd.child('star1').once('value', function(snapshotStar1) {
              
                        let valueOfAllUsers = parseInt(snapshotUsers.val());
          
                        let valueOfStar1 = parseInt(snapshotStar1.val());
                        let valueOfStar2 = parseInt(snapshotStar2.val());
                        let valueOfStar3 = parseInt(snapshotStar3.val());
                        let valueOfStar4 = parseInt(snapshotStar4.val());
                        let valueOfStar5 = parseInt(snapshotStar5.val());
          
                  
                        let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                        let rate=Math.round(summary/valueOfAllUsers);
                                                 
                        let usersCount = document.getElementById("usersCountSelenium");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
          
                        if(rate >0 && rate <2){

                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = false;
                          document.getElementById("star3Selenium").checked = false;
                          document.getElementById("star4Selenium").checked = false;
                          document.getElementById("star5Selenium").checked = false;
                      
                        }else if(rate >1 && rate <3){
                          
                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = true;
                          document.getElementById("star3Selenium").checked = false;
                          document.getElementById("star4Selenium").checked = false;
                          document.getElementById("star5Selenium").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
      
                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = true;
                          document.getElementById("star3Selenium").checked = true;
                          document.getElementById("star4Selenium").checked = false;
                          document.getElementById("star5Selenium").checked = false;
                        
                        }else if(rate >3 && rate <5){
      
                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = true;
                          document.getElementById("star3Selenium").checked = true;
                          document.getElementById("star4Selenium").checked = true;
                          document.getElementById("star5Selenium").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
      
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
          });;
        });     
     }
   })
 }


  document.getElementById('star3Selenium').onclick = function() {
  
  const user = firebase.auth().currentUser;

  document.getElementById("star1Selenium").checked = false;
  document.getElementById("star2Selenium").checked = false;
  document.getElementById("star3Selenium").checked = false;
  document.getElementById("star4Selenium").checked = false;
  document.getElementById("star5Selenium").checked = false;


  $("#star1Selenium").attr('disabled','disabled');
  $("#star2Selenium").attr('disabled','disabled');
  $("#star3Selenium").attr('disabled','disabled');
  $("#star4Selenium").attr('disabled','disabled');
  $("#star5Selenium").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('selenium/starcount');
  let databaseUserAdd = firebase.database().ref().child('selenium/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/selenium');

     firebase.auth().onAuthStateChanged(firebaseUser => {

     if(firebaseUser)

      {
       
        let random=databaseAddUserUid.push();
        random.set(
              user.uid);

      
        databaseUserAdd.child('countAllUsers').once('value', function(snapshot) {
          let sum=1;
          let valueOfAllUsers = snapshot.val();
          sum += valueOfAllUsers;
      
          databaseUserAdd.update({
            'countAllUsers': sum
          });
        });
      
      
      
        databaseStarAdd.child('star3').once('value', function(snapshot) {
          let sum=3;
          let valueOfStar3 = snapshot.val();
          sum += valueOfStar3;
      
          databaseStarAdd.update({
            'star3': sum
          }).then(printResult =>{

            // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
            databaseUserAdd.child('countAllUsers').once('value', function(snapshotUsers) {
              databaseStarAdd.child('star5').once('value', function(snapshotStar5) {    
                databaseStarAdd.child('star4').once('value', function(snapshotStar4) {       
                  databaseStarAdd.child('star3').once('value', function(snapshotStar3) {     
                    databaseStarAdd.child('star2').once('value', function(snapshotStar2) {  
                      databaseStarAdd.child('star1').once('value', function(snapshotStar1) {
              
                        let valueOfAllUsers = parseInt(snapshotUsers.val());
          
                        let valueOfStar1 = parseInt(snapshotStar1.val());
                        let valueOfStar2 = parseInt(snapshotStar2.val());
                        let valueOfStar3 = parseInt(snapshotStar3.val());
                        let valueOfStar4 = parseInt(snapshotStar4.val());
                        let valueOfStar5 = parseInt(snapshotStar5.val());
          
                  
                        let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                        let rate=Math.round(summary/valueOfAllUsers);
                                                 
                        let usersCount = document.getElementById("usersCountSelenium");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
          
                        if(rate >0 && rate <2){

                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = false;
                          document.getElementById("star3Selenium").checked = false;
                          document.getElementById("star4Selenium").checked = false;
                          document.getElementById("star5Selenium").checked = false;
                      
                        }else if(rate >1 && rate <3){
                          
                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = true;
                          document.getElementById("star3Selenium").checked = false;
                          document.getElementById("star4Selenium").checked = false;
                          document.getElementById("star5Selenium").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
      
                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = true;
                          document.getElementById("star3Selenium").checked = true;
                          document.getElementById("star4Selenium").checked = false;
                          document.getElementById("star5Selenium").checked = false;
                        
                        }else if(rate >3 && rate <5){
      
                          document.getElementById("star1Selenium").checked = true;
                          document.getElementById("star2Selenium").checked = true;
                          document.getElementById("star3Selenium").checked = true;
                          document.getElementById("star4Selenium").checked = true;
                          document.getElementById("star5Selenium").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
      
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
          });
        });
     }
   })
 }


  document.getElementById('star2Selenium').onclick = function() {
  
    const user = firebase.auth().currentUser;
  
    document.getElementById("star1Selenium").checked = false;
    document.getElementById("star2Selenium").checked = false;
    document.getElementById("star3Selenium").checked = false;
    document.getElementById("star4Selenium").checked = false;
    document.getElementById("star5Selenium").checked = false;
  
  
    $("#star1Selenium").attr('disabled','disabled');
    $("#star2Selenium").attr('disabled','disabled');
    $("#star3Selenium").attr('disabled','disabled');
    $("#star4Selenium").attr('disabled','disabled');
    $("#star5Selenium").attr('disabled','disabled');
  
    let databaseStarAdd = firebase.database().ref().child('selenium/starcount');
    let databaseUserAdd = firebase.database().ref().child('selenium/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/selenium');

       firebase.auth().onAuthStateChanged(firebaseUser => {
  
       if(firebaseUser)
  
        {
         
          let random=databaseAddUserUid.push();
          random.set(
                user.uid);
  
        
          databaseUserAdd.child('countAllUsers').once('value', function(snapshot) {
            let sum=1;
            let valueOfAllUsers = snapshot.val();
            sum += valueOfAllUsers;
        
            databaseUserAdd.update({
              'countAllUsers': sum
            });
          });
        
        
        
          databaseStarAdd.child('star2').once('value', function(snapshot) {
            let sum=2;
            let valueOfStar2 = snapshot.val();
            sum += valueOfStar2;
        
            databaseStarAdd.update({
              'star2': sum
            }).then(printResult =>{

              // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
              databaseUserAdd.child('countAllUsers').once('value', function(snapshotUsers) {
                databaseStarAdd.child('star5').once('value', function(snapshotStar5) {    
                  databaseStarAdd.child('star4').once('value', function(snapshotStar4) {       
                    databaseStarAdd.child('star3').once('value', function(snapshotStar3) {     
                      databaseStarAdd.child('star2').once('value', function(snapshotStar2) {  
                        databaseStarAdd.child('star1').once('value', function(snapshotStar1) {
                
                          let valueOfAllUsers = parseInt(snapshotUsers.val());
            
                          let valueOfStar1 = parseInt(snapshotStar1.val());
                          let valueOfStar2 = parseInt(snapshotStar2.val());
                          let valueOfStar3 = parseInt(snapshotStar3.val());
                          let valueOfStar4 = parseInt(snapshotStar4.val());
                          let valueOfStar5 = parseInt(snapshotStar5.val());
            
                    
                          let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                          let rate=Math.round(summary/valueOfAllUsers);
                                                   
                          let usersCount = document.getElementById("usersCountSelenium");
                          usersCount.textContent = "";                       
                          usersCount.textContent += valueOfAllUsers; 
            
                          if(rate >0 && rate <2){

                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = false;
                            document.getElementById("star3Selenium").checked = false;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                        
                          }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = false;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                  
                          
                          }else if(rate >2 && rate <4){
        
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = true;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                          
                          }else if(rate >3 && rate <5){
        
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = true;
                            document.getElementById("star4Selenium").checked = true;
                            document.getElementById("star5Selenium").checked = false;
                          
                  
                          }else if(rate >4 && rate ==5){
        
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
            });;
          });
       }
     })
   }
  

  
  document.getElementById('star1Selenium').onclick = function() {
  
    const user = firebase.auth().currentUser;
  
    document.getElementById("star1Selenium").checked = false;
    document.getElementById("star2Selenium").checked = false;
    document.getElementById("star3Selenium").checked = false;
    document.getElementById("star4Selenium").checked = false;
    document.getElementById("star5Selenium").checked = false;
  
  
    $("#star1Selenium").attr('disabled','disabled');
    $("#star2Selenium").attr('disabled','disabled');
    $("#star3Selenium").attr('disabled','disabled');
    $("#star4Selenium").attr('disabled','disabled');
    $("#star5Selenium").attr('disabled','disabled');
  
    let databaseStarAdd = firebase.database().ref().child('selenium/starcount');
    let databaseUserAdd = firebase.database().ref().child('selenium/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/selenium');

       firebase.auth().onAuthStateChanged(firebaseUser => {
  
       if(firebaseUser)
  
        {
         
          let random=databaseAddUserUid.push();
          random.set(
                user.uid);
  
        
          databaseUserAdd.child('countAllUsers').once('value', function(snapshot) {
            let sum=1;
            let valueOfAllUsers = snapshot.val();
            sum += valueOfAllUsers;
        
            databaseUserAdd.update({
              'countAllUsers': sum
            });
          });
        
        
        
          databaseStarAdd.child('star1').once('value', function(snapshot) {
            let sum=1;
            let valueOfStar1 = snapshot.val();
            sum += valueOfStar1;
        
            databaseStarAdd.update({
              'star1': sum
            }).then(printResult =>{

              // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
              databaseUserAdd.child('countAllUsers').once('value', function(snapshotUsers) {
                databaseStarAdd.child('star5').once('value', function(snapshotStar5) {    
                  databaseStarAdd.child('star4').once('value', function(snapshotStar4) {       
                    databaseStarAdd.child('star3').once('value', function(snapshotStar3) {     
                      databaseStarAdd.child('star2').once('value', function(snapshotStar2) {  
                        databaseStarAdd.child('star1').once('value', function(snapshotStar1) {
                
                          let valueOfAllUsers = parseInt(snapshotUsers.val());
            
                          let valueOfStar1 = parseInt(snapshotStar1.val());
                          let valueOfStar2 = parseInt(snapshotStar2.val());
                          let valueOfStar3 = parseInt(snapshotStar3.val());
                          let valueOfStar4 = parseInt(snapshotStar4.val());
                          let valueOfStar5 = parseInt(snapshotStar5.val());
            
                    
                          let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                          let rate=Math.round(summary/valueOfAllUsers);
                                                   
                          let usersCount = document.getElementById("usersCountSelenium");
                          usersCount.textContent = "";                       
                          usersCount.textContent += valueOfAllUsers; 
            
                          if(rate >0 && rate <2){

                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = false;
                            document.getElementById("star3Selenium").checked = false;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                        
                          }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = false;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                  
                          
                          }else if(rate >2 && rate <4){
        
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = true;
                            document.getElementById("star4Selenium").checked = false;
                            document.getElementById("star5Selenium").checked = false;
                          
                          }else if(rate >3 && rate <5){
        
                            document.getElementById("star1Selenium").checked = true;
                            document.getElementById("star2Selenium").checked = true;
                            document.getElementById("star3Selenium").checked = true;
                            document.getElementById("star4Selenium").checked = true;
                            document.getElementById("star5Selenium").checked = false;
                          
                  
                          }else if(rate >4 && rate ==5){
        
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
            });;
          });
       }
     })
   }
  
