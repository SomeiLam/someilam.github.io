import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/my-portfolio/projects/${project.id}`}>
        <img
          src={project.thumbnail_url}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <span className="text-gray-500 text-sm">{project.year}</span>
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="pb-6 px-6">
        <div className="flex gap-4">
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
            >
              <ExternalLink size={16} className="mr-1" /> Live Demo
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              <Github size={16} className="mr-1" /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
