import { useState } from "react";
import './Author.css'; 

function Author() {
  const [authorList, setAuthorList] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthorList([...authorList, { ...form, authorId: authorList.length + 1 }]);
    setForm({
      firstName: '',
      lastName: ''
    });
  };

  return (
    <div className="author-page">
      <div className="author-list-box">
        <h2>Author List</h2>
        <table>
          <thead>
            <tr>
              <th>Author ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {authorList.map((author, index) => (
              <tr key={index}>
                <td>{author.authorId}</td>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="add-author-box">
        <h2>Add Author</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Author</button>
        </form>
      </div>
    </div>
  );
}

export default Author;
