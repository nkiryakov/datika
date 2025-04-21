# Setting Up Facebook App ID for Open Graph Tags

To properly configure the Facebook Open Graph tags for your website, you need to create a Facebook App and get an App ID. Follow these steps:

## 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click on "My Apps" in the top right corner
3. Click "Create App"
4. Select "Business" as the app type
5. Fill in the required information and create your app
6. Once created, you'll be taken to the app dashboard

## 2. Get Your App ID

1. On your app dashboard, you'll see your App ID at the top of the page
2. Copy this ID

## 3. Update Your Website

1. Open the `components/facebook-meta-tags.tsx` file
2. Replace the placeholder App ID with your actual App ID:

\`\`\`typescript
export function FacebookMetaTags({ appId = "YOUR_ACTUAL_APP_ID_HERE", defaultUrl = "https://datika.com" })
\`\`\`

## 4. Verify with Facebook Debugger

After deploying your changes:

1. Go to the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your website URL and click "Debug"
3. If there are any issues, the debugger will show them
4. Click "Scrape Again" to refresh Facebook's cache of your page

## Additional Resources

- [Facebook Open Graph Documentation](https://developers.facebook.com/docs/sharing/webmasters/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
