import React, { createContext, useState } from "react";

import { downloadCSV } from "../helpers";

export const WorkingListContext = createContext();

const WorkingListProvider = ({ children }) => {
  const [workingList, setWorkingList] = useState({});
  const [error, setError] = useState(null);
  const checkCode = (codeStr) => {
    const checkRegex = /^(\d){19}(.){12}()(.){6}()/;
    console.log("checkRegex: ", checkRegex.test(codeStr));
    return checkRegex.test(codeStr);
  };
  const addItem = (code, amount) => {
    if (!checkCode(code)) {
      setError("Неверная строка! Попробуйте еще раз");
      return;
    }
    setError(null);
    let oldAmount = 0;
    if (workingList[code]) {
      oldAmount = workingList[code].amount;
    }
    setWorkingList({
      ...workingList,
      [code]: { code, amount: oldAmount + amount },
    });
  };
  const exportListToCSV = () => {
    const dataCSV = Object.keys(workingList).map((item) => workingList[item]);
    downloadCSV({ data: dataCSV });
  };
  const workingListContext = {
    workingList,
    setWorkingList,
    addItem,
    exportListToCSV,
    error,
    setError,
  };

  return (
    <WorkingListContext.Provider value={workingListContext}>
      {children}
    </WorkingListContext.Provider>
  );
};
const useWorkingList = () => {
  const context = React.useContext(WorkingListContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
export { WorkingListProvider, useWorkingList };
