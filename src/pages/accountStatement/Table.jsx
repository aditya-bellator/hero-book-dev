import React from "react";

const Table = () => {
  return (
    <div className="mt-2">
      <table role="table" className="table-bordered table-striped bg-[#f7f7f7] text-[#333] w-full">
        <thead className="border-[#c7c8ca] border-[1px] ">
          <tr role="row">
            <th   className="w-[20%] px-[12px] py-[6px] text-left border-[1px]">
              Date
            </th>
            <th   className="border-[1px] text-end w-[10%] px-[12px] py-[6px]">
              Sr no
            </th>
            <th
              
              
              className="border-[1px] text-end w-[10%] px-[12px] py-[6px]"
            >
              Credit
            </th>
            <th
              
              
              className="border-[1px] text-end px-[12px] py-[6px] w-[10%]"
            >
              Debit
            </th>
            <th
              
              
              className="border-[1px] text-end px-[12px] py-[6px] w-[10%]"
            >
              Pts
            </th>
            <th  className="border-[1px] text-left px-[12px] py-[6px]">
              Remark
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup"></tbody>
      </table>
    </div>
  );
};

export default Table;
