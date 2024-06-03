import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Details } from "./Details";
import { NotFound } from "./NotFound";
import { Loader } from "./../components/Loader";

export const PageRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/recent-project/" element={<Details />} />
                    <Route path="/recent-project/:projectId" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    )
}