import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';
import {
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';

export const FaceBookShare = (props) => {
  const { title, shareURL } = props;
  return (
      <div className="facebook">
        <FacebookShareButton url={shareURL} quote={title}>
          <FaFacebookF /> Facebook
        </FacebookShareButton>
      </div>
  );
};

export const TwitterShare = (props) => {
  const { shareURL, title, author } = props;
  return (
      <div className="twitter">
        <TwitterShareButton url={shareURL} title={title} via={author}>
          <FaTwitter /> Twitter
        </TwitterShareButton>
      </div>
  );
};
