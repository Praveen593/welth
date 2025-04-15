import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        serverActions : {
            bodySizeLimit : "5mb",
        },
    },
};


export default withNextVideo(nextConfig);