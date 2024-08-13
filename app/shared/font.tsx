import localFont from 'next/font/local';

export const grotesk = localFont({
  src: [
    {
      path: '../../public/fonts/FKGroteskNeueTrial-Black-BF6576818b4c472.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FKGroteskNeueTrial-BlackItalic-BF6576818becb0d.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../../public/fonts/FKGroteskNeueTrial-Bold-BF6576818bd3700.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FKGroteskNeueTrial-BoldItalic-BF6576818c39d11.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/FKGroteskNeueTrial-Italic-BF6576818c041e2.otf',
      weight: '600',
      style: 'italic',
    },
    //
    {
      path: '../../public/fonts/FKGroteskNeueTrial-Medium-BF6576818c3a00a.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FKGroteskNeueTrial-MediumItalic-BF6576818c2aaf8.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/FKGroteskNeueTrial-Regular-BF6576818c3af74.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FKGroteskNeueTrial-Light-BF6576818c0f3e8.otf',
      weight: '200',
      style: 'normal',
    },
  ],
});

export const caleit = localFont({
  src: [
    {
      path: '../../public/fonts/caleit-bold.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});
