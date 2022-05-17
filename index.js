let j =0;
    while(j<4){
        document.querySelectorAll('.remove')[j].addEventListener('click',(e)=>{
        e.target.parentNode.remove();
    })
    j+=1;
}
    document.querySelector('#btn').addEventListener('click',(e)=>{
        let inputValue = e.target.previousElementSibling.value ;
        if(inputValue == ''){
            return;
        }
      let mySpan =  document.createElement('span');
      mySpan.className = 'remove';
      mySpan.innerText = 'delete';
      let myLi = document.createElement('li')
      myLi.className = 'list';
      let myText = document.createElement('span');
      myText.className = 'text';
      myText.innerText = inputValue;
      e.target.previousElementSibling.value = '';
      myLi.appendChild(myText);
      myLi.appendChild(mySpan);
      document.querySelector('ul').appendChild(myLi);
      mySpan.addEventListener('click',(e)=>{
      e.target.parentNode.remove();
    })
})

document.querySelector('#search').addEventListener('input',(e)=>{
    let elementList = document.querySelector('ul').children;
    Array.from(elementList).forEach((element)=>{
        let title = element.querySelector('.text');
        if(title.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = 'flex';
        }else{
            element.style.display = 'none';
        }

    })
})
