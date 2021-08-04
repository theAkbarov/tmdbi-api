import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { VideosConfig } from "../../db";
import { VideoWrapper, Slide, Center } from "./useStyles";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Videos() {
  const videos = useSelector((state) => state.allPayloads.movie_videos);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [loading, setLoading] = useState(true);
  return (
    <VideoWrapper>
      <Slider className="slide" {...VideosConfig}>
        {videos &&
          videos.map((v) => (
            <Slide key={v.key}>
              <iframe
                frameBorder="8px"
                style={{
                  display: loading ? "none" : "initial",
                }}
                width="600"
                height="400"
                onLoad={() => setLoading(false)}
                title={v.name}
                src={`https://www.youtube.com/embed/${v.key}`}
              ></iframe>
              {loading ? (
                <Center>
                  <Spin indicator={antIcon} />
                </Center>
              ) : null}
            </Slide>
          ))}
      </Slider>
    </VideoWrapper>
  );
}
