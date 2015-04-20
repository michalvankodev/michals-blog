export class SubstrValueConverter {
  toView(value, length) {
    length = Number.parseInt(length);
    if (value.length > length + 3) {
      return value.substr(0, length) + '...';
    }
    else {
      return value;
    }
  }
}
