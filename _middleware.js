import {NextRequest} from 'next/server'

export async function middleware(req: NextRequest) {
    console.log(geo.req.city)
    console.log(geo.req.region)
    console.log(geo.req.contry)
    console.log(req.heades.get('x-vercel-ip-city'))
    console.log(req.heades.get('x-vercel-ip-country-region'))
    console.log(req.heades.get('x-vercel-ip-country'))
}