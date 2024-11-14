import Card from "../components/Card";

function Home() {
  return (
    <div>
      <h2 style={{ color: "white" }}>Expense Tracker</h2>
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
