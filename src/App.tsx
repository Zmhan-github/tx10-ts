import './App.css';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import RegistrationForm from './component/RegistrationForm';

const App: any = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <RegistrationForm />
      </Container>
    </div>
  );
};

export default App;
