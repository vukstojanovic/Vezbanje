import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  background: linear-gradient(45deg, #333, #999);
  border: 0;
  border-radius: 15px;
  color: white;
  padding: 10px 30px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(45deg, #999, #333);
  }
`;

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<SaveIcon />}
          checkedIcon={<DeleteIcon />}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          color="secondary"
        />
      }
      label="Testing checkbox"
    />
  );
}

function App() {
  return (
    <Container maxWidth="md">
      <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar justifyContent="space-between">
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">MUI Theming</Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h4">Let's type</Typography>
          <StyledBtn>Test Styled Button</StyledBtn>
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="email"
          />
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Paper style={{ height: 75, width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Paper style={{ height: 75, width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Paper style={{ height: 75, width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Paper style={{ height: 75, width: "100%" }} />
            </Grid>
          </Grid>
          <CheckboxExample />
          <ButtonGroup variant="contained">
            <Button
              onClick={() => alert("hello")}
              startIcon={<SaveIcon />}
              color="primary"
            >
              Save
            </Button>
            <Button startIcon={<DeleteIcon />} color="secondary">
              Delete
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Container>
  );
}

export default App;
