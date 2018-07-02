class Ques {
    constructor(id, name, ans, opA,opB,opC,opD) {
        this.id = id;
        this.name = name;
        this.ans = ans;
        this.opA = opA;
        this.opB = opB;
        this.opC = opC;
        this.opD = opD;
        this.attempt = false;
        this.score = QuestionConstants.score;
    }
}
