import './RegistrationStyle.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const RegistrationForm = ({ callback }: any) => {
  const onRegister = (e: any) => {
    e.preventDefault();

    const prepareData = {
      email: e.target.elements.email.value,
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      password: e.target.elements.password.value,
    };

    callback(JSON.stringify(prepareData));
  };

  return (
    <form autoComplete="off" className="My-form" noValidate onSubmit={(e) => onRegister(e)}>
      <Typography component="div" variant="h5">
        Enter to Site
      </Typography>
      <TextField fullWidth id="email" label="Email Address" variant="outlined" />
      <TextField fullWidth id="firstName" label="First Name" variant="outlined" />
      <TextField fullWidth id="lastName" label="Last Name" variant="outlined" />
      <TextField fullWidth id="password" label="Password" variant="outlined" />
      <Typography align="left">
        <Button color="primary" type="submit" variant="outlined">
          Register
        </Button>
      </Typography>
    </form>
  );
};

export default RegistrationForm;
