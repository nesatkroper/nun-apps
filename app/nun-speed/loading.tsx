"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background">
      <Image
        src="/icon.png"
        alt="Loading Image"
        width={200}
        height={80}
        className="mb-6"
        priority
      />

      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-10 rounded bg-primary"
            animate={{ scaleY: [1, 1.8, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>

      <h1 className="text-xl font-semibold text-foreground tracking-widest">
        MY WORK
      </h1>
    </div>
  )
}