import { getPbImageURL } from '@/utils';


function ProductItem({ item }) {
  return (
    <li>
      <figure className="flex flex-col items-start">
        <img
          src={getPbImageURL(item, 'photo')}
          className="h-96 w-auto"
          alt=""
        />
        <figcaption className="flex flex-col">
          <span className="title">
            {item.title}
          </span>
          <span className="price">KRW {item.price.toLocaleString()}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default ProductItem;
