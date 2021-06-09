# apostrophe-open-graph
[![CircleCI](https://circleci.com/gh/apostrophecms/open-graph/tree/main.svg?style=svg)](https://circleci.com/gh/apostrophecms/open-graph/tree/main)
[![Chat on Discord](https://img.shields.io/discord/517772094482677790.svg)](https://chat.apostrophecms.org)

# [Open Graph](https://ogp.me/) for [ApostropheCMS](https://apostrophecms.com).

## Installation

```bash
npm install apostrophe-open-graph
```

## Use

Configure `@apostrophecms/open-graph` in `app.js`.

```js
const apos = require('apostrophe')({
  shortName: 'project',
  modules: {
    '@apostrophecms/open-graph': {}
  }
});
```

### Setting the `baseUrl`

Open Graph images *will not be set* with absolute URLs if the `baseUrl` is not set. This should either be set statically in `app.js`, more likely, in environment configuration, such as in `data/local.js`. Some social media platforms consider an aboslute URL to be a requirement and *will not accept the image URL without it*.

#### In `app.js` as part of your main Apostrophe app
```js
require('apostrophe')({
  shortName: 'mysite',
  baseUrl: 'https://mysite.com',
  modules: {
    // other module configurations
  }
});
```
#### As part of an environment configuration in `data/local.js`
```js
  module.exports = {
    baseUrl: 'https://mysite.com',
    modules: {
      // other environment-specific module configurations
    }
  };
```
### Opting out of Open Graph Fields

Any module can opt out of the Open Graph fields. This would likely be done on special page types or piece types that don't  have index or show pages. Simply add `openGraph: false` to the module's `options` object, like this:

```js
require('apostrophe')({
  shortName: 'mysite',
  baseUrl: 'https://mysite.com',
  modules: {
    category: {
      options: {
        openGraph: false;
      }
    }
  }
});
```

The following modules opt out of the Open Graph fields by default:
 - `@apostrophecms/global`
 - `@apostrophecms/user`
 - `@apostrophecms/image`
 - `@apostrophecms/image-tag`
 - `@apostrophecms/file`
 - `@apostrophecms/file-tag`

### Field Reference
The following are the fields that are added to pieces and pages

|Name |Description  | Module Effected |
--- | --- | --- 
|`openGraphTitle`|OG Title, populates `<meta property="og:title" />`|`@apostrophecms/doc-type`
|`openGraphDescription`|OG Description, populates `<meta property="og:description" />`|`@apostrophecms/doc-type`
|`openGraphType`|OG Type, populates `<meta property="og:type" />`, defaults to 'website'|`@apostrophecms/doc-type`
|`openGraphImage`|OG Image, populates `<meta property="og:image" />`|`@apostrophecms/doc-type`