import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/dashboard/home">Dashboard Overview</a></li>
        <li><a href="/dashboard/leads">Leads Management</a></li>
        <li><a href="/dashboard/appointments">Appointments</a></li>
        <li><a href="/dashboard/campaigns">Email/SMS Campaigns</a></li>
        <li><a href="/dashboard/ai">AI Assistant</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
