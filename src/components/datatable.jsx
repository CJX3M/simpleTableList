const DataTable = ({ data, onRowSelect, highlightedRows }) => {
    const columns = [
      { header: 'Name', accessor: 'name' },
      { header: 'Email', accessor: 'email' },
      { header: 'Role', accessor: 'role' },
      { header: 'Status', accessor: 'status' },
      { header: 'Last Login', accessor: 'lastLogin' },
    ];
  
    return (
      <div className="table-responsive rounded shadow-sm">
      <table className="table table-hover mb-0">
        <thead className="table-light">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="px-4 py-3">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => onRowSelect(item)}
              className={`cursor-pointer ${highlightedRows.includes(item.id) ? 'updated-row' : ''}`}          
            >
              {columns.map((column) => (
                <td key={column.accessor} className="px-4 py-3">
                  {item[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};
export default DataTable;