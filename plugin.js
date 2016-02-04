define([], function () {

    return function () {

        var self = this;

        self.name = 'SteamBPM';
        self.type = 'soundeffects';
        self.id = 'steamoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    };
});
