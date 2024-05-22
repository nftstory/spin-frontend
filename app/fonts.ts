import localFont from 'next/font/local'
 
export const font = localFont({
    src:
        [
            {
                path: '../public/main.woff2',
                weight: '400',
                style: 'normal',
            },
            // {
            //     path: './italic.woff2',
            //     weight: '400',
            //     style: 'italic',
            // },
            // {
            //     path: './bold.woff2',
            //     weight: '400',
            //     style: 'bold',
            // },
            // {
            //     path: './bolditalic.woff2',
            //     weight: '400',
            //     style: 'bolditalic',
            // },
        ],
    display: 'swap'
})