const MESSAG1024={
"1":{
    "myn":'Хотите зайти в личный кабинет?',
    "otvet":'Нажми на кнопку <Войти/Личный кабинет>',
},
"2":{
    "myn":'Хотите зарегистрироваться?',
    "otvet":'Нажми на кнопку <Регистрация>',
},
"3":{
    "myn":'Хотите оставить отзыв или связаться с нами?',
    "otvet":'Нажми на вкладку <Обратная связь/Контакты>',
},
"4":{
    "myn":'Хотите узнать больше о наших партнерах?',
    "otvet":'Нажми на вкладку <Мы сотрудничаем>',
},

"5":{
    "myn":'Хотите ознакомиться с ассортиментом товара? ',
    "otvet":'Нажми на вкладку <Каталог>',
},
"6":{
    "myn":'Я Вас не понимаю. Попробуйте ввести запрос снова',
    "otvet":'Это автоматически сгенерированные сообщения',
},
}





var btn1024= document.createElement('button');
btn1024.id='btn1024';
btn1024.textContent='(◕◡◕)';
var blok1024=document.createElement('div');
blok1024.id='blok1024';
var nz1024=document.createElement('textarea');
nz1024.id='nz1024';
var bn1024= document.createElement('button');
bn1024.id='bn1024';
bn1024.textContent='>>';
document.body.appendChild(btn1024); // Добавить в тело
btn1024.before(blok1024);
blok1024.append(nz1024);//В конец внутрь блока blok1024
nz1024.before(bn1024); //Перед nz1024
var mes1024=document.createElement('div');
mes1024.id='mes1024';
bn1024.before(mes1024);

var hi1024=document.createElement('textarea');
    hi1024.id='hi1024';
    hi1024.disabled='disabled';
    hi1024.style.height=40 + "px";
    hi1024.textContent='Вас приветствует компания Диаманд';
    mes1024.prepend(hi1024); //В начало внутрь блока mes1024
var menu1024=document.createElement('textarea');
    menu1024.id='menu1024';
    menu1024.disabled='disabled';
    menu1024.style.height=190 + "px";
    menu1024.textContent='1:'+MESSAG1024[1].myn+'\n2:'+MESSAG1024[2].myn+'\n3:'+MESSAG1024[3].myn+'\n4:'+MESSAG1024[4].myn+'\n5:'+MESSAG1024[5].myn+'\nВведите одну из цифр от 1 до 5';
    hi1024.after(menu1024);

    
     

btn1024.onclick=function(){
   var vbh=document.getElementById("blok1024");
    if (vbh.style.display=="none"){
        vbh.style.display = "block";
    }
    else{
        vbh.style.display = "none";
    }
}
bn1024.onclick=function(){
    var  myt1024=document.createElement('textarea');
    myt1024.id='myt1024';
    myt1024.disabled='disabled';
    var polt1024=document.createElement('textarea');
    polt1024.id='polt1024';
    polt1024.disabled='disabled';
    let lk=0;
    let val=nz1024.value;
    if(val!=''){
     polt1024.textContent=val;
     mes1024.append(polt1024);   
    for(i=1; i<6; i++){
        if(val==i){
            myt1024.textContent=MESSAG1024[i].otvet;
            mes1024.append(myt1024); 
            lk=1;
        }
    }
    if (lk!=1){
        myt1024.textContent='Я Вас не понимаю. Попробуйте ввести запрос снова';
        mes1024.append(myt1024); 
    }
}

}

