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
                var objI=obj[key];
                console.log(key, " is hleoo", obj.name);
                // for(let keys in objI ) {
                //     console.log(keys , objI[keys]);
                    
                // }
                console.log(key ,"objI is ", objI.name,objI.ans , objI.opA, objI.opB, objI.opC, objI.opD);
                // questionOperations.prepareQuestions(obj[key]);
                questionOperations.prepareQuestions(objI.id ,objI.name ,objI.ans , objI.opA, objI.opB, objI.opC, objI.opD);
            }
        
        })
    },
    printData(){
        var rootRef = firebase.database().ref().child("questions");
        rootRef.on('child_added', function (snap ) {
            alert(snap.val());
            var name = snap.child("name").val();
            var id = snap.child("id").val();
            var opA = snap.child("opA").val();
            var opB = snap.child("opB").val();
            var opC = snap.child("opC").val();
            var opD = snap.child("opD").val();
            var ans = snap.child("ans").val();

            // questionOperations.prepareQuestions(id ,name ,ans , opA,opB, opC, opD); 

        })
    }
}
//this.questions= obj;
//this.questions.push(dbOperations.getQuestion());
