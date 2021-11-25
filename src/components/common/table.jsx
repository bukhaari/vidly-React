import React from 'react';
import TableBody from './tableBody'
import TableHeader from './tableHeader';


const  Table = ({onSort, sortColumn, Columns, data}) => {
    return( 
       <table className="table table-sm table-hover  table-responsive-sm  mt-4 ">
            <TableHeader Columns={Columns} onSort={onSort} sortColumn={sortColumn} />
            <TableBody data={data} Columns={Columns} />
        </table>
        );
   
};

export default Table;

