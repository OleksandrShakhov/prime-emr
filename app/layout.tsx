import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
title: 'Prime EMR',
description: 'Minimal landing for Prime EMR.'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
)
}