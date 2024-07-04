import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";



const From = () => {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = () => {
        handleClick()
        console.log("jj")
    }
    const users = [
        {
            value: "admin",
            label: "Admin",
        },
        {
            value: "manger",
            label: "Manger",
        },
        {
            value: "user",
            label: "User",
        },
    ]
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Box
            onSubmit={handleSubmit(onSubmit)}
            component="form" sx={{ display: " flex", flexDirection: "column", gap: 3 }}>
            <Stack direction={"row"} gap={3}>
                <TextField
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName ? "This field is required & min 7 character" : null}

                    {...register("firstName", { required: true, minLength: 4 })}
                    sx={{ flex: 1 }} label="Name" variant="filled" />
                <TextField

                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName ? "This field is required & min 7 character" : null}

                    {...register("lastName", { required: true, minLength: 2 })}
                    sx={{ flex: 1 }} label="Last Name" variant="filled" />
            </Stack>
            <TextField
                error={Boolean(errors.email)}
                helperText={errors.email ? "Please provide a valid email address" : null}
                {...register("email", { required: true, pattern: regEmail })}

                label="Email" variant="filled" />
            <TextField
                error={Boolean(errors.number)}
                helperText={errors.number ? "Please provide a valid Phone number" : null}

                {...register("number", { required: true, pattern: phoneRegExp })}
                label="Number" variant="filled" />
            <TextField

                label="address 1" variant="filled" />
            <TextField

                label="address 2" variant="filled" />


            <TextField
                id="outlined-select-currency"
                select
                label="Role"
                defaultValue="user"
            >
                {users.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <Box sx={{ textAlign: "  right" }}>
                <Button type="submit" variant="contained">   Create New User</Button>

                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
                        Account created successfully
                    </Alert>
                </Snackbar>




            </Box>
        </Box >


    );
}

export default From;
