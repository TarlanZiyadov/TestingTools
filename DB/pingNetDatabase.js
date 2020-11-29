// Here stars all work for user rating to and from database for PingNet
document.getElementById('star5PingNet').onclick = ()=> {

    const user = firebase.auth().currentUser;

    document.getElementById("star1PingNet").checked = false;
    document.getElementById("star2PingNet").checked = false;
    document.getElementById("star3PingNet").checked = false;
    document.getElementById("star4PingNet").checked = false;
    document.getElementById("star5PingNet").checked = false;


    $("#star1PingNet").attr('disabled','disabled');
    $("#star2PingNet").attr('disabled','disabled');
    $("#star3PingNet").attr('disabled','disabled');
    $("#star4PingNet").attr('disabled','disabled');
    $("#star5PingNet").attr('disabled','disabled');

    let databaseStarAdd = firebase.database().ref().child('pingNet/starcount');
    let databaseUserAdd = firebase.database().ref().child('pingNet/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/pingNet');

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

            // Here we get summary of all stars for PingNet and get back summary of stars with some mathematic condition 
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
                                                
                        let usersCount = document.getElementById("usersCountPingNet");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
            
                        if(rate >0 && rate <2){

                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = false;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >3 && rate <5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = true;          
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


document.getElementById('star4PingNet').onclick = ()=> {

    const user = firebase.auth().currentUser;

    document.getElementById("star1PingNet").checked = false;
    document.getElementById("star2PingNet").checked = false;
    document.getElementById("star3PingNet").checked = false;
    document.getElementById("star4PingNet").checked = false;
    document.getElementById("star5PingNet").checked = false;


    $("#star1PingNet").attr('disabled','disabled');
    $("#star2PingNet").attr('disabled','disabled');
    $("#star3PingNet").attr('disabled','disabled');
    $("#star4PingNet").attr('disabled','disabled');
    $("#star5PingNet").attr('disabled','disabled');

    let databaseStarAdd = firebase.database().ref().child('pingNet/starcount');
    let databaseUserAdd = firebase.database().ref().child('pingNet/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/pingNet');

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
        
        databaseStarAdd.child('star4').once('value', (snapshot)=> {
            let sum=4;
            let valueOfStar4 = parseInt(snapshot.val());
            sum += valueOfStar4;
        
            databaseStarAdd.update({
            'star4': sum
            }).then(printResult =>{

            // Here we get summary of all stars for PingNet and get back summary of stars with some mathematic condition 
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
                                                
                        let usersCount = document.getElementById("usersCountPingNet");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
            
                        if(rate >0 && rate <2){

                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = false;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >3 && rate <5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = true;          
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
 
 
document.getElementById('star3PingNet').onclick = ()=> {

    const user = firebase.auth().currentUser;

    document.getElementById("star1PingNet").checked = false;
    document.getElementById("star2PingNet").checked = false;
    document.getElementById("star3PingNet").checked = false;
    document.getElementById("star4PingNet").checked = false;
    document.getElementById("star5PingNet").checked = false;


    $("#star1PingNet").attr('disabled','disabled');
    $("#star2PingNet").attr('disabled','disabled');
    $("#star3PingNet").attr('disabled','disabled');
    $("#star4PingNet").attr('disabled','disabled');
    $("#star5PingNet").attr('disabled','disabled');

    let databaseStarAdd = firebase.database().ref().child('pingNet/starcount');
    let databaseUserAdd = firebase.database().ref().child('pingNet/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/pingNet');

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
        
        databaseStarAdd.child('star3').once('value', (snapshot)=> {
            let sum=3;
            let valueOfStar3 = parseInt(snapshot.val());
            sum += valueOfStar3;
        
            databaseStarAdd.update({
            'star3': sum
            }).then(printResult =>{

            // Here we get summary of all stars for PingNet and get back summary of stars with some mathematic condition 
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
                                                
                        let usersCount = document.getElementById("usersCountPingNet");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
            
                        if(rate >0 && rate <2){

                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = false;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >3 && rate <5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = true;          
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

 

document.getElementById('star2PingNet').onclick = ()=> {

    const user = firebase.auth().currentUser;

    document.getElementById("star1PingNet").checked = false;
    document.getElementById("star2PingNet").checked = false;
    document.getElementById("star3PingNet").checked = false;
    document.getElementById("star4PingNet").checked = false;
    document.getElementById("star5PingNet").checked = false;


    $("#star1PingNet").attr('disabled','disabled');
    $("#star2PingNet").attr('disabled','disabled');
    $("#star3PingNet").attr('disabled','disabled');
    $("#star4PingNet").attr('disabled','disabled');
    $("#star5PingNet").attr('disabled','disabled');

    let databaseStarAdd = firebase.database().ref().child('pingNet/starcount');
    let databaseUserAdd = firebase.database().ref().child('pingNet/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/pingNet');

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
        
        databaseStarAdd.child('star2').once('value', (snapshot)=> {
            let sum=2;
            let valueOfStar2 = parseInt(snapshot.val());
            sum += valueOfStar2;
        
            databaseStarAdd.update({
            'star2': sum
            }).then(printResult =>{

            // Here we get summary of all stars for PingNet and get back summary of stars with some mathematic condition 
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
                                                
                        let usersCount = document.getElementById("usersCountPingNet");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
            
                        if(rate >0 && rate <2){

                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = false;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >3 && rate <5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = true;          
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
 


document.getElementById('star1PingNet').onclick = ()=> {

    const user = firebase.auth().currentUser;

    document.getElementById("star1PingNet").checked = false;
    document.getElementById("star2PingNet").checked = false;
    document.getElementById("star3PingNet").checked = false;
    document.getElementById("star4PingNet").checked = false;
    document.getElementById("star5PingNet").checked = false;


    $("#star1PingNet").attr('disabled','disabled');
    $("#star2PingNet").attr('disabled','disabled');
    $("#star3PingNet").attr('disabled','disabled');
    $("#star4PingNet").attr('disabled','disabled');
    $("#star5PingNet").attr('disabled','disabled');

    let databaseStarAdd = firebase.database().ref().child('pingNet/starcount');
    let databaseUserAdd = firebase.database().ref().child('pingNet/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/pingNet');

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
        
        databaseStarAdd.child('star1').once('value', (snapshot)=> {
            let sum=1;
            let valueOfStar1 = parseInt(snapshot.val());
            sum += valueOfStar1;
        
            databaseStarAdd.update({
            'star1': sum
            }).then(printResult =>{

            // Here we get summary of all stars for PingNet and get back summary of stars with some mathematic condition 
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
                                                
                        let usersCount = document.getElementById("usersCountPingNet");
                        usersCount.textContent = "";                       
                        usersCount.textContent += valueOfAllUsers; 
            
                        if(rate >0 && rate <2){

                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = false;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >1 && rate <3){
                            
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = false;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                
                        
                        }else if(rate >2 && rate <4){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = false;
                            document.getElementById("star5PingNet").checked = false;
                        
                        }else if(rate >3 && rate <5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = false;
                        
                
                        }else if(rate >4 && rate ==5){
        
                            document.getElementById("star1PingNet").checked = true;
                            document.getElementById("star2PingNet").checked = true;
                            document.getElementById("star3PingNet").checked = true;
                            document.getElementById("star4PingNet").checked = true;
                            document.getElementById("star5PingNet").checked = true;          
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
 
document.getElementById('downloadPingNetLink').addEventListener("click", (event)=>{
let databaseAddDownloadCountPingNet = firebase.database().ref().child('pingNet/downloadCount');
firebase.auth().onAuthStateChanged(firebaseUser => {
    
    if(firebaseUser){
        databaseAddDownloadCountPingNet.child('downloaded').once('value', (snapshot)=> {
            let sum=1;
            let valueOfDownloads = snapshot.val();
            sum += valueOfDownloads;

            databaseAddDownloadCountPingNet.update({
            'downloaded': sum
            }).then(printResult =>{
            databaseAddDownloadCountPingNet.child('downloaded').once('value', (snapshotCount)=> {
                let downloaded = parseInt(snapshotCount.val());
                let dwnlCount = document.getElementById("downloadCounterPingNet");
                dwnlCount.textContent = "";                       
                dwnlCount.textContent += downloaded; 
            });
            })
        });
        }
    })
});