import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-item',
  styleUrl: 'list-item.css',
  shadow: true,
})
export class ListItem {
  @Prop() text: string;
  @Prop() deleteItem;

  delete() {
    this.deleteItem(this.text);
  }

  render() {
    return (
      <li class='list-item'>
        <input type="checkbox" name="" id="" />
        <p>{this.text}</p>
        <button>editer</button>
        <button onClick={() => this.delete()}>supprimer</button>
      </li>
    );
  }

}
