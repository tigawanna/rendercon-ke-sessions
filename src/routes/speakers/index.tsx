import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/speakers/')({
  component: () => <div>Hello /speakers/!</div>,
})
