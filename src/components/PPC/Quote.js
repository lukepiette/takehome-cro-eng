import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const QuoteWrapper = styled(Box)(({ theme }) => ({
	boxSizing: "border-box",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	padding: "48px 32px",
	gap: "32px",
	width: "100%",
	maxWidth: "698px",
	margin: "0 auto",
	backdropFilter: "blur(200px)",
	borderRadius: "32px",
	[theme.breakpoints.down("md")]: {
		padding: "32px 16px",
		gap: "24px"
	}
}));

const TitleContent = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	padding: "0px",
	gap: "32px",
	width: "100%",
	maxWidth: "634px",
	[theme.breakpoints.down("sm")]: {
		gap: "24px"
	}
}));

const AuthorInfo = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	padding: "0px",
	gap: "24px",
	width: "100%",
	maxWidth: "150px",
	[theme.breakpoints.down("sm")]: {
		gap: "16px"
	}
}));

const AuthorImage = styled("img")({
	width: "36px",
	height: "36px",
	flexShrink: 0
});

const AuthorDetails = styled(Box)({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	padding: "0px",
	gap: "4px"
});

const AuthorRole = styled(Typography)(({ theme }) => ({
	fontStyle: "normal",
	fontWeight: 500,
	fontSize: "10px",
	lineHeight: "160%",
	letterSpacing: "-0.02em",
	color: "#BEC2FD",
	[theme.breakpoints.down("sm")]: {
		fontSize: "9px"
	}
}));

const AuthorName = styled(Typography)(({ theme }) => ({
	fontStyle: "normal",
	fontWeight: 500,
	fontSize: "14px",
	lineHeight: "140%",
	letterSpacing: "0.002em",
	color: "#FFFFFF",
	[theme.breakpoints.down("sm")]: {
		fontSize: "12px"
	}
}));

const QuoteContent = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "0px",
	gap: "12px",
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "300px"
	}
}));

const QuoteTitle = styled(Typography)(({ theme }) => ({
	fontStyle: "normal",
	fontWeight: 600,
	fontSize: "20px",
	lineHeight: "24px",
	textAlign: "center",
	letterSpacing: "-0.03em",
	color: "#F9FAFB",
	[theme.breakpoints.down("sm")]: {
		fontSize: "18px",
		lineHeight: "22px"
	}
}));

const QuoteText = styled(Typography)(({ theme }) => ({
	fontStyle: "normal",
	fontWeight: 400,
	fontSize: "16px",
	lineHeight: "24px",
	textAlign: "center",
	letterSpacing: "-0.25px",
	color: "#94A3B8",
	[theme.breakpoints.down("sm")]: {
		fontSize: "14px",
		lineHeight: "21px"
	}
}));

const G2Button = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	padding: "10px 12px 10px 16px",
	gap: "8px",
	width: "200px",
	height: "40px",
	background:
		"radial-gradient(106.71% 106.71% at 50% -6.71%, #000000 0%, #000000 46.08%, #000111 85.94%)",
	boxShadow:
		"inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #B4ACB7",
	borderRadius: "32px",
	textDecoration: "none",
	"&:hover": {
		textDecoration: "none"
	},
	[theme.breakpoints.down("sm")]: {
		width: "180px",
		height: "36px",
		padding: "8px 10px 8px 14px"
	}
}));

const G2Icon = styled("img")({
	width: "24px",
	height: "24px",
	borderRadius: "14.6844px",
	flexShrink: 0
});

const G2Text = styled(Typography)(({ theme }) => ({
	width: "140px",
	fontStyle: "normal",
	fontWeight: 500,
	fontSize: "14px",
	lineHeight: "140%",
	letterSpacing: "0.002em",
	color: "#F9FAFB",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	[theme.breakpoints.down("sm")]: {
		fontSize: "12px",
		width: "120px"
	}
}));

const Quote = ({ testimonial }) => {
	return (
		<QuoteWrapper>
			<TitleContent>
				<AuthorInfo>
					<AuthorImage
						src={testimonial.picture}
						alt="Quote Profile Image"
					/>
					<AuthorDetails>
						<AuthorName>{testimonial.name}</AuthorName>
						<AuthorRole>{testimonial.title}</AuthorRole>
					</AuthorDetails>
				</AuthorInfo>
				<QuoteContent>
					<QuoteTitle>{testimonial.bigQuote}</QuoteTitle>
					<QuoteText>{testimonial.smallQuote}</QuoteText>
				</QuoteContent>
			</TitleContent>
			<G2Button>
				<G2Icon src="/static/images/ppc/g2-logo.webp" alt="G2" />
				<G2Text>4.7 out of 5 stars</G2Text>
			</G2Button>
		</QuoteWrapper>
	);
};

export default Quote;
