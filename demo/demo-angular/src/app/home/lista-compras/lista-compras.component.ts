import { Component, OnInit } from "@angular/core";

function salvaItensMemoria(lista) {
  localStorage.setItem("listaCompras", JSON.stringify(lista));
}

function recuperaItensMemoria(base = []) {
  const lista = localStorage.getItem("listaCompras");
  if (lista === null) {
    return base;
  }

  return JSON.parse(lista);
}

@Component({
  selector: "lista-compras",
  templateUrl: "./lista-compras.component.html",
  styleUrls: ["./lista-compras.component.css"],
})
export class ListaComprasComponent implements OnInit {
  lista = [];

  constructor() {}

  ngOnInit(): void {
    this.lista = recuperaItensMemoria([]);
  }

  adicionaItem(nome, qtd = 1) {
    let novoItem = true;
    if (this.lista.length > 0) {
      this.lista = this.lista.map(item => {
        if (item.nome.toLowerCase() === nome.toLowerCase()) {
          if (item.riscado) {
            item.qtd = +qtd;
            item.riscado = false;
          } else {
            item.qtd = Number(item.qtd) + Number(qtd);
          }
          novoItem = false;
        }
        return item;
      });
    }

    if (novoItem) {
      this.lista.push({ nome, qtd, riscado: false });
    }

    salvaItensMemoria(this.lista);
  }

  riscaItem(item) {
    this.lista = this.lista.map(currentItem => {
      if (item.nome === currentItem.nome && +item.qtd === +currentItem.qtd) {
        currentItem.riscado = !currentItem.riscado;
      }
      return currentItem;
    });

    salvaItensMemoria(this.lista);
  }
}
