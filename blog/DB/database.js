window.addEventListener('load', ()=>{
    let firebaseConfig = {
        apiKey: "AIzaSyBc8ysyL8bIwcLWEj8y-5ZMXUK6NRamxCA",
        authDomain: "db-web-498d2.firebaseapp.com",
        databaseURL: "https://db-web-498d2.firebaseio.com",
        projectId: "db-web-498d2",
        storageBucket: "db-web-498d2.appspot.com",
        messagingSenderId: "623170844206",
        appId: "1:623170844206:web:64e24c587c46542f6fd1bf"
      };

    firebase.initializeApp(firebaseConfig);
   
    let databaseBlogShownCount = firebase.database().ref().child('blog/shownCount');


    firebase.auth().onAuthStateChanged(firebaseUser => 
    {

    if(firebaseUser)

        {
            let refresh = window.localStorage.getItem('addView');
            if (refresh===null){

            window.localStorage.setItem('addView', "1");

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

            }else{

                databaseBlogShownCount.child('blog1/viewed').once('value', (snapshot)=> {

                let viewedCount=parseInt(snapshot.val());
                let countShownBlog1=document.getElementById('countShownBlog1');
        
                countShownBlog1.textContent = "";
                countShownBlog1.textContent += viewedCount;
                })
            }

        }
    })
})