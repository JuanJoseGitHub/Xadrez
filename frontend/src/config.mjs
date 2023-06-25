const BACKEND_URL = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? "http://localhost:8000"
    : "https://xadrezfrontend.onrender.com"

export {
    BACKEND_URL
}