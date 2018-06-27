const questionOperations = {

    questions: [],
    // prepareQuestions() {
    //    dbOperations.getQuestion().forEach(index => {
    //        this.questions.push(dbOperations.getQuestionById(id));
    //    });
        

    //     return this.questions;
    // this.questions.push(new Question(1, "ES Stands For", ["ECMA Script", "Egg Script", "Both", "None of These"], "a"))
    // }
    prepareQuestions(obj) {
        //this.questions= obj;
        
        
        this.questions.push ( new Question(obj.id , obj.name ,obj.ans , obj.opA, obj.opB, obj.opC, obj.opD));
        
        console.log(this.questions);
    }
}