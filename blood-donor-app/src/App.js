import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [donors, setDonors]       = useState([]);
  const [loading, setLoading]     = useState(true);
  const [bloodGroup, setBloodGroup] = useState("All");
  const [searchCity, setSearchCity] = useState("");
  const [requested, setRequested] = useState({});

  const bloodGroups = ["A+", "B+", "O-", "AB+"];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const donorsData = data.map((user, index) => ({
          id:         user.id,
          name:       user.name,
          city:       user.address.city,
          bloodGroup: bloodGroups[index % bloodGroups.length],
          available:  Math.random() > 0.3,
        }));
        setDonors(donorsData);
        setLoading(false);
      });
  }, []);

  const handleRequest = (id) => {
    setRequested({ ...requested, [id]: true });
  };

  const filteredDonors = donors.filter(donor => {
    const bloodMatch = bloodGroup === "All" || donor.bloodGroup === bloodGroup;
    const cityMatch  = donor.city.toLowerCase().includes(searchCity.toLowerCase());
    return bloodMatch && cityMatch;
  });

  return (
    <div className="container">

      <h1>🩸 Blood Donor Finder</h1>

      {/* Filters */}
      <div className="filters">
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="All">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
        </select>

        <input
          type="text"
          placeholder="Search by city"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </div>

      {/* Loading */}
      {loading && <h2>⏳ Loading donors...</h2>}

      {/* Empty */}
      {!loading && filteredDonors.length === 0 && (
        <h2>No donors found — try a different filter</h2>
      )}

      {/* Donor Count */}
      {!loading && (
        <h3>
          Showing <strong>{filteredDonors.length}</strong> donor
          {filteredDonors.length !== 1 ? "s" : ""}
        </h3>
      )}

      {/* Donor Cards */}
      <div className="grid">
        {filteredDonors.map(donor => (
          <div className="card" key={donor.id}>

            <h2>{donor.name}</h2>

            <p>
              <b>Blood Group</b>
              <span className="blood-badge">{donor.bloodGroup}</span>
            </p>

            <p><b>City</b> {donor.city}</p>

            <p>
              <b>Status</b>
              <span className={donor.available ? "status-available" : "status-unavailable"}>
                {donor.available ? "Available" : "Not Available"}
              </span>
            </p>

            <div className="card-divider" />

            <button
              className={requested[donor.id] ? "sent" : ""}
              disabled={!donor.available || requested[donor.id]}
              onClick={() => handleRequest(donor.id)}
            >
              {requested[donor.id] ? "Request Sent ✅" : "Request Help"}
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default App;