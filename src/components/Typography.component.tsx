import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export function Title({ children }: Props) {

	return (
		<h1 className="text-6xl md:text-8xl mb-6 text-white tracking-tight">
			{children}
		</h1>
	)
}

export function GradText({ children }: Props) {

	return (
		<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
			{children}
		</span>
	)
}
