import { Navigate } from "react-router-dom";
import { useStoreContext } from "./contextApi/ContextApi";

export default function PrivateRoute({ children }) {
    // For frontend testing without backend
    const mockToken = "test-token"; // Temporary mock token
    
    // Try to get token from context, but don't crash if context is not ready
    let token;
    try {
        const context = useStoreContext();
        token = context?.token;
    } catch (error) {
        console.log("Context not ready yet, using mock token");
    }
    
    // Always use mock token for frontend-only testing
    const authToken = mockToken; // Force using mock token for frontend testing
    
    return authToken ? children : <Navigate to="/login" />;
}