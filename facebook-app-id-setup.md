# Facebook App ID Configuration

Your Facebook App ID has been configured in the application:

- **App ID**: 1615952449062843
- **Implementation**: The App ID is set in the `app/layout.tsx` file in the metadata configuration.

## Verifying with Facebook Debugger

After deploying your changes:

1. Go to the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your website URL and click "Debug"
3. Verify that the fb:app_id property is correctly showing your App ID
4. Click "Scrape Again" to refresh Facebook's cache of your page

## Additional Open Graph Properties

The following Open Graph properties are now properly configured:

- **og:url**: The canonical URL of each page
- **og:type**: Set to "website" for all pages
- **fb:app_id**: Your Facebook App ID (1615952449062843)
- **og:title**: The title of each page
- **og:description**: The description of each page
- **og:image**: The Open Graph image for sharing

These properties ensure optimal sharing experience on Facebook and other platforms that use the Open Graph protocol.
