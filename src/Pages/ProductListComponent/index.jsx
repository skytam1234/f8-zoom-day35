import styles from "./products.module.scss";
import React from "react";
function Products() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState({});

  function renderDetail(id) {
    const detail = document.querySelector(`.${styles.overlay}`);
    console.log(styles.overlay);
    console.log(detail);
    const product1 = products.filter((p) => p.id == id);
    detail.classList.add(styles.show);
    setProduct(product1[0]);
  }
  const handleOverlay = (e) => {
    const detailCard = e.target.closest(`.${styles["detail-card"]}`);
    console.log(detailCard);
    const detail = document.querySelector(`.${styles.overlay}`);
    if (!detailCard) {
      detail.classList.remove(styles.show);
    }
  };
  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
        .then((res) => res.json())
        .then((products) => setProducts(products))
        .finally(() => {
          setLoading(false);
        });
    }, 0);
  }, []);
  return (
    <>
      <div className={styles["product-grid"]}>
        {loading && <div>Loading...</div>}
        {products.map((product) => {
          return (
            <div className={styles["product-card"]} key={product.id}>
              <h2>{product.title}</h2>
              <p>
                {product.body.length < 101
                  ? product.body
                  : product.body.substring(0, 100)}
              </p>
              <button
                className={styles["detail-btn"]}
                onClick={() => {
                  renderDetail(product.id);
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles["overlay"]} onClick={handleOverlay}>
        <div className={styles["detail-container"]}>
          <div className={styles["detail-card"]}>
            <h2 className={styles["detail-title"]}>{product.title}</h2>
            <p className={styles["detail-body"]}>{product.body}</p>
            <div className={styles["detail-meta"]}>
              <span>Mã sản phẩm: #1</span>
              <span>Người đăng: User 1</span>
            </div>
            <a href="" className={styles["back-button"]}>
              ← Quay lại danh sách
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
