'use client'

import React, { useState } from 'react';
import DashboardOverview from './dashboardSections/DashboardOverview';
import LeadsManagement from './dashboardSections/LeadsManagement';

const DashboardContent = () => {
  // State to manage which section is currently selected
  const [section, setSection] = useState('home');

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <DashboardOverview />;
      case 'leads':
        return <LeadsManagement />;
    //   case 'appointments':
    //     return <Appointments />;
    //   case 'campaigns':
    //     return <EmailCampaigns />;
    //   case 'ai':
    //     return <AIManagement />;
    //   default:
    //     return <DashboardOverview />;
    }
  };

  return (
    <div className="dashboard-content">
      {renderSection()}
    </div>
  );
};

export default DashboardContent;
