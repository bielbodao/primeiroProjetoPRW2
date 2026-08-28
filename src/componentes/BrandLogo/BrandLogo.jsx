import "./BrandLogo.css";

function BrandLogo({ marca, marcas }) {
  const info = marcas.find((item) => item.nome === marca);

  if (!info) return null;

  return (
    <span className="brand-logo">
      <img src={info.imagem} />
    </span>
  );
}

export default BrandLogo;
