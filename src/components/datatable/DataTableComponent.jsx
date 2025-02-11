import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Row, Col, Form, Button } from "react-bootstrap";


export default function DataTableComponent({ columns, data, onEdit, onDelete }) {


  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  // Sorting function
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  // Filtering function
  const filteredData = sortedData.filter((item) =>
    columns.some((col) => 
      item[col.key] && item[col.key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle Sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Status Badge Color Mapping
  const getStatusBadge = (status) => {
    const colors = {
      Pending: "warning",
      Completed: "success",
      Rejected: "danger",
    };
    return <span className={`badge bg-${colors[status] || "secondary"}`}>{status}</span>;
  };

  return (
    <>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Label>
            Show
            <Form.Select size="sm" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
            </Form.Select>
            Entries
          </Form.Label>
        </Col>
        <Col md={6} className="text-md-end">
          <Form.Label>
            Search:
            <Form.Control
              size="sm"
              type="text"
              placeholder={`Search by ${columns[0].label}...`}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </Form.Label>
        </Col>
      </Row>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} onClick={() => handleSort(col.key)}>
                  {col.label}
                  <FeatherIcon
                    icon={sortConfig.key === col.key ? (sortConfig.direction === "ascending" ? "arrow-up" : "arrow-down") : "arrow-up"}
                    size={16}
                    className="ms-1"
                  />
                </th>
              ))}
              <th>Actions</th> {/* Actions Column */}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.key === "status" ? getStatusBadge(item[col.key]) : item[col.key]}
                    </td>
                  ))}
                  <td>
                    <div>
                      <Button
                        variant="primary"
                        size="sm"
                        className="me-2"
                        onClick={() => onEdit(item)} // Pass the item for edit
                      >
                        <FeatherIcon icon="edit" size={14} /> Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onDelete(item)} // Pass the item for delete
                      >
                        <FeatherIcon icon="trash-2" size={14} /> Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="text-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Row className="align-items-center">
        <Col md={6}>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries</Col>
        <Col md={6} className="text-md-end">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                <FeatherIcon icon="chevron-left" size={16} />
              </button>
            </li>
            {[...Array(totalPages).keys()].map((page) => (
              <li key={page + 1} className={`page-item ${currentPage === page + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(page + 1)}>{page + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
                <FeatherIcon icon="chevron-right" size={16} />
              </button>
            </li>
          </ul>
        </Col>
      </Row>

 

    </>
  );
}
