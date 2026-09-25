import styles from './Logo.module.css';

type LogoProps = { href?: string; size?: 'md' | 'lg' };

export function Logo({ href = '#start', size = 'md' }: LogoProps) {
  return (
    <a href={href} className={`${styles.logo} ${styles[size]}`} aria-label="SGS Junior – zur Startseite">
      <img src="/images/sgs-logo.jpg" alt="SGS" width="2048" height="1280" />
    </a>
  );
}
