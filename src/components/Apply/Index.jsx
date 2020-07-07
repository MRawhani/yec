import React from "react";

export default function Index() {
  return (
    <div
    id="apply"
      className={` apply`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/elements/applyNow-01.svg),linear-gradient(-45deg,rgba(255,132,132,.8),rgba(92,59,100,.8))`,

        // height:"300px",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <div className="apply__content">
        <div className="conatiner">
          <h2 className="apply__subtitle">How To</h2>
          <h1 className="apply__title">Apply</h1>

          <input
            type="button"
            value="DOWNLOAD PDF"
            className="cta-btn cta-btn--filled "
          />
        </div>
      </div>
    </div>
  );
}
