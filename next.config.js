/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap:function(){
        return{
            "/":{page:"/"}
        }
    },
    output: 'export',
}

module.exports = nextConfig
