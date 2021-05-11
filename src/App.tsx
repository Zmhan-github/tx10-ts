import './App.css';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';

import RegistrationForm from './component/RegistrationForm';

const App: any = () => {
  const [data, setData] = useState<string>('');

  const callback = (jsonStr: string) => {
    setData(jsonStr);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <RegistrationForm callback={callback} />
        <code>{data}</code>
      </Container>
    </div>
  );
};

export default App;
