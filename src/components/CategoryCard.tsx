import { Link } from 'react-router-dom';
import { Heart, Users, Mountain, UsersRound, Crown, Wallet } from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
    description: string;
  };
}

const iconMap: { [key: string]: React.ElementType } = {
  Heart,
  Users,
  Mountain,
  UsersRound,
  Crown,
  Wallet,
};


export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon];

  return (
    <Link
      to={`/tours?category=${category.name.toLowerCase()}`}
      className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-blue-600 bg-opacity-10 p-4 rounded-full">
          {IconComponent && <IconComponent className="h-8 w-8 text-blue-600" />}
        </div>
      </div>
      <h3 className="text-lg font-bold text-[#0B1C2D] mb-2">{category.name}</h3>
      <p className="text-sm text-gray-600">{category.description}</p>
    </Link>
  );
}
