module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('thoumar'),
            api_key: env('753416965128998'),
            api_secret: env('S6E-Y69PJD7OYZO5pLQGqNJLOns'),
        },
    },
});