import ns from './ns';

const cellSize = 100;

export default class Cell {
  constructor(opts = {}) {
    this.$elm = opts.$elm;
    this.posId = opts.posId;

    // this.colorTop =    opts.colorTop;
    // this.colorRight =  opts.colorRight;
    // this.colorBottom = opts.colorBottom;
    // this.colorLeft =   opts.colorLeft;

    this.initialize();
  }

  initialize() {
    var pos = this.position();
    var coord = this.coordinate();

    this.$elm.attr('data-x', coord[0]);
    this.$elm.attr('data-y', coord[1]);
  }

  setColor() {
    this.$elm.css({
      'border-top-color':    this.colorTop || 'transparent',
      'border-right-color':  this.colorRight || 'transparent',
      'border-bottom-color': this.colorBottom || 'transparent',
      'border-left-color':   this.colorLeft || 'transparent',
    });
  }

  setButton() {
    var $tapArea = this.$elm.find('.tap-area');

    $tapArea.filter('[data-dir="top"]').css({
      display: this.colorTop ? 'block' : 'none',
      "background-color": this.colorTop || 'transparent',
    });
    $tapArea.filter('[data-dir="right"]').css({
      display: this.colorRight ? 'block' : 'none',
      "background-color": this.colorRight || 'transparent',
    });
    $tapArea.filter('[data-dir="bottom"]').css({
      display: this.colorBottom ? 'block' : 'none',
      "background-color": this.colorBottom || 'transparent',
    });
    $tapArea.filter('[data-dir="left"]').css({
      display: this.colorLeft ? 'block' : 'none',
      "background-color": this.colorLeft || 'transparent',
    });

    $tapArea.on('click', (evt) => {
      var position = this.position();
      var coordinate = this.coordinate();

      var $elm = $(evt.target);
      var dir = $elm.attr('data-dir')

      ns.square.$elm.trigger('select', {
        $elm,
        dir,
        posId: this.posId,
        position,
        coordinate,
      });
    });
  }

  position() {
    var left = this.posId % 3;
    var top = Math.floor(this.posId / 3);

    return [left, top];
  }

  coordinate() {
    var pos = this.position();
    var x = pos[0] - 1;
    var y = pos[1] - 1;

    return [x, y];
  }
}
