import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sessions/')({
  component: () => <div>Hello /sessions/!</div>,
})
