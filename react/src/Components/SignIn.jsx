import { useMemo, useState } from "react";
import "./SignIn.css";

export default function SigIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [checkBox, setCheckBox] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [isPassCorrect] = useState(true);

  const [formTitle, setFormTitle] = useState("Sign In");

  const [mode, setMode] = useState("signin");

  const minLength = useMemo(() => {
    return password.length > 8;
  }, [password]);

  const specialChar = useMemo(() => {
    const regex = /^(?=.*[!@#$%^&*])/;
    return regex.test(password);
  }, [password]);

  const minNumber = useMemo(() => {
    const regex = /^(?=.*\d{3,})/;
    return regex.test(password);
  }, [password]);

  const checkSignUpInput = () => {
    const regex = /^(?=.*\d{3,})(?=.*[!@#$%^&*])/;
    return (
      email.includes("@") &&
      email.length > 0 &&
      userName.length > 0 &&
      password.length > 8 &&
      regex.test(password)
    );
  };

  const checkSignInInput = () => {
    return email.includes("@") && email.length > 0 && password.length > 8;
  };

  const switchMode = () => {
    setEmail("");
    setPassword("");
    setCheckBox("");
    setUserName("");

    setMode(mode === "signin" ? "signup" : "signin");
    setFormTitle(mode === "signin" ? "Sign Up" : "Sign In");
  };

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  const inputActive =
    mode === "signin" ? checkSignInInput() : checkSignUpInput();

  return (
    <form className="container" onSubmit={(e) => e.preventDefault()}>
      <div className="form__header">
        <div className="header__top">
          <div className="header__title">
            <div className="title__img">
              <img type="image/svg+xml" src="/userSignIn.svg" alt="user icon" />
            </div>
            <h1 className="title__text">{formTitle}</h1>
          </div>
          <div className="header__cross">
            <img src="/cross.svg" alt="cross icon" />
          </div>
        </div>
        {mode === "signup" ? (
          <p>
            Register to Mamba - enjoy exclusive
            <br />
            features & many more
          </p>
        ) : (
          <p>
            Login to your account - enjoy exclusive
            <br />
            features & many more
          </p>
        )}
      </div>

      <div className="form__body">
        {mode === "signup" && (
          <div className="input">
            <label htmlFor="username">
              Username<sup>*</sup>
            </label>
            <div className="username">
              <div className="icon icon__username"></div>
              <input
                id="username"
                className="username__input"
                type="text"
                placeholder="Enter your username"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="input">
          <label htmlFor="email">
            Email<sup>*</sup>
          </label>
          <div className="email">
            <div className="icon icon__email"></div>
            <input
              id="email"
              className="email__input"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="input">
          <label htmlFor="password">
            Password<sup>*</sup>
          </label>
          <div className="password">
            <div className="icon icon__password"></div>
            <input
              id="password"
              className={`password__input ${!isPassCorrect ? "error" : ""} ${
                mode === "signup" ? "password__signup" : ""
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={`icon icon__eye ${showPassword ? "showEye" : ""}`}
              onClick={showPass}
            ></div>
          </div>

          {mode === "signup" && (
            <div className="checks">
              <p className={`checks__text ${minLength ? "checked" : ""}`}>
                <svg
                  className={`check ${minLength ? "checked" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.00002 18C9.00002 18 8.99802 18 8.99602 18C8.72902 17.999 8.47502 17.892 8.28802 17.702L4.28802 13.64C3.90002 13.246 3.90503 12.613 4.29903 12.226C4.69303 11.839 5.32502 11.843 5.71302 12.237L9.00602 15.581L18.294 6.29398C18.685 5.90298 19.317 5.90298 19.708 6.29398C20.099 6.68398 20.099 7.31798 19.708 7.70798L9.70801 17.708C9.52001 17.895 9.26502 18 9.00002 18Z" />
                </svg>
                Minimum 8 characters
              </p>

              <p className={`checks__text ${specialChar ? "checked" : ""}`}>
                <svg
                  className={`check ${specialChar ? "checked" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.00002 18C9.00002 18 8.99802 18 8.99602 18C8.72902 17.999 8.47502 17.892 8.28802 17.702L4.28802 13.64C3.90002 13.246 3.90503 12.613 4.29903 12.226C4.69303 11.839 5.32502 11.843 5.71302 12.237L9.00602 15.581L18.294 6.29398C18.685 5.90298 19.317 5.90298 19.708 6.29398C20.099 6.68398 20.099 7.31798 19.708 7.70798L9.70801 17.708C9.52001 17.895 9.26502 18 9.00002 18Z" />
                </svg>
                Atleast 1 special character
              </p>

              <p className={`checks__text ${minNumber ? "checked" : ""}`}>
                <svg
                  className={`check ${minNumber ? "checked" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.00002 18C9.00002 18 8.99802 18 8.99602 18C8.72902 17.999 8.47502 17.892 8.28802 17.702L4.28802 13.64C3.90002 13.246 3.90503 12.613 4.29903 12.226C4.69303 11.839 5.32502 11.843 5.71302 12.237L9.00602 15.581L18.294 6.29398C18.685 5.90298 19.317 5.90298 19.708 6.29398C20.099 6.68398 20.099 7.31798 19.708 7.70798L9.70801 17.708C9.52001 17.895 9.26502 18 9.00002 18Z" />
                </svg>
                Atleast 3 numbers
              </p>
            </div>
          )}
          {!isPassCorrect &&
            mode ===
              "signup"(
                <p className="invalidPass">
                  <img className="danger" src="/danger.svg" alt="danger icon" />
                  Invalid Password
                </p>
              )}
        </div>

        <div className="remeber__me">
          <div className="remeber__checkbox">
            <input
              id="remeberme"
              type="checkbox"
              required
              checked={checkBox}
              onChange={(e) => setCheckBox(e.target.checked)}
            />
            <label htmlFor="remeberme">
              {mode === "signup" ? (
                <>
                  I agree to <a href="#">Terms & Conditions</a>
                </>
              ) : (
                <>Remember me</>
              )}
            </label>
          </div>
          {mode !== "signup" && <a href="#">Forget Password?</a>}
        </div>
      </div>

      <div className="form__footer">
        <div className="authentication">
          <button
            disabled={!inputActive}
            className="submit filled"
            type="submit"
          >
            {formTitle}
          </button>
          <div className="form__control">
            <p>
              {mode === "signup" ? (
                <>
                  Already have an account?{" "}
                  <span className="switchMode" onClick={switchMode}>
                    Sign in
                  </span>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <span className="switchMode" onClick={switchMode}>
                    Sign up
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="authentication or">
          <div className="line"></div>
          <p className="or__text">OR</p>
          <div className="line"></div>
        </div>

        <div className="authentication">
          <button className="auth__button" type="submit">
            <img className="auth" src="/google.svg" alt="Google icon" />
            Google
          </button>
          <button className="auth__button" type="submit">
            <img className="auth" src="/twitter.svg" alt="Twitter icon" />
            Twitter
          </button>
        </div>
      </div>
    </form>
  );
}
