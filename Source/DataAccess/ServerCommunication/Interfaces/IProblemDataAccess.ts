import Problem from "../../Models/Problem";

interface IProblemDataAccess{
    getNewProblem(language : string) : Problem;
}

export default IProblemDataAccess;