

    let i = 0;
    let input = document.getElementById('input-box');
    let btn = document.getElementById('btn');
function createTodo() {
    let paragraph = document.getElementById(`myP${i}`);
    const toDo = document.getElementById(`to-dos${i}`);
    
    if(!input.value) return;

    else if(i >= 4 ) return ;
    
     paragraph.textContent = input.value;
    toDo.style.visibility = 'visible';
  
    i += 1;
    console.log(i)
    input.value = ''
}
