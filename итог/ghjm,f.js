const change= document.getElementById("change")

function change_all(){

    if(document.getElementsByTagName('div')[3].innerText==='Zyryanova'){
        document.getElementsByTagName('div')[3].innerText='Зырянова';
        document.getElementsByTagName('div')[4].innerText='Ева';
        document.getElementsByTagName('div')[5].innerText='Игоревна';


    }
    else{
        if (document.getElementsByTagName('div')[3].innerText==='Зырянова'){
            document.getElementsByTagName('div')[3].innerText='Zyryanova';
            document.getElementsByTagName('div')[4].innerText='Eva';
            document.getElementsByTagName('div')[5].innerText='Igorevna';
        }
    }
}
change.addEventListener("click",change_all,)

const change_= document.getElementById("change_")

function change_all(){

  document.getElementsByTagName('div')[3].innerText='Zyryanova'
}

change_.addEventListener("click",change_all )