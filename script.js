let head=document.createElement('h1')
head.innerHTML='DICTIONARY'
document.body.append(head)
let inputfiled=crele('section')
let inpt=crele('input')
inpt.setAttribute('type','name')
inpt.setAttribute('id','inp')
let button=crele('button')
button.innerHTML='Search';
button.setAttribute('onclick','getDictionaryData()')
let br=crele('br')
inputfiled.append(inpt)
inputfiled.append(br)
inputfiled.append(button)
document.body.append(inputfiled)

let main=document.createElement('main')
//main.className="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
document.body.append(main)

let url=(`https://api.dictionaryapi.dev/api/v2/entries/en/`)
async function getDictionaryData(){
    clearData()
    try {
    let cc=document.getElementById('inp').value
    let res=await fetch(url+cc)
    let res1=await res.json()
    for ( var a=0;a<1;a++){
        let div3=document.createElement('div')
        div3.innerHTML=`Definitions for the word "${res1[a].word}"`;
        main.append(div3);
        for (var b in res1[a].phonetics){
            let audio=res1[a].phonetics[b].audio
            let div4=document.createElement('audio')
            div4.setAttribute('controls','')
            div4.setAttribute('src',audio)
            main.append(div4)
            div4.innerHTML='play'
            break;
        }
    }
    for ( var a in res1){
        for (var b in res1[a].meanings){
            for ( var c in res1[a].meanings[b].definitions ){
                for (var d in res1[a].meanings[b].definitions[c].definition ){
                    let fres=`⇒ ${res1[a].meanings[b].definitions[c].definition}`
                    let div1=document.createElement('div')
                    let slno=1
                    div1.innerHTML+=fres
                    main.append(div1)
                    break;
                }
            }
        }
    }
    } catch (error) {
        let cc=document.getElementById('inp').value
        alert(`"${cc}" not found, please check the spelling and try again!`)
    }
}

function clearData(){
    let res=main.innerHTML=""
    return res
}

function crele(ele){
    res=document.createElement(ele)
    return res
}

let div5=document.createElement('p')
let detail=document.createElement('details')
detail.innerHTML=' All the data is obtained from Free Dictionary API'
let summery=document.createElement('summary')
summery.innerHTML='Disclaimer'
detail.append(summery)
div5.append(detail)
document.body.append(div5)