import { Card, CardContent, CardActions, Button, Stack } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">Welcome!</h1>

      <Card className="bg-secondary mt-12 w-full max-w-md text-left">
        <CardContent>
          <div className="font-bold text-primary">Primary</div>
          <div className="text-secondary">Secondary</div>
          <div className="text-success">Success</div>
          <div className="text-warning">Warning</div>
          <div className="text-error">Error</div>
          <div className="text-info">Info</div>
        </CardContent>
        <CardActions>
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};

export default Home;
