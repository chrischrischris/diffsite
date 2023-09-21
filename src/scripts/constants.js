export const DEVICES = [
    {
        name: 'iPhone 5/SE',
        width: 320,
        height: 568
    },
    {
        name: 'Galaxy S5',
        width: 360,
        height: 640
    },
    {
        name: 'iPhone 6/7/8',
        width: 375,
        height: 667
    },
    {
        name: 'iPhone X/XS',
        width: 375,
        height: 812
    },
    {
        name: 'Pixel 2',
        width: 411,
        height: 731
    },
    {
        name: 'Pixel 2 XL',
        width: 411,
        height: 823
    },
    {
        name: 'iPhone 6/7/8 Plus',
        width: 414,
        height: 736
    },
    {
        name: 'iPad',
        width: 768,
        height: 1024
    },
    {
        name: 'iPad Pro',
        width: 1024,
        height: 1366
    },
    {
        name: 'Desktop',
        width: 1250,
        height: 1250,
    },
    {
        name: 'Desktop Large',
        width: 1500,
        height: 1250,
    }
];

export const LABELS = {
    skip: 'skip',
    embedAnyway: 'embed anyway',
    useProxy: 'use proxy to embed URL',
    embedDirectly: 'embed without proxy'
};

export const NOTIFICATIONS = {
    infoCheckValidity: 'Checking URL validity ...',
    infoInvalidURL: 'URL is not valid.',
    infoCheckIsIframeable: 'Checking iframe compatibility ...',
    infoLocalhostDetected: 'Localhost detected. Check your local server settings in case it does not work.',
    infoIframeCheckFailedButEmbedding: 'Iframe compatibility could not be determined, trying to embed the URL anyway.',
    warningMixedContent: 'Mixed content detected, make sure to use only either HTTP or HTTPS for diffsite and the URLs.',
    warningUserSkippedIframeCheck: 'Iframe compatibility check was skipped.',
    warningUsingIframeProxy: 'URL does not allow iframe embedding. Using proxy to display page, visual and functional differences may occur.',
    errorNoIframeEmbedding: 'URL does not allow iframe embedding.',
    errorUnreachableURL: 'URL can not be reached.'
};
