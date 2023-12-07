/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'my-dist',
    serverRuntimeConfig: {
        usersListEndPoint: 'https://jsonplaceholder.typicode.com/users'
    }
}

module.exports = nextConfig
