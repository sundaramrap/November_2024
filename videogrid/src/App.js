import SearchBar from "./components/SearchBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import cupData from "./data.json";

function App() {
  const videos = cupData;
  console.log(videos);

  return (
    <>
      <SearchBar />

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          videos.map(videos)={videos.}
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
          ></Typography>
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
          <Button size="small"></Button>
        </CardActions>
      </Card>
    </>
  );
}

export default App;
