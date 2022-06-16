import "./App.css";
import { Paper } from "@mui/material";
import MainInput from "./components/MainInput";
import MainTable from "./components/MainTable";
import { Button } from "@mui/material";

import { useWorkingList } from "./context/WorkingList";

function App() {
  const { exportListToCSV } = useWorkingList();
  return (
    <Paper sx={{ mx: "auto", p: 4 }} elevation={0}>
      <MainInput />
      <MainTable />
      <Button variant="outlined" sx={{ m: 4 }} onClick={exportListToCSV}>
        Скачать csv файл
      </Button>
    </Paper>
  );
}

export default App;
