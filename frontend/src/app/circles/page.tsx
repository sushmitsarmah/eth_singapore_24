import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import CirclesOnboarding from './circles';

// Define the prop type for CirclesOnboarding
interface CirclesOnboardingProps {
  setTrustRelations: React.Dispatch<React.SetStateAction<never[]>>;
}

// Define the prop type for CirclesOnboarding
interface CirclesOnboardingProps {
  setTrustRelations: React.Dispatch<React.SetStateAction<never[]>>;
}
import { CirclesSDK } from "../../context/CirclesSdk";

export default function App() {
  const [trustRelations, setTrustRelations] = useState([]);

  return (
    <CirclesSDK>
      <Router>
        <Routes>
          {/* Route for Circles Onboarding */}
          <Route
            path="/"
            element={
              <CirclesOnboarding setTrustRelations={setTrustRelations} />
            }
          />

          {/* Route for Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard trustRelations={trustRelations} />}
          />
        </Routes>
      </Router>
    </CirclesSDK>
  );
}
