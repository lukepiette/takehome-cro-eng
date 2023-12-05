import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Card, Snackbar, Stack, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import { PureLightTheme } from '@components/Layout/ThemeProvider/PureLightTheme';

export default function TopAdvertisement() {
    const [open, setOpen] = React.useState(true);
    const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"))

    return (
        <ThemeProvider theme={PureLightTheme}>

            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={open}>
                <Card sx={{ p: 2, width: '100%', minWidth: { xs: 200, sm: 650 } }}>
                    <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" >
                        {
                            !smallScreen && <Typography>
                                Next Generation NVIDIA H100s are coming to RunPod.
                            </Typography>
                        }
                        <Button color="success" variant="outlined" size="small" href="https://share.hsforms.com/1Ki5Z7ha_QA-4gecxsBfM_gecykq">
                            {
                                smallScreen ? "Reserve Your NVIDIA H100 Today" : "Reserve Yours Today"
                            }
                        </Button>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                </Card>
            </Snackbar>

        </ThemeProvider>
    );
}