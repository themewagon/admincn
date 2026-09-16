const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const withBasePath = (path: string) => {
  if (!basePath || !path.startsWith('/') || path === basePath || path.startsWith(`${basePath}/`)) return path

  return `${basePath}${path}`
}
