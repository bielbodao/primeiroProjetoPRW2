import { useState } from "react";
import "./ProductForm.css";

function ProductForm({ marcas, secoes, onAdicionar }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [secao, setSecao] = useState(secoes[0]);
  const [marca, setMarca] = useState(marcas[0].nome);
  const [condicao, setCondicao] = useState("novo");

  function handleSubmit(event) {
    event.preventDefault();
    const valor = Number(preco);

    if (!nome.trim() || valor <= 0) {
      alert("Informe o nome e um preço maior que zero.");
      return;
    }

    onAdicionar({
      nome: nome.trim(),
      preco: valor,
      secao,
      marca,
      condicao,
    });

    setNome("");
    setPreco("");
    setCondicao("novo");
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Cadastrar produto</h2>
      <div className="form-row">
        <label>Nome</label>
        <input type="text" placeholder="Ex: Notebook Gamer 15''" value={nome} onChange={(event) => setNome(event.target.value)} required />
      </div>
      <div className="form-row">
        <label>Preço (R$)</label>
        <input type="number" min="0.01" step="0.01" placeholder="Ex: 2999.90" value={preco} onChange={(event) => setPreco(event.target.value)} required />
      </div>
      <div className="form-row form-row-inline">
        <div>
          <label>Seção</label>
          <select value={secao} onChange={(event) => setSecao(event.target.value)}>{secoes.map((item) => <option key={item}>{item}</option>)}</select>
        </div>
        <div>
          <label>Marca</label>
          <select value={marca} onChange={(event) => setMarca(event.target.value)}>{marcas.map((item) => <option key={item.nome}>{item.nome}</option>)}</select>
        </div>
      </div>
      <fieldset className="form-row condition-field">
        <legend>Condição</legend>
        <div className="radio-group">
          <label><input type="radio" name="condicao" value="novo" checked={condicao === "novo"} onChange={(event) => setCondicao(event.target.value)} /> Novo</label>
          <label><input type="radio" name="condicao" value="usado" checked={condicao === "usado"} onChange={(event) => setCondicao(event.target.value)} /> Usado</label>
        </div>
      </fieldset>
      <button type="submit" className="btn-primary">Inserir produto</button>
    </form>
  );
}

export default ProductForm;
