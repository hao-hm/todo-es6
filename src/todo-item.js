export default class TodoItem {
  constructor({name}){
    this.name = name;
  }
  render(){
    return `<li>${this.name}</li>`
  }
}
