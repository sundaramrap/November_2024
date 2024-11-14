import Card from "../components/Card";
import PieChart from "../components/PieChart";
import TransactionTable from "../components/TransactionTable";
import GraphTopExp from "../components/GraphTopExp";
function Home() {
  return (
    <div>
      <h2 style={{ color: "white" }}>Expense Tracker</h2>
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <Card />
        <Card />
        <PieChart />
      </div>

      <div>
        This is 2nd row
        <TransactionTable />
        <GraphTopExp />
      </div>
    </div>
  );
}

export default Home;
