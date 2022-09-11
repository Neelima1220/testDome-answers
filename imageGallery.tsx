import React from 'react';
const ImageGallery = ({ data, setData }) => {
  const handleRemove = (i) => {
    let tempdata = [...data];
    setData(tempdata.filter((item) => item !== i));
  };
  return (
    data.length &&
    data.map((item, index) => {
      return (
        <div className="image" key={index}>
          <img src={item} />
          <button className="remove" onClick={() => handleRemove(item)}>
            X
          </button>
        </div>
      );
    })
  );
};

export default ImageGallery;
