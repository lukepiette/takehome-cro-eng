import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import ButtonLink from "@components/ButtonLink";
// import TopAdvertisement from "@components/TopAdvertisement"
import Logo from "./Logo";

const links = [
  {
    name: "Pricing",
    to: "/gpu-instance/pricing",
  },
  {
    name: "Serverless",
    to: "/serverless-gpu",
  },
  {
    name: "Endpoints",
    to: "/endpoints",
  },
  {
    name: "Blog",
    to: "https://blog.runpod.io",
  },
  {
    name: "Docs",
    to: "https://docs.runpod.io",
  },
];

const HeaderAndDividerWrapper = styled(Box)(
  ({ theme }) => `
    width: 100%;
    position: -webkit-sticky !important; // For Safari
    position: sticky !important;
    top: 0 !important;
    z-index: 1100;
  `
);

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;
    position: -webkit-sticky !important; // For Safari
    position: sticky !important;
    top: 0 !important;
    z-index: 1100;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
`
);

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <>
      {/* <TopAdvertisement></TopAdvertisement> */}
      <HeaderAndDividerWrapper>
        <HeaderWrapper>
          <Container maxWidth="lg">
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              px={1}
            >
              <Logo />
              <Stack
                direction="row"
                justifyContent="end"
                alignItems="center"
                sx={{ display: { xs: "none", md: "inherit" }, width: "100%" }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  {links.map(({ name, to }) => (
                    <ButtonLink key={to} href={to}>
                      {name}
                    </ButtonLink>
                  ))}
                  <ButtonLink href="/console/signup" variant="outlined">
                    Sign Up
                  </ButtonLink>
                  <ButtonLink href="/console/login" variant="outlined">
                    Login
                  </ButtonLink>
                </Stack>
              </Stack>

              <IconButton
                sx={{
                  display: { xs: "inherit", md: "none" },
                }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Container>
        </HeaderWrapper>

        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Stack spacing={2} sx={{ p: 3 }}>
            <>
              <ButtonLink
                href="/console/signup"
                variant="contained"
                size="large"
              >
                Sign Up
              </ButtonLink>
              <ButtonLink href="/console/login" variant="outlined" size="large">
                Login
              </ButtonLink>
            </>

            <Divider />
            {links.map(({ name, to }) => (
              <ButtonLink
                fullWidth
                href={to}
                key={to}
                onClick={toggleDrawer(false)}
                variant="outlined"
              >
                {name}
              </ButtonLink>
            ))}
            <Divider />
            <Button onClick={() => setDrawerOpen(false)}>Close Menu</Button>
          </Stack>
        </Drawer>
        <Divider />
      </HeaderAndDividerWrapper>
    </>
  );
}
