var Annotation = (function () {
    function Annotation(_a) {
        var x = _a.x, y = _a.y, dy = _a.dy, dx = _a.dx, text = _a.text, title = _a.title, data = _a.data, dataX = _a.dataX, dataY = _a.dataY;
        this.x = x || 0;
        this.y = y || 0;
        this.dx = dx || 0;
        this.dy = dy || 0;
        this.text = text;
        this.title = title;
        this.data = data;
        this.dataX = dataX || function (d) { return d.x; };
        this.dataY = dataY || function (d) { return d.y; };
    }
    Object.defineProperty(Annotation.prototype, "position", {
        get: function () { return { x: this.x, y: this.y }; },
        set: function (_a) {
            var x = _a.x, y = _a.y;
            this.x = x;
            this.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annotation.prototype, "json", {
        get: function () {
            return {
                x: this.x,
                y: this.y,
                dx: this.dx,
                dy: this.dy,
                text: this.text,
                title: this.title,
                data: this.data
            };
        },
        enumerable: true,
        configurable: true
    });
    return Annotation;
}());
export default Annotation;