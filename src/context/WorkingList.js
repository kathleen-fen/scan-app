import React, { createContext, useState } from "react";

import { downloadCSV } from "../helpers";

export const WorkingListContext = createContext();

const WorkingListProvider = ({ children }) => {
  const [workingList, setWorkingList] = useState({});
  const addItem = (code, amount) => {
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
