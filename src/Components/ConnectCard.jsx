function ConnectCard() {
  return (
    <section className="connect-card">

      <div className="connect-icon">
        <i className="fa-solid fa-plug"></i>
      </div>

      <h2>Ready to Connect</h2>

      <p>
        Click below to open the secure Plaid verification window.
        This will open in a new, encrypted layer.
      </p>

      <button className="connect-button">
        <i className="fa-solid fa-bolt"></i>
        Connect Account
      </button>

      <span className="secure-text">
        <i className="fa-solid fa-lock"></i>
        Secured by 256-bit AES encryption
      </span>

    </section>
  );
}

export default ConnectCard;