import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { RegistrationForm } from './component/RegistrationForm'
import './App.css';



function App() {
    const [data, setData] = useState<string>('')

    const callback = (data: string) => {
        setData(data)
    }


  return (
    <div className="App">
        <CssBaseline />
        <Container maxWidth="sm">
            <RegistrationForm callback={callback} />
            <code>{data}</code>
        </Container>
    </div>
  );
}

export default App;
