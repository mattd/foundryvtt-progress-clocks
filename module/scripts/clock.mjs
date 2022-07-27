export class Clock {
    static sizes = [
        2, 3, 4, 5, 6, 8, 10, 12
    ];

    static image = {
        width: 350,
        height: 350
    };

    static themePath = 'modules/progress-clocks/themes';

    static themes = {
        gms_red: `${Clock.themePath}/gms_red`,
        gms_red_grey: `${Clock.themePath}/gms_red_grey`,
        wallflower_green: `${Clock.themePath}/wallflower_green`,
        wallflower_green_grey: `${Clock.themePath}/wallflower_green_grey`
    };

    constructor ({ size, progress, theme } = {}) {
        const isSupportedSize = size && Clock.sizes.indexOf(parseInt(size)) >= 0;

        this.size = isSupportedSize ? parseInt(size) : Clock.sizes[0];

        if (!progress || progress < 0) {
            this.progress = 0;
        } else if (progress > size) {
            this.progress = this.size;
        } else {
            this.progress = progress;
        }

        this.theme = theme || 'wallflower_green';
    }

    increment () {
        const old = this;
        return new Clock({
            size: old.size,
            progress: old.progress + 1,
            theme: old.theme
        });
    }

    decrement () {
        const old = this;
        return new Clock({
            size: old.size,
            progress: old.progress - 1,
            theme: old.theme
        });
    }
}
