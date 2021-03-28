class HelperMethods{

    public static FilterString(unfilteredString : string) : string {

        let filteredString : string = "";
        let charactersToFilter : Array<string> = new Array<string>();
        charactersToFilter.push("/");
        charactersToFilter.push("\\");
        charactersToFilter.push("#");
        // charactersToFilter.push(" ");

        let isLastCharacterSpace : boolean = false;

        for(let i = 0; i < unfilteredString.length; i++){
            let currentCharInUnfilteredString : string = unfilteredString[i];
            if(isLastCharacterSpace && (currentCharInUnfilteredString === " ")){
                isLastCharacterSpace = true;
                continue;
            }
            currentCharInUnfilteredString === " " ? isLastCharacterSpace = true : isLastCharacterSpace = false;
            let indexInArr : number = charactersToFilter.findIndex(charToFilterFor => charToFilterFor == currentCharInUnfilteredString);
            if(indexInArr === -1){
                filteredString += currentCharInUnfilteredString;
            }
        }
        return filteredString;
    }

    public static GenerateRandomId(lengthOfIdToGenerate : number) : string{
        let generatedId : string;
        let randomCharacters : Array<string> = new Array<string>();
        for(let i = 0; i < lengthOfIdToGenerate; i++){ 
            let generatedAsciiNumber : number;
            let stringMappedFromAsciiNumber : string;
            generatedAsciiNumber = 97 + (Math.random() * 25); // so we get a number between 97-122 (a-z)
            stringMappedFromAsciiNumber = String.fromCharCode(generatedAsciiNumber);
            randomCharacters.push(stringMappedFromAsciiNumber);
        }
        generatedId = randomCharacters.join("");
        return generatedId;
    }

    public static ArrayContainsElement(array : Array<Object>, element : Object) : boolean {
        for(let i = 0; i < array.length; i++){
            if(array[i] === element){
                return true;
            }
        }
        return false;
    }

}

export default HelperMethods;