let map = new WeakMap();

export class EventTarget {
    constructor() {
        map.set(this, {
            listeners: {}
        });
    }

    addListener(type, fn) {
        let listeners = map.get(this).listeners;

        if (!listeners[type]) {
            listeners[type] = [];
        }

        listeners[type].push(fn);
    }

    fireEvent(type, eventObj) {
        if (!type) {
            throw new Error("We need to know the type.");
        }

        if (!eventObj) {
            eventObj = {};
        }

        if (!eventObj.type) {
            eventObj.type = type;
        }

        if (!eventObj.target) {
            eventObj.target = this;
        }

        let listeners = map.get(this).listeners[type];

        if (!listeners) {
            return;
        }

        listeners.forEach(function (item) {
            item(eventObj);
        });
    }

    removeListener(type, fn) {
        let listeners = map.get(this).listeners[type];

        if (!listeners) {
            return;
        }

        let index = listeners.indexOf(fn);

        while (index > -1) {
            listeners.splice(index, 1);

            index = listeners.indexOf(fn);
        }
    }
}