import { Box, Card, Grid, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material"
import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"

const API = ({ name, creator, markdownFromGithubURL }) => {
  const theme = useTheme()
  const [tabValue, setTabValue] = useState(1)
  const [markdownData, setMarkdownData] = useState("")

  useEffect(() => {
    fetch(markdownFromGithubURL)
      .then((response) => response.text())
      .then((data) => setMarkdownData(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [markdownFromGithubURL, setMarkdownData])

  return (
    <Stack my={6} spacing={2}>
      <Stack sx={{ pl: { xs: 5, sm: 13, md: 13 }, pr: { xs: 2, sm: 0, md: 0 } }}>
        <Box display="flex" alignItems="center">
          <Typography
            align="left"
            sx={{ fontSize: { xs: 28, sm: 34 }, mb: 4, mr: 1, color: theme.palette.grey[600] }}
            variant="h3"
          >
            {creator} /
          </Typography>
          <Typography align="left" sx={{ fontSize: { xs: 28, sm: 34 }, mb: 4 }} variant="h3">
            {name}
          </Typography>
        </Box>

        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab sx={{ fontSize: "1.2rem", padding: "20px 30px 30px 30px" }} label="Demo" />
          <Tab
            sx={{ fontSize: "1.2rem", padding: "20px 30px 30px 30px" }}
            label="API"
            component="a"
            href={`/api?docs=${markdownFromGithubURL}`}
          />
        </Tabs>
      </Stack>

      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        sx={{ pl: { xs: 2, sm: 10, md: 10 }, pr: { xs: 2, sm: 0, md: 0 } }}
      >
        <Grid item xs={11} sm={10} md={10}>
          <Card elevation={3} sx={{ p: 2 }}>
            <ReactMarkdown>{markdownData}</ReactMarkdown>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default API
