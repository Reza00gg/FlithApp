import React, { useState, useMemo, useEffect } from 'react';
import SearchIcon from '../icons/SearchIcon';
import HeartIcon from '../icons/HeartIcon';
import CartIcon from '../icons/CartIcon';

interface ProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  likes: number;
}

const productItems: ProductItem[] = [
  { id: 1, name: 'Aura Sphere', description: 'A glowing orb that reacts to ambient sound.', price: 79.99, image: 'https://picsum.photos/seed/aurasphere/400/300', likes: 125 },
  { id: 2, name: 'Titanium Fidget', description: 'Precision-machined toy for focus and calm.', price: 45.00, image: 'https://picsum.photos/seed/titaniumfidget/400/300', likes: 302 },
  { id: 3, name: 'Holo-Projector', description: 'Display 3D models from your smart device.', price: 299.50, image: 'https://picsum.photos/seed/holoprojector/400/300', likes: 88 },
  { id: 4, name: 'Chrono Watch', description: 'A sleek timepiece that bends light and time.', price: 450.00, image: 'https://picsum.photos/seed/chronowatch/400/300', likes: 410 },
  { id: 5, name: 'Geode Planter', description: 'A self-watering planter carved from agate.', price: 60.00, image: 'https://picsum.photos/seed/geodeplanter/400/300', likes: 219 },
  { id: 6, name: 'Sound Scarf', description: 'Wearable audio that only you can hear.', price: 120.00, image: 'https://picsum.photos/seed/soundscarf/400/300', likes: 94 },
  { id: 7, name: 'Kinetic Desk Art', description: 'A mesmerizing, ever-changing metallic sculpture.', price: 150.00, image: 'https://picsum.photos/seed/kineticart/400/300', likes: 188 },
  { id: 8, name: 'Solar Battery', description: 'Charge your devices with this pocket-sized sun.', price: 95.00, image: 'https://picsum.photos/seed/solarbattery/400/300', likes: 250 },
];

const ProductCard: React.FC<{ item: ProductItem, index: number }> = ({ item, index }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(item.likes);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    return (
        <div 
            className="flex flex-col bg-white/30 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-black/50 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{item.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex-grow">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-xl font-bold text-slate-900 dark:text-white">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                        <button onClick={handleLikeClick} className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors" aria-label="Like item">
                            <HeartIcon className="w-6 h-6" filled={isLiked} />
                            <span className="font-medium text-sm">{likeCount}</span>
                        </button>
                    </div>
                </div>
                 <button className="w-full mt-4 flex items-center justify-center gap-2 bg-sky-500/80 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                    <CartIcon className="w-5 h-5" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}


const SearchView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
    }, 200); // Debounce delay

    return () => {
        clearTimeout(timer);
    };
  }, [searchTerm]);

  const filteredItems = useMemo(() => {
    if (!debouncedSearchTerm) {
      return productItems;
    }
    return productItems.filter(item =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  return (
    <div className="p-4 md:p-6 text-slate-900 dark:text-slate-100">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Discover</h1>
      <div className="mt-6 p-6 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold mb-3">Find Your Next Thing</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Use the dynamic search bar below to filter our curated collection of items.
        </p>
        <div className="relative mt-8">
          <input
            type="text"
            id="search-input"
            placeholder=" "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="peer block w-full appearance-none bg-transparent py-3 pl-4 pr-12 text-slate-800 dark:text-white border-0 border-b-2 border-slate-400/50 dark:border-white/20 focus:outline-none focus:ring-0 focus:border-b-transparent transition-colors duration-300"
          />
          <label
            htmlFor="search-input"
            className="absolute left-4 top-3 origin-[0] text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 ease-in-out
                       peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-sky-600 dark:peer-focus:text-sky-400
                       peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:text-sky-600 dark:peer-[&:not(:placeholder-shown)]:text-sky-400"
          >
            Search items...
          </label>
          <span className="absolute bottom-0 left-0 block h-[2.5px] w-0 bg-sky-500 dark:bg-sky-400 transition-all duration-300 peer-focus:w-full"></span>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none">
            <SearchIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        {filteredItems.length > 0 ? (
          <div key={debouncedSearchTerm} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => <ProductCard key={item.id} item={item} index={index} />)}
          </div>
        ) : (
          <div className="text-center py-10 px-4 bg-white/20 dark:bg-black/20 rounded-2xl animate-fade-in">
            <h3 className="font-semibold text-slate-700 dark:text-slate-200">No Results Found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Try a different search term to find what you're looking for.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default SearchView;