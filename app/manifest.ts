import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Alpabot Deriv',
        short_name: 'Alpabot',
        description: 'Make money easily with our deriv tool.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        screenshots: [
            {
                src: "/icon-720-1280.png",
                type: "image/png",
                sizes: "1280x720",
            },
            {
                src: "/icon-1280-720.png",
                type: "image/png",
                sizes: "720x1280",
            }
        ]

    }
}