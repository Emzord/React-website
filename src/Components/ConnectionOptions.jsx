import backgroundImage from "../assets/Container.png";

function ConnectionOptions() {
  return (
    <section className="connection-options">

      <div className="institutions-card">
        <img src={backgroundImage} alt="10,000+ Institutions" />
      </div>

      <div className="search-bank-card">
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>Search all banks</p>
      </div>

      <div className="direct-connect-card">
        <i className="fa-solid fa-link"></i>
        <p>Direct Connect</p>
      </div>

    </section>
  );
}

export default ConnectionOptions;