import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  { id: 1, name: "Barcelona", country: "Spain" },
  { id: 2, name: "Real Madrid", country: "Spain" },
  { id: 3, name: "Bayern Munich", country: "Germany" },
  { id: 4, name: "Juventus", country: "Italy" },
  { id: 5, name: "PSG", country: "France" },
];

const CrudApp = () => {
  const [data, setData] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (newData) => {
    newData.id = Date.now();
      setData([...data,newData])
  };
  const updateData = (upData) => {
    let tmpData = data.map((el)=> (el.id===upData.id ? upData : el))
    setData(tmpData)
  };
  const deleteData = (id) => {
      let isDelete = window.confirm(`Are you Sure? ${id}`);

      if (isDelete){
        let tempData = data.filter((el)=>el.id !== id)
        setData(tempData)
      }else{
          return;
      }

  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={data}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;
