
const HotelBill = () => {
  return (
    <div id="hotel-bill">
      <h2>Hotel Invoice</h2>
      <p><strong>Guest Name:</strong> John Doe</p>
      <p><strong>Room Number:</strong> 203</p>
      <p><strong>Check-in Date:</strong> 2024-09-10</p>
      <p><strong>Check-out Date:</strong> 2024-09-15</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Room Charge</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>Food & Beverages</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td>$50</td>
          </tr>
          <tr>
            <th>Total</th>
            <th>$700</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HotelBill;
