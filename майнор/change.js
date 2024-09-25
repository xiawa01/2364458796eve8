
const change_= document.getElementById("change_")

function change_all(){

    if(document.getElementsByTagName('div')[3].innerText==='Zyryanova'){
        document.body.style.backgroundImage = "url('passpotr_shablon.png')";
        document.getElementsByTagName('div')[3].innerText='Зырянова';
        document.getElementsByTagName('div')[4].innerText='Ева';
        document.getElementsByTagName('div')[5].innerText='Игоревна';
        document.getElementsByTagName('div')[6].innerText='жен.';
        document.getElementsByTagName('div')[8].innerText='Барнаул';
        document.getElementsByTagName('div')[0].innerText='УФМС РОССИИ ПО ГОР. МОСКВЕ \n ПО РАЙОНУ x';
        document.getElementsByTagName('div')[1].innerText='01.01.01';
        document.getElementsByTagName('div')[2].innerText='200-400';
        document.getElementsByTagName('div')[3].style.marginTop='140px';
        document.getElementsByTagName('div')[3].style.marginLeft='250px';
        document.getElementsByTagName('div')[4].style.marginTop='30px';
        document.getElementsByTagName('div')[4].style.marginLeft='250px';
        document.getElementsByTagName('div')[6].style.marginTop='5px';
        document.getElementsByTagName('div')[7].style.marginTop='-55px';
        document.getElementsByTagName('div')[7].style.marginLeft='28px';
        document.getElementById('change_').style.top='300px';
        document.getElementById('change_').style.left='100px';


    }
    else{
        if (document.getElementsByTagName('div')[3].innerText==='Зырянова'){
            document.body.style.backgroundImage = "url('eng_pas.jpg')";
            document.getElementsByTagName('div')[3].innerText='Zyryanova';
            document.getElementsByTagName('div')[4].innerText='Eva';
            document.getElementsByTagName('div')[5].innerText='';
            document.getElementsByTagName('div')[6].innerText='fem.';
            document.getElementsByTagName('div')[8].innerText='';
            document.getElementsByTagName('div')[3].style.marginTop='360px';
            document.getElementsByTagName('div')[3].style.marginLeft='200px';
            document.getElementsByTagName('div')[4].style.marginTop='15px';
            document.getElementsByTagName('div')[4].style.marginLeft='200px';
            document.getElementsByTagName('div')[6].style.marginTop='55px';
            document.getElementsByTagName('div')[7].style.marginTop='-100px';
            document.getElementsByTagName('div')[7].style.marginLeft='10px';
            document.getElementsByTagName('div')[0].innerText='';
            document.getElementsByTagName('div')[1].innerText='';
            document.getElementsByTagName('div')[2].innerText='';
            document.getElementById('change_').style.top='300px';
            document.getElementById('change_').style.left='100px';

        }
    }
}

change_.addEventListener("click",change_all,)
