import { Link, useNavigate } from "react-router-dom";
import { pageList } from "../../data";

export const Breadcrumb = () => {
    const navigate = useNavigate();

    function getCurrentIndex() {
        const location = window.location.pathname;
        const result = location.split('/').filter(Boolean);
        return result || [];
    }

    const routes = getCurrentIndex();

    return (
        <p className="inline-flex text-sm space-x-2">
            <span onClick={() => navigate('/')} className="cursor-pointer hover:gradient-orange">Home</span>
            {routes.map((route, index) => {
                const isLastRoute = index === routes.length - 1;
                const path = '/' + routes.slice(0, index + 1).join('/');
                return (
                    <span key={index} className="inline-flex items-center space-x-2">
                        <span>&gt;</span>
                        {isLastRoute ? (
                            <span>{pageList[route] || route}</span>
                        ) : (
                            <span onClick={() => navigate(path)} className="cursor-pointer hover:gradient-orange">
                                {pageList[route] || route}
                            </span>
                        )}
                    </span>
                );
            })}
        </p>
    );
};
