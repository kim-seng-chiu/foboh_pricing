// import { useState } from 'react'
import './App.css'
import { Button, Typography, Container } from "@mui/material"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Container style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to MUI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}

export default App;
