import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Box from "@mui/material/Box";


function TopBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50
        }}>
          <AccountBalanceIcon sx={{ display: 'flex',  mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyFinance
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
export default TopBar;
