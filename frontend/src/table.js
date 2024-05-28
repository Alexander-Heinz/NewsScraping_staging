import { useState, useEffect } from "react";
import * as React from "react"
//import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const Table = () => {

   const [rowData, setName] = useState([{headlines: "blubb",
                                          kickers: "",
                                       entry_content: "",
                                    date: ""}]);

      useEffect(() => {
         fetch("/api/data").then((res) =>
         res.json().then((data) => {
            console.log(data)

            setName(data)

            //data.foreach(({headlines, kickers}) => ({headlines:headlines, kickers:kickers}))
            
               // setName({
               //    headlines: data.headlines,
               //    kickers: data.kickers,
               //    entry_content: data.entry_content,
               //    date: data.date

               // });
         })
         );
      }, []
      );
      //console.log(rowData)

   // const [rowData] = useState([
   //    news_content
   //     ]);

//    const [rowData_old] = useState([
//      { date: "2022-01-01", entry_content: "bla", headlines: "35000", kickers: "bla" },
//      { date: "2022-01-01", entry_content: "bla", headlines: "sdf", kickers: "blub" }

// //      { make: "Ford", model: "Mondeo", price: 32000 },
//    //   { make: "Porsche", model: "Boxter", price: 72000 }
//    ]);

   // console.log(rowData_old)

 
   const [columnDefs] = useState([
     { field: "date" },
     { field: "entry_content" },
     { field: "headlines" },
     { field: "kickers" }
   ]);
 
   return (
     <div className="ag-theme-alpine" style={{ height: 400, width: 1400 }}>
       <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
     </div>
   );
 };
 
 export default Table;