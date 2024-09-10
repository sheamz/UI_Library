import { useState } from "react";
import './Book.css'; 

function Book() {
  const [bookList, setBookList] = useState([]);
  const [form, setForm] = useState({
    title: '',
    isbn: '',
    authorId: '',
    publisherId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookList([...bookList, form]);
    setForm({
      title: '',
      isbn: '',
      authorId: '',
      publisherId: ''
    });
  };

  return (
    <div className="book-page">
      <div className="book-list-box">
        <h2>Book List</h2>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>ISBN</th>
              <th>Author ID</th>
              <th>Publisher ID</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.isbn}</td>
                <td>{book.authorId}</td>
                <td>{book.publisherId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="add-book-box">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            ISBN:
            <input
              type="text"
              name="isbn"
              value={form.isbn}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Author ID:
            <input
              type="text"
              name="authorId"
              value={form.authorId}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Publisher ID:
            <input
              type="text"
              name="publisherId"
              value={form.publisherId}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Book;
