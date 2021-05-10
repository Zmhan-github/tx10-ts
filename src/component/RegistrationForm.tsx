import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './RegistrationStyle.css'


const RegistrationForm = ({ callback }: any) => {


    const onRegister = (e: any) => {
        e.preventDefault()

        const prepareData = {
            email: e.target.elements.email.value,
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            password: e.target.elements.password.value
        }

        callback(JSON.stringify(prepareData))

    }


    return (
        <form className="My-form" noValidate autoComplete="off"
            onSubmit={(e) => onRegister(e)}
        >
            <Typography variant="h5" component="div">Enter to Site</Typography>
            <TextField id="email" label="Email Address" variant="outlined" fullWidth />
            <TextField id="firstName" label="First Name" variant="outlined" fullWidth/>
            <TextField id="lastName" label="Last Name" variant="outlined" fullWidth/>
            <TextField id="password" label="Password" variant="outlined" fullWidth/>
            <Typography align="left">
                <Button variant="outlined" color="primary" type="submit"

                >
                    Register
                </Button>
            </Typography>
        </form>

    )
}

export {
    RegistrationForm
}
