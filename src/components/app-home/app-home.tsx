import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  
  render() {
    return (
      <div class="app-home">
        <todo-list></todo-list>
        <button-add-todo>Add a task</button-add-todo>
      </div>
    );
  }
}
