import { auth } from '@/auth'
import React from 'react'

export default async function page() {

  const session = await auth();
  console.log(">>Check session 000: ",session); 

  return (
    <div>
      Hello
     
    </div>
    
  )
}
