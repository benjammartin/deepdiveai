import Image from 'next/image'
import * as Nav from '@benjammartin/ui/navigation/navigation'
import { Container, Section, Box, List } from '@benjammartin/ui'
import Link from 'next/link'
//import { getDocuments } from '@/app/lib/get-documents'
import { Fragment } from 'react'
import { FileNode } from '../lib/definitions'

export default function Layout({ children }: { children: React.ReactNode }) {
  //const paths = getDocuments('courses/gpt-seo')
  //console.log(JSON.stringify(paths, null, 2))
  return (
    <Container className='relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10'>
      <Box className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between border-r">
        <Nav.Root>
          <Nav.Group>
            Yo
          </Nav.Group>

        </Nav.Root>
      </Box>
      <Box className="order-last hidden w-56 shrink-0 lg:block">
        On this page
      </Box>
      <Box className="mt-4 w-full min-w-0 max-w-6xl px-1 md:px-6 prose prose-neutral">
        {children}
      </Box>
    </Container >
  )
}



interface NavProps {
  node: FileNode
}

const Navigation: React.FC<NavProps> = ({ node }) => {
  return (
    <div>
      <Link href={`/${node.path}`}>{node.name}</Link>
      {node.children.length > 0 && (
        <ul>
          {node.children.map((childNode, index) => (
            <li key={index}>
              <Navigation node={childNode} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};