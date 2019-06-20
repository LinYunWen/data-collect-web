import "core-js/stable";
import "regenerator-runtime/runtime";
import { constraints } from "./data";

window.addEventListener("load", async (event) => {
    let player = document.getElementById('player');
    let snapshotCanvas = document.getElementById('snapshot');
    let captureButton = document.getElementById('capture');
    let videoTracks;

    let handleSuccess = function(stream) {
        // Attach the video stream to the video element and autoplay.
        player.srcObject = stream;
        console.log("tracks", stream.getTracks());
        videoTracks = stream.getVideoTracks();
        console.log("capability:", videoTracks[0].getCapabilities());
    };

    captureButton.addEventListener('click', function() {
        let context = snapshot.getContext('2d');
        // Draw the video frame to the canvas.
        context.drawImage(player, 0, 0, snapshotCanvas.width,
            snapshotCanvas.height);
        // Stop all video streams.
        videoTracks.forEach(function(track) {track.stop()});
    });

    navigator.mediaDevices.getUserMedia(constraints)
        .then(handleSuccess);
    console.log(await navigator.mediaDevices.enumerateDevices())
    console.log(await navigator.mediaDevices.getSupportedConstraints())
})