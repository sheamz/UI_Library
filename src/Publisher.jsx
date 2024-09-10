import { useState } from "react";
import './Publisher.css'; 

function Publisher() {
  const [publisherList, setPublisherList] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPublisherList([...publisherList, { ...form, publisherId: publisherList.length + 1 }]);
    setForm({
      name: '',
      address: ''
    });
  };

  return (
    <div className="publisher-page">
      <div className="publisher-list-box">
        <h2>Publisher List</h2>
        <table>
          <thead>
            <tr>
              <th>Publisher ID</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {publisherList.map((publisher, index) => (
              <tr key={index}>
                <td>{publisher.publisherId}</td>
                <td>{publisher.name}</td>
                <td>{publisher.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="add-publisher-box">
        <h2>Add Publisher</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Publisher</button>
        </form>
      </div>
    </div>
  );
}

export default Publisher;
