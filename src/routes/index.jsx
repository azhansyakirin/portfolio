import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Details } from "./Details";
import { NotFound } from "./NotFound";

export const PageRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path="/portfolio/" element={<Dashboard />} />
                    <Route path="/portfolio/recent-project/" element={<Details />} />
                    <Route path="/portfolio/recent-project/:projectId" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    )
}