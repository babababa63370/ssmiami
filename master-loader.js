"use strict";

function launchGame() {
    if (!window.config) return;

    window.config.unityWebglLoaderUrl = "UnityLoader.2019.2.js";

    if (!document.getElementById("gameContainer")) {
        var container = document.createElement("div");
        container.id = "gameContainer";
        container.style.width = "100vw";
        container.style.height = "100vh";
        document.body.appendChild(container);
    }

    var script = document.createElement("script");
    script.src = "./UnityLoader.2019.2.js";
    script.onload = function() {
        window.gameInstance = UnityLoader.instantiate("gameContainer", window.config.unityWebglBuildUrl);
    };
    document.body.appendChild(script);
}

window.pokiSDKReady = true;
setTimeout(launchGame, 50);