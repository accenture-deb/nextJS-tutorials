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
        usersListEndPoint: 'https://dummyjson.com/users?limit=10'
    }
}

module.exports = nextConfig
