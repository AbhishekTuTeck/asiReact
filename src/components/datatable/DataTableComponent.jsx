import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";  // Import Feather Icons
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Sample Data (Full Data Set)
const tableData = [
  { id: 1, shopCode: "000001", ownerName: "Alexander Pierce", shopName: "Sanjay Store", price: 10872.83, status: "Completed" },
  { id: 2, shopCode: "000002", ownerName: "John Doe", shopName: "Tea Stall", price: 11446.30, status: "Pending" },
  { id: 3, shopCode: "000003", ownerName: "Jane Smith", shopName: "Fruit Shop", price: 14227.10, status: "Rejected" },
  { id: 4, shopCode: "000004", ownerName: "Alice Johnson", shopName: "Grocery Store", price: 10222.75, status: "Completed" },
  { id: 6, shopCode: "000005", ownerName: "Bob Lee", shopName: "Bookstore", price: 13476.50, status: "Pending" },
  { id: 7, shopCode: "000001", ownerName: "Alexander Pierce", shopName: "Sanjay Store", price: 10872.83, status: "Completed" },
  { id: 8, shopCode: "000002", ownerName: "John Doe", shopName: "Tea Stall", price: 11446.30, status: "Pending" },
  { id: 9, shopCode: "000003", ownerName: "Jane Smith", shopName: "Fruit Shop", price: 14227.10, status: "Rejected" },
  { id: 10, shopCode: "000004", ownerName: "Alice Johnson", shopName: "Grocery Store", price: 10222.75, status: "Completed" },
  { id: 11, shopCode: "000005", ownerName: "Bob Lee", shopName: "Bookstore", price: 13476.50, status: "Pending" },
];

// Function to Assign Status Colors
const getStatusClass = (status) => {
  switch (status) {
    case "Completed":
      return "bg-success text-white";
    case "Pending":
      return "bg-warning text-dark";
    case "Rejected":
      return "bg-danger text-white";
    default:
      return "bg-secondary text-white";
  }
};

export default function DataTableComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);  // Default 5 items per page
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

  // Sorting Function
  const sortedData = [...tableData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Filtering Data
  const filteredData = sortedData.filter((item) =>
    item.shopName.toLowerCase().includes(filterText.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle Sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Handle Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle Items Per Page Selection
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);  // Reset to the first page
  };

  // Handle Page Click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <div className=" mt-4">
    

      {/* Filter Input */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Shop Name..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              Sl No.
              <FeatherIcon
                icon={sortConfig.key === 'id' ? (sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down') : 'arrow-up'}
                size={16}
              />
            </th>
            <th onClick={() => handleSort('shopCode')}>
              Shop Code
              <FeatherIcon
                icon={sortConfig.key === 'shopCode' ? (sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down') : 'arrow-up'}
                size={16}
              />
            </th>
            <th onClick={() => handleSort('ownerName')}>
              Owner Name
              <FeatherIcon
                icon={sortConfig.key === 'ownerName' ? (sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down') : 'arrow-up'}
                size={16}
              />
            </th>
            <th onClick={() => handleSort('shopName')}>
              Shop Name
              <FeatherIcon
                icon={sortConfig.key === 'shopName' ? (sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down') : 'arrow-up'}
                size={16}
              />
            </th>
            <th onClick={() => handleSort('price')}>
              Price
              <FeatherIcon
                icon={sortConfig.key === 'price' ? (sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down') : 'arrow-up'}
                size={16}
              />
            </th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.shopCode}</td>
              <td>{item.ownerName}</td>
              <td>{item.shopName}</td>
              <td>{`₹${item.price.toFixed(2)}`}</td>
              <td>
                <span className={`badge ${getStatusClass(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td>
              {item.status === "Pending" && (
                <a href="#" className="text-primary me-2">
                <FeatherIcon icon="file-text" size={18} />
              </a>
            )}
            {item.status === "Rejected" && (
                  <>
                    <a href="#" className="text-warning me-2">
                      <FeatherIcon icon="file-text" size={18} />
                    </a>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={handleShow}
                    >
                      <FeatherIcon icon="trash" size={16} /> Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Per Page Selection */}
      <div className="mb-3">
        <label>Items per page:</label>
        <select
          className="form-control"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      {/* Pagination with Custom Button Style */}
      <ul className="paginationList d-flex justify-content-center">
        <li className={`paginateButton previousItem ${currentPage === 1 ? "disabled" : ""}`}>
          <a className="pageLink" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
            <FeatherIcon icon="chevron-left" size={16} />
          </a>
        </li>

        {[...Array(totalPages).keys()].map((pageNum) => (
          <li key={pageNum + 1} className={`paginateButton ${currentPage === pageNum + 1 ? "active" : ""}`}>
            <a className="pageLink" onClick={() => setCurrentPage(pageNum + 1)}>
              {pageNum + 1}
            </a>
          </li>
        ))}

        <li className={`paginateButton nextItem ${currentPage === totalPages ? "disabled" : ""}`}>
          <a className="btn btn-primary" onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}>
            <FeatherIcon icon="chevron-right" size={16} />
          </a>
        </li>
      </ul>
    </div>
    <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title>Delete Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></>
  );
}
