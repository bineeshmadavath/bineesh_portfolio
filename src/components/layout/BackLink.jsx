import { Link } from 'react-router-dom';
import { ArrowLeft } from '../ui/Icons';

export default function BackLink({ className = '', style }) {
  return <Link to="/" className={`back-link ${className}`.trim()} style={style}><ArrowLeft width={14} height={14} /> Back to work</Link>;
}
