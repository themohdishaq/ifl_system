import React from "react";
import {Navigate} from "react-router-dom";

export const AdminRoute = ({user, children}) => {
    return user === "Admin" ? children : <Navigate to="/" />;
};

export const StudentRoute = ({user, children}) => {
    return user === "Student" ? children : <Navigate to="/" />;
};

export const DonorRoute = ({user, children}) => {
    return user === "Donor" ? children : <Navigate to="/" />;
};