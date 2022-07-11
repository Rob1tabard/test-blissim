import { Card } from "./Card";
import { HeartIcon } from "@heroicons/react/outline";

export const BlissimComponent = ({ data }) => {
  return (
    <Card className="card-wrapper">
      <Card.Image
        className="card-image"
        imageProps={{
          src: "/static/images/homepage-box-image.jpg",
          layout: "fill",
          objectFit: "cover",
        }}
      />

      <Card.ContentContainer className="wrapper">
        {data?.map((el, index) => {
          return (
            <div className="content-wrapper" key={index}>
              <HeartIcon className="heart" />
              <div className="text-container">
                <h4 className="text-header">{el?.title}</h4>
                <p>{el?.description}</p>
              </div>
            </div>
          );
        })}
      </Card.ContentContainer>
    </Card>
  );
};
