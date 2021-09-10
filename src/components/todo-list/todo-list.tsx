import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {

  @State() list: string[] = []
  @Listen('newTodo', {target: 'document'})

  newTodoHandler(e: CustomEvent<string>) {
    this.addTodo(e.detail)
  }

  addTodo(text) {
    this.list = [...this.list, text]
  }

  deleteTodo(text) {
    const newList = [...this.list]
    newList.splice(newList.indexOf(text), 1)
    this.list = [...newList]
  }

  render() {
    return (
      <ul class='todo-list'>
        {this.list.map(item => (
          <list-item text={item} deleteItem={this.deleteTodo.bind(this)}></list-item>
        ))}
      </ul>
    );
  }

}
