// Here stars all work for user rating to and from database for Helper++
document.getElementById('star5Helper').onclick = ()=> {

  const user = firebase.auth().currentUser;
  
  document.getElementById("star1Helper").checked = false;
  document.getElementById("star2Helper").checked = false;
  document.getElementById("star3Helper").checked = false;
  document.getElementById("star4Helper").checked = false;
  document.getElementById("star5Helper").checked = false;


  $("#star1Helper").attr('disabled','disabled');
  $("#star2Helper").attr('disabled','disabled');
  $("#star3Helper").attr('disabled','disabled');
  $("#star4Helper").attr('disabled','disabled');
  $("#star5Helper").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('helper/starcount');
  let databaseUserAdd = firebase.database().ref().child('helper/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/helper');

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
      {
        let random=databaseAddUserUid.push();
        random.set(
              user.uid);
              
        databaseUserAdd.child('countAllUsers').once('value', (snapshot)=> {
          let sum=1;
          let valueOfAllUsers = parseInt(snapshot.val());
          sum += valueOfAllUsers;
      
          databaseUserAdd.update({
            'countAllUsers': sum
          });
        });
      
        databaseStarAdd.child('star5').once('value', (snapshot)=> {
          let sum=5;
          let valueOfStar5 = parseInt(snapshot.val());
          sum += valueOfStar5;
      
          databaseStarAdd.update({
            'star5': sum
          }).then(printResult =>{

            // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
            databaseUserAdd.child('countAllUsers').once('value', (snapshotUsers)=> {
              databaseStarAdd.child('star5').once('value', (snapshotStar5)=> {    
                databaseStarAdd.child('star4').once('value', (snapshotStar4)=> {       
                  databaseStarAdd.child('star3').once('value', (snapshotStar3)=> {     
                    databaseStarAdd.child('star2').once('value', (snapshotStar2)=> {  
                      databaseStarAdd.child('star1').once('value', (snapshotStar1)=> {
              
                        let valueOfAllUsers = parseInt(snapshotUsers.val());
          
                        let valueOfStar1 = parseInt(snapshotStar1.val());
                        let valueOfStar2 = parseInt(snapshotStar2.val());
                        let valueOfStar3 = parseInt(snapshotStar3.val());
                        let valueOfStar4 = parseInt(snapshotStar4.val());
                        let valueOfStar5 = parseInt(snapshotStar5.val());
          
                  
                        let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                        let rate=Math.round(summary/valueOfAllUsers);
                                                  
                        let usersCount = document.getElementById("usersCountHelper");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
          
                        if(rate >0 && rate <2){

                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = false;
                          document.getElementById("star3Helper").checked = false;
                          document.getElementById("star4Helper").checked = false;
                          document.getElementById("star5Helper").checked = false;
                      
                        }else if(rate >1 && rate <3){
                          
                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = true;
                          document.getElementById("star3Helper").checked = false;
                          document.getElementById("star4Helper").checked = false;
                          document.getElementById("star5Helper").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
      
                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = true;
                          document.getElementById("star3Helper").checked = true;
                          document.getElementById("star4Helper").checked = false;
                          document.getElementById("star5Helper").checked = false;
                        
                        }else if(rate >3 && rate <5){
      
                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = true;
                          document.getElementById("star3Helper").checked = true;
                          document.getElementById("star4Helper").checked = true;
                          document.getElementById("star5Helper").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
      
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
          });
        });     
      }
    })
  }

document.getElementById('star4Helper').onclick = ()=> {

  const user = firebase.auth().currentUser;

  document.getElementById("star1Helper").checked = false;
  document.getElementById("star2Helper").checked = false;
  document.getElementById("star3Helper").checked = false;
  document.getElementById("star4Helper").checked = false;
  document.getElementById("star5Helper").checked = false;


  $("#star1Helper").attr('disabled','disabled');
  $("#star2Helper").attr('disabled','disabled');
  $("#star3Helper").attr('disabled','disabled');
  $("#star4Helper").attr('disabled','disabled');
  $("#star5Helper").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('helper/starcount');
  let databaseUserAdd = firebase.database().ref().child('helper/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/helper');

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      let random=databaseAddUserUid.push();
      random.set(
            user.uid);

      databaseUserAdd.child('countAllUsers').once('value', (snapshot)=> {
        let sum=1;
        let valueOfAllUsers = snapshot.val();
        sum += valueOfAllUsers;
    
        databaseUserAdd.update({
          'countAllUsers': sum
        });
      });
    
      databaseStarAdd.child('star4').once('value', (snapshot)=> {
        let sum=4;
        let valueOfStar4 = snapshot.val();
        sum += valueOfStar4;
    
        databaseStarAdd.update({
          'star4': sum
        }).then(printResult =>{

          // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
          databaseUserAdd.child('countAllUsers').once('value', (snapshotUsers)=> {
            databaseStarAdd.child('star5').once('value', (snapshotStar5)=> {    
              databaseStarAdd.child('star4').once('value', (snapshotStar4)=> {       
                databaseStarAdd.child('star3').once('value', (snapshotStar3)=> {     
                  databaseStarAdd.child('star2').once('value', (snapshotStar2)=> {  
                    databaseStarAdd.child('star1').once('value', (snapshotStar1)=> {
            
                      let valueOfAllUsers = parseInt(snapshotUsers.val());
        
                      let valueOfStar1 = parseInt(snapshotStar1.val());
                      let valueOfStar2 = parseInt(snapshotStar2.val());
                      let valueOfStar3 = parseInt(snapshotStar3.val());
                      let valueOfStar4 = parseInt(snapshotStar4.val());
                      let valueOfStar5 = parseInt(snapshotStar5.val());
        
                
                      let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                      let rate=Math.round(summary/valueOfAllUsers);
                                                
                      let usersCount = document.getElementById("usersCountHelper");
                      usersCount.textContent = "";                       
                      usersCount.textContent += valueOfAllUsers; 
        
                      if(rate >0 && rate <2){

                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = false;
                        document.getElementById("star3Helper").checked = false;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
                    
                      }else if(rate >1 && rate <3){
                        
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = false;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
              
                      
                      }else if(rate >2 && rate <4){
    
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = true;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
                      
                      }else if(rate >3 && rate <5){
    
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = true;
                        document.getElementById("star4Helper").checked = true;
                        document.getElementById("star5Helper").checked = false;
                      
              
                      }else if(rate >4 && rate ==5){
    
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
        });;
      });     
    }
  })
}

document.getElementById('star3Helper').onclick = ()=> {

  const user = firebase.auth().currentUser;

  document.getElementById("star1Helper").checked = false;
  document.getElementById("star2Helper").checked = false;
  document.getElementById("star3Helper").checked = false;
  document.getElementById("star4Helper").checked = false;
  document.getElementById("star5Helper").checked = false;


  $("#star1Helper").attr('disabled','disabled');
  $("#star2Helper").attr('disabled','disabled');
  $("#star3Helper").attr('disabled','disabled');
  $("#star4Helper").attr('disabled','disabled');
  $("#star5Helper").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('helper/starcount');
  let databaseUserAdd = firebase.database().ref().child('helper/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/helper');

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      
      let random=databaseAddUserUid.push();
      random.set(
            user.uid);

      databaseUserAdd.child('countAllUsers').once('value', (snapshot)=> {
        let sum=1;
        let valueOfAllUsers = snapshot.val();
        sum += valueOfAllUsers;
    
        databaseUserAdd.update({
          'countAllUsers': sum
        });
      });
    
      databaseStarAdd.child('star3').once('value', (snapshot)=> {
        let sum=3;
        let valueOfStar3 = snapshot.val();
        sum += valueOfStar3;
    
        databaseStarAdd.update({
          'star3': sum
        }).then(printResult =>{

          // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
          databaseUserAdd.child('countAllUsers').once('value', (snapshotUsers)=> {
            databaseStarAdd.child('star5').once('value', (snapshotStar5)=> {    
              databaseStarAdd.child('star4').once('value', (snapshotStar4)=> {       
                databaseStarAdd.child('star3').once('value', (snapshotStar3)=> {     
                  databaseStarAdd.child('star2').once('value', (snapshotStar2)=> {  
                    databaseStarAdd.child('star1').once('value', (snapshotStar1)=> {
            
                      let valueOfAllUsers = parseInt(snapshotUsers.val());
        
                      let valueOfStar1 = parseInt(snapshotStar1.val());
                      let valueOfStar2 = parseInt(snapshotStar2.val());
                      let valueOfStar3 = parseInt(snapshotStar3.val());
                      let valueOfStar4 = parseInt(snapshotStar4.val());
                      let valueOfStar5 = parseInt(snapshotStar5.val());
        
                
                      let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                      let rate=Math.round(summary/valueOfAllUsers);
                                                
                      let usersCount = document.getElementById("usersCountHelper");
                      usersCount.textContent = "";                       
                      usersCount.textContent += valueOfAllUsers; 
        
                      if(rate >0 && rate <2){

                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = false;
                        document.getElementById("star3Helper").checked = false;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
                    
                      }else if(rate >1 && rate <3){
                        
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = false;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
              
                      
                      }else if(rate >2 && rate <4){
    
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = true;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
                      
                      }else if(rate >3 && rate <5){
    
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = true;
                        document.getElementById("star4Helper").checked = true;
                        document.getElementById("star5Helper").checked = false;
                      
              
                      }else if(rate >4 && rate ==5){
    
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
        });
      });
    }
  })
}

document.getElementById('star2Helper').onclick = ()=> {

  const user = firebase.auth().currentUser;

  document.getElementById("star1Helper").checked = false;
  document.getElementById("star2Helper").checked = false;
  document.getElementById("star3Helper").checked = false;
  document.getElementById("star4Helper").checked = false;
  document.getElementById("star5Helper").checked = false;


  $("#star1Helper").attr('disabled','disabled');
  $("#star2Helper").attr('disabled','disabled');
  $("#star3Helper").attr('disabled','disabled');
  $("#star4Helper").attr('disabled','disabled');
  $("#star5Helper").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('helper/starcount');
  let databaseUserAdd = firebase.database().ref().child('helper/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/helper');

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {   
        let random=databaseAddUserUid.push();
        random.set(
              user.uid);

        databaseUserAdd.child('countAllUsers').once('value', (snapshot)=> {
          let sum=1;
          let valueOfAllUsers = snapshot.val();
          sum += valueOfAllUsers;
      
          databaseUserAdd.update({
            'countAllUsers': sum
          });
        });
      
        databaseStarAdd.child('star2').once('value', (snapshot)=> {
          let sum=2;
          let valueOfStar2 = snapshot.val();
          sum += valueOfStar2;
      
          databaseStarAdd.update({
            'star2': sum
          }).then(printResult =>{

            // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
            databaseUserAdd.child('countAllUsers').once('value', (snapshotUsers)=> {
              databaseStarAdd.child('star5').once('value', (snapshotStar5)=> {    
                databaseStarAdd.child('star4').once('value', (snapshotStar4)=> {       
                  databaseStarAdd.child('star3').once('value', (snapshotStar3)=> {     
                    databaseStarAdd.child('star2').once('value', (snapshotStar2)=> {  
                      databaseStarAdd.child('star1').once('value', (snapshotStar1)=> {
              
                        let valueOfAllUsers = parseInt(snapshotUsers.val());
          
                        let valueOfStar1 = parseInt(snapshotStar1.val());
                        let valueOfStar2 = parseInt(snapshotStar2.val());
                        let valueOfStar3 = parseInt(snapshotStar3.val());
                        let valueOfStar4 = parseInt(snapshotStar4.val());
                        let valueOfStar5 = parseInt(snapshotStar5.val());
          
                  
                        let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                        let rate=Math.round(summary/valueOfAllUsers);
                                                  
                        let usersCount = document.getElementById("usersCountHelper");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
          
                        if(rate >0 && rate <2){

                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = false;
                          document.getElementById("star3Helper").checked = false;
                          document.getElementById("star4Helper").checked = false;
                          document.getElementById("star5Helper").checked = false;
                      
                        }else if(rate >1 && rate <3){
                          
                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = true;
                          document.getElementById("star3Helper").checked = false;
                          document.getElementById("star4Helper").checked = false;
                          document.getElementById("star5Helper").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
      
                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = true;
                          document.getElementById("star3Helper").checked = true;
                          document.getElementById("star4Helper").checked = false;
                          document.getElementById("star5Helper").checked = false;
                        
                        }else if(rate >3 && rate <5){
      
                          document.getElementById("star1Helper").checked = true;
                          document.getElementById("star2Helper").checked = true;
                          document.getElementById("star3Helper").checked = true;
                          document.getElementById("star4Helper").checked = true;
                          document.getElementById("star5Helper").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
      
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
          });;
        });
      }
    })
  }
  
document.getElementById('star1Helper').onclick = ()=> {

  const user = firebase.auth().currentUser;

  document.getElementById("star1Helper").checked = false;
  document.getElementById("star2Helper").checked = false;
  document.getElementById("star3Helper").checked = false;
  document.getElementById("star4Helper").checked = false;
  document.getElementById("star5Helper").checked = false;


  $("#star1Helper").attr('disabled','disabled');
  $("#star2Helper").attr('disabled','disabled');
  $("#star3Helper").attr('disabled','disabled');
  $("#star4Helper").attr('disabled','disabled');
  $("#star5Helper").attr('disabled','disabled');

  let databaseStarAdd = firebase.database().ref().child('helper/starcount');
  let databaseUserAdd = firebase.database().ref().child('helper/users');
  let databaseAddUserUid = firebase.database().ref().child('rate/helper');

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      let random=databaseAddUserUid.push();
      random.set(
            user.uid);

      databaseUserAdd.child('countAllUsers').once('value', (snapshot)=> {
        let sum=1;
        let valueOfAllUsers = snapshot.val();
        sum += valueOfAllUsers;
    
        databaseUserAdd.update({
          'countAllUsers': sum
        });
      });
    
      databaseStarAdd.child('star1').once('value', (snapshot)=> {
        let sum=1;
        let valueOfStar1 = snapshot.val();
        sum += valueOfStar1;
    
        databaseStarAdd.update({
          'star1': sum
        }).then(printResult =>{

          // Here we get summary of all stars for Helper++ and get back summary of stars with some mathematic condition 
          databaseUserAdd.child('countAllUsers').once('value', (snapshotUsers)=> {
            databaseStarAdd.child('star5').once('value', (snapshotStar5)=> {    
              databaseStarAdd.child('star4').once('value', (snapshotStar4)=> {       
                databaseStarAdd.child('star3').once('value', (snapshotStar3)=> {     
                  databaseStarAdd.child('star2').once('value', (snapshotStar2)=> {  
                    databaseStarAdd.child('star1').once('value', (snapshotStar1)=> {
            
                      let valueOfAllUsers = parseInt(snapshotUsers.val());
        
                      let valueOfStar1 = parseInt(snapshotStar1.val());
                      let valueOfStar2 = parseInt(snapshotStar2.val());
                      let valueOfStar3 = parseInt(snapshotStar3.val());
                      let valueOfStar4 = parseInt(snapshotStar4.val());
                      let valueOfStar5 = parseInt(snapshotStar5.val());
        
                
                      let summary=valueOfStar1+valueOfStar2+valueOfStar3+valueOfStar4+valueOfStar5;
                      let rate=Math.round(summary/valueOfAllUsers);
                                                
                      let usersCount = document.getElementById("usersCountHelper");
                      usersCount.textContent = "";                       
                      usersCount.textContent += valueOfAllUsers; 
        
                      if(rate >0 && rate <2){

                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = false;
                        document.getElementById("star3Helper").checked = false;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
                    
                      }else if(rate >1 && rate <3){
                        
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = false;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
              
                      
                      }else if(rate >2 && rate <4){
    
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = true;
                        document.getElementById("star4Helper").checked = false;
                        document.getElementById("star5Helper").checked = false;
                      
                      }else if(rate >3 && rate <5){
    
                        document.getElementById("star1Helper").checked = true;
                        document.getElementById("star2Helper").checked = true;
                        document.getElementById("star3Helper").checked = true;
                        document.getElementById("star4Helper").checked = true;
                        document.getElementById("star5Helper").checked = false;
                      
              
                      }else if(rate >4 && rate ==5){
    
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
        });;
      });
    }
  })
}
  
document.getElementById('downloadHelper++Link').addEventListener("click", (event)=>{
  let databaseAddDownloadCountHelper = firebase.database().ref().child('helper/downloadCount');
  firebase.auth().onAuthStateChanged(firebaseUser => {

    if(firebaseUser){
      databaseAddDownloadCountHelper.child('downloaded').once('value', (snapshot)=> {
        let sum=1;
        let valueOfDownloads = snapshot.val();
        sum += valueOfDownloads;
    
        databaseAddDownloadCountHelper.update({
          'downloaded': sum
        }).then(printResult =>{

          databaseAddDownloadCountHelper.child('downloaded').once('value', (snapshotCount)=> {
            let downloaded = parseInt(snapshotCount.val());
            let dwnlCount = document.getElementById("downloadCounterHelper++");
            dwnlCount.textContent = "";                       
            dwnlCount.textContent += downloaded; 
          });
        })
      });
    }
  })
});