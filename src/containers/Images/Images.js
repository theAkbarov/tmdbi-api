import { ImagesWrapper } from "./useStyles.js";
import { useSelector } from "react-redux";
import { ImagesConfig } from "../../db";
import Slider from "react-slick";
import { Image } from "antd";
const Images = () => {
  const state = useSelector((state) => state.allPayloads.images);
  return (
    <ImagesWrapper>
      <Slider {...ImagesConfig} className="slide">
        {state &&
          state.data.backdrops.map((el) => (
            <div key={el.id}>
              <Image
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "8px",
                }}
                width="200px"
                src={`https://image.tmdb.org/t/p/original${el.file_path}`}
              />
            </div>
          ))}
      </Slider>
    </ImagesWrapper>
  );
};

export default Images;
