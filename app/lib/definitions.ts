
export interface FileNode {
  name: string;
  path: string;
  slug: string
  children: FileNode[];
}