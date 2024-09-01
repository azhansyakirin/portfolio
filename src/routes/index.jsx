import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Details } from "./Details";
import { NotFound } from "./NotFound";
import { Figma } from "./Figma";
import { Loader } from "./../components/Loader";
import { MiniProjects } from "./MiniProjects";
import { Linktree } from "./Linktree";

export const PageRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/recent-project/" element={<Details />} />
                    <Route path="/quicklink/" element={<Linktree />} />
                    <Route path="/recent-project/:projectId" element={<Details />} />
                    <Route path="/side-project/" element={<MiniProjects routes={'/side-project'} />} />
                    <Route path="/figma-design/" element={<Figma routes={'/figma-design'} />} />
                    <Route path="/figma-design/:uniqueId" element={<Figma routes={'/figma-design'} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    )
}