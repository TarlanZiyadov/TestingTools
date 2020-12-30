//Here we get views from database
function getDatabase(evt, tabContentName) {

    let databaseBlogShownCount = firebase.database().ref().child('blog/' + tabContentName);

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            databaseBlogShownCount.child('viewed').once('value', (snapshot) => {

                let viewedCount = parseInt(snapshot.val());
                let countShownBlog = document.getElementById('countShown' + tabContentName);
                countShownBlog.textContent = "";
                countShownBlog.textContent += viewedCount;
            })
        }
    })
}