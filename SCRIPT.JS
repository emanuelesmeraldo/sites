const word = document.getElementById('Word')
const sign = document.getElementById('sign')
let b = 1

temp = []

function muda(){
    
    //pega uma palavra aleatroroia
axios.get("https://api.dicionario-aberto.net/random").then((res)=>{
    word.textContent=res.data.word



axios.get(`https://api.dicionario-aberto.net/word/${word.textContent}`).then((res)=>{
    const dado = res.data[0].xml
    
    const def = dado.match(/<def>([^<]+)<\/def>/)[1].trim()
    console.log(def)

    sign.textContent = def
    

   

})


})

}