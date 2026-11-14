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

  const style =
    aspectRatio === 'auto'
      ? { width: '100%', height: '100%', objectFit: 'cover' }
      : { aspectRatio, objectFit: 'cover', width: '100%' };

  if (error || !src) {
    return (
      <div
        className={`image-placeholder ${className}`}
        style={
          aspectRatio === 'auto'
            ? { width: '100%', height: '100%', minHeight: 'inherit' }
            : { aspectRatio }
        }
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
      style={style}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
