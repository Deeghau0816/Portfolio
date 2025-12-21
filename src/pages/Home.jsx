export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Thank you 🙌</h1>
        <p>Click below to view my newest portfolio.</p>

        <a
          href="https://deeghau0816.github.io/Portfolio"
          target="_blank"
          rel="noreferrer"
          style={styles.button}
        >
          Click here for my newest Portfolio →
        </a>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#f4f6f8",
    fontFamily: "system-ui, Segoe UI, Roboto, Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 16px 40px rgba(0,0,0,.12)",
    textAlign: "center",
    maxWidth: "720px",
    width: "92%",
  },
  button: {
    display: "inline-block",
    marginTop: "18px",
    padding: "12px 20px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700",
    background: "#4f46e5",
    color: "#fff",
  },
};
