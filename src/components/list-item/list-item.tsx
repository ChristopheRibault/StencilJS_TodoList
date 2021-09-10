import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'list-item',
  styleUrl: 'list-item.css',
  shadow: true,
})
export class ListItem {
  @State() editionMode: boolean;
  @Prop() text: string;
  @Prop() deleteItem;

  delete() {
    this.deleteItem(this.text);
  }
  toggleEdit() {
    this.editionMode = !this.editionMode
  }
  handleChange(e) {
    this.text = e.target.value
  }

  render() {
    return (
      <li class='list-item'>
        <input type="checkbox" name="" id="" />
        {this.editionMode ?
          <input id='item-input' class='hidden' type="text" value={this.text} onInput={(e) => this.handleChange(e) } /> :
          <p id='item-text'>{this.text}</p>
        }
        <button onClick={() => this.toggleEdit()}>editer</button>
        <button onClick={() => this.delete()}>supprimer</button>
      </li>
    );
  }

}
