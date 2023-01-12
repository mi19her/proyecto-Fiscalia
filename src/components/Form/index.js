import React, { Fragment } from "react";
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    Button,
    Select,
    MenuItem
} from '@mui/material';


const Form = () => {
    const [age, setAge] = React.useState('20');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Fragment>
            <Paper>
                <Box px={4} py={3}>
                    <Typography variant="h6" align="center" margin="dense">
                        Registro de Persona examinada
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="fullname"
                                name="fullname"
                                label="Apellidos y Nombres"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Fecha de nacimiento"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Select
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Meses</MenuItem>
                                <MenuItem value={20}>Años</MenuItem>
                                <MenuItem value={30}>Dias</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Edad"
                                type="number"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Pais"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Dirección"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography >
                                Fecha de nacimiento
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Departamento"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Provincia"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Distrito"
                                type="number"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                    </Grid>
                    <Box mt={3}>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Guardar
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Fragment>
    )
}

export default Form;
