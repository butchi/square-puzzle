import ns from './ns';
import Cell from './Cell';

const colorLi = {
  TOP:    '#F00',
  RIGHT:  '#0F0',
  BOTTOM: '#00F',
  LEFT:   '#FF0',
};

export default class Square {
  constructor(opts = {}) {
    this.$elm = opts.$elm || $('[data-js-class~="square"]');

    this.initialize();
  }

  initialize() {
    this.cellArr = [];

    this.$elm.find('[data-js-class~="cell"]').each((i, elm) => {
      let cell = new Cell({
        $elm: $(elm),
        posId: i,
      });

      this.cellArr.push(cell);
    });

    this.cellArr.forEach((cell) => {
      var coord = cell.coordinate();

      if (coord[0] === -1) {
        cell.colorLeft = colorLi.LEFT;
      }
      if (coord[0] === 1) {
        cell.colorRight = colorLi.RIGHT;
      }
      if (coord[1] === -1) {
        cell.colorTop = colorLi.TOP;
      }
      if (coord[1] === 1) {
        cell.colorBottom = colorLi.BOTTOM;
      }

      cell.setColor();
      cell.setButton();
    });

    this.$elm.on('select', (evt, data) => {
      if (data.dir === 'top') {
      }

      if (data.dir === 'right') {
      }

      if (data.dir === 'bottom') {
      }

      if (data.dir === 'left') {
      }
    });
  }
}
