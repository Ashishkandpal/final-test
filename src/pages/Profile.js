import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { userActions } from "../store/user-slice";
import classes from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  // const userId = useSelector((state) => state.user.postDetails.id);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${localStorage.getItem("id")}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        dispatch(userActions.addGetDetails(data));
      });
  }, [dispatch]);
  return (
    <>
      <div className={classes.main}>
        <div className={`${classes.left} ${classes.cards}`}>
          <div className={`${classes.leftOverall} ${classes.cards}`}>
            <img className={classes.img} src={user.image} alt="propic" />
            <p
              style={{ fontWeight: "700" }}
            >{`${user.firstName} ${user.lastName}`}</p>
            <span style={{ fontWeight: "500", color: "red" }}>
              {user.company ? user.company.title : ""}
            </span>
          </div>
          <div className={`${classes.leftInside} ${classes.cards}`}>
            <p>
              <span className={classes.heading}>Age:</span> {user.age}
            </p>
            <p>
              <span className={classes.heading}>Gender:</span> {user.gender}
            </p>
            <p>
              <span className={classes.heading}>D.O.B:</span> {user.birthDate}
            </p>
            <p>
              <span className={classes.heading}>Blood Group:</span>{" "}
              {user.bloodGroup}
            </p>
            <p>
              <span className={classes.heading}>Weight:</span> {user.weight}
            </p>
            <p>
              <span className={classes.heading}>Weight:</span> {user.weight}
            </p>
            <p>
              <span className={classes.heading}>Height:</span> {user.height}
            </p>
          </div>
        </div>
        <div className={`${classes.mid} ${classes.cards}`}>
          <h2>Personal Details</h2>
          <p>
            <span className={classes.heading}>Username:</span> {user.username}
          </p>
          <p>
            <span className={classes.heading}>Phone No.:</span> {user.phone}
          </p>
          <p>
            <span className={classes.heading}>Email:</span> {user.email}
          </p>
          <p>
            <span className={classes.heading}>Address:</span>{" "}
            {user.address ? user.address.address : ""}{" "}
            {user.address ? user.address.city : ""}
          </p>
          <p>
            <span className={classes.heading}>Domain:</span> {user.domain}
          </p>
          <p>
            <span className={classes.heading}>UserAgent:</span> {user.userAgent}
          </p>
          <p>
            <span className={classes.heading}>IP:</span> {user.ip}
          </p>
          <p>
            <span className={classes.heading}>MacAddress:</span>{" "}
            {user.macAddress}
          </p>
          <p>
            <span className={classes.heading}>SSN: </span>
            {user.ssn}
          </p>
        </div>
        <div className={`${classes.right} ${classes.cards}`}>
          <h3>Bio</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            harum, sapiente autem nemo pariatur sed culpa id, incidunt molestiae
            aperiam quis assumenda laborum reprehenderit consequatur enim
            aliquid rem suscipit necessitatibus!
          </p>
          <p>
            <span className={classes.heading}>Company Name:</span>
            {user.company ? user.company.name : ""}
          </p>
          <div>
            <p>
              <span className={classes.heading}>Card type:</span>{" "}
              {user.bank ? user.bank.cardType : ""}
            </p>
            <p>
              <span className={classes.heading}>Card No.: </span>
              {user.bank ? user.bank.cardNumber : ""}
            </p>
          </div>
          <p>
            <span className={classes.heading}>University:</span>{" "}
            {user.university}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
