class Options {
    constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
    }

    newDiv(text) {
        let div = document.createElement("div");
        div.innerHTML = `<h1>${text}</h1>`;
        div.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: '${this.bg}';
        font-size: ${this.fontSize}px;
        text-align: ${this.textAlign};
        `;
        document.body.appendChild(div);
    }

}

let styles = new Options(500, 500, 'red', 24, 'center');

styles.newDiv("Works!");