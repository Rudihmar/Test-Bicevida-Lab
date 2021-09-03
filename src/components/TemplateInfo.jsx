import React from "react";

const TemplateInfo = (props) => {
  const { insuranceData } = props;
  const { name, description, price, image } = insuranceData.insurance;

  return (
    <div>
      <div className="template">
        <div className="image">
          <img src={image} alt="img" />
        </div>
        <div className="price">{price}</div>
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default TemplateInfo;
