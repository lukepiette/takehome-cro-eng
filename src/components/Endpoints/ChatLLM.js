import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Link,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material"
import { Send as SendIcon } from "@mui/icons-material"
import { useReducer, useRef, useEffect } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

function AutoScrollingTextField(props) {
  const { output } = props
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      const textareaNode = textRef.current.querySelector("textarea")
      if (textareaNode) {
        textareaNode.scrollTop = textareaNode.scrollHeight
      }
    }
  }, [output])

  return (
    <TextField
      variant="outlined"
      value={output}
      multiline
      rows={16}
      fullWidth
      InputProps={{ readOnly: true, sx: { border: 0 } }}
      ref={textRef}
      sx={{ border: "0 !important" }}
    />
  )
}

function ChatLLMReducer(state, action) {
  switch (action.type) {
    case "SET_TAB_VALUE":
      return { ...state, tabValue: action.payload }
    case "SET_API_KEY":
      return { ...state, apiKey: action.payload }
    case "SET_LOADING":
      return { ...state, loading: action.payload }
    case "SET_STREAM_IDS":
      return { ...state, streamIds: action.payload }
    case "SET_STREAM_STATUSES":
      return { ...state, streamStatuses: action.payload }
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload }
    case "SET_TABS":
      return { ...state, tabs: action.payload }
    case "SET_ADDITIONAL_PARAMS":
      return { ...state, additionalParams: action.payload }
    case "SET_GPU_TYPE":
      return { ...state, activeGpuType: action.payload }
    default:
      return state
  }
}

const initialState = {
  activeGpuType: "A6000 48GB",
  tabValue: 0,
  apiKey: "",
  loading: [false, false],
  streamIds: ["", ""],
  streamStatuses: ["", ""],
  errorMessage: "",
  tabLabels: ["Llama2 13B", "Llama2 7B"],
  docsLinks: [
    "https://docs.runpod.io/reference/llama2-13b-chat",
    "https://docs.runpod.io/reference/llama2-7b-chat",
  ],
  tabs: [
    {
      prompt:
        "Write me an essay about how the french revolution influenced the political climate in the rest of Europe throughout the 18th century.",
      maxTokens: 100,
      output: "",
      responseTime: "0",
      executionTime: "0",
      delayTime: "0",
      tokensPerSecond: "0",
      gpuTypes: {
        "A6000 48GB": "https://api.runpod.ai/v2/llama2-13b-chat/run",
        "A100 80GB": "https://api.runpod.ai/v2/28ixj9gtvr1hf8/run",
      },
    },
    {
      prompt: "What are the best places to grab pizza in San Francisco?",
      maxTokens: 100,
      output: "",
      responseTime: "0",
      executionTime: "0",
      delayTime: "0",
      tokensPerSecond: "0",
      gpuTypes: {
        "A5000 24GB": "https://api.runpod.ai/v2/llama2-7b-chat/run",
        "A6000 48GB": "https://api.runpod.ai/v2/ts1irw0rm2axkn/run",
        "A100 80GB": "https://api.runpod.ai/v2/l2q5sskfr3uf8y/run",
      },
    },
  ],
  additionalParams: [
    {
      temperature: 0.5,
      presence_penalty: 0.7,
      frequency_penalty: 0.2,
      top_p: 1.0,
      top_k: -1,
      stop: null,
    },
    {
      temperature: 0.4,
      presence_penalty: 0.7,
      frequency_penalty: 0.2,
      top_p: 1.0,
      top_k: -1,
      stop: null,
    },
  ],
}

export default function ChatLLM() {
  const theme = useTheme()
  const [state, dispatch] = useReducer(ChatLLMReducer, initialState)
  const activeTabRef = useRef(0)

  useEffect(() => {
    activeTabRef.current = state.tabValue
  }, [state.tabValue])

  const handleApiKeyChange = (event) => {
    dispatch({ type: "SET_API_KEY", payload: event.target.value })
  }

  const handleTabChange = (event, newValue) => {
    dispatch({ type: "SET_TAB_VALUE", payload: newValue })
    if (newValue === 1) {
      dispatch({ type: "SET_GPU_TYPE", payload: "A5000 24GB" })
    } else {
      dispatch({ type: "SET_GPU_TYPE", payload: "A6000 48GB" })
    }
  }

  const handleGpuTypeChange = (event) => {
    dispatch({ type: "SET_GPU_TYPE", payload: event.target.value })
  }

  const handleAdditionalParamsChange = (param, event) => {
    let newParams = [...state.additionalParams]
    newParams[state.tabValue][param] = event
    dispatch({ type: "SET_ADDITIONAL_PARAMS", payload: newParams })
  }

  const handlePromptChange = (event) => {
    let newTabs = [...state.tabs]
    newTabs[state.tabValue].prompt = event.target.value
    dispatch({ type: "SET_TABS", payload: newTabs })
  }

  const handleMaxTokensChange = (event) => {
    let newTabs = [...state.tabs]
    newTabs[state.tabValue].maxTokens = event.target.value
    dispatch({ type: "SET_TABS", payload: newTabs })
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      if (state.loading[state.tabValue] !== true) {
        handleSend()
      }
    }
  }

  const sendRequest = async (tabValueState) => {
    const url = state.tabs[state.tabValue]["gpuTypes"][state.activeGpuType]
    console.log(url)
    const headers = {
      "Authorization": state.apiKey,
      "Content-Type": "application/json",
    }
    const payload = {
      input: {
        prompt: state.tabs[tabValueState].prompt,
        sampling_params: {
          max_tokens: state.tabs[tabValueState].maxTokens,
          presence_penalty: state.additionalParams[tabValueState].presence_penalty,
          frequency_penalty: state.additionalParams[tabValueState].frequency_penalty,
          temperature: state.additionalParams[tabValueState].temperature,
          top_p: String(state.additionalParams[tabValueState].top_p),
          top_k: String(state.additionalParams[tabValueState].top_k),
          stop: state.additionalParams[tabValueState].stop,
        },
      },
    }
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
    return response
  }

  const getStatus = async (stream_id, tabValueState) => {
    const status_url =
      state.tabs[tabValueState]["gpuTypes"][state.activeGpuType].replace("/run", "/stream/") +
      stream_id
    const response = await fetch(status_url, {
      headers: { Authorization: state.apiKey },
    })
    return response
  }

  const cancelJob = async (stream_id) => {
    const cancel_url =
      state.tabs[state.tabValue]["gpuTypes"][state.activeGpuType].replace("/run", "/cancel/") +
      stream_id
    const headers = {
      "Authorization": state.apiKey,
      "Content-Type": "application/json",
    }
    const response = await fetch(cancel_url, {
      method: "POST",
      headers: headers,
    })

    let newStreamStatuses = [...state.streamStatuses]
    newStreamStatuses[state.tabValue] = "CANCELLED"
    dispatch({ type: "SET_STREAM_STATUSES", payload: newStreamStatuses })

    let newLoading = [...state.loading]
    newLoading[state.tabValue] = false
    dispatch({ type: "SET_LOADING", payload: newLoading })
  }

  const handleSend = async () => {
    const tabValueState = state.tabValue

    const abortController = new AbortController()
    const llm_request_response = await sendRequest(tabValueState, abortController.signal)
    let newTabs = [...state.tabs]

    if (llm_request_response.status === 200) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: "" })

      const startTime = Date.now()
      let delayTime = 0
      const response_json = await llm_request_response.json()
      const stream_id = response_json.id

      let newStreamIds = [...state.streamIds]
      newStreamIds[tabValueState] = stream_id
      dispatch({ type: "SET_STREAM_IDS", payload: newStreamIds })

      let stream_status = response_json.status
      let newStreamStatuses = [...state.streamStatuses]
      newStreamStatuses[tabValueState] = stream_status
      dispatch({ type: "SET_STREAM_STATUSES", payload: newStreamStatuses })

      let newLoading = [...state.loading]
      newLoading[tabValueState] = true
      dispatch({ type: "SET_LOADING", payload: newLoading })

      newTabs[tabValueState].output = ""
      dispatch({ type: "SET_TABS", payload: newTabs })

      while (
        stream_status === "IN_PROGRESS" ||
        stream_status === "IN_QUEUE" ||
        stream_status === "COMPLETED"
      ) {
        if (activeTabRef.current !== state.tabValue) {
          newStreamStatuses[tabValueState] = "ABORTED (SWITCHED MODELS)"
          dispatch({ type: "SET_STREAM_STATUSES", payload: newStreamStatuses })

          newLoading[tabValueState] = false
          dispatch({ type: "SET_LOADING", payload: newLoading })

          abortController.abort()
          return
        } else {
          if (stream_status === "IN_PROGRESS" && delayTime === 0) {
            delayTime = (Date.now() - startTime) / 1000
          }

          const status_response = await getStatus(stream_id, tabValueState)
          const status_response_json = await status_response.json()

          stream_status = status_response_json.status
          newStreamStatuses[tabValueState] = stream_status
          dispatch({ type: "SET_STREAM_STATUSES", payload: newStreamStatuses })

          if (stream_status === "IN_PROGRESS" || stream_status === "COMPLETED") {
            if (status_response_json.stream.length != 0) {
              // let last_output = status_response_json.stream[status_response_json.stream.length - 1].output.text[0];
              // let filtered_output_noprompt = last_output.replace(state.tabs[tabValueState].prompt, '');

              let combined_stream = status_response_json.stream
                .map((item) => item.output.text)
                .join("")
              newTabs = [...state.tabs]
              newTabs[tabValueState].output = newTabs[tabValueState].output + combined_stream
              dispatch({ type: "SET_TABS", payload: newTabs })
            }
          }

          await new Promise((resolve) => setTimeout(resolve, 100))
        }
        if (stream_status === "COMPLETED") break
      }

      newLoading[tabValueState] = false
      dispatch({ type: "SET_LOADING", payload: newLoading })

      const endTime = Date.now()
      const responseTime = (endTime - startTime) / 1000
      const executionTime = responseTime - delayTime
      const tokensPerSecond =
        (state.tabs[tabValueState].output.length + state.tabs[tabValueState].prompt.length) /
        4 /
        executionTime

      newTabs = [...state.tabs]
      newTabs[tabValueState].responseTime = responseTime.toFixed(2)
      newTabs[tabValueState].delayTime = delayTime.toFixed(2)
      newTabs[tabValueState].executionTime = executionTime.toFixed(2)
      newTabs[tabValueState].tokensPerSecond = tokensPerSecond.toFixed(2)
      dispatch({ type: "SET_TABS", payload: newTabs })
    } else {
      if (llm_request_response.status === 401) {
        dispatch({ type: "SET_ERROR_MESSAGE", payload: "Error 401: Invalid API key" })
      } else if (llm_request_response.status === 402) {
        dispatch({ type: "SET_ERROR_MESSAGE", payload: "Error 402: Insufficient Funds" })
      } else {
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: "Error: " + JSON.stringify(llm_request_response.status),
        })
      }
    }
  }

  return (
    <Stack alignItems="center" direction="column" justifyContent="center" my={6} spacing={1}>
      <Tabs
        value={state.tabValue}
        onChange={(event, newValue) => handleTabChange(event, newValue)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {state.tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>

      <Grid container spacing={0} alignItems="flex-start" justifyContent="center" maxWidth="md">
        <Grid item xs={12}>
          <Card elevation={3} sx={{ mx: 2, p: 3, py: 2.5 }}>
            <LLMInputOutput
              cancelJob={cancelJob}
              handleAdditionalParamsChange={handleAdditionalParamsChange}
              handleApiKeyChange={handleApiKeyChange}
              handleGpuTypeChange={handleGpuTypeChange}
              handleKeyDown={handleKeyDown}
              handleMaxTokensChange={handleMaxTokensChange}
              handlePromptChange={handlePromptChange}
              handleSend={handleSend}
              state={state}
              theme={theme}
            />

            {state.tabs[state.tabValue].output.length > 0 && (
              <Grid container maxWidth="md" columnSpacing={4} rowSpacing={2}>
                <Grid item xs={12}>
                  <Divider sx={{ my: 2, width: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                    width="100%"
                  >
                    <Box width="100%">
                      <Typography sx={{ mb: 1 }} variant="h5">
                        LLM Output
                      </Typography>
                      <AutoScrollingTextField output={state.tabs[state.tabValue].output} />
                    </Box>
                    <Stack
                      alignItems="center"
                      direction="row"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Box>
                        {state.streamStatuses[state.tabValue] !== "COMPLETED" && (
                          <Button
                            variant="contained"
                            onClick={() => cancelJob(state.streamIds[state.tabValue])}
                          >
                            Stop generating
                          </Button>
                        )}
                      </Box>
                      <Typography variant="body1">
                        {state.streamStatuses[state.tabValue]}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Typography sx={{ mb: 1 }} variant="h5">
                    Metrics
                  </Typography>
                  {state.loading[state.tabValue] ? (
                    <>
                      <Typography variant="body1" sx={{ mb: 3 }}>
                        GPU Type: <b>{state.activeGpuType}</b>
                      </Typography>
                      <LinearProgress sx={{ mb: 1 }} />
                    </>
                  ) : (
                    <>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        GPU Type: <b>{state.activeGpuType}</b>
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        Time in queue: <b>{state.tabs[state.tabValue].delayTime} seconds</b>
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        Execution time: <b>{state.tabs[state.tabValue].executionTime} seconds</b>
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        Total response time:{" "}
                        <b>{state.tabs[state.tabValue].responseTime} seconds</b>
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        Throughput:{" "}
                        <b>{state.tabs[state.tabValue].tokensPerSecond} tokens per second</b>
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>
            )}
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}

const LLMInputOutput = ({
  handleAdditionalParamsChange,
  handleApiKeyChange,
  handleGpuTypeChange,
  handleKeyDown,
  handleMaxTokensChange,
  handlePromptChange,
  handleSend,
  state,
  theme,
}) => (
  <Grid container spacing={{ xs: 2, sm: 3 }} maxWidth="md">
    <Grid item xs={12} sm={12} md={7}>
      <Typography sx={{ mb: 1 }} variant="h5">
        LLM Prompt
      </Typography>
      <TextField
        variant="outlined"
        value={state.tabs[state.tabValue].prompt}
        onChange={(e) => handlePromptChange(e)}
        fullWidth
        multiline
        rows={6}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={state.loading[state.tabValue] !== true ? handleSend : () => {}}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>

    <Grid item xs={12} sm={12} md={5}>
      <Grid container spacing={2} maxWidth="md">
        <Grid item xs={12} sm={6} md={12}>
          <Typography display="flex" justifyContent="space-between" sx={{ mb: 1 }} variant="h5">
            RunPod API Key
            <Link
              href="/console/user/settings"
              target="_blank"
              rel="noreferrer"
              underline="none"
              sx={{ color: theme.palette.primary.main, fontSize: 14, fontWeight: 400 }}
            >
              Find my API Key
            </Link>
          </Typography>
          <TextField
            fullWidth
            onChange={(e) => handleApiKeyChange(e)}
            type="text"
            value={state.apiKey}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            GPU Type
          </Typography>
          <Select
            fullWidth
            onChange={(event) => handleGpuTypeChange(event)}
            value={state.activeGpuType}
          >
            {Object.keys(state.tabs[state.tabValue]["gpuTypes"]).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Max Tokens
          </Typography>
          <TextField
            fullWidth
            onChange={(e) => handleMaxTokensChange(e)}
            type="number"
            value={state.tabs[state.tabValue].maxTokens}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" align="center" width="100%">
                Additional Parameters
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <TextField
                  label="Temperature"
                  variant="outlined"
                  type="number"
                  value={state.additionalParams[state.tabValue].temperature}
                  onChange={(e) => handleAdditionalParamsChange("temperature", e.target.value)}
                  sx={{ pb: 2 }}
                />
                <TextField
                  label="Presence Penalty"
                  variant="outlined"
                  type="number"
                  value={state.additionalParams[state.tabValue].presence_penalty}
                  onChange={(e) => handleAdditionalParamsChange("presence_penalty", e.target.value)}
                  sx={{ pb: 2 }}
                />
                <TextField
                  label="Frequency Penalty"
                  variant="outlined"
                  type="number"
                  value={state.additionalParams[state.tabValue].frequency_penalty}
                  onChange={(e) =>
                    handleAdditionalParamsChange("frequency_penalty", e.target.value)
                  }
                  sx={{ pb: 2, mt: 4 }}
                />
                <TextField
                  label="Top P"
                  variant="outlined"
                  type="number"
                  value={state.additionalParams[state.tabValue].top_p}
                  onChange={(e) => handleAdditionalParamsChange("top_p", e.target.value)}
                  sx={{ pb: 2 }}
                />
                <TextField
                  label="Top K"
                  variant="outlined"
                  type="number"
                  value={state.additionalParams[state.tabValue].top_k}
                  onChange={(e) => handleAdditionalParamsChange("top_k", e.target.value)}
                  sx={{ pb: 2 }}
                />
                <TextField
                  label="Stop"
                  variant="outlined"
                  value={state.additionalParams[state.tabValue].stop || ""}
                  onChange={(e) => handleAdditionalParamsChange("stop", e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Typography sx={{ mb: 1, pt: 2 }} align="center" variant="body1">
                  For a complete list of paramaters, check out our{" "}
                  <Link target="_blank" href={state.docsLinks[state.tabValue]}>
                    {" "}
                    API Documentation
                  </Link>
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)
