import React from "react";
import ProfileResults from "../profiles/ProfileResults";
import ProfileSearch from "../profiles/ProfileSearch";

function Home() {
  return (
    <div>
      {/* <h1>Your Number One Github Profile Finder</h1> */}
      <ProfileSearch />
      <ProfileResults />
    </div>
  );
}

export default Home;
