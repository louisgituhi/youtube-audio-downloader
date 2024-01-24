const { downloadVideo } = require("yt-get")

const videoUrl = 'https://www.youtube.com/watch?v=9WY44JCPxCc&list=PLC1og_v3eb4jE0bmdkWtizrSQ4zt86-3D&index=7'

downloadVideo(videoUrl)
    .then(() => {
    console.log('Audio downloaded successfully')
})
    .catch((e) => {
    console.log('Error downloading audio' + e.message);
})