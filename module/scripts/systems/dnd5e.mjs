export default {
    registerSheetOptions: { types: ["npc"] },

    persistClockToActor: ({ clock }) => {
        return {
            data: {
                attributes: {
                    hp: {
                        value: clock.progress,
                        max: clock.size
                    }
                }
            },
            flags: {
                "progress-clocks": {
                    progress: clock.progress,
                    size: clock.size,
                    theme: clock.theme,
                }
            }
        };
    }
};
