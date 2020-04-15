import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lista-items",
  templateUrl: "./lista-items.component.html",
  styleUrls: ["./lista-items.component.css"],
})
export class ListaItemsComponent implements OnInit {
  @Output("riscaItem") onRiscaItem = new EventEmitter();
  @Input() lista = [];

  constructor() {}

  ngOnInit(): void {}

  riscaItem(item) {
    this.onRiscaItem.emit(item);
  }
}
