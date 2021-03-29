import * as React from 'react';

interface BottomBannerProps{
    methodToCallOnClickGetNewProblem : (language : string) => void;
    methodToCallOnClickSubmit : () => void;
}


function BottomBanner(props : BottomBannerProps) : JSX.Element{

    // hardcoded for the time being - TODO: create an option to select from a list of languages which one you'll like the next problem to be
    let language : string = "french";

    return (
        <div id="bottom-banner"> 
            <button id="get-new-problem-button" type="button" className="btn btn-warning" onClick={() => props.methodToCallOnClickGetNewProblem(language)}>Next Problem</button>
            <button id="submit-button" type="button" className="btn btn-dark" onClick={() => props.methodToCallOnClickSubmit()}>Submit</button>
        </div>
    )

}

export {BottomBanner, BottomBannerProps};
