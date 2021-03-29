import * as React from 'react';

interface BottomBannerProps{
    methodToCallOnClickGetNewProblem : () => void;
    methodToCallOnClickSubmit : () => void;
}


function BottomBanner(props : BottomBannerProps) : JSX.Element{

    return (
        <div id="bottom-banner"> 
            <button id="get-new-problem-button" type="button" className="btn btn-warning" onClick={() => props.methodToCallOnClickGetNewProblem()}>Next Problem</button>
            <button id="submit-button" type="button" className="btn btn-dark" onClick={() => props.methodToCallOnClickSubmit()}>Submit</button>
        </div>
    )

}

export {BottomBanner, BottomBannerProps};
