import HelperMethods from "../../../Setup/HelperMethods";
import Problem from "../../Models/Problem";
import IProblemDataAccess from "../Interfaces/IProblemDataAccess";

class MockProblemDataAccess implements IProblemDataAccess{

    private _countGetNewProblemRequests : number;
    private _problemOne : Problem;
    private _problemTwo : Problem;

    public constructor(){
        this._countGetNewProblemRequests = 0;
        this._problemOne = new Problem("french", "bonjour je suis james", "hello i am james");;
        this._problemTwo = new Problem("french", "je ne sais pas", "i do not know");
    }

    public getNewProblem(language : string){
        let chosenProblem : Problem = this._countGetNewProblemRequests % 2 ? this._problemOne : this._problemTwo;
        chosenProblem.setLanguage(language);
        this._countGetNewProblemRequests++;
        return chosenProblem;
    }
}

export default MockProblemDataAccess;