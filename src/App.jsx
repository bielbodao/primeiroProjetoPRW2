import Header from './componentes/Header/Header'
import { useState } from "react";
import ProductForm from "./componentes/ProductForm/ProductForm";
import SectionCard from "./componentes/SectionCard/SectionCard";
import "./App.css";

const SECOES = [
  "Computadores",
  "Acessórios",
  "Impressoras",
  "Games",
  "Gadgets",
];

const MARCAS = [
  { nome: "HP", imagem: "/imagens/HP.png" },
  { nome: "Dell", imagem: "/imagens/Dell.png" },
  { nome: "Positivo", imagem: "/imagens/Positivo.png" },
  { nome: "Asus", imagem: "/imagens/Asus.png" },
  { nome: "Xing Ling (genérico)", imagem: "/imagens/Generico.jfif" },
];

function App() {
  const [produtos, setProdutos] = useState([]);

  function adicionarProduto(produto) {
    setProdutos((produtosAtuais) => [...produtosAtuais, produto]);
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductForm
          marcas={MARCAS}
          secoes={SECOES}
          onAdicionar={adicionarProduto}
        />
        <div className="sections-wrapper">
          {SECOES.map((secao) => (
            <SectionCard key={secao} secao={secao} produtos={produtos} marcas={MARCAS} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App