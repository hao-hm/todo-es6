import TodoList from './todo-list';

const items = [];
document.getElementById('add-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('input-text').value;
  if(name){
    items.push({name});
    const list = new TodoList(items);
    document.getElementById('content').innerHTML = list.render();
  }
});
