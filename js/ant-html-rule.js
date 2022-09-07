const cmvauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqueous specimen PCR positive for herpes simplex virus or varicella zoster virus</li>
</ul>`

const hsauEx = 
`<ul>
<li>Concomitant dermatomal/cutaneous varicella zoster virus (unless aqueous specimen PCR positive for herpes simplex virus)</li>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqeous specimen PCR positive for cytomegalovirus or varicella zoster virus</li>
</ul>`

const vzvauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>3.	Aqueous specimen PCR positive for cytomegalovirus or herpes simplex virus</li>
</ul>`

const fusEx = 
`<ol><li>Positive serology for syphilis using a treponemal test
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)
<li>Aqueous specimen PCR* positive for cytomegalovirus, herpes simplex virus or varicella
zoster virus</ol>`

const jiacauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus or varicella zoster virus</li>
</ul>`

const sauEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
<li>Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus or varicella zoster virus</li>
</ul>`

const tinuEx = 
`<ul>
<li>Positive serology for syphilis using a treponemal test</li>
<li>Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)</li>
</ul>`


////////////////////////////////////////

const cmvauRule_1_html = 
`<span style="font-weight:500">Evidence of anterior uveitis</span>
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, anterior chamber inflammation should be present</li>
    <li>No evidence of retinitis</li>
</ol>`;

const cmvauRule_2_html = 
`<span style="font-weight:500">Evidence of cytomegalovirus infection in the eye</span>
<ol type="a" style="font-weight:400;">
    <li>Positive PCR for cytomegalovirus on aqueous specimen</li>
</ol>`;

const hsauRule_1_html = 
`<li>Evidence of anterior uveitis
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
    <li>No evidence of retinitis</li>
</ol>
</li>`;

const hsauRule_2_html = 
`<li>Unilateral uveitis (unless there is a positive aqueous PCR for herpes simplex virus)
</li>`;

const hsauRule_3_html = 
`<li>Evidence of herpes simplex infection in the eye
<ol type="a" style="font-weight:400;">
    <li>Aqueous humor PCR positive for herpes simplex virus OR</li>
    <li>Sectoral iris atrophy in a patient ≤50 years of age OR</li>
    <li>Herpes simplex keratitis</li>
</ol>
</li>`;

const vzvauRule_1_html = 
`<li>Evidence of anterior uveitis
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
    <li>No evidence of retinitis</li>
</ol>
</li>`;

const vzvauRule_2_html =
`<li>Unilateral uveitis (unless there is a positive aqueous PCR for varicella zoster virus)
</li>`;

const vzvauRule_3_html = 
`<li>Evidence of varicella zoster virus infection in the eye
<ol type="a" style="font-weight:400;">
    <li>Aqueous humor PCR positive for varicella zoster virus OR</li>
    <li>Sectoral iris atrophy in a patient > 60 years of age OR</li>
    <li>Concurrent or recent dermatomal Herpes zoster</li>
</ol>
</li>`;

const fusRule_1_html = 
`<li>Evidence of anterior uveitis
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If vitreous cells are present, anterior chamber inflammation also should be present</li>
    <li>No evidence of retinitis</li>
</ol>
</li>`;

const fusRule_2_html = 
`<li>Unilateral uveitis
</li>`;

const fusRule_3_html = 
`<li>Evidence of Fuchs uveitis syndrome
<ol type="a" style="font-weight:400;">
    <li>Heterochromia OR</li>
    <li>Unilateral diffuse iris atrophy AND stellate keratic precipitates</li>
</ol>
</li>`;

const fusRule_4_html = 
`<li>Neither endotheliitis nor nodular, coin-shaped endothelial lesions
</li>`;

const jiacauRule_1_html = 
`<li>Evidence of anterior uveitis
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
</ol>
</li>`;

const jiacauRule_2_html = 
`<li>Chronic anterior uveitis or, if at initial diagnosis, uveitis is of insidious onset and asymptomatic/ minimally symptomatic
</li>`;

const jiacauRule_3_html =
`<li>Juvenile idiopathic arthritis of the following subtypes
<ol type="a" style="font-weight:400;">
    <li>Oligoarthritis, persistent or extended OR</li>
    <li>Rheumatoid factor negative polyarthritis OR</li>
    <li>Juvenile psoriatic arthritis, other than psoriatic spondylitis </li>
</ol>
</li>`;

const sauRule_1_html = 
`<li>Evidence of anterior uveitis
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If anterior vitreous cells are present, severity is less than anterior chmaber inflammation</li>
</ol>
</li>`;

const sauRule_2_html = 
`<li>Characteristic uveitis course
<ol type="a" style="font-weight:400;">
    <li>Acute or recurrent acute, unilateral or unilateral alternating course OR</li>
    <li>Chronic course with a history of a recurrent acute, unilateral or unilateral alternating course evolving into chronic course</li>
</ol>
</li>`;

const sauRule_3_html = 
`<li>ASAS-defined spondyloarthritis (axial or peripheral) and/or HLA-B27-positive
</li>`;

const sauRule_4_html = 
`<li>Chronic uveitis with both ASAS-defined spondyloarthritis (axial or peripheral) AND HLA-B27-positive
</li>`;

const tinuRule_1_html = 
`<li>Evidence of anterior uveitis
<ol type="a" style="font-weight:400;">
    <li>Anterior chamber cells</li>
    <li>If vitritis or choroiditis or retinal vascular changes are present, anterior chamber inflammation also should be present</li>
</ol>
</li>`;

const tinuRule_2_html = 
`<li>Evidence of tubulointerstitial nephritis, either
<ol type="a" style="font-weight:400;">
    <li>Positive renal biopsy OR</li>
    <li>Elevated urine β-microglobulin and either abnormal urine analysis or elevated serum creatinine</li>
</ol>
</li>`;