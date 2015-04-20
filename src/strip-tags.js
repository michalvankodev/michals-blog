import striptags from 'striptags';

export class StripTagsValueConverter {
  toView(value) {
    return striptags(value);
  }
}
