# Squarespace Code Library

A collection of reusable JavaScript enhancements for Squarespace websites, maintained for studio projects and client implementations.

## Scripts

### Blog Split Header

Creates a custom split header on individual Squarespace blog posts by moving a designated cover image into a left column and the post title, excerpt, and metadata into a right column.

**Features**
- Identifies individual blog post pages.
- Finds the cover image using the `blog-bg` filename identifier.
- Creates the custom split-header structure.
- Moves the cover image and post title content into their respective columns.
- Adds the `with-cover` class to the page body for CSS styling.

**Requirements**
- Squarespace blog post page using the expected DOM structure.
- A cover image with `blog-bg` in its image URL.
- Corresponding CSS for the split-header layout.

### Files

| File | Purpose |
|---|---|
| `blog-split-header.js` | Readable source for editing and maintenance. |
| `blog-split-header.min.js` | Minified production version loaded by Squarespace. |

Keep the readable and minified files synchronized. Make changes to the readable source, then regenerate the minified file.

## Installation

Add the following script reference to the site's **Settings → Code Injection → Footer**.

Replace `YOUR-USERNAME` with the GitHub account that owns this repository.

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/squarespace-code-library@v1.0.0/blog-split-header.min.js"></script>
```

The URL above pins the script to release `v1.0.0`. Replace the version tag when upgrading to a newer release.

### CSS

The JavaScript creates the HTML structure and moves the image and title elements. It does not provide the visual styling.

Add the corresponding CSS through Squarespace's Custom CSS area. Adjust styling for each project's design requirements and test desktop and mobile layouts.

## Development and Release Workflow

1. Edit `blog-split-header.js`.
2. Generate a new minified version using a JavaScript minifier.
3. Update `blog-split-header.min.js` with the matching output.
4. Test the changes on a development or staging Squarespace site.
5. Commit both files to GitHub.
6. Create a new version tag and publish a GitHub release.
7. Test the versioned jsDelivr URL.
8. Update client sites individually when ready to deploy the new version.

### Versioning

Use version tags to keep production deployments stable.

- `v1.0.0` — Initial release.
- `v1.0.1` — Patch or bug fix.
- `v1.1.0` — Backward-compatible enhancement.
- `v2.0.0` — Major change that may require additional testing.

Existing client sites remain pinned to their configured version until their URLs are deliberately updated.

## Notes

- Test changes before deploying them to client websites.
- Do not include credentials, API keys, or confidential client information in this public repository.
- Keep a readable source copy of every production script.
- The JavaScript depends on Squarespace's page structure and may need updates if the platform changes its DOM.
- The script does not replace the CSS required to style the split header.

## License

No open-source license has been added. All rights not expressly granted are reserved, subject to applicable law and any third-party rights. Public visibility does not itself grant general permission to reuse, modify, or redistribute the code.

