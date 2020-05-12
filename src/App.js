import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Gallery from './Gallery';

function App() {
  return (
    <Container style={{flexGrow: 1}}>
      <Paper style={{ width: '70vw', height: '70vh', margin: 'auto', marginTop: 30}} elevation={5}>
        <Gallery />
      </Paper>
    </Container>
  );
}

export default App;
