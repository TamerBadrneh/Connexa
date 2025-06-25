import { Avatar, Box, Button, Card, CardContent, Container, IconButton, Link, Stack, TextField, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Register = () => {
    return <>
        <Stack height="100dvh" justifyContent="center">
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h1">إنشاء حساب جديد</Typography>
                        <form>

                            {/* User Image Selection */}
                            <Stack alignItems="center" sx={{ gap: 3 }}>
                                <Box position="relative" width={100} height={100}>
                                    <Avatar
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

                                <input id="image-input" type="file" accept="image/*" hidden />

                                <Typography variant="body2" color="textSecondary">
                                    اختر صورة للملف الشخصي
                                </Typography>
                            </Stack>

                            {/* Text Fields */}
                            <Stack sx={{ gap: 1 }}>
                                <TextField variant="standard" fullWidth label="الإسم" />
                                <TextField variant="standard" fullWidth label="إسم المستخدم" />
                                <TextField variant="standard" fullWidth label="البريد الإلكتروني" />
                                <Stack direction="row-reverse" sx={{ gap: 5 }}>
                                    <TextField variant="standard" fullWidth label="كلمة المرور" />
                                    <TextField variant="standard" fullWidth label="تأكيد كلمة المرور" />
                                </Stack>
                            </Stack>

                            <Stack sx={{ gap: 2, mt: 5 }} alignItems="center">
                                <Button type="submit" variant="contained" size="medium">إنشاء الحساب</Button>
                                <Typography variant="subtitle1">
                                    <Link>لديك حساب بالفعل؟ تسجيل الدخول</Link>
                                </Typography>
                            </Stack>

                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Stack>
    </>
}

export default Register;
