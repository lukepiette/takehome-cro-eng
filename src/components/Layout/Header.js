import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FavoriteIcon from "@mui/icons-material/Favorite";

import ButtonLink from "@components/ButtonLink";
// import TopAdvertisement from "@components/TopAdvertisement"
import Logo from "./Logo";
import Link from "next/link";

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
    name: "Blog",
    to: "https://blog.runpod.io",
  },
  {
    name: "Docs",
    to: "https://docs.runpod.io",
  },
];

const HeaderAndDividerWrapper = styled(Box)(
  () => `
    width: 100%;
    position: -webkit-sticky !important; // For Safari
    position: sticky !important;
    top: 0 !important;
    z-index: 1100;
  `
);

const HeaderWrapper = styled(Box)(
  () => `
    width: 100%;
    display: flex;
    align-items: center;
    height: 56px;
    position: -webkit-sticky !important; // For Safari
    position: sticky !important;
    top: 0 !important;
    z-index: 1100;
    background: rgba(28, 28, 28, 0.1);
    backdrop-filter: blur(50px);
    border-bottom: 1px solid rgba(249, 250, 251, 0.16);
    -webkit-backdrop-filter: blur(50px);
`
);

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

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
              px={0.5}
            >
              <Stack
                width={"100%"}
                maxWidth={"15rem"}
                direction={"row"}
                justifyContent={"start"}
              >
                <Logo />
              </Stack>

              <Stack
                alignItems="center"
                direction="row"
                justifyContent="center"
                spacing={1}
                sx={{
                  display: { xs: "none", md: "inherit" },
                }}
              >
                {links.map(({ name, to }) => (
                  <ButtonLink
                    key={to}
                    href={to}
                    sx={{
                      color: "rgba(249, 250, 251, 0.72)",
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {name}
                  </ButtonLink>
                ))}
              </Stack>

              <Stack
                alignItems="end"
                direction="row"
                justifyContent="end"
                gap={1}
                width={"100%"}
                flexShrink={0}
                maxWidth={"15rem"}
              >
                <ButtonLink
                  href="/console/signup"
                  variant="contained"
                  sx={{
                    background:
                      "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
                    borderRadius: 0.8,
                    boxShadow:
                      "0px 6px 0px rgba(0, 0, 0, 0.1), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
                    fontSize: 13,
                    fontWeight: 500,
                    height: 36,
                    pl: 2,
                    pr: { xs: 2, md: 1.4 },
                  }}
                >
                  Sign up
                  <KeyboardArrowRightIcon
                    sx={{
                      display: { xs: "none", md: "inherit" },
                      fontSize: 20,
                      ml: 0.6,
                    }}
                  />
                </ButtonLink>
                <ButtonLink href="/console/login" variant="outlined" gradient>
                  Login
                </ButtonLink>
                <IconButton
                  sx={{
                    background:
                      "radial-gradient(106.71% 106.71% at 50% -6.71%, #45005E 0%, #000000 46.08%, #000342 85.94%)",
                    borderRadius: 0.8,
                    boxShadow:
                      "inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #BD00FF;",
                    display: { xs: "inherit", md: "none" },
                    fontSize: 13,
                    fontWeight: 500,
                    height: 36,
                    px: 0.8,
                  }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </HeaderWrapper>

        <HeaderWrapper>
          <Stack
            direction={"row"}
            width={"100%"}
            height={"100%"}
            gap={{
              xs: 1,
              md: 1.5,
              lg: 2,
            }}
            paddingY={1}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(77, 148, 255, 0.03) 100%)",
            }}
          >
            <Stack
              sx={{
                p: 0.5,
                flexShrink: 0,
                borderRadius: 100,
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <FavoriteIcon sx={{ color: "#fff", fontSize: 15 }} />
            </Stack>

            <Typography>New pricing: More AI power, less cost!</Typography>

            <div
              style={{
                height: "1rem",
                width: "2px",
                borderRadius: "100%",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />

            {isSmall ? (
              <Link
                href={
                  "http://blog.runpod.io/runpod-slashes-gpu-prices-powering-your-ai-applications-for-less"
                }
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <KeyboardArrowRightIcon sx={{ color: "#fff" }} />
              </Link>
            ) : (
              <ButtonLink
                href="http://blog.runpod.io/runpod-slashes-gpu-prices-powering-your-ai-applications-for-less"
                variant="text"
                target="_blank"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                    background: "transparent",
                  },
                  px: 0,
                }}
              >
                Learn more
                <KeyboardArrowRightIcon
                  fontSize="small"
                  sx={{ color: "#fff" }}
                />
              </ButtonLink>
            )}
          </Stack>
        </HeaderWrapper>

        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{ bgcolor: "rgba(0, 0, 0, .85)" }}
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
