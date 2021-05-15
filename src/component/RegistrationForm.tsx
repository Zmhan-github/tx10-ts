import './RegistrationStyle.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

const RegistrationForm = () => {
  const [field, setField] = useState([
    {
      id: 1
    }
  ]);
  const onRegister = (e: any) => {
    e.preventDefault();
  };

  const addNewFiled = () => {
    console.log('New Fielf');
    try {
      let counter = field[field.length - 1].id;
      counter++;
      const newArray = [];
      field.forEach((item) => {
        newArray.push(item);
      });
      newArray.push({ id: counter });
      setField(newArray);
    } catch (error) {
      let counter = 0;
      counter++;
      const newArray = [];
      newArray.push({ id: counter });
      setField(newArray);
    }
  };

  const removeFiledById = (id: number) => {
    const find = field.filter((item) => item.id !== id);
    setField(find);
  };

  return (
    <form autoComplete="off" className="My-form" noValidate onSubmit={(e) => onRegister(e)}>
      <Typography component="div" variant="h5">
        Enter to Site
      </Typography>
      {field.map((item) => {
        return (
          <div className="My-field" key={item.id}>
            <TextField fullWidth id="email" label="Email Address" variant="outlined" />
            <Button color="secondary" variant="outlined" onClick={() => removeFiledById(item.id)}>
              Remove
            </Button>
          </div>
        );
      })}

      <div className="My-field">
        <Button color="primary" variant="outlined" onClick={() => addNewFiled()}>
          Add
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
