const questionOperations = {

    questions: [],
    // prepareQuestions() {
    //    dbOperations.getQuestion().forEach(index => {
    //        this.questions.push(dbOperations.getQuestionById(id));
    //    });
        

    //     return this.questions;
    // this.questions.push(new Question(1, "ES Stands For", ["ECMA Script", "Egg Script", "Both", "None of These"], "a"))
    // }
    prepareQuestions(id ,name ,ans , opA,opB, opC, opD) {
        //this.questions= obj;
        
        
        this.questions.push ( new Ques(id ,name ,ans , opA,opB, opC, opD));
        
        console.log("in dataStructure", this.questions);
    }
}