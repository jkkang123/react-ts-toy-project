import React from 'react';
import './MovieDetail.css';

type MovieDetailProps = {
  title: string;
  thumbnail: string;
  subtitle: string;
  userRating: string;
};

function MovieDetail({ title, thumbnail, subtitle, userRating }: MovieDetailProps) {
  return (
    <div className="MovieDetail">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <div className="name">{title}</div>
      </div>
      <p>{subtitle}</p>
      <div>{userRating}</div>
    </div>
  );
}

export default MovieDetail;