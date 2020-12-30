function addToDatabase(evt, tabContentName, numb) {
    const user = firebase.auth().currentUser;

    document.getElementById("star1" + tabContentName).checked = false;
    document.getElementById("star2" + tabContentName).checked = false;
    document.getElementById("star3" + tabContentName).checked = false;
    document.getElementById("star4" + tabContentName).checked = false;
    document.getElementById("star5" + tabContentName).checked = false;

    //Here we disable rate system
    disableRate(event, tabContentName);

    let databaseStarAdd = firebase.database().ref().child(tabContentName + '/starcount');
    let databaseUserAdd = firebase.database().ref().child(tabContentName + '/users');
    let databaseAddUserUid = firebase.database().ref().child('rate/' + tabContentName);

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            let random = databaseAddUserUid.push();
            random.set(
                user.uid);

            databaseUserAdd.child('countAllUsers').once('value', (snapshot) => {
                let sum = 1;
                let valueOfAllUsers = parseInt(snapshot.val());
                sum += valueOfAllUsers;

                databaseUserAdd.update({
                    'countAllUsers': sum
                });
            });

            databaseStarAdd.child('stars').once('value', (snapshot) => {
                let sum = parseInt(numb);
                let valueOfStar = parseInt(snapshot.val());
                sum += valueOfStar;

                databaseStarAdd.update({
                    stars: sum
                }).then(printResult => {

                    // Here we get summary of all stars and get back summary of stars with some mathematic condition 
                    databaseUserAdd.child('countAllUsers').once('value', (snapshotUsers) => {
                        databaseStarAdd.child('stars').once('value', (snapshotStars) => {

                            let valueOfAllUsers = parseInt(snapshotUsers.val());
                            let valueOfStars = parseInt(snapshotStars.val());
                            let rate = Math.round(valueOfStars / valueOfAllUsers);

                            let usersCount = document.getElementById("usersCount" + tabContentName);
                            usersCount.textContent = "";
                            usersCount.textContent += valueOfAllUsers;

                            //Here we use rate method
                            rateStars(event, rate, tabContentName);
                        });
                    });
                });
            });
        }
    })
}
