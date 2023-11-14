/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
    serverRuntimeConfig: {
        usersListEndPoint: 'https://dummyjson.com/users'
    },
    publicRuntimeConfig: {
        productEndPoint: 'https://dummyjson.com/products'
    }
}

module.exports = nextConfig
