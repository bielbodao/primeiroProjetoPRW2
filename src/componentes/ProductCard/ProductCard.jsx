import BrandLogo from "../BrandLogo/BrandLogo";
import "./ProductCard.css";

function ProductCard({ produto, marcas }) {
  return (
    <article className="product-card">
      <div className="product-card-top">
        <BrandLogo marca={produto.marca} marcas={marcas} />
        <span className={`badge ${produto.condicao === "novo" ? "badge-novo" : "badge-usado"}`}>{produto.condicao}</span>
      </div>
      <h3>{produto.nome}</h3>
      <p className="product-marca">{produto.marca}</p>
      <p className="product-preco">{produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
    </article>
  );
}

export default ProductCard;
