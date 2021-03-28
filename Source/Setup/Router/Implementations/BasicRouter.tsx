import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {IRouterProps, IRouterState, IRouter} from "../Interfaces/IRouter";

class BasicRouter extends React.Component<IRouterProps, IRouterState> implements IRouter{


  public constructor(props : IRouterProps){
    super(props);

    this.state = {
     
    }

  }

  public componentWillMount() : void{

  }

  public render() : JSX.Element{

    return(   
      <Router>
        <Route render={({ history }) => (  
            <React.Fragment>
              <Route exact path="/" component={() => <div>lol</div>}/> 
            </React.Fragment>
          )}
        />
      </Router>
        
    );
  }

  public componentDidMount() : void{

  }

  public componentWillUnmount() : void{

  }

};

export default BasicRouter;
