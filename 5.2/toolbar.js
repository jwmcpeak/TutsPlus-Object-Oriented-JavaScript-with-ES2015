import {EventTarget} from "eventtarget.js";

let map = new WeakMap();

function data(obj) {
    return map.get(obj);
}

export class Toolbar extends EventTarget {
    constructor(element) {
        super();

        let items = [];
        let itemElements = element.querySelectorAll(".toolbar-item");

        [].forEach.call(itemElements, function(el) {
            let item = new ToolbarItem(el);

            items.push(item);
        });

        map.set(this, {
            el: element,
            items: items
        });
    }

    add() {
        let d = data(this);
        let span = document.createElement("span");
        span.className = "toolbar-item";

        d.el.appendChild(span);

        let item = new ToolbarItem(span);
        d.items.push(item);

        super.fireEvent("itemadded", {
            item: item
        });
    }

    get items() {
        return map.get(this).items;
    }
}

class ToolbarItem extends EventTarget {
    constructor(element) {
        super();

        map.set(this, {
            el: element
        });
    }

    get enabled() {
        return !data(this).el.classList.contains("disabled");
    }

    set enabled(value) {
        if (this.enabled == value) {
            return;
        }

        let method = value ? "remove" : "add";

        data(this).el.classList[method]("disabled");

        super.fireEvent("enabledchanged", {
            value: value
        });
    }
}