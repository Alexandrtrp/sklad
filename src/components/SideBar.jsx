import { Link } from "react-router";

export const SideBar = () => {
  return (
    <>
      <div className="productList">
        <Link className="productListLink" to="kisti003">
          Kisti003
        </Link>
        <Link className="productListLink" to="bit004">
          Bit004
        </Link>
        <Link className="productListLink" to="nozh">
          Nozh
        </Link>
        <Link className="productListLink" to="salfetka-stirka">
          SalfetkaStirka
        </Link>
      </div>
    </>
  );
};
