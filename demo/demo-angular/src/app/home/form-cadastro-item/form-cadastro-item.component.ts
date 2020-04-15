import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "form-cadastro-item",
  templateUrl: "./form-cadastro-item.component.html",
  styleUrls: ["./form-cadastro-item.component.css"],
})
export class FormCadastroItemComponent implements OnInit {
  @Output("adicionaItem") onAdicionaItem = new EventEmitter();

  nome = "";
  qtd = 1;

  constructor() {}

  ngOnInit(): void {}

  adicionaItem() {
    this.onAdicionaItem.emit([this.nome, this.qtd]);

    this.nome = "";
    this.qtd = 1;
  }
}
