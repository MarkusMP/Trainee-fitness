import React from "react";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);

    // dynamic params
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, #171819, #f13a11, #171819)",
          }}
          tw="h-full w-full flex items-start justify-start"
        >
          <div tw="flex items-start justify-start h-full">
            <div tw="flex flex-col justify-between w-full h-full p-20">
              {/* Replace with your own logo */}
              <h2 tw="text-white text-[68px] font-bold">Trainee Fitness</h2>

              <h1 tw="text-[60px] text-white font-semibold text-left">
                {title}
              </h1>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
