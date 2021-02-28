function addToDatabaseDownloads(evt, tabContentName, quantity) {
    const user = firebase.auth().currentUser;
    let databaseGetDownloadCount = firebase.database().ref().child(tabContentName + '/downloadCount');

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {

            databaseGetDownloadCount.child('downloaded').once('value', (snapshot) => {
                let sum = parseInt(quantity);
                let valueOfDownloads = parseInt(snapshot.val());
                sum += valueOfDownloads;

                databaseGetDownloadCount.update({
                    downloaded: sum
                }).then(printResult => {

                    // Here we get summary of all stars and get back summary of stars with some mathematic condition 
                    databaseGetDownloadCount.child('downloaded').once('value', (snapshotDownloads) => {
                        let valueOfDownloads = parseInt(snapshotDownloads.val());
                        let downloadCounterElementId = document.getElementById("downloadCounter" + tabContentName);

                        downloadCounterElementId.textContent = "";
                        downloadCounterElementId.textContent += valueOfDownloads;
                    });
                });
            });
        }
    })
}
