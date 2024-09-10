import { useState } from "react";
import './Member.css'; 

function Member() {
  const [memberList, setMemberList] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMemberList([...memberList, { ...form, libraryId: memberList.length + 1 }]);
    setForm({
      firstName: '',
      lastName: '',
      address: ''
    });
  };

  return (
    <div className="member-page">
      <div className="member-list-box">
        <h2>Member List</h2>
        <table>
          <thead>
            <tr>
              <th>Library ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map((member, index) => (
              <tr key={index}>
                <td>{member.libraryId}</td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="add-member-box">
        <h2>Add Member</h2>
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
          <button type="submit">Add Member</button>
        </form>
      </div>
    </div>
  );
}

export default Member;
