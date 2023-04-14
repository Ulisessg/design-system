import React, { VideoHTMLAttributes } from "react";
import styled from "styled-components";

export default function Video(props: VideoProps) {
  return <VideoStyles controls {...props} />;
}

export type VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

const VideoStyles = styled.video`
  margin: 70px;
  width: 80%;
  cursor: pointer;
  box-shadow: 0px 7px 10px 0px ${({ theme }) => theme.colors.shadow};
`;
