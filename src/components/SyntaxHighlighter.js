import { PrismAsyncLight } from "react-syntax-highlighter"
import coldark from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark"

const SyntaxHighlighter = (props) => <PrismAsyncLight style={coldark} {...props} />

export default SyntaxHighlighter
