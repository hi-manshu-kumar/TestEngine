const dbOperations = {
    
    getQuestionList(){
        var pr = new Promise ( (resolve,reject)=>{
            var question =firebase.database().ref('questions/');// -------for multiple objects
//            var user =firebase.database().ref('users/'+1);    ----------- in this only 1 obj is returned of ram-
            
            question.on('value', (snapShot) => {
                var obj = snapShot.val();
                console.log("fetch__", obj);
                
                for (let key in obj) {
                    console.log(key, " ", obj[key]);
                    var objI=obj[key];
                    console.log(key, " is hleoo", obj.name);
                    
                    console.log(key ,"objI is ", objI.name,objI.ans , objI.opA, objI.opB, objI.opC, objI.opD);
                    questionOperations.prepareQuestions(objI.id ,objI.name ,objI.ans , objI.opA, objI.opB, objI.opC, objI.opD);
                    resolve(objI);
                }
               // questionOperations.prepareQuestions(objI.id ,objI.name ,objI.ans , objI.opA, objI.opB, objI.opC, objI.opD);
                // resolve(objI);
                //console.log("objc is ",obj);
                //reject(err);
            });
        });
        return pr;
    }
}