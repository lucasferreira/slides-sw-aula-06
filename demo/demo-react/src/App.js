import { useState, useEffect } from "react";

import "./App.css";

function salvarLista(lista) {
  localStorage.setItem("lista", JSON.stringify(lista));
}

function recuperarLista() {
  const lista = localStorage.getItem("lista");
  if (lista !== null) {
    return JSON.parse(lista);
  }

  return [];
}

function FormNovoItem({ adicionaItem }) {
  const [nome, setNome] = useState("");
  const [qtd, setQtd] = useState(1);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        adicionaItem(nome, qtd);

        setNome("");
        setQtd(1);
      }}
      action=""
      method="post"
      style={{
        borderTop: "1px solid #ccc",
        marginTop: "26px",
        paddingTop: "16px",
      }}>
      <fieldset style={{ maxWidth: "320px" }}>
        <h3 style={{ marginBottom: "21px" }}>Novo Item</h3>
        <div className="form-group">
          <label htmlFor="item">Descrição do Item</label>
          <input
            type="text"
            className="form-control"
            id="item"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qtd">Qtd.</label>
          <input
            type="number"
            className="form-control"
            id="qtd"
            value={qtd}
            onChange={event => setQtd(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <span className="glyphicon glyphicon-plus"></span>
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}

function ListaItems({ lista = [], comprarItem, removerItem }) {
  return (
    <ul>
      {lista.length === 0 ? (
        <li className="empty">Nenhum item adicionado</li>
      ) : (
        lista.map((item, index) => (
          <li className={item.comprado ? "riscado" : ""} key={item.nome}>
            <strong>{item.nome}</strong> - {item.qtd}
            <button
              onClick={event => {
                event.preventDefault();
                comprarItem(index);
              }}>
              Comprar
            </button>
            <button
              onClick={event => {
                event.preventDefault();
                removerItem(index);
              }}>
              X
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

function App() {
  const [lista, setLista] = useState(recuperarLista());

  useEffect(() => {
    salvarLista(lista);
  }, [lista]);

  function adicionaItem(nome, qtd = 1) {
    setLista([...lista, { nome, qtd, comprado: false }]);
  }

  function comprarItem(index) {
    const novaListaAtualizada = lista.map((item, indexAtual) => {
      if (indexAtual === index) {
        item.comprado = item.comprado ? false : true;
      }
      return item;
    });
    setLista(novaListaAtualizada);
  }

  function removerItem(index) {
    const novaListaSemItem = lista.filter((item, indexAtual) => index !== indexAtual);
    setLista(novaListaSemItem);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Compras no Mercado</h1>
        <br />

        <ListaItems lista={lista} comprarItem={comprarItem} removerItem={removerItem} />
        <FormNovoItem adicionaItem={adicionaItem} />
      </div>
    </div>
  );
}

export default App;
