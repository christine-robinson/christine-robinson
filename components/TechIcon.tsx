import { JSX } from 'react';

const TechIcon = ({ icon }: { icon: React.ElementType }): JSX.Element => {
  const Icon = icon;
  return <Icon className='size-10' />;
};

export default TechIcon;
