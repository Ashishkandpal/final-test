import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userActions } from "../store/user-slice";
import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameHandler = (event) => {
    dispatch(userActions.getInputName(event.target.value));
  };

  const passwordHandler = (event) => {
    dispatch(userActions.getInputPassword(event.target.value));
  };

  const enteredName = useSelector((state) => state.user.username);
  const enteredPassword = useSelector((state) => state.user.password);

  const submitHandler = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: enteredName,
          password: enteredPassword,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(userActions.addPostDetails(data));
        localStorage.setItem("id", data.id);
        navigate("./profile");
      } else {
        alert("full error baazi");
      }
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className={classes.main}>
      <h1>Login to your Account</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="text"
          id="username"
          placeholder="Username"
          onChange={nameHandler}
        />
        <input
          className={classes.input}
          type="password"
          id="password"
          placeholder="passoword"
          onChange={passwordHandler}
        />
        <button className={classes.btn}>Login</button>
      </form>
    </main>
  );
};

export default Login;
