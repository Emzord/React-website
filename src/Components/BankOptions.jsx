function BankOptions() {
  return (
    <section className="bank-section">

      <div className="bank-card">
        <div className="bank-icon">
          <i className="fa-solid fa-building-columns"></i>
        </div>
        <p>Chase Bank</p>
      </div>

      <div className="bank-card">
        <div className="bank-icon faded">
          <i className="fa-solid fa-landmark"></i>
        </div>
        <p>Wells Fargo</p>
      </div>

      <div className="bank-card">
        <div className="bank-icon faded">
          <i className="fa-solid fa-wallet"></i>
        </div>
        <p>Bank of America</p>
      </div>

      <div className="bank-card">
        <div className="bank-icon faded">
          <i className="fa-solid fa-money-bill"></i>
        </div>
        <p>Citibank</p>
      </div>

    </section>
  );
}

export default BankOptions;