"use client"

import * as React from "react"
import { Image as ImageIcon, Upload, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Stack } from "@/components/layout/stack"

interface ScreenshotUploadProps {
  slug: string
  title: string
  description: string
  defaultImageSrc?: string
  hasDefaultImage: boolean
  className?: string
}

export function ScreenshotUpload({
  slug,
  title,
  description,
  defaultImageSrc,
  hasDefaultImage,
  className
}: ScreenshotUploadProps) {
  // Initialize with default image if it exists to prevent hydration mismatches
  const [imageSrc, setImageSrc] = React.useState<string | null>(
    hasDefaultImage && defaultImageSrc ? defaultImageSrc : null
  )
  const [isDragOver, setIsDragOver] = React.useState(false)
  const fileInputRef = React. useRef<HTMLInputElement>(null)

  const storageKey = `portfolio_screenshot_${slug}_${title.toLowerCase().replace(/\s+/g, "_")}`

  // Load saved image from localStorage on client mount (overwrites default if user uploaded one)
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        setImageSrc(saved)
      }
    } catch (e) {
      console.error("Failed to load screenshot from localStorage:", e)
    }
  }, [storageKey])

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const base64 = e.target?.result as string
      if (base64) {
        setImageSrc(base64)
        try {
          localStorage.setItem(storageKey, base64)
        } catch (err) {
          console.error("Storage limit exceeded or localStorage unavailable:", err)
          alert("Unable to save image persistently: File size might be too large for browser storage limit.")
        }
      }
    }
    reader.readAsDataURL(file)
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const onDragLeave = () => {
    setIsDragOver(false)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImageSrc(null)
    try {
      localStorage.removeItem(storageKey)
    } catch (err) {
      console.error("Failed to remove item:", err)
    }
  }

  if (imageSrc) {
    return (
      <div 
        className={cn(
          "relative w-full rounded-lg overflow-hidden border border-border group/image aspect-[16/10] bg-muted/5",
          className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-[1.02]"
        />
        
        {/* Hover overlay to change or clear image */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <Upload className="h-6 w-6 text-muted-foreground animate-bounce" />
          <span className="text-xs font-bold text-primary-text uppercase tracking-wider">
            Drag & Drop to Replace
          </span>
          <div className="flex gap-2 mt-2">
            <button
              onClick={triggerFileInput}
              className="px-3 py-1.5 bg-card border border-border text-[10px] uppercase font-mono font-bold tracking-wider rounded hover:bg-muted/50 transition-colors"
            >
              Choose File
            </button>
            <button
              onClick={clearImage}
              className="px-3 py-1.5 bg-destructive/10 border border-destructive/20 text-destructive text-[10px] uppercase font-mono font-bold tracking-wider rounded hover:bg-destructive/20 transition-colors flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              Remove
            </button>
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileSelect}
          accept="image/*"
          className="hidden"
        />
      </div>
    )
  }

  // If no image is present (neither static file nor localStorage), hide the placeholder card completely
  return null
}
