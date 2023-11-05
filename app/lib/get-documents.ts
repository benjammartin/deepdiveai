import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { FileNode } from './definitions'
import { glob } from 'fast-glob'
import directoryTree from 'directory-tree'
import { Glob, globSync } from 'glob'


/**export function getMdxFile(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return fileContents;
}


function getTitle(filePath: string): string {
  const { data } = matter.read(filePath);
  return data.title;
}

export function getDocuments(dirBase: string): FileNode {
  const traverse = (currentPath: string, relativePath = ''): FileNode => {
    const node: FileNode = {
      name: getTitle(path.join(currentPath, 'index.mdx')),
      slug: path.join(`${dirBase}/${relativePath}`).replace(/\d+-/g, ''),
      path: path.join(`${dirBase}/${relativePath}`, 'index.mdx'),
      children: []
    };

    const items = fs.readdirSync(currentPath, { withFileTypes: true });
    items.forEach(item => {
      const itemPath = path.join(currentPath, item.name);
      const relPath = path.join(relativePath, item.name);

      if (item.isDirectory()) {
        node.children.push(traverse(itemPath, relPath));
      } else if (item.isFile() && item.name.endsWith('.mdx') && item.name !== 'index.mdx') {
        node.children.push({
          name: getTitle(itemPath),
          slug: path.join(`${dirBase}`, relPath).replace('.mdx', '').replace(/\d+-/g, ''),
          path: path.join(`${dirBase}`, relPath),
          children: []
        });
      }
    });

    return node;
  };

  return traverse(dirBase);
}
 */

interface CourseIndexEntry {
  course: string;
  location: string;
  title: string;
  slug: string;
}

interface CourseInfo {
  [courseName: string]: {
    totalDocuments: number;
    entries: CourseIndexEntry[];
  };
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}


export default function buildIndex() {
  console.log('courseInfo')
  const files = globSync('**/*.mdx', { cwd: 'courses' });

  fs.writeFileSync(`./public/nike.json`, JSON.stringify(files));


}
