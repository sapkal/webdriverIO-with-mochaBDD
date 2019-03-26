module.exports = {
    getDataLayer: function (dataLayer) {
        dataLayer = dataLayer || 'dataLayer';
        const browserData = browser.execute(function (dataLayer) {
            return window.dataLayer;
        });
        return browserData;
    },
    getEvent: function (eventID) {
        const browserEvent = browser.execute(function (eventID) {
            return window.dataLayer.filter(function (gtmEvent) {
                console.info(`evnetttttsdssfdfdsfsfdesd` + eventID);
                return gtmEvent.event == eventID;
            });
        });
        return browserEvent;
    }
};