import { Stack, Table, Typography, useTheme, TableContainer, TableBody, TableCell, TableRow, Box, Paper } from "@mui/material"
import React, { useState, useEffect } from 'react';
import Carousel4090 from "@components/4090Carousel"

export default function Leaderboard() {
    const targetDate = new Date('2024-04-24T00:00:00');

    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const getNextFriday = () => {
            const today = new Date();
            const nextFriday = new Date(today.setDate(today.getDate() + ((7 - today.getDay() + 5) % 7 || 7)));
            nextFriday.setHours(17, 0, 0, 0);
            return nextFriday;
        };

        const countdownDate = getNextFriday().getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance >= 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
            } else {
                clearInterval(interval);
                setTimeLeft('Event ended');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Stack
            alignItems={"center"}
            mt={2}
            spacing={1}
            sx={{ height: 1000 }}
            >
            <Box sx={{ height:1100, background: 'radial-gradient(circle, rgba(128,0,128,0.2), rgba(128,0,128,0.1))', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}></Box>
           

            <Typography variant="h1" pb={2} pt={12} fontSize={{xs:50}} textAlign={"center"} pl="5vw" pr="5vw">
                RunPod RTX 4090 Scavenger Hunt
            </Typography>
            <Stack spacing={1}>
                <Typography sx={{width:400}} variant="h3" >
                    Time Remaining: <b>{timeLeft}</b>
                </Typography>
                <Typography variant="h3">
                    
                </Typography>
            </Stack>

            <TableContainer
                sx={{ maxWidth: 1000, minHeight:150, marginLeft: "0 !important", p: 2, backdropFilter: 'blur(100px)', margin:"5vw"}}
            >
                <Table size="medium">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Typography display="flex" fontSize={18}>
                                Rank
                                </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography display="flex" fontSize={18}>
                                Twitter Handle
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography fontSize={18}>Completed At</Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Typography display="flex" fontSize={14}>
                                1
                                </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography display="flex" fontSize={14}>
                                @ryancruzb
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography fontSize={14}>April 23, 10:27pm</Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack pt={20}>
            
            </Stack>
            <Carousel4090 />

        </Stack>
    )
  }

