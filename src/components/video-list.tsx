import type { VideoType } from "../../lib/types";
import Image from "next/image";

interface VideoListProps {
  videos: VideoType[];
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 dark:bg-slate-900">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-800 p-2 rounded"
          >
            <div className="relative w-24 h-16 flex-shrink-0">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-normal truncate dark:text-slate-100">
                {video.title}
              </h3>
              <p className="text-xs  mt-1 dark:text-slate-100">
                {video.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
