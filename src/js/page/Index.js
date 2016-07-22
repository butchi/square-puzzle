import ns from '../module/ns';
import Square from '../module/Square';

export default class Index {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.square = new Square();

    ns.square = this.square;
  }
}