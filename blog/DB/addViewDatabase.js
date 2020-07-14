document.getElementById('readBlog1').onclick = ()=> {

    let databaseBlogShownCount = firebase.database().ref().child('blog/shownCount');

    firebase.auth().onAuthStateChanged(firebaseUser => 
    {

    if(firebaseUser)

        {
            let addView = window.localStorage.getItem('addViewBlog1');
            if (addView===null){

            window.localStorage.setItem('addViewBlog1', "1");

            databaseBlogShownCount.child('blog1/viewed').once('value', (snapshot)=> {

                let addOne=1;
                let viewedCount=parseInt(snapshot.val());
                addOne += viewedCount;
                
                databaseBlogShownCount.update({
                    'blog1/viewed': addOne
                    });
                }).then(result =>{

                    databaseBlogShownCount.child('blog1/viewed').once('value', (snapshot)=> {

                    let viewedCount=parseInt(snapshot.val());
                    let countShownBlog1=document.getElementById('countShownBlog1');
            
                    countShownBlog1.textContent = "";
                    countShownBlog1.textContent += viewedCount;
                    })

                });
            }
        }
    })
}