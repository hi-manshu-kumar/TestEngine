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
    getQuestion() {
        var questions = firebase.database().ref().child("questions");
        questions.on('value', function (snapShot) {
            var obj = snapShot.val();
            console.log("fetch__", obj);
            console.log("Type of", typeof obj);
            for (let key in obj) {
                console.log(key, " ", obj[key]);
                questionOperations.prepareQuestions(obj[key]);
            }
        
        })
    }
    // ,
    // printData(){
    //     var rootRef = firebase.database().ref().child("Users");
    //     rootRef.on("child_added",snapShot => {
    //         var name = 
    //     })
    // }
}
//this.questions= obj;
//this.questions.push(dbOperations.getQuestion());
