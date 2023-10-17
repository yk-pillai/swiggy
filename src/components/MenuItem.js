import { IMG_CDN_URL } from '../constants';

const MenuItem = ({ name, imageId, description, defaultPrice, price }) => {
  return (
    <div className="card p-2 flex">
      <div className='w-[600px]'>
        <h2 className="text-lg font-semibold text-orange-700 text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h2>
        <h3 className="">
          {defaultPrice !== undefined ? defaultPrice / 100 : price / 100} Rs
        </h3>
        <h4 className="font-thin">{description}</h4>
      </div>
      <div>
        <img className="w-40 h-40 rounded-md" src={IMG_CDN_URL + imageId}></img>
      </div>
    </div>
  );
};

export default MenuItem
