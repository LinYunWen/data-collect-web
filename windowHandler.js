import "core-js/stable";
import "regenerator-runtime/runtime";
import media from "./media";

window.addEventListener("load", async (event) => {
    media.startMedia();
    document.querySelector('#capture').addEventListener('click', media.captureImage);
    document.querySelector('#start-media').addEventListener('click', media.startMedia);
    document.querySelector('#stop-media').addEventListener('click', media.stopMedia);

    console.log(await navigator.mediaDevices.enumerateDevices())
    console.log(await navigator.mediaDevices.getSupportedConstraints())
    
})