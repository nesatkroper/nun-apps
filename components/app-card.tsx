import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AppCardProps {
  name: string
  description: string
  imageUrl: string
  downloadUrl: string
  detailUrl?: string
}

export function AppCard({ name, description, imageUrl, downloadUrl, detailUrl }: AppCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
      <div className="p-6 space-y-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg relative bg-muted">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${name} icon`}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="flex gap-2 justify-end">
          {detailUrl && (
            <Button asChild variant="outline" className="flex-1 group-hover:shadow-md transition-shadow bg-transparent">
              <Link href={detailUrl}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          <Button asChild className={`${detailUrl ? "flex-1" : "w-full"} group-hover:shadow-md transition-shadow`}>
            <a href={downloadUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}



