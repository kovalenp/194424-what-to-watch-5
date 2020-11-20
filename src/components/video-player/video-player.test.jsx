import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

describe(`VideoPlayer meets B21`, () => {

  it(`and rendered correctly for auth'ed`, () => {
    const tree = renderer.create((
      <VideoPlayer
        isPlaying={false}
        video={``}
        width={`1px`}
        height={`1px`}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
