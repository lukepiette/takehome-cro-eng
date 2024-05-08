import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from '@mui/system';


export default function Everything() {

  return (
    <Stack alignItems="center" position="relative" mt={15} mb={7} width="100%">
        {/* <Box
            component="img"
            sx={{
                position: 'absolute',
                zIndex:-10,
                top: -600,
                right: 0,
                bottom: 0,
                left: 0,        
            }}
            alt="gpu background"
            src="/static/images/clouds-big.webp"
        /> */}
        <Box
            component="img"
            sx={{
                width: "168px",
                height: "55px",
            }}
            alt="cloud image everything header"
            src="/static/images/everything-clouds.png"
        />
        <Title>
            Everything your app needs. All in one cloud
        </Title>

        <Stack direction="column" mt="128px">
            <Stack direction="column" gap="32px">
                <Box
                sx={{
                    background: "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.24) 0%, rgba(15, 23, 42, 2.4e-05) 100%), rgba(0, 0, 0, 0.01)",
                    padding: "32px",
                    width: "378.67px",
                    height: "187px",
                    border: "1px solid rgba(249, 250, 251, 0.08)",
                    boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(50px)",
                    borderRadius: "12px"
                }}
                >
                    <Stack direction="row">
                        <Typography mr="16px">
                            icon
                        </Typography>
                        <Typography>
                            AI Inference
                        </Typography>
                    </Stack>
                    <Typography mt="16px">
                    We handle millions of inference requests a day. Scale your machine learning inference while keeping costs low with RunPod serverless.
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    </Stack>
  );
}


const Title = styled('p')`
    width: 578.01px;
    height: 92px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 96%;
    text-align: center;
    letter-spacing: -0.03em;
    flex: none;
    margin-top: 24px;
`;

