(function () {
  function setupBlogCover() {
    if (!document.body.classList.contains('view-item')) return;

    var section = document.querySelector(
      '[data-sqsp-section="blog-item"]'
    );

    if (!section) {
      console.warn('Blog cover: Blog item section not found.');
      return;
    }

    var contentWrapper = section.querySelector(
      '.blog-item-content-wrapper'
    );

    var titleWrapper = section.querySelector(
      '.blog-item-top-wrapper'
    );

    if (!contentWrapper || !titleWrapper) {
      console.warn('Blog cover: Article content or title not found.');
      return;
    }

    // Find the cover image anywhere in this blog item.
    var images = Array.from(section.querySelectorAll('img'));

    var coverImage = images.find(function (img) {
      var url = [
        img.getAttribute('data-image'),
        img.getAttribute('data-src'),
        img.getAttribute('src')
      ].filter(Boolean).join(' ');

      return url.includes('blog-bg');
    });

    if (!coverImage) {
      console.warn('Blog cover: No image containing "blog-bg" found.');
      return;
    }

    var imageBlock = coverImage.closest('.image-block');

    if (!imageBlock) {
      console.warn('Blog cover: Cover image block not found.');
      return;
    }

    // Create the custom header if it does not already exist.
    var header = section.querySelector('.custom-blog-split-header');

    if (!header) {
      header = document.createElement('div');
      header.className = 'custom-blog-split-header';

      var coverColumn = document.createElement('div');
      coverColumn.className = 'custom-blog-cover-column';

      var titleColumn = document.createElement('div');
      titleColumn.className = 'custom-blog-title-column';

      header.appendChild(coverColumn);
      header.appendChild(titleColumn);

      // Insert the header before the article content.
      var article = section.querySelector('.blog-item-wrapper');

      if (!article || !article.parentNode) {
        console.warn('Blog cover: Article wrapper not found.');
        return;
      }

      article.parentNode.insertBefore(header, article);
    }

    var coverColumn = header.querySelector(
      '.custom-blog-cover-column'
    );

    var titleColumn = header.querySelector(
      '.custom-blog-title-column'
    );

    if (!coverColumn || !titleColumn) {
      console.warn('Blog cover: Header columns could not be created.');
      return;
    }

    // Move only the tagged cover image into the left column.
    if (!coverColumn.contains(imageBlock)) {
      coverColumn.appendChild(imageBlock);
    }

    // Move title, excerpt, and metadata into the right column.
    if (!titleColumn.contains(titleWrapper)) {
      titleColumn.appendChild(titleWrapper);
    }

    document.body.classList.add('with-cover');

    console.info(
      'Blog cover: Header created and image/title moved successfully.'
    );
  }

  function run() {
    setupBlogCover();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
