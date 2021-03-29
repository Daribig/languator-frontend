import * as React from 'react';
import LeaderBoardRecord from '../../../DataAccess/Models/LeaderboardRecord';
import Problem from '../../../DataAccess/Models/Problem';
import Tab from '../../../DataAccess/Models/Tab';
import MockProblemDataAccess from '../../../DataAccess/ServerCommunication/Implementations/MockProblemDataAccess';
import MockUserDataAccess from '../../../DataAccess/ServerCommunication/Implementations/MockUserDataAccess';
import IProblemDataAccess from '../../../DataAccess/ServerCommunication/Interfaces/IProblemDataAccess';
import IUserDataAccess from '../../../DataAccess/ServerCommunication/Interfaces/IUserDataAccess';
import { BottomBanner } from '../../../StatelessComponents/BottomBanner';
import { ProblemTab } from '../../../StatelessComponents/ProblemTab';
import { TabColumn} from '../../../StatelessComponents/TabColumn';
import { TopBanner } from '../../../StatelessComponents/TopBanner';
import { UserInputColumn } from '../../../StatelessComponents/UserInputColumn';
import { IWorkspaceProps, IWorkspaceState, IWorkspace } from '../Interface/IWorkspace';
import "./basic-workspace.css";

class BasicWorkspace extends React.Component<IWorkspaceProps, IWorkspaceState> implements IWorkspace{

    
    private _userCountUpdateHandler : (userCount : number) => void;
    private _leaderboardRecordsUpdateHandler : (records : Array<LeaderBoardRecord>) => void;
    private _onClickGetNewProblemButtonHandler : () => void;
    private _onClickSubmitButtonHandler : () => void;
    private _onChangeTextInputHandler : (event : React.ChangeEvent<HTMLTextAreaElement>) => void;
    private _onClickOnTabHandler : (tab : Tab) => void;
    private _userDataAccess : IUserDataAccess;
    private _problemDataAccess : IProblemDataAccess;

    public constructor(props : IWorkspaceProps){
        super(props);
        this._userCountUpdateHandler = this.userCountUpdateHandler.bind(this);
        this._leaderboardRecordsUpdateHandler = this.leaderboardRecordsUpdateHandler.bind(this);
        this._onClickGetNewProblemButtonHandler = this.onClickGetNewProblemButtonHandler.bind(this);
        this._onClickSubmitButtonHandler = this.onClickSubmitButtonHandler.bind(this);
        this._onChangeTextInputHandler = this.onChangeTextInputHandler.bind(this);
        this._onClickOnTabHandler = this.onClickOnTabHandler.bind(this);
        this._userDataAccess = new MockUserDataAccess(this._userCountUpdateHandler, this._leaderboardRecordsUpdateHandler);
        this._problemDataAccess = new MockProblemDataAccess();

        let liveUserCount : number = this._userDataAccess.getLiveUserCount();
        let leaderboardRecords : Array<LeaderBoardRecord> = this._userDataAccess.getLeaderBoardRecords();
        let userScore : number = this._userDataAccess.getScore(); // == 0
        let userID : string = this._userDataAccess.getUserID();
        let problem : Problem = this._problemDataAccess.getNewProblem("french");

        this.state = {
            countLiveUsers : liveUserCount,
            leaderBoardRecords : leaderboardRecords,
            score : userScore,
            userID : userID,
            problem : problem,
            userInput : "",
            selectedTab : Tab.Problem
        };

    }

    private userCountUpdateHandler(userCount : number) : void{
        this.setState({
        countLiveUsers : userCount
        });
    }

    private leaderboardRecordsUpdateHandler(records : Array<LeaderBoardRecord>) : void{
        this.setState({
            leaderBoardRecords : records
        });
    }

    private onClickGetNewProblemButtonHandler() : void{
        console.log("get new problem!");
    }

    private onClickSubmitButtonHandler() : void{
        console.log("submit problem!");
    }

    private onChangeTextInputHandler(event : React.ChangeEvent<HTMLTextAreaElement>) : void{
        this.setState({
            userInput : event.target.value
        })
    }

    private onClickOnTabHandler(tab : Tab) : void{
        this.setState({
            selectedTab : tab
        });
    }

    public componentWillMount() : void{

    }

    public render() : JSX.Element{

        let rows : Array<JSX.Element> = new Array<JSX.Element>();
        for(let i = 0; i < this.state.leaderBoardRecords.length; i++){
            let row : JSX.Element = <div>{this.state.leaderBoardRecords[i].getUserID()} - {i == 0 ? this.state.score : this.state.leaderBoardRecords[i].getScore()}</div>
            rows.push(row);
        }

        let selectedTab : JSX.Element;
        if(this.state.selectedTab == Tab.Problem){
            selectedTab = <ProblemTab languageToTranslateFrom={this.state.problem.getLanguage()} textToTranslate={this.state.problem.getTextToTranslate()}/>
        }
        else if(this.state.selectedTab == Tab.Solution){
            // todo
        }
        else if(this.state.selectedTab == Tab.Leaderboard){
            // todo
        }
        else{
            // attempt tab
            // todo
        }

        return(   
            <div id="basic-workspace">
                <TopBanner applicationName="Languator" userID={this.state.userID} score={this.state.score} countLiveUsers={this.state.countLiveUsers} />
                <div id="main-body">
                    <TabColumn selectedTab={this.state.selectedTab} methodToCallOnClickOnTab={this._onClickOnTabHandler} tabContents={selectedTab}/>
                    <UserInputColumn text={this.state.userInput} methodToCallOnChangeText={this._onChangeTextInputHandler} />
                </div>
                <BottomBanner  methodToCallOnClickGetNewProblem={this._onClickGetNewProblemButtonHandler} methodToCallOnClickSubmit={this._onClickSubmitButtonHandler}/>
            </div>
        );
    }

    public componentDidMount() : void{

    }

    public componentWillUnmount() : void{

    }

};

export default BasicWorkspace;
