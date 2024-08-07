import { CircularProgress } from "@mui/material";

export const Loading = () => {
    return <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
        </div>
    </div>
}