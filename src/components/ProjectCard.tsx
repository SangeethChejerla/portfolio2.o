// src/components/Project.tsx
import ProjectCarousel from './ProjectCarousel';

interface ProjectProps {
  title: string;
  description: string;
  githubLink: string;
  images: { src: string; alt: string }[];
}

export default function ProjectCard({
  title,
  description,
  githubLink,
  images,
}: ProjectProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto p-8">
      <div className="w-full lg:w-1/2">
        <ProjectCarousel images={images} />
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-white">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
