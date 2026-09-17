import Badge from './Badge'

export default function SectionHeading({
  badgeText,
  badgeIcon,
  badgeVariant = 'indigo',
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div
      className={`space-y-4 max-w-2xl ${
        centered ? 'mx-auto text-center' : ''
      } ${className}`}
    >
      {badgeText && (
        <Badge variant={badgeVariant} icon={badgeIcon}>
          {badgeText}
        </Badge>
      )}
      {title && (
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
