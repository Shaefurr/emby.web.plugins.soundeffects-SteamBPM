define([], function () {

    return function () {

        var self = this;

        self.name = 'SMario';
        self.type = 'soundeffects';
        self.id = 'smariosoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    };
});
