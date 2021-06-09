module.exports = {
  improve: '@apostrophecms/doc-type',
  fields(self, options) {
    if (options.openGraph !== false) {
      return {
        add: {
          openGraphTitle: {
            label: 'Open Graph Title',
            type: 'string',
            help: 'The title of your content without any branding such as your site name.'
          },
          openGraphDescription: {
            label: 'Open Graph Description',
            type: 'string',
            textarea: true,
            help: 'A brief description of the content, usually between 2 and 4 sentences. This will displayed below the title of the post.'
          },
          openGraphType: {
            label: 'Open Graph Type',
            type: 'string',
            htmlHelp: 'The type of media of your content. See <a href="https://ogp.me/#types" target="_blank">https://ogp.me/#types</a>.'
          },
          // TODO this needs minSize and aspectRatio options when they exist
          _openGraphImage: {
            type: 'relationship',
            label: 'Open Graph Image',
            max: 1,
            withType: '@apostrophecms/image'
          }
        },
        group: {
          seo: {
            label: 'Open Graph',
            fields: [
              'openGraphTitle',
              'openGraphDescription',
              'openGraphType',
              '_openGraphImage'
            ],
            last: true
          }
        }
      };
    }
  }
};
