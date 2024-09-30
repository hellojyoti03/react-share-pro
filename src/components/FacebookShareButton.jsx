import React from 'react';
import PropTypes from 'prop-types';
import { shareViaFb } from "../helper"


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
        <i class="fa fa-facebook-f" aria-hidden="true" className='facebook-svg'></i>
      </button>
    </React.Fragment>
  }
  return (
    <></>
  );
};


// Define default props
MyComponent.defaultProps = {
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
