const LeadsManagement = () => {
    return (
      <div>
        <h2>Leads Management</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Lead Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Follow-up</td>
              <td>80</td>
            </tr>
            {/* Other leads */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LeadsManagement;
  