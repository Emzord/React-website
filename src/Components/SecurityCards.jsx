function SecurityCards() {
  return (
    <section className="security-cards">

      <div className="security-card">
        <div className="security-icon">
          <i className="fa-solid fa-lock"></i>
        </div>

        <div>
          <h3>256-bit Encryption</h3>
          <p>
            Military-grade AES encryption ensures your data remains private
            and unreadable to third parties.
          </p>
        </div>
      </div>

      <div className="security-card">
        <div className="security-icon">
          <i className="fa-solid fa-shield-halved"></i>
        </div>

        <div>
          <h3>Privacy Focused</h3>
          <p>
            We never store your login credentials. Connections are established
            via secure OAuth tokens.
          </p>
        </div>
      </div>

      <div className="security-card">
        <div className="security-icon">
          <i className="fa-solid fa-eye-slash"></i>
        </div>

        <div>
          <h3>Read-Only Access</h3>
          <p>
            We only sync transaction data to help you save. We cannot move
            funds or make changes to your bank.
          </p>
        </div>
      </div>

    </section>
  );
}

export default SecurityCards;