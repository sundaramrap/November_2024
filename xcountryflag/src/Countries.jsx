// card -->self made card
// function which should have card in it and them we will map card in it and fetch data from the api through promise

const Card = () => {
  return (
    <div
      className="XcountrtyFlag"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "row",
        border: " 2px solid #ccc",
        borderRadius: "20px",
        alignItems: "center",
        padding: "10px",
        margin: "10px",
        height: "120px",
        width: "120px",
      }}
    >
      <img
        src="https://think360studio-media.s3.ap-south-1.amazonaws.com/photo/plugin/article/2021/india-flag-wallpaper-2021-1-12082021.png"
        alt="alternative_name"
        style={{ width: "50px", height: "50px" }}
      />
      <h5>Country Name</h5>
    </div>
  );
};

function Countries() {
  const array = [1, 2, 3, 4, 5];
  return (
    <>
      {array.map((item) => (
        <Card />
      ))}
    </>
  );
}

export default Countries;
