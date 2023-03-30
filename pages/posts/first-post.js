import Link from 'next/link';
import { NextRequest } from 'next/server';


export default function FirstPost() {
    return (
      <>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <div>
          <span>city: </span>
          <span>{NextRequest.geo}</span>
          <span>{NextRequest.geo}</span>
          
          {/* <dl>
            <dt>City:      
          </dt>
            <dd>{NextRequest.heades.get('x-vercel-ip-city')}</dd>
          </dl>
          <dt>Region:      
          </dt>
            <dd>{NextRequest.heades.get('x-vercel-ip-country-region')}</dd>
          
          <dt>Country:      
          </dt>
            <dd>{NextRequest.heades.get('x-vercel-ip-country')}</dd> */}
          
        </div>
      </>
    );
  }