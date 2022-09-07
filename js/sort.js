//Button HTML for results
let dxText = [];
let exText = [];
let possText = [];

const cmvau = {
    nameShort : 'CMVAU',
    nameLong : 'Cytomegalovirus Anterior Uveitis'
}

const hsau = {
    nameShort : 'HSAU',
    nameLong : 'Herpes Simplex Anterior Uveitis'
}

const vzvau = {
    nameShort : 'VZVAU',
    nameLong : 'Varicella Zoster Virus Anterior Uveitis'
}

const fus = {
    nameShort : 'FUS',
    nameLong : 'Fuchs Uveitis Syndrome'
}

const jiacau = {
    nameShort : 'JIACAU',
    nameLong : 'Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis'
}

const shau = {
    nameShort : 'SHAU',
    nameLong : 'Spondyloarthritis/HLA-B27-associated Anterior Uveitis'
}

const tinu = {
    nameShort : 'TINU',
    nameLong : 'Tubulointerstitial Nephritis with Uvieitis Syndrome'
}

antUveitisList = [cmvau,hsau,vzvau,fus,jiacau,shau,tinu]
function createBtn(disName,type){
    let btnHtml = 
    `<div class="content">
        <div class=${type}></div>
        <div class='comp2'>${disName}</div>
        <div class='comp3'><img src='../../img/dropdown-icon.png'></div>
    </div>`
    return btnHtml;
}

for(let i = 0; i < dxList.length; i++){
    for(let j = 0; j < antUveitisList.length; j++){
        if(dxList[i]==antUveitisList[j].nameShort){
            dxText.push(createBtn(antUveitisList[j].nameLong,"c-comp1"));
        }
    }
}

for(let i = 0; i < possList.length; i++){
    for(let j = 0; j < antUveitisList.length; j++){
        if(possList[i]==antUveitisList[j].nameShort){
            possText.push(createBtn(antUveitisList[j].nameLong,"p-comp1"));
        }
    }
}

for(let i = 0; i < exList.length; i++){
    for(let j = 0; j < antUveitisList.length; j++){
        if(exList[i]==antUveitisList[j].nameShort){
            exText.push(createBtn(antUveitisList[j].nameLong,"e-comp1"));
        }
    }
}




