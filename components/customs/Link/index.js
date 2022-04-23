import Link from 'next/link'
import React from 'react'

export default function index({ to, children, ...props }) {
  return (
      <Link href={to}>
            <a {...props}>
                {children}
            </a>
        </Link>
  )
}
