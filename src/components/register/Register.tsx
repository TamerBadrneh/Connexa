// imports
// MUI components
import { Avatar, Box, Button, Card, CardContent, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Link, Stack, TextField, Typography, } from "@mui/material";

// MUI icons
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// React
import React, { useState } from "react";

// Other libraries
import axios from "axios";
import { z as zod } from "zod/v4";


const RegistrationSchema = zod.object({
    name: zod.string().min(2, "Name is required").
        max(64, "Name must be at most 64 characters long"),
    username: zod.string().min(2, "Username must be at least 2 characters long").
        max(32, "Username must be at most 32 characters long"),
    email: zod.email("Invalid email address"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: zod.string().min(1, "Please confirm your password"),
    image: zod.instanceof(File).optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
});

type RegistrationFormData = zod.infer<typeof RegistrationSchema>;


const Register = () => {
    // Hooks
    const [userFormData, setUserFormData] = useState<RegistrationFormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    });

    const [formErrors, setFormErrors] = useState<RegistrationFormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    });

    const [backEndError, setBackEndError] = useState<string | null>(null);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    // Handlers & Functions
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserFormData((prev) => ({ ...prev, image: event.target.files ? event.target.files[0] : undefined }));
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserFormData((prev) => ({ ...prev, name: event.target.value }));
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserFormData((prev) => ({ ...prev, username: event.target.value }));
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserFormData((prev) => ({ ...prev, email: event.target.value }));
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserFormData((prev) => ({ ...prev, password: event.target.value }));
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserFormData((prev) => ({ ...prev, confirmPassword: event.target.value }));

    const isHavingError = (field: keyof RegistrationFormData) => Boolean(formErrors[field]);

    const registerUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationResult = zod.safeParse(RegistrationSchema, userFormData);

        if (validationResult instanceof zod.ZodError || !validationResult.success) {
            for (const [key] of Object.entries(formErrors))
                setFormErrors((prev) => ({ ...prev, [key]: validationResult.error?.issues.find(issue => issue.path.includes(key))?.message || "" }));
            return;
        }

        setFormErrors({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
        })

        setShowLoader(true);

        const payload = new FormData();

        for (const [key, value] of Object.entries(userFormData))
            if (value !== undefined)
                payload.append(key, value instanceof Blob ? value : String(value));

        axios.post(`${import.meta.env.VITE_API_URL}/register`, payload, {
            headers: {
                Accept: "application/json"
            }
        })
            .then((response) => console.log(response.data))
            .catch((error) => {
                setBackEndError(error.response?.data?.message || "An error occurred while registering.");
                setOpenErrorDialog(true);
            }).finally(() => setShowLoader(false));
    }

    // Render
    return <>

        {/* Layout */}
        <Stack height="100dvh" justifyContent="center">
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }}>

                    {/* Form */}
                    <CardContent>

                        {/* Header */}
                        <Typography variant="h1" sx={{ mt: 2, mb: 4 }}>
                            <Typography variant="h1" display="inline" color="primary">Create </Typography>
                            New Account
                        </Typography>


                        <form onSubmit={registerUser}>

                            {/* User Image Selection */}
                            <Stack alignItems="center" sx={{ gap: 1 }}>
                                <Box position="relative" width={100} height={100}>
                                    <Avatar
                                        src={userFormData.image ? URL.createObjectURL(userFormData.image) : undefined}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            bgcolor: "#ccc",
                                        }}
                                    />
                                    <label htmlFor="image-input">
                                        <IconButton
                                            component="span"
                                            size="small"
                                            sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                                bgcolor: "white",
                                                boxShadow: 1,
                                                "&:hover": { bgcolor: "#f0f0f0" },
                                            }}
                                        >
                                            <AddPhotoAlternateIcon fontSize="small" />
                                        </IconButton>
                                    </label>
                                </Box>

                                <input id="image-input" type="file" accept="image/*" hidden onChange={handleImageChange} />

                                <Typography variant="subtitle1" color="textSecondary">
                                    Add a profile picture (optional)
                                </Typography>
                            </Stack>

                            {/* Text Fields */}
                            <Stack sx={{ gap: 1 }}>
                                <TextField error={isHavingError("name")} helperText={formErrors.name} variant="standard" fullWidth label="Name" value={userFormData.name} onChange={handleNameChange} />
                                <TextField error={isHavingError("username")} helperText={formErrors.username} variant="standard" fullWidth label="Username" value={userFormData.username} onChange={handleUsernameChange} />
                                <TextField error={isHavingError("email")} helperText={formErrors.email} variant="standard" fullWidth label="Email" value={userFormData.email} onChange={handleEmailChange} />
                                <Stack direction="row" sx={{ gap: 3 }}>
                                    <TextField error={isHavingError("password")} helperText={formErrors.password} type="password" variant="standard" fullWidth label="Password" value={userFormData.password} onChange={handlePasswordChange} />
                                    <TextField error={isHavingError("confirmPassword")} helperText={formErrors.confirmPassword} type="password" variant="standard" fullWidth label="Confirm Password" value={userFormData.confirmPassword} onChange={handleConfirmPasswordChange} />
                                </Stack>
                            </Stack>

                            {/* Actions */}
                            <Stack sx={{ mt: 6, gap: 1 }} alignItems="center">
                                <Button type="submit" variant="contained" size="medium">
                                    {showLoader ? "Registering..." : "Register"}
                                </Button>
                                <Typography variant="subtitle1">
                                    <Link>Already have an account? Login</Link>
                                </Typography>
                            </Stack>

                        </form>
                    </CardContent>

                </Card>
            </Container>
        </Stack>


        {/* Error Dialog "Backend feedback" */}
        <Dialog
            fullWidth
            open={openErrorDialog}
            onClose={() => setOpenErrorDialog(false)}
        >
            <DialogTitle id="responsive-dialog-title">
                Can't Register
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {backEndError?.split(".")[0]}.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" size="medium" autoFocus onClick={() => setOpenErrorDialog(false)} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>

        {
            showLoader && (
                <Box
                    position="fixed"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="rgba(255, 255, 255, 0.3)"
                    zIndex={9999}
                >
                    <CircularProgress />
                </Box>
            )
        }

    </>
}

export default Register;
