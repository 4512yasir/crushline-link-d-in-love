import React from "react";

function SocialMediaIcons({ gitAccount, instagram, email }) {
    return (
      <>
        <div className="SocialsContainer">
          <div>
            <img src={gitAccount} alt="gitLogo" />
          </div>
          <div>
            <img src={instagram} alt="instagramLogo" />
          </div>
          <div>
            <img src={email} alt="emailLogo" />
          </div>
        </div>
      </>
    );
}

function CopyRight() {
  return (
    <>
      <div>
        <div className="logoDiv">
          <div className="logoImageDiv">
            <img
              className="logoImage"
              src="./src/assets/heart-solid.svg"
              alt="logo"
            />
          </div>
          <div>
            <img
              className="copyrightImage"
              src=""
              alt="copyrightLogo"
            />
          </div>
          <div className="logoNameDiv">
            <p className="logoNamePara">
              Copyright
              <br />
              Powered by Crushline
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Footer(){
//     return ();
// }
