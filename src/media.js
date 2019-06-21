import { constraints } from "./data";

let videoTracks;
export default {
    startMedia: async function () {
        try {
            let stream = await navigator.mediaDevices.getUserMedia(constraints)
            document.querySelector('#player').srcObject = stream;
            videoTracks = stream.getVideoTracks();
            console.log("tracks", stream.getTracks());
            console.log("capability:", videoTracks[0].getCapabilities());
        } catch (error) {
            console.error(error);
        }
    },
    stopMedia: function () {
        videoTracks.forEach((track) => { track.stop() });
        document.querySelector('#player').srcObject = null;
    },
    captureImage: function () {
        let canvas = document.querySelector('#snapshot');
        let context = snapshot.getContext('2d');
        context.drawImage(document.querySelector('#player'),
            0, 0, canvas.width, canvas.height);
    }
}