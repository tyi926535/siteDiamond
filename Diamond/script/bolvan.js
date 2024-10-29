
 var kup="11111138"; 
 let name=document.getElementById("PUP__name");
 name.setAttribute('value',TOVARSTYPE[kup].name);
 let price=document.getElementById("PUP__price");
 price.setAttribute('value',TOVARSTYPE[kup].price);
 let fashion=document.getElementById("PUP__fashion");
 fashion.setAttribute('value',TOVARSTYPE[kup].fashion);
 let producer=document.getElementById("PUP__producer");
 producer.setAttribute('value',TOVARSTYPE[kup].producer);
 [document.getElementById("PUP__param")][0].innerText=TOVARSTYPE[kup].param;

 let metall=document.getElementById("PUP__metall");
 metall.setAttribute('value',TOVARSTYPE[kup].metall);
 let insert=document.getElementById("PUP__insert");
 insert.setAttribute('value',TOVARSTYPE[kup].insert);
 let art=document.getElementById("PUP__art");
 art.setAttribute('value',TOVARSTYPE[kup].art);
 let trying=document.getElementById("PUP__trying");
 trying.setAttribute('value',TOVARSTYPE[kup].trying);
 let stone=document.getElementById("PUP__stone");
 stone.setAttribute('value',TOVARSTYPE[kup].stone);
 [document.getElementById("PUP__haracter")][0].innerText=TOVARSTYPE[kup].haracter;

[document.getElementById("PUP__description")][0].innerText=TOVARSTYPE[kup].description;
 let yui='tovarsjpg/'+kup+'.jpg';
 let imag=document.getElementById("PUP__img");
 imag.setAttribute('src',yui);
