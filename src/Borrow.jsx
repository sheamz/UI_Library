import { useState } from "react";
import './Borrow.css'; 

function Borrow() {
  const [borrowList, setBorrowList] = useState([]);
  const [form, setForm] = useState({
    libraryId: '',
    bookId: '',
    borrowDate: '',
    returnDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBorrowList([...borrowList, { ...form, borrowId: borrowList.length + 1 }]);
    setForm({
      libraryId: '',
      bookId: '',
      borrowDate: '',
      returnDate: ''
    });
  };

  return (
    <div className="borrow-page">
      <div className="borrow-list-box">
        <h2>Borrow List</h2>
        <table>
          <thead>
            <tr>
              <th>Borrow ID</th>
              <th>Book ID</th>
              <th>Library ID</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowList.map((borrow, index) => (
              <tr key={index}>
                <td>{borrow.borrowId}</td>
                <td>{borrow.bookId}</td>
                <td>{borrow.libraryId}</td>
                <td>{borrow.borrowDate}</td>
                <td>{borrow.returnDate || 'Not Returned'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="add-borrow-box">
        <h2>Add Borrow Record</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Library ID:
            <input
              type="text"
              name="libraryId"
              value={form.libraryId}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Book ID:
            <input
              type="text"
              name="bookId"
              value={form.bookId}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Borrow Date:
            <input
              type="date"
              name="borrowDate"
              value={form.borrowDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Borrow Record</button>
        </form>
      </div>
    </div>
  );
}

export default Borrow;
