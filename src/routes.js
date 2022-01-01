import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInEntryPoint from "./signin/app";
import SignUpEntryPoint from "./signup/app";

const Switcher = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SignUpEntryPoint />} />
        <Route path="/signup" exact element={<SignUpEntryPoint />} />

        <Route path="/signin" exact element={<SignInEntryPoint />} />
        <Route path="*" element={<ErrorPath />} />
      </Routes>
    </Router>
  );
};

const ErrorPath = () => (
  <main
    class="fs-4 d-flex flex-wrap justify-content-center align-items-center w-100"
    style={{ height: "80vh" }}
  >
    <div class="text-center py-5">
      <h1 class="display-1">404</h1>
      <h2>😔 Found Nothing Here</h2>
    </div>
  </main>
);

export default Switcher;
