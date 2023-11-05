import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainNavigation, MainNavigationMenu } from '@benjammartin/ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: 'Create Next App',
 description: 'Generated by create next app',
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <html lang="en">

   <body className={inter.className}>
    <MainNavigation.Root className="flex items-center justify-between p-4 border-b border-dashed">
     <MainNavigation.Group className="flex items-center gap-4">
      <MainNavigation.Logo href="/">
       Hello.
      </MainNavigation.Logo>
     </MainNavigation.Group>
     <MainNavigation.Group>
      <MainNavigationMenu.Root className="flex gap-2">
       <MainNavigationMenu.Link
        className="text-red-500 hover:text-red-600 dark:hover:text-red-400 text-sm font-bold"
        href="/"
       >
        Browse
       </MainNavigationMenu.Link>
       <MainNavigationMenu.Link
        className="text-red-500 hover:text-red-600 dark:hover:text-red-400 text-sm font-bold"
        href="/"
       >
        Collection
       </MainNavigationMenu.Link>
      </MainNavigationMenu.Root>
     </MainNavigation.Group>
     <MainNavigation.Group className="flex items-center gap-4">
      <MainNavigationMenu.Root className="flex gap-2">
       <MainNavigationMenu.Link
        className="text-red-500 hover:text-red-600 dark:hover:text-red-400 text-sm font-bold"
        href="/"
       >
        Browse
       </MainNavigationMenu.Link>
      </MainNavigationMenu.Root>
     </MainNavigation.Group>
    </MainNavigation.Root>
    <main>{children}</main></body>
  </html>
 )
}
