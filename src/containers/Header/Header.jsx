import React from "react";
import ProfileCover from "../../components/ProfileCover/ProfileCover";
import { User } from "../../data";
const Header = () => {
  return (
    <div className="container-fluid">
      <ProfileCover name={User.name} profession={User.profession} />
    </div>
  );
};

export default Header;
