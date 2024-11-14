import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: '#FFFFFF',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '16px',
  fontSize: '18px',
  '&.MuiTableCell-head': {
    fontWeight: 'bold',
    fontSize: '18px',
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '12px',
    '&.MuiTableCell-head': {
      fontSize: '16px', 
    },
  },
}));

const StyledTableRow = styled(TableRow)({
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
});

const Comparison = () => {
  const theme = useTheme();

  const comparisonData = [
    { feature: 'Unique GPU models', community: '25', secure: '19' },
    { feature: 'Global regions', community: '17', secure: '14' },
    { feature: 'Network storage', community: false, secure: true },
    { feature: 'Enterprise-Grade Reliability', community: false, secure: true },
    { feature: 'Savings Plans', community: false, secure: true },
    { feature: 'Free 24/7 Support', community: true, secure: true },
    { feature: 'Delightful Developer Experience', community: true, secure: true },
  ];

  return (
    <Box sx={{ 
      p: 3, 
      borderRadius: 2, 
      maxWidth: 800, 
      width: '100%',
      margin: '0 auto'
    }}>
      <Box sx={{
        maxWidth: '768.98px',
        width: '100%',
        margin: '0 auto',
        padding: { xs: '32px 16px', md: '48px 16px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: '32px', md: '48px' },
        [theme.breakpoints.only('xs')]: {
          width: '90vw',
        },
        [theme.breakpoints.only('sm')]: {
          width: '80vw',
        },
        [theme.breakpoints.down('sm')]: {
          padding: '32px 16px',
          gap: '32px',
        },
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          width: '100%',
        }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '32px', sm: '40px', md: '42px' }, 
              fontWeight: 600, 
              lineHeight: '110%', 
              letterSpacing: '-0.03em', 
              textAlign: 'left', 
              color: '#FFFFFF', 
              width: '100%',
            }}
          >
            Unlimited GPU Options. Globally Available.
            {' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #C3BDFF 0%, #9E69FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline',
              }}
            >
              Support That Gives a Damn.{' '}
            </Box>
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '16px', sm: '18px' }, 
              fontWeight: 500, 
              lineHeight: '24px', 
              textAlign: 'left', 
              color: 'rgba(249, 250, 251, 0.48)', 
              width: '100%', 
            }}
          >
            30+ GPU models at your fingertips. Whether you{"'"}re fine-tuning or going full Skynet, we{"'"}ve got the silicon to match.
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              {' '}Spread across 31 regions, our global network puts teraflops in your backyard. And our support? They don{"'"}t just read from a script—they read your mind.
            </Box>
          </Typography>
        </Box>
      </Box>

      <TableContainer 
        component={Paper} 
        sx={{ 
          backdropFilter: "blur(50px)",
          background: "linear-gradient(270deg, rgba(51, 65, 85, 0.0001) 0%, rgba(51, 65, 85, 0.32) 52.62%, rgba(51, 65, 85, 0.0001) 100%)",
          borderRadius: 2,
          overflow: 'hidden',
          '& .MuiTable-root': {
            minWidth: { xs: 'auto', sm: 500 }, 
          },
          maxWidth: '700px', 
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Table size="small"> 
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell sx={{ textTransform: 'none' }} align="center">Community Cloud</StyledTableCell>
              <StyledTableCell sx={{ textTransform: 'none' }} align="center">Secure Cloud</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comparisonData.map((row) => (
              <StyledTableRow key={row.feature}>
                <StyledTableCell component="th" scope="row">
                  {row.feature}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {typeof row.community === 'boolean' ? 
                    (row.community ? <CheckIcon sx={{ color: '#4CAF50' }} /> : <CloseIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />) : 
                    row.community}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {typeof row.secure === 'boolean' ? 
                    (row.secure ? <CheckIcon sx={{ color: '#4CAF50' }} /> : <CloseIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />) : 
                    row.secure}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Comparison;