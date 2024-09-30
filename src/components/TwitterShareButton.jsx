import React from 'react';
import PropTypes from 'prop-types';
import { shareViaTwitter } from "../helper"


const TwitterShareButton = (props) => {

  const handleShare = async (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    shareViaTwitter(props)
  };

  if (props.isDefault) {
    return <React.Fragment>
      <button className={"share-button"} onClick={handleShare}>
        {children}
        <i className="fa fa-twitter twitter-svg" aria-hidden="true" ></i>

      </button>
    </React.Fragment>
  }
  return (
    <React.Fragment>
    <button className={"share-button"} onClick={handleShare}>
      {children}
      <i className="fa fa-twitter twitter-svg" aria-hidden="true" ></i>

    </button>
  </React.Fragment>
  );
};


// Define default props
TwitterShareButton.defaultProps = {

  isDefault: true,
  children: <></>,

  url: window.location.href,
  text: "",
  tab: "_blank",
  className: "share-button"
};

TwitterShareButton.propTypes = {
  isDefault: PropTypes.bool,
  children: PropTypes.node,

  text: PropTypes.string,
  url: PropTypes.string,
  tab: PropTypes.string,
  className: PropTypes.string,
};

export default TwitterShareButton;
