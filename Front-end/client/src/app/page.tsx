import { auth } from '@/auth'
import { FloatButton } from 'antd'
import React from 'react'

export default async function page() {
  const session = await auth();
  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      <FloatButton>Add</FloatButton>
    </div>
  )
}
