import React from "react";
import styles from "./profile.module.scss";
function Profile() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((user) => setUser(user))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);
  return (
    <>
      <div className={styles["container"]}>
        {console.log(loading)}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={styles["content"]}>
              <div className={styles["avatar-block"]}>
                <img
                  src="https://auvi.edu.vn/wp-content/uploads/2025/02/anh-avatar-dep-1.jpg"
                  alt="Anh"
                  className={styles["avatar-img"]}
                />
              </div>
              <div className={styles["info-block"]}>
                <div
                  className={`${styles["info-name"]} ${styles["info-item"]}`}
                >
                  {user.name}
                </div>
                <div
                  className={`${styles["info-user"]} ${styles["info-item"]}`}
                >
                  {user.username}
                </div>
                <div
                  className={`${styles["info-email"]} ${styles["info-item"]}`}
                >
                  {user.email}
                </div>
                <div className={`${styles["info-web"]} ${styles["info-item"]}`}>
                  {user.website}
                </div>
                <div
                  className={`${styles["info-contact"]} ${styles["info-item"]}`}
                >
                  <div className={styles["info-contact-phone"]}>
                    {user.phone}
                  </div>
                  <div className={styles["info-contact-address"]}>
                    {user.address.street},{user.address.city}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Profile;
