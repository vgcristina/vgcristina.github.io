import { useState } from 'react';

export default function ExpandableCard({ title, journal, time, abstract, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-sm mb-3">
          <span className="italic">{journal}</span> • {time}
        </p>
        <p className="text-sm text-base-content/80 whitespace-pre-line">
          {expanded ? abstract : abstract.slice(0, 100) + '...'}
        </p>
        <div className="card-actions justify-end mt-4 space-x-2">
          <button
            className="btn btn-sm btn-secondary text-secondary-content"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Leer menos' : 'Leer más'}
          </button>

          {link && (
            <a
              href={link}
              className="btn btn-sm btn-success text-white"
              download
            >
              Descargar APK
            </a>
          )}
        </div>
      </div>
    </div>
  );
}



