import React, { useState } from "react";

import "./css/Table.css";

function Table({ list, colNames, pageNum = 0, pageSize = 100 }) {
  const [page] = useState(pageNum);

  return (
    <div style={{overflowX:"auto"}} >
      {list.length > 0 && (
        <table cellSpacing="0" >
          <thead className="compare-head">
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody className="compare-body">
            {Object.values(
              list.slice(pageSize * page, pageSize * page + pageSize)
            ).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (
                  <td>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
