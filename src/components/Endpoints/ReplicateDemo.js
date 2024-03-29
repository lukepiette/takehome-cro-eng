import {
  TextField,
  Stack,
  CircularProgress,
  Grid,
  Card,
  Link,
  Box,
  useTheme,
  Typography,
  Slider,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Button,
  Tab,
  Tabs,
} from "@mui/material"
import React, { useState, useEffect } from "react"

const Demo = ({
  apiEndpoint,
  name,
  creator,
  markdownFromGithubURL,
  inputParamsFromGithubURL,
  outputType,
}) => {
  const theme = useTheme()

  const [inputData, setInputData] = useState([])
  const [outputData, setOutputData] = useState(null)
  const [tabValue, setTabValue] = useState(0)
  const [inputValues, setInputValues] = useState({})
  const [generationTime, setGenerationTime] = useState(0)
  const [apiKey, setApiKey] = useState("7NNVY0E03FR9WKHPPBD6U41LTVTO9YWK12XDNVUS")
  const [loading, setLoading] = useState(false)
  const [requestId, _] = useState("")

  useEffect(() => {
    fetch(inputParamsFromGithubURL)
      .then((response) => response.json())
      .then((data) => setInputData(data.inputs))
      .catch((error) => console.error("Error fetching data:", error))
  }, [inputParamsFromGithubURL, setInputData])

  const cancelJob = async (stream_id) => {
    const cancel_url = apiEndpoint.replace("/runsync", "/cancel/") + stream_id
    const headers = {
      "Authorization": apiKey,
      "Content-Type": "application/json",
    }
    const response = await fetch(cancel_url, {
      method: "POST",
      headers: headers,
    })
    setLoading(false)
  }

  const renderInputField = (input, handleChange) => {
    // Check if the current input is a nested object
    const isNested = typeof input === "object" && !input.hasOwnProperty("name")

    if (isNested) {
      return Object.keys(input).map((key) =>
        input[key].map((nestedInput) => renderInputField(nestedInput, handleChange))
      )
    }

    switch (input.type) {
      case "select":
        return (
          <Select
            onChange={(e) => handleChange(input.name, e.target.value)}
            placeholder={input.placeholder}
            fullWidth
          >
            {input.options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )

      case "string":
        return (
          <div style={{ marginTop: 30 }}>
            <TextField
              label={input.name}
              value={inputValues[input.name] || input.placeholder}
              placeholder={input.placeholder}
              onChange={(e) => handleChange(input.name, e.target.value)}
              fullWidth
            />
          </div>
        )

      case "float":
        if (input.min !== undefined && input.max !== undefined) {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <TextField
                label={input.name}
                value={
                  inputValues[input.name] !== undefined
                    ? inputValues[input.name]
                    : input.placeholder || 0
                }
                onChange={(e) => handleChange(input.name, parseFloat(e.target.value))}
                type="number"
                inputProps={{ min: input.min, max: input.max, step: 0.1 }}
                style={{ flex: 1, marginRight: 20 }}
              />
              <Slider
                value={
                  inputValues[input.name] !== undefined
                    ? inputValues[input.name]
                    : input.placeholder || 0
                }
                onChange={(e, newValue) => handleChange(input.name, newValue)}
                min={input.min}
                max={input.max}
                step={0.01}
                valueLabelDisplay="auto"
                style={{ flex: 4, marginRight: "10px" }}
              />
            </div>
          )
        } else {
          return (
            <div style={{ marginTop: 30 }}>
              <TextField
                label={input.name}
                type="number"
                value={
                  inputValues[input.name] !== undefined
                    ? inputValues[input.name]
                    : input.placeholder || 0
                }
                placeholder={input.placeholder.toString()}
                onChange={(e) => handleChange(input.name, parseFloat(e.target.value))}
                InputProps={{
                  startAdornment: <InputAdornment position="start">.</InputAdornment>,
                }}
                fullWidth
              />
            </div>
          )
        }

      case "integer":
        if (input.min !== undefined && input.max !== undefined) {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <TextField
                label={input.name}
                value={
                  inputValues[input.name] !== undefined
                    ? inputValues[input.name]
                    : input.placeholder || 0
                }
                onChange={(e) => handleChange(input.name, parseInt(e.target.value, 10))} // Use input.name as the key
                type="number"
                inputProps={{ min: input.min, max: input.max, step: 1 }}
                style={{ flex: 1, marginRight: 20 }}
              />
              <Slider
                value={
                  inputValues[input.name] !== undefined
                    ? inputValues[input.name]
                    : input.placeholder || 0
                }
                onChange={(e, newValue) => handleChange(input.name, newValue)} // Use input.name as the key
                min={input.min}
                max={input.max}
                step={4}
                valueLabelDisplay="auto"
                style={{ flex: 4, marginRight: "10px" }}
              />
            </div>
          )
        } else {
          return (
            <div style={{ marginTop: 30 }}>
              <TextField
                label={input.name}
                value={inputValues[input.name] || input.placeholder}
                type="number"
                onChange={(e) => handleChange(input.name, parseInt(e.target.value, 10))}
                InputProps={{
                  startAdornment: <InputAdornment position="start">#</InputAdornment>,
                }}
                fullWidth
              />
            </div>
          )
        }

      case "boolean":
        return (
          <div style={{ marginTop: 30 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputValues[input.name] || false}
                  onChange={(e) => handleChange(input.name, e.target.checked)}
                />
              }
              label={input.name}
            />
          </div>
        )

      default:
        return null
    }
  }

  const handleInputChange = (name, value) => {
    setInputValues((prev) => ({ ...prev, [name]: value }))
  }

  const processOutputData = (json_response) => {
    switch (outputType) {
      case "text":
        setOutputData(json_response.output.text[0])
        break
      case "image":
        // You mentioned "pass" which means you might want to do nothing here.
        // If you have a specific action, replace the comment below.
        // outputData = someActionForImage(json_response);
        break
      case "audio":
        // Similarly, if you have a specific action for audio, replace the comment.
        // outputData = someActionForAudio(json_response);
        break
      default:
        console.error("Invalid outputType")
    }
  }

  const constructPayload = (data, values) => {
    let payload = {}

    try {
      data.forEach((item) => {
        if (item.name) {
          // Direct input
          payload[item.name] =
            values[item.name] !== undefined ? values[item.name] : item.placeholder
        } else {
          // Nested object
          for (let key in item) {
            payload[key] = constructPayload(item[key], values)
          }
        }
      })
    } catch (error) {
      console.error("Error constructing payload:", error)
      return {}
    }

    return payload
  }

  const sendRequest = () => {
    const startTime = Date.now()
    setLoading(true)
    const payload = {
      input: constructPayload(inputData, inputValues),
    }
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Authorization": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        processOutputData(data)
        const timeDifference = (Date.now() - startTime) / 1000
        setGenerationTime(timeDifference.toFixed(2))
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
        setLoading(false)
      })
  }

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
        <Grid item xs={11} sm={9} md={5.5}>
          <Card elevation={3} sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography align="left" sx={{ fontSize: { xs: 28, sm: 34 } }} variant="h3">
                Input
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
              RunPod API Key
            </Typography>
            <TextField
              variant="outlined"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              fullWidth
              sx={{ mb: 1 }}
            />
            <Link
              href="/console/user/settings"
              target="_blank"
              rel="noreferrer"
              underline="none"
              sx={{ color: theme.palette.primary.main }}
            >
              Find my API Key
            </Link>

            {inputData.map((input) => (
              <div key={input.name || Object.keys(input)[0]}>
                {renderInputField(input, handleInputChange)}
              </div>
            ))}

            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" sx={{ mt: 2 }} onClick={() => sendRequest()}>
                Generate
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={11} sm={9} md={5}>
          <Card elevation={3} sx={{ p: 2 }}>
            <Typography align="left" sx={{ fontSize: { xs: 28, sm: 34 }, mb: 1 }} variant="h3">
              Output
            </Typography>
            {loading ? (
              <Stack>
                <CircularProgress textField={"Running..."} />
                <Typography sx={{ mb: 0.5, mt: 1.5 }} variant="body1"></Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => cancelJob(requestId)}>
                  Cancel
                </Button>
              </Stack>
            ) : (
              <>
                {outputType === "text" && (
                  <TextField
                    variant="outlined"
                    value={outputData}
                    multiline
                    rows={16}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                )}
                {outputType === "image" && <img src={outputData} alt="Output" />}
                {outputType === "audio" && <audio controls src={outputData}></audio>}

                <Typography sx={{ mb: 0.5, mt: 1.5 }} variant="body1">
                  Generated in {generationTime} seconds
                </Typography>
              </>
            )}
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Demo
