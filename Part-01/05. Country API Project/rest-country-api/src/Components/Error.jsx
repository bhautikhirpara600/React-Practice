import { useRouteError } from "react-router"

const Error = () => {
    const Error = useRouteError()
    return (
        <div style={
            { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h1 style={
            { textAlign: "center", fontSize: "64px" }
        }>{Error.status} #{Error.statusText}</h1>
        </div>
    )
}

export default Error