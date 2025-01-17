import { useEffect, useState } from "react";
import "./Forms.css";
import { useNavigate, useParams } from "react-router-dom";
import { getUserAndTheirPosts, updateProfile } from "../../services/profileServices/profileServices";


export const EditProfile=()=>{
    const [profile, setProfile]=useState({})

    const { userId } = useParams();
    const navigate=useNavigate()

    useEffect(()=>{
        getUserAndTheirPosts(userId).then((data)=>{
            const userObj=data[0];
            setProfile(userObj)
        })
    },[userId])

    const handleSave=(event)=>{
        event.preventDefault();
        const editedProfile={
            id: profile.id,
            email: profile.email,
            fullName: profile.fullName,
            cohort: profile.cohort,
        }

        updateProfile(editedProfile).then(()=>{
            navigate(`/Profile/${profile.id}`)
        })}


    return  (
        <form className="form-group">
          <h2>Update Profile</h2>
          
          <fieldset>
            <div className="form-group">
              <label>Full Name</label>
              <input
                className="form-control"
                type="text"
                value={profile.fullName ? profile.fullName : ""}
                onChange={(event) => {
                  const copy = { ...profile }; //creating a copy of state object. ... spreads all properties of employee
                  copy.fullName = event.target.value; //setting the specialty
                  setProfile(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                required
                value={profile.email ? profile.email : ""}
                onChange={(event) => {
                  const copy = { ...profile }; //creating a copy of state object. ... spreads all properties of employee
                  copy.email = event.target.value; //setting the specialty
                  setProfile(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Cohort</label>
              <input
                className="form-control"
                type="number"
                required
                value={profile.cohort ? profile.cohort : ""}
                onChange={(event) => {
                  const copy = { ...profile }; //creating a copy of state object. ... spreads all properties of employee
                  copy.cohort = event.target.value; //setting the specialty
                  setProfile(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="form-btn btn-primary" onClick={handleSave}>
                Save Profile
              </button>
            </div>
          </fieldset>
        </form>
      );
    };
