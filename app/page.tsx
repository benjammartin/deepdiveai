import Image from 'next/image'
import * as Nav from '@benjammartin/ui/navigation/navigation'
import { Container, Section, Box } from '@benjammartin/ui'

export default function Home() {
  return (
    <Container className='relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10'>
      <Box className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between">
        <Nav.Root>
          <Nav.Group>
            <Nav.Item>
              Hello
            </Nav.Item>
          </Nav.Group>
          <Nav.Group>
            <Nav.Item>
              Hello
            </Nav.Item>
          </Nav.Group>
          <Nav.Group>
            <Nav.Item>
              Hello
            </Nav.Item>
          </Nav.Group>
          <Nav.Group>
            <Nav.Item>
              Hello
            </Nav.Item>
          </Nav.Group>
        </Nav.Root>
      </Box>
      <Box className="order-last hidden w-56 shrink-0 lg:block">
        On this page
      </Box>
      <Box className="mt-4 w-full min-w-0 max-w-6xl px-1 md:px-6">
        Article
      </Box>
    </Container>
  )
}
