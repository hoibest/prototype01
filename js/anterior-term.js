const html_1 = "../anterior-diagnosis/diagnosis01.html";
const html_2 = "../anterior-diagnosis/diagnosis02.html";
const html_3 = "../anterior-diagnosis/diagnosis03.html";
const html_4 = "../anterior-diagnosis/diagnosis04.html";
const html_5 = "../anterior-diagnosis/diagnosis05.html";

function joinText(arr,slice){
    let text = arr.join(slice);
    return text;
}

function inputText(arr1,arr2,href,rule){
    if(arr1.length!=arr2.length){
        return;
    }
    let textArr = [];
    textArr.push(rule);
    textArr.push(`<div class="user-input-box" id="user-input-html">`)
    textArr.push(`<div style="font-weight:500;">User Input</div>`);
    for(let i = 0; i < arr1.length; i++){

        let line = `<div class="user-input" style="font-weight:400"><span class="user-input-href">${arr1[i]}</span>: <span class="user-input-ans">${arr2[i]}</span></div>`
        textArr.push(line);
    }
    textArr.push(`</div>`);
    return joinText(textArr,"");
}


const cmvauRule_1 = {
    rule : cmvauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`, `Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    href: [html_2,html_3,html_2,html_3],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}



const cmvauRule_2 = {
    rule : cmvauRule_2_html,
    variableNames: [`PCR CMV(+)`],
    variableValues: [POS_PCR_CMV],
    href: [html_5],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href,this.rule);
    }
}

