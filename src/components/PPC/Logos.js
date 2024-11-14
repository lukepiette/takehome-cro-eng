import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const LogosContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "100%",
	maxWidth: "791.97px",
	margin: "0 auto",
	padding: "20px",
	[theme.breakpoints.down("sm")]: {
		padding: "10px"
	}
}));

const BackgroundRect = styled(Box)({
	width: "100%",
	height: "14.03px",
	background: "#010111",
	opacity: 0.4,
	filter: "blur(48px)",
	marginBottom: "20px"
});

const ContentFrame = styled(Box)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "26px",
	width: "100%",
	maxWidth: "671.65px"
});

const TextContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "12px",
	width: "100%"
});

const Dot = styled(Box)({
	width: "16px",
	height: "16px",
	position: "relative"
});

const DotInner = styled(Box)({
	boxSizing: "border-box",
	position: "absolute",
	width: "16px",
	height: "16px",
	left: 0,
	top: 0,
	background:
		"radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, rgba(0, 0, 0, 0.24) 96.98%, rgba(0, 0, 0, 0) 100%)",
	boxShadow: "inset 0px 1.4766px 8.85962px #673BB8",
	filter: "drop-shadow(0px 0px 8.85962px #7C00DE) drop-shadow(0px -0.990764px 0.990764px #BD00FF)",
	borderRadius: "361.566px",
	transform: "rotate(90deg)"
});

const DotInnerSmall = styled(DotInner)({
	width: "8.87px",
	height: "8.87px",
	left: "-3.56px",
	top: "3.57px"
});

const LogosWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%',
  maxWidth: '600px',
  margin: '0 auto',
  gap: '20px', 
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    justifyContent: 'flex-start',
    width: '100vw',
    maxWidth: 'none',
    margin: '0 -16px',
    padding: '0 16px', 
    gap: '15px',
  },
}));

const Logo = styled(Box)(
	({ theme, width, height }) => ({
		width,
		height,
		[theme.breakpoints.down("sm")]: {
			width: "auto",
			height: "15px"
		}
	})
);

const logoImages = [
	{
		src: "/static/images/ppc/meta-logo.webp",
		width: "65.46px",
		height: "25.6px",
		alt: "Meta logo"
	},
	{
		src: "/static/images/ppc/verizon-logo.webp",
		width: "71.63px",
		height: "16.54px",
		alt: "Verizon logo"
	},
	{
		src: "/static/images/ppc/siemens-logo.webp",
		width: "74.11px",
		height: "18.65px",
		alt: "Siemens logo"
	},
	{
		src: "/static/images/ppc/bytedance-logo.webp",
		width: "89.04px",
		height: "14.49px",
		alt: "ByteDance logo"
	},
	{
		src: "/static/images/ppc/rogers-logo.webp",
		width: "79.09px",
		height: "13.81px",
		alt: "Rogers logo"
	}
];

const Logos = ({ logoText }) => {
	return (
		<LogosContainer>
			<BackgroundRect />
			<ContentFrame>
				<TextContainer>
					<Dot>
						<DotInner />
						<DotInnerSmall />
					</Dot>
					{logoText}
				</TextContainer>
				<LogosWrapper>
					{logoImages.map((logo, index) => (
						<Logo
							key={index}
							width={logo.width}
							height={logo.height}>
							<Box
								component="img"
								src={logo.src}
								alt={logo.alt}
								sx={{
									width: "100%",
									height: "100%",
									objectFit: "contain"
								}}
							/>
						</Logo>
					))}
				</LogosWrapper>
			</ContentFrame>
		</LogosContainer>
	);
};

export default Logos;
