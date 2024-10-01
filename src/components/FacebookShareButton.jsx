// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { shareViaFb } from "../helper"
import '../index.css'
const FacebookShareButton = (props) => {
  const { url, text, className, isDefault, children } = props;

  const handleShare = async (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    shareViaFb(props)
  };

  if (isDefault) {
    return <React.Fragment>
      <button className={"share-button"} onClick={handleShare}>
        {children}
        <i className="fa fa-facebook-f facebook-svg" aria-hidden="true" ></i>
      </button>
    </React.Fragment>
  }
  return (
    <React.Fragment>
    <button className={"share-button"} onClick={handleShare}>
      {children}
      <i className="fa fa-facebook-f facebook-svg" aria-hidden="true" ></i>
    </button>
  </React.Fragment>
  );
};


// Define default props
FacebookShareButton.defaultProps = {
  text: '',
  description: '',
  url: '',
  isDefault: true,
  children: <></>
};

FacebookShareButton.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  isDefault: PropTypes.bool,
  className: PropTypes.string,
};

export default FacebookShareButton;
