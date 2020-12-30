//Here we send name of content to get back information from database
function getDatabase(evt, tabContentName) {

  let databaseStars = firebase.database().ref().child(tabContentName + '/starcount');
  let databaseUsers = firebase.database().ref().child(tabContentName + '/users');
  let databaseGetUserUid = firebase.database().ref().child('rate/' + tabContentName);
  let databaseGetDownloadCount = firebase.database().ref().child(tabContentName + '/downloadCount');

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      const user = firebase.auth().currentUser;

      databaseGetUserUid.once('value', (snapshotUid) => {
        snapshotUid.forEach((child) => {

          if (child.val() == user.uid) {
            //Here we disable rate system
            disableRate(event, tabContentName);
          }
        });
      })

      databaseGetDownloadCount.child('downloaded').once('value', (snapshotCount) => {

        let downloaded = parseInt(snapshotCount.val());
        let dwnlCount = document.getElementById("downloadCounter" + tabContentName);
        dwnlCount.textContent = "";
        dwnlCount.textContent += downloaded;
      });

      // Here we get summary of all stars for apps and get summary of stars with some mathematic condition 
      databaseUsers.child('countAllUsers').once('value', (snapshotUsers) => {
        databaseStars.child('stars').once('value', (snapshotStar) => {

          let valueOfAllUsers = parseInt(snapshotUsers.val());
          let valueOfStar = parseInt(snapshotStar.val());
          let rate = Math.round(valueOfStar / valueOfAllUsers);

          let usersCount = document.getElementById("usersCount" + tabContentName);
          usersCount.textContent = "";
          usersCount.textContent += valueOfAllUsers;

          //Here we use rate method
          rateStars(event, rate, tabContentName);
        });
      });
    }
  })
}
