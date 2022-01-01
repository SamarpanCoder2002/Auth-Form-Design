import { useState } from "react";
import passwordStrengthChecker from "../common/passwordstrengthcheck";
import { ProgressBarFlexible } from "../common/progresscomponent";
import { generateMultiple, generate } from "generate-password";
import { useNavigate } from "react-router-dom";

const SignUpFormContainer = () => {
  // For Handling Eye-shield of two password-field

  const [percentage, setpercentage] = useState(0);
  const [suggestedPassword, setsuggestedPassword] = useState([]);
  const [confirmPasswordErrorMsg, setconfirmPasswordErrorMsg] = useState();
  const [successMsg, setsuccessMsg] = useState();
  const [signupForm, setsignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = signupForm;

  const handleEyeOnOff = (inputClass, eyeClass) => {
    const input = document.getElementsByTagName("input");
    const eye = document.getElementsByTagName("i");

    if (input[inputClass].type === "password") {
      input[inputClass].type = "text";
      eye[eyeClass].classList.remove("fa-eye-slash");
      eye[eyeClass].classList.add("fa-eye");
    } else {
      input[inputClass].type = "password";
      eye[eyeClass].classList.remove("fa-eye");
      eye[eyeClass].classList.add("fa-eye-slash");
    }
  };

  const handleChange = (e) => {
    setsignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setconfirmPasswordErrorMsg("Password and Confirm Password not matching");
    } else {
      if (email && password && confirmPassword) {
        setconfirmPasswordErrorMsg("");
        setsuccessMsg("Sign up Successful");
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div className="container py-5 h-100 background-container">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div
            className="card card-manual-style"
            style={{ borderRadius: "1rem" }}
          >
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block left-side-img">
                <img
                  src="https://images.pexels.com/photos/7570773/pexels-photo-7570773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="login form"
                  className="img-fluid h-100"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  {successMsg && (
                    <div
                      className="p-3 mb-3 text-center text-white"
                      style={{ background: "#4dd637" }}
                    >
                      <h4>{successMsg}</h4>
                    </div>
                  )}

                  {confirmPasswordErrorMsg && (
                    <div
                      className="p-3 mb-3 text-center text-white"
                      style={{ background: "#B4161B" }}
                    >
                      <h5>{confirmPasswordErrorMsg}</h5>
                    </div>
                  )}

                  <form>
                    {/* Heading */}
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0 text-white card-name">
                        Signup
                      </span>
                    </div>

                    {/* Email  */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg input-field"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        onClick={() => {
                          setconfirmPasswordErrorMsg("");
                          setsuccessMsg("");
                        }}
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="form-outline mb-4 input-group">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg input-field password-field"
                        placeholder="Password"
                        name="password"
                        required
                        value={password}
                        onClick={() => {
                          setconfirmPasswordErrorMsg("");
                          setsuccessMsg("");

                          let passwordCollection = [];

                          const collection = generateMultiple(3, {
                            length: 16,
                            uppercase: false,
                            numbers: true,
                            excludeSimilarCharacters: true,
                          });

                          const unique = generate({
                            length: 16,
                            symbols: true,
                            numbers: true,
                          });

                          passwordCollection = [...collection, unique];

                          setsuggestedPassword(passwordCollection);
                        }}
                        onChange={(e) => {
                          confirmPasswordErrorMsg &&
                            setconfirmPasswordErrorMsg("");

                          handleChange(e);
                          setpercentage(
                            passwordStrengthChecker(e.target.value)
                          );
                        }}
                      />

                      <div className="input-group-addon d-flex align-items-center justify-content-center px-2">
                        <a href="#here">
                          <i
                            className="fa fa-eye-slash"
                            aria-hidden="true"
                            style={{ color: "#CAD5E2" }}
                            name="password-eye"
                            onClick={() =>
                              handleEyeOnOff("password", "password-eye")
                            }
                          ></i>
                        </a>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="form-outline input-group">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg input-field confirm-password-field"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        onClick={() => {
                          setconfirmPasswordErrorMsg("");
                          setsuccessMsg("");
                        }}
                        required
                      />

                      <div className="input-group-addon d-flex align-items-center justify-content-center px-2">
                        <a href="#here">
                          <i
                            className="fa fa-eye-slash"
                            aria-hidden="true"
                            style={{ color: "#CAD5E2" }}
                            name="confirm-password-eye"
                            onClick={() =>
                              handleEyeOnOff(
                                "confirmPassword",
                                "confirm-password-eye"
                              )
                            }
                          ></i>
                        </a>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1 my-4">
                      <button
                        className="btn mb-2 mb-md-0 btn-block w-100 submit-btn text-white fs-5"
                        type="submit"
                        onClick={submitForm}
                      >
                        Signup
                      </button>
                    </div>

                    {/* For Switch to LogIn Page */}
                    <div className="text-center text-white fs-6">
                      Already have an account?{" "}
                      <div
                        href="/signin"
                        className="fw-bold d-inline"
                        style={{ color: "yellow", cursor: "pointer" }}
                        onClick={() => {
                          navigate("/signin");
                        }}
                      >
                        Login
                      </div>
                    </div>

                    {/* Password Strengh Bar */}
                    <div className="form-outline mt-3">
                      <div
                        className="form-label fw-bold text-white"
                        style={{ letterSpacing: "1px" }}
                      >
                        Password Strength
                      </div>
                      <ProgressBarFlexible value={percentage} />
                    </div>

                    {/* Suggested Password Component*/}
                    {suggestedPassword && suggestedPassword.length > 0 && (
                      <div className="form-outline mt-3">
                        <div
                          className="form-label fw-bold text-white mb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Suggested Password
                        </div>
                        <SuggestedPasswordCollection
                          suggestedPassword={suggestedPassword}
                          setsuggestedPassword={setsuggestedPassword}
                          setsignupForm={setsignupForm}
                          signupForm={signupForm}
                          setpercentage={setpercentage}
                        />
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuggestedPasswordCollection = ({
  suggestedPassword,
  setsuggestedPassword,
  setsignupForm,
  signupForm,
  setpercentage,
}) => {
  const updateInForm = (password) => {
    /// Add selected [password] to [signupForm]
    setsignupForm({
      ...signupForm,
      password: password,
      confirmPassword: password,
    });

    /// Add Password Strength
    setpercentage(passwordStrengthChecker(password));

    /// Remove [password] from [suggestedPassword]
    setsuggestedPassword(suggestedPassword.filter((p) => p !== password));
  };

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {suggestedPassword.map((password, index) => {
        return (
          <div
            key={index}
            className="mx-3 mb-3 tag"
            onClick={() => {
              updateInForm(password);
            }}
          >
            <span className="text-white fw-bold px-3 py-1">{password}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SignUpFormContainer;
