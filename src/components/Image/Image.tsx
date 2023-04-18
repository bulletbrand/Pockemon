import React, { useState } from 'react';

type ImageProps = {
  src: string;
  alt: string;
  defaultImage?: string;
  className?: string;
};

const Image = ({ src, alt, defaultImage = '', className = '' }: ImageProps) => {
  const [error, setError] = useState(false);

  const setImgUploadError = () => setError(true);

  return <img className={className} src={error || !src ? defaultImage : src} alt={alt} onError={setImgUploadError} />;
};

export default Image;
