import LeaderBoardRecord from "../../Models/LeaderboardRecord";

interface IUserDataAccess{
    // the user's score isn't something that the browser expects to be streamed (as the score for 'this' browser/user is changed within the browser, not on the server side (that would then need to be 'sent' to the browser))
    incrementScore() : void;
    // these methods are useful incase the clients wants a simple way of getting a 'snapshot' of the current state on the serverside
    getLiveUserCount() : number;
    getUserID() : string;
    getScore() : number;
    getLeaderBoardRecords() : Array<LeaderBoardRecord>
}

export default IUserDataAccess;