const Card = () => {
  return (
    <div
      className="card"
      style={{ width: "80px", height: "60px", border: "1px solid red" }}
    >
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png"
          height={"30 px"}
        />
      </div>
    </div>
  );
};

function Countries() {
  return (
    <>
      <Card />
    </>
  );
}

export default Countries;
