import { useState } from "react";

function App() {
  const [baggage, setBaggage] = useState([]);

  const [form, setForm] = useState({
    passengerName: "",
    flightNumber: "",
    baggageTag: "",
    weight: "",
    status: "CHECKED-IN"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const addBaggage = (e) => {
    e.preventDefault();

    if (
      !form.passengerName ||
      !form.flightNumber ||
      !form.baggageTag ||
      !form.weight
    ) {
      alert("Please fill all fields");
      return;
    }

    const newBaggage = {
      id: Date.now(),
      ...form
    };

    setBaggage([...baggage, newBaggage]);

    setForm({
      passengerName: "",
      flightNumber: "",
      baggageTag: "",
      weight: "",
      status: "CHECKED-IN"
    });
  };

  return (
    <div className="container">
      <header>
        <h1>✈️ Airline Baggage Management</h1>
        <p>Airline Luggage Tracking System</p>
      </header>

      <section className="card">
        <h2>Add Baggage</h2>

        <form onSubmit={addBaggage}>
          <input
            type="text"
            name="passengerName"
            placeholder="Passenger Name"
            value={form.passengerName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="flightNumber"
            placeholder="Flight Number"
            value={form.flightNumber}
            onChange={handleChange}
          />

          <input
            type="text"
            name="baggageTag"
            placeholder="Baggage Tag"
            value={form.baggageTag}
            onChange={handleChange}
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (KG)"
            value={form.weight}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="CHECKED-IN">CHECKED-IN</option>
            <option value="LOADED">LOADED</option>
            <option value="IN-TRANSIT">IN-TRANSIT</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>

          <button type="submit">Add Baggage</button>
        </form>
      </section>

      <section className="card">
        <h2>Baggage List</h2>

        {baggage.length === 0 ? (
          <p className="empty">
            No baggage records available.
          </p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Passenger</th>
                  <th>Flight</th>
                  <th>Tag</th>
                  <th>Weight</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {baggage.map((item) => (
                  <tr key={item.id}>
                    <td>{item.passengerName}</td>
                    <td>{item.flightNumber}</td>
                    <td>{item.baggageTag}</td>
                    <td>{item.weight} KG</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
