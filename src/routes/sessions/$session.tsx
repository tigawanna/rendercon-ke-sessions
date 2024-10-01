import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sessions/$session')({
  component: () => <div>Hello /sessions/$session!</div>,
})
