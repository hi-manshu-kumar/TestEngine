const dbOperations= {
    addQuestion(questionObject){
        firebase.database().ref('questions/'+questionObject.id).set(questionObject);
        console.log("Question Added...");
    },
    getQuestionById(id){
        var questionRef = firebase.database().ref('questions/'+id);
        questionRef.on('value', (snapShot) =>{
            var questionObject =snapShot.val();
            console.log("QuestionObject is",questionObject);
        })
    },
    getAllUsers() {
        var users = firebase.database().ref('users');
        users.on('value', function (snapShot) {
            var obj = snapShot.val();
            console.log("fetch__", obj);
            console.log("Type of", obj);
            for (let key in obj) {
                console.log(key, " ", obj[key]);
            }
            
        });
    },
    match(userid , pwd){
        var pr = new Promise ( (resolve,reject)=>{
            var user =firebase.database().ref('users/');// -------for multiple objects
//            var user =firebase.database().ref('users/'+1);    ----------- in this only 1 obj is returned of ram-
            
            console.log(userid);
            user.on('value', (snapShot) => {
                var obj = snapShot.val();
                console.log("fetch__", obj);
                console.log("Type of", obj.userid);
                
                for (let key in obj) {
                    console.log(key, " ", obj[key]);
                    console.log(key, " ", obj[key].userid);
                    console.log(key, " ", obj[key].pwd);
                    console.log(key, " ", obj[key].type);
                    // if(userid == obj[key].userid){
                    //     alert("yippee");
                    // }
                    var objI =obj[key];
                    if(userid == objI.userid && pwd== objI.pwd){
                        alert("yippee");
                        resolve(objI);
                    }
                }
                reject("didnt match");
                console.log("obj is ",obj);
                //reject(err);
            });
        });
        return pr;
    }
}
