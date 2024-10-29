var out='';
out+='<ul class="TR">';
for(var key in TOVARSTYPE){
    let imgin=document.createElement('img');
    imgin.setAttribute('data-key',key);
    imgin.src='tovarsjpg/'+key+'.jpg';
    out+='<li class="tov">'+' <div class="popup_link"><img class="tova__img popup_link" src="tovarsjpg/'+key+'.jpg"'+'id="'+key+'"></div>';
    out+='<h4 class="tova__name popup_link"'+'id="'+key+'">'+TOVARSTYPE[key].name+'</h4>';
    out+='<a href="bolvan.html"> <button class="tova__but">Купить</button></a>'+'</li>';
}
out+='</ul>';
document.getElementById('imgOut').innerHTML=out;




imgOut.addEventListener('click',showinfo);
function showinfo(event){
 kup=event.target.id; 
 let name=document.getElementById("PUP__name");
 name.setAttribute('value',TOVARSTYPE[kup].name);
 let price=document.getElementById("PUP__price");
 price.setAttribute('value',TOVARSTYPE[kup].price);
 let fashion=document.getElementById("PUP__fashion");
 fashion.setAttribute('value',TOVARSTYPE[kup].fashion);
 let producer=document.getElementById("PUP__producer");
 producer.setAttribute('value',TOVARSTYPE[kup].producer);
 let metall=document.getElementById("PUP__metall");
 metall.setAttribute('value',TOVARSTYPE[kup].metall);
 let insert=document.getElementById("PUP__insert");
 insert.setAttribute('value',TOVARSTYPE[kup].insert);
 let yui='tovarsjpg/'+kup+'.jpg';
 let imag=document.getElementById("PUP__img");
 imag.setAttribute('src',yui);
 console.log(imag);


/*
    gup+='<img class="PUP__img" src="tovarsjpg/'+kup+'.jpg">';
    gup+='<h4 href=""class="PUP__name">'+TOVARSTYPE[kup].name+'</h4>';
    gup+='<h2 href=""class="PUP__price">'+TOVARSTYPE[kup].price+'</h2>';
    gup+='<p href=""class="PUP__fashion">'+TOVARSTYPE[kup].fashion+'</p>';
    gup+='<p href=""class="PUP__producer">'+TOVARSTYPE[kup].producer+'</p>';
    gup+='<p href=""class="PUP__metall">'+TOVARSTYPE[kup].metall+'</p>';
    gup+='<p href=""class="PUP__insert">'+TOVARSTYPE[kup].insert+'</p>';
    gup+='<a href="bolvan.html"> <button class="tova__but">Больше информации о товаре</button></a>'; 
 

  document.getElementById('popup__Info').innerHTML=gup;
console.log(popup__Info);
*/
}




const btns = document.querySelectorAll('.popup_link');
const modalOverlay = document.querySelector('.popup__body');
const modals = document.querySelectorAll('.popup__Info');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('popup__Info--visible');
		});
		document.querySelector(`[data-target="form-popup"]`).classList.add('popup__Info--visible');
		modalOverlay.classList.add('popup__body--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('popup__body--visible');
		modals.forEach((el) => {
			el.classList.remove('popup__Info--visible');
		});
	}
});



