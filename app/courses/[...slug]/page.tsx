
import { MDXRemote } from 'next-mdx-remote/rsc'
import { headers } from 'next/headers'


export default async function RemoteMdxPage(props: any) {
  const headersList = headers()
  const referer = headersList.get('mdx-page')
  return (
    null
  )
}