import ProductCard from "../ProductCard/ProductCard";
import "./SectionCard.css";

function SectionCard({ secao, produtos, marcas }) {
  const produtosDaSecao = produtos.filter((produto) => produto.secao === secao);

  if (produtosDaSecao.length === 0) return null;

  return (
    <section className="section-card">
      <div className="section-card-header">
        <h2>{secao}</h2>
      </div>
      <div className="product-grid">{produtosDaSecao.map((produto) => <ProductCard key={produto.id} produto={produto} marcas={marcas} />)}</div>
    </section>
  );
}

export default SectionCard;
