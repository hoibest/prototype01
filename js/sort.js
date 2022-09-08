//Button HTML for results
let dxText = [];
let exText = [];
let possText = [];

const cmvau = {
    nameShort : 'CMVAU',
    nameLong : 'Cytomegalovirus Anterior Uveitis',
    disRules: [cmvauRule_1,cmvauRule_2]
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

/*antUveitisList = [cmvau,hsau,vzvau,fus,jiacau,shau,tinu]*/
antUveitisList = [cmvau]

function createBtn(dis,type){
    let btnHtml = 
    `<div class="content" id="content-${dis.nameLong}-btn" onclick="showModal(this)">
        <div class=${type}></div>
        <div class='comp2'>${dis.nameLong}</div>
        <div class='comp3'><img src='../../img/dropdown-icon.png'></div>
    </div>
    <div class="show-result">
        <div class="criteria-link">Check the classification criteria</div>
        <div id="criteria-not-fulfilled" class="not-fulfilled">
            <div style="font-size:20px;">Criteria not fulfilled</div>
            <br>
            <div>
                <div>
                    <div id="dis-html">
                        ${dis.disRules[0].userInput()}
                        ${dis.disRules[1].userInput()}
                    </div>
                </div>
            </div>
        </div>
        <div id="criteria-fulfilled" class="fulfilled">
            <div style="font-size:20px;">Criteria fulfilled</div>
            <br>
            <div>
                <div>
                    <div id="dis-html">
                        ${dis.disRules[0].userInput()}
                        ${dis.disRules[1].userInput()}
                    </div>
                </div>
            </div>
        </div>
        <div id="criteria-contradicted" class="contradicted">
            <div style="font-size:20px;">Criteria contradicted</div>
            <br>
            <div>
                <div>
                    <div id="dis-html">
                        ${dis.disRules[0].userInput()}
                        ${dis.disRules[1].userInput()}
                    </div>
                </div>
            </div>
        </div>
    </div>`
    console.log(dis)
    return btnHtml;
}

for(let i = 0; i < dxList.length; i++){
    for(let j = 0; j < antUveitisList.length; j++){
        if(dxList[i]==antUveitisList[j].nameShort){
            dxText.push(createBtn(antUveitisList[i],"c-comp1"));
        }
    }
}

/*for(let i = 0; i < possList.length; i++){
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
*/

function showModal(el){
    let id = el.id;
    let disName = document.getElementById(id);
    console.log(disName)
}




