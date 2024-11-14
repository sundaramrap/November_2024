import Card from "../components/Card";
import PieChartCard from "../components/PieChartCard";
import TransactionTable from "../components/TransactionTable";
import GraphTopExp from "../components/GraphTopExp";
function Home() {
  return (
    <div>
      <h2 style={{ color: "white" }}>Expense Tracker</h2>
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <Card />
        <Card />
        <PieChartCard style={{ flex: "1 1 300px" }} />
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
