import TodoItem from './todo-item';

export default class TodoList {
  constructor(items){
    this.items = items;
  }
  render(){
    return `<ul>
              ${this.items.map(item => {
              return new TodoItem(item).render()
            }).join('')}
           </ul>`
  }
}