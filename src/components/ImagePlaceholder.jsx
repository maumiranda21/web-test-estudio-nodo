import { useState } from 'react';
import './ImagePlaceholder.css';

/**
 * Renders an image if available, otherwise an elegant placeholder.
 * Expects images in /public/images/ with the exact filenames provided.
 */
export default function ImagePlaceholder({
  src,
  alt,
  className = '',
  aspectRatio = '16/10',
  label,
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`image-placeholder ${className}`}
        style={{ aspectRatio }}
        role="img"
        aria-label={alt}
      >
        <span>{label || 'Imagen pendiente'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ aspectRatio, objectFit: 'cover', width: '100%' }}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
