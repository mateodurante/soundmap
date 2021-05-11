createjs.Sound.registerSound("data/sounds/lopez.wav", "Lopez");
createjs.Sound.registerSound("data/sounds/laguna_negra.wav", "LagunaNegra");
createjs.Sound.registerSound("data/sounds/jakob.wav", "Jakob");
createjs.Sound.registerSound("data/sounds/frey.wav", "Frey");

var current_sound = 0;
var sounds_order = ['Lopez','LagunaNegra','Jakob','Frey'];

function playSound (id) {
    instance = createjs.Sound.play(sounds_order[id], {loop:-1});
    instance.volume = 0.5;
}

function stopSound (id) {
    createjs.Sound.stop(id);
}

function nextSound() {
    if (current_point == 3) {
        createjs.Sound.stop(sounds_order[current_sound]);
        current_sound = 0
        createjs.Sound.play(sounds_order[current_sound], {loop:-1});
    } else {
        createjs.Sound.stop(sounds_order[current_sound]);
        current_sound += 1
        createjs.Sound.play(sounds_order[current_sound], {loop:-1});
    }
}