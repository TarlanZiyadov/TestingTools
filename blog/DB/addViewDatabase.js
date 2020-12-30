function addToDatabase(evt, tabContentName) {

    let databaseBlogShownCount = firebase.database().ref().child('blog/' + tabContentName);

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            let addView = window.localStorage.getItem('addView' + tabContentName);
            if (addView === null) {

                window.localStorage.setItem('addView' + tabContentName, "1");

                databaseBlogShownCount.child('viewed').once('value', (snapshot) => {

                    let addOne = 1;
                    let viewedCount = parseInt(snapshot.val());
                    addOne += viewedCount;

                    databaseBlogShownCount.update({
                        'viewed': addOne
                    });
                }).then(result => {

                    databaseBlogShownCount.child('viewed').once('value', (snapshot) => {

                        let viewedCount = parseInt(snapshot.val());
                        let countShownBlog = document.getElementById('countShown' + tabContentName);
                        countShownBlog.textContent = "";
                        countShownBlog.textContent += viewedCount;
                    })
                });
            }
        }
    })
}