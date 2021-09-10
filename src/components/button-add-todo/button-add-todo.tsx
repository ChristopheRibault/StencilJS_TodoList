import { Component, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'button-add-todo',
  styleUrl: 'button-add-todo.css',
  shadow: true,
})
export class ButtonAddTodo {

  @Event() newTodo: EventEmitter<string>;
  @State() value: string;

  handleChange(e) {
    this.value = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault()
    this.newTodo.emit(this.value)
    this.value = ''
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={this.value} onInput={(e) => this.handleChange(e)} />
        <input type="submit" value='Add a task' />
      </form>
    );
  }

}
