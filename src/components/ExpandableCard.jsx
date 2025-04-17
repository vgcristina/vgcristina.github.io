import { useState } from 'react';

export default function ExpandableCard({ title, journal, time, abstract, link, images }) {
  const [expanded, setExpanded] = useState(false);
  const formattedAbstract = abstract
  .split('\n')
  .map((line) => `<p>${line.trim()}</p>`)
  .join('');

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <h2 className="card-title text-xl">
          {title}
        </h2>
        <p className="text-sm mb-3">
          <span className="italic">{journal}</span> • {time}
        </p>
        
        <div className="text-sm text-base-content/80">
  {expanded ? (
    <div dangerouslySetInnerHTML={{ __html: formattedAbstract }} />
  ) : (
    <div
  dangerouslySetInnerHTML={{
    __html:
      formattedAbstract
        .split('</p>')
        .slice(0, 3) // ← los dos primeros párrafos
        .join('</p>') + '</p>',
  }}
/>
  )}
</div>


        {images && images.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Captura ${index + 1}`} className="rounded shadow-md" />
            ))}
          </div>
        )}

        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-sm btn-secondary text-secondary-content"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Leer menos' : 'Leer más'}
          </button>

          {/* Botón de descarga del APK */}
          {link && (
            <a
              href="/downloads/ProyectoCA.apk"
              className="btn btn-sm btn-success text-secondary-content"
              download="ProyectoCA.apk"
            >
              Descargar APK
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
