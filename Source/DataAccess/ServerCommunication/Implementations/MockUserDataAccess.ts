import HelperMethods from "../../../Setup/HelperMethods";
import LeaderBoardRecord from "../../Models/LeaderboardRecord";
import IUserDataAccess from "../Interfaces/IUserDataAccess";

class MockUserDataAccess implements IUserDataAccess{

    private _methodToCallOnUserCountUpdate : (userCount : number) => void;
    private _methodToCallOnLeaderBoardUpdate : (records : Array<LeaderBoardRecord>) => void;
    private _countLiveUsers : number;
    private _userID : string;
    private _score : number;


    // TODO: perhaps the function references shouldn't be passed into here, instead the client calls functions to establish the calls back
    // hmm, that would be cleaner as the interface would then specify these functions - so implementations of the interface
    // would have a better idea of what service it needs to provide to the client (establishing callbacks is important)
    public constructor(methodToCallOnUserCountUpdate : (userCount : number) => void, methodToCallOnLeaderBoardUpdate : (records : Array<LeaderBoardRecord>) => void){
        this._methodToCallOnUserCountUpdate = methodToCallOnUserCountUpdate;
        this._methodToCallOnLeaderBoardUpdate = methodToCallOnLeaderBoardUpdate;
        this._userID = HelperMethods.GenerateRandomId(4);
        this._countLiveUsers = 4;
        this._score = 0;
        this.setupIntervals();
    }

    private setupIntervals(){
        setInterval( () => {
            this._countLiveUsers ++;
            this._methodToCallOnUserCountUpdate(this._countLiveUsers);
            this._methodToCallOnLeaderBoardUpdate(this.generateLeaderBoardRecords())
        }, 5000);
    }

    // records generated == this._countLiveUsers
    private generateLeaderBoardRecords() : Array<LeaderBoardRecord>{
        let records : Array<LeaderBoardRecord> = new Array<LeaderBoardRecord>();
        for(let i = 0; i < this._countLiveUsers; i++){
            let record : LeaderBoardRecord;
            if(i == 0){
                record = new LeaderBoardRecord(this._userID, this._score);
            }
            else{
                record = new LeaderBoardRecord(HelperMethods.GenerateRandomId(4), i % 2 == 0 ? 4 : 2);
            }
            records.push(record);
        }
        return records;
    }

    public getLiveUserCount() : number{
        return this._countLiveUsers;
    }
    public getUserID() : string{
        return this._userID;
    }
    public getScore() : number{
        return this._score;
    }

    public getLeaderBoardRecords() : Array<LeaderBoardRecord>{
        let records : Array<LeaderBoardRecord> = this.generateLeaderBoardRecords();
        return records;
    }

    public incrementScore() : void{
        this._score ++;
    }
}

export default MockUserDataAccess;