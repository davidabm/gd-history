var id = 'gallery';

function reqListener() {
  var renderer
  switch (layoutStyle) {
    case COLUMNS:
      renderer = new VerticalRenderer(id);
      break;
    case ROWS:
      renderer = new HorizontalRenderer(id);
      break;
    case SQUARES:
      renderer = new SquareRenderer(id);
      break;
  }
  var config = new Config(JSON.parse(this.responseText), configuration);
  renderer.render(config);
  lazyload();
}



