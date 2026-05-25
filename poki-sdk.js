window.PokiSDK = {
    init: function() {
        return new Promise((resolve) => {
            console.log("[PokiStub] SDK Init appelé.");
            window.pokiSDKReady = true;
            resolve(true);
        });
    },
    externalRace: function(fn) {
        return fn();
    },
    gameLoadingStart: function() { console.log("[PokiStub] Game Loading Start"); },
    gameLoadingProgress: function(progress) { /* On ignore les barres de chargement publicitaires */ },
    gameLoadingFinished: function() { console.log("[PokiStub] Game Loading Finished"); },
    gameplayStart: function() { console.log("[PokiStub] Gameplay Start"); },
    gameplayStop: function() { console.log("[PokiStub] Gameplay Stop"); },
    commercialBreak: function() {
        return new Promise((resolve) => {
            console.log("[PokiStub] Pub commerciale ignorée.");
            resolve(true);
        });
    },
    getURLParam: function(name) { return ""; }
};

// Émulation de l'objet d'initialisation que le module WebAssembly cherche à instancier
window.PokiUnitySDK = {
    Instance: {
        Init: function() {
            console.log("[PokiStub] Unity a appelé PokiUnitySDK.Instance.Init()");
            // On peut notifier Unity si nécessaire via gameInstance, mais l'existence de la fonction suffit souvent à bloquer l'exception.
        }
    }
};