// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { shareViaInstagram } from "../helper"
import '../index.css'

const InstagramShareButton = (props) => {

  const handleShare = async (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    shareViaInstagram(props)
  };

  if (props.isDefault) {
    return <React.Fragment>
      <button className={"share-button"} onClick={handleShare}>
        {props.children}
        <i className="fa fa-instagram instagram-svg" aria-hidden="true" ></i>

      </button>
    </React.Fragment>
  }
  return (
    <React.Fragment>
      <button className={"share-button"} onClick={handleShare}>
        {props.children}
        <i className="fa fa-instagram instagram-svg" aria-hidden="true" ></i>

      </button>
    </React.Fragment>
  );
};


// Define default props
InstagramShareButton.defaultProps = {

  isDefault: true,
  children: <></>,

  url: '',
  text: "",
  tab: "_blank",
  className: "share-button"
};

InstagramShareButton.propTypes = {
  isDefault: PropTypes.bool,
  children: PropTypes.node,

  text: PropTypes.string,
  url: PropTypes.string,
  tab: PropTypes.string,
  className: PropTypes.string,
};

export default InstagramShareButton;
