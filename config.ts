export let FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
export const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";
export const BACKEND_URL_GRAPHQL = `${BACKEND_URL}/api/graphql`;

if (typeof window !== 'undefined') {
    const FRONTEND_URL = window.location.hostname;
}

if (process.env.NODE_ENV === 'production') {
    const  os = require("os");
    FRONTEND_URL = os.hostname();
}

console.log(process.env)
