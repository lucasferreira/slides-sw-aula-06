import React, { useState, useEffect } from "react";
import "./App.css";

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

function FormCadastroItem({ adicionaItem }) {
  const [nome, setNome] = useState("");
  const [qtd, setQtd] = useState(1);

  return (
    <form
      action=""
      method="post"
      style={{
        borderTop: "1px solid #ccc",
        marginTop: 26,
        paddingTop: 16,
      }}>
      <fieldset style={{ maxWidth: 320 }}>
        <h3 style={{ marginBottom: 21 }}>Novo Item</h3>
        <div className="form-group">
          <label htmlFor="item">Descrição do Item</label>
          <input type="text" className="form-control" value={nome} onChange={event => setNome(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="qtd">Qtd.</label>
          <input type="number" className="form-control" value={qtd} onChange={event => setQtd(event.target.value)} />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            adicionaItem(nome, qtd);
            setNome("");
            setQtd(1);
          }}>
          <span className="glyphicon glyphicon-plus"></span>
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}

function ListaItems({ riscaItem, lista, fraseVazio }) {
  return (
    <ul>
      {lista.length === 0 ? (
        <li className="empty">{fraseVazio}</li>
      ) : (
        lista.map(item => {
          return (
            <li
              key={`${item.nome}:${item.qtd}`}
              onClick={() => riscaItem(item)}
              className={item.riscado ? "riscado" : ""}>
              <strong>{item.nome}</strong> - {item.qtd}
            </li>
          );
        })
      )}
    </ul>
  );
}

function ListaCompras() {
  const [lista, setLista] = useState(recuperaItensMemoria([]));

  const adicionaItem = (nome, qtd = 1) => {
    let novoItem = true;

    if (lista.length > 0) {
      setLista(
        lista.map(item => {
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
        })
      );
    }

    if (novoItem) {
      setLista([...lista, { nome, qtd, riscado: false }]);
    }
  };

  const riscaItem = item => {
    setLista(
      lista.map(currentItem => {
        if (item.nome === currentItem.nome && +item.qtd === +currentItem.qtd) {
          currentItem.riscado = !currentItem.riscado;
        }
        return currentItem;
      })
    );
  };

  useEffect(() => salvaItensMemoria(lista), [lista]);

  return (
    <div className="lista-compras">
      <ListaItems riscaItem={riscaItem} lista={lista} fraseVazio="Nenhum item adicionado na sua lista de compras" />
      <FormCadastroItem adicionaItem={adicionaItem} />
      <br />
      <pre>{JSON.stringify(lista, null, 2)}</pre>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://lh3.googleusercontent.com/proxy/u-FbJcOCapNDVcyR9Ez5-g-siDsvkPrVbn7B0baVrLLREkm9g1y6PJTOwLPzJ3BMFGBqqUlcg0Hwk92wf-XX7RHGoCnMBLFSDULYqtDe"
          alt="SATC"
        />
      </header>
      <main>
        <ListaCompras />
      </main>
    </div>
  );
}

export default App;
