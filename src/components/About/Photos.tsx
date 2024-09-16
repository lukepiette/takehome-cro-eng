import React from "react";
import { Box, Grid } from "@mui/material";

interface ImageData {
	src: string;
	aspectRatio: string;
	size: number;
}

const images: ImageData[] = [
	{ src: "/static/images/about/tp-21.webp", aspectRatio: "16/12", size: 2 },
	{ src: "/static/images/about/tp-25.webp", aspectRatio: "16/12", size: 2 },
	{ src: "/static/images/about/tp-3.webp", aspectRatio: "16/12", size: 2 },
	{ src: "/static/images/about/tp-18.webp", aspectRatio: "16/12", size: 2 },
	{ src: "/static/images/about/tp-23.webp", aspectRatio: "16/12", size: 2 },

	{ src: "/static/images/about/tp-24.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-19.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-16.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-20.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-22.webp", aspectRatio: "16/20", size: 2 },

	{ src: "/static/images/about/tp-10.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-12.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-11.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-1.webp", aspectRatio: "16/20", size: 2 },
	{ src: "/static/images/about/tp-4.webp", aspectRatio: "16/20", size: 2 }

	// Commented out images
	// { src: '/static/images/about/tp-5.webp', aspectRatio: '16/20', size: 2 },
	// { src: '/static/images/about/tp-9.webp', aspectRatio: '16/20', size: 2 },
	// { src: '/static/images/about/tp-6.webp', aspectRatio: '16/20', size: 2 },
	// { src: '/static/images/about/tp-7.webp', aspectRatio: '16/20', size: 2 },
	// { src: '/static/images/about/tp-8.webp', aspectRatio: '16/20', size: 2 },

	// { src: '/static/images/about/tp-14.webp', aspectRatio: '16/20', size: 2 },
	// { src: '/static/images/about/tp-15.webp', aspectRatio: '16/20', size: 2 },
	// { src: '/static/images/about/tp-17.webp', aspectRatio: '16/20', size: 2 },
	// { src: '/static/images/about/tp-13.webp', aspectRatio: '16/20', size: 2 },
];

export default function Photos(): JSX.Element {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
				padding: { xs: 1, md: 1 }
			}}>
			<Grid
				container
				sx={{
					mt: { xs: 0, md: 4 },
					justifyContent: "center",
					gap: 1,
					maxWidth: "1400px"
				}}>
				{images.map((image, index) => (
					<Grid item xs={image.size} key={index}>
						<Box
							sx={{
								width: { xs: "100%", sm: "100%", md: "100%" },
								aspectRatio: image.aspectRatio,
								background: `url(${image.src}) center center / cover no-repeat`,
								border: "1px solid rgba(255, 255, 255, 0.12)",
								borderRadius: "12px"
							}}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
