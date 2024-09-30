import React from 'react';
import PropTypes from 'prop-types';
import { shareViaEmail } from "../helper"


const EmailShareButton = (props) => {

  const handleShare = async (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    shareViaEmail(props)
  };

  if (props.isDefault) {
    return <React.Fragment>
      <button className={"share-button"} onClick={handleShare}>
        {children}
        <i className="fa fa-envelope email-svg" aria-hidden="true" ></i>

      </button>
    </React.Fragment>
  }
  return (
    <React.Fragment>
    <button className={"share-button"} onClick={handleShare}>
      {children}
      <i className="fa fa-envelope email-svg" aria-hidden="true" ></i>

    </button>
  </React.Fragment>
  );
};


// Define default props
EmailShareButton.defaultProps = {

  isDefault: true,
  children: <></>,

  subject: "",
  body: "",
  tab: "_blank",
  className: "share-button"
};

EmailShareButton.propTypes = {
  isDefault: PropTypes.bool,
  children: PropTypes.node,

  subject: PropTypes.string,
  body: PropTypes.string,
  tab: PropTypes.string,
  className: PropTypes.string,
};

export default EmailShareButton;
