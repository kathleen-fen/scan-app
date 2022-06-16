import "./App.css";
import { Paper } from "@mui/material";
import MainInput from "./components/MainInput";
import MainTable from "./components/MainTable";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";

import { useWorkingList } from "./context/WorkingList";

function App() {
  const { exportListToCSV, error } = useWorkingList();
  return (
    <Paper sx={{ mx: "auto", p: 4, textAlign: "center" }} elevation={0}>
      {error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : null}
      <MainInput />
      <MainTable />
      <Button
        variant="outlined"
        sx={{ my: 4, mx: "auto" }}
        onClick={exportListToCSV}
      >
        Скачать csv файл
      </Button>
    </Paper>
  );
}

export default App;
