import style from './CacheIMG.module.css';

function CacheIMG() {
  let imagesArr = [];
  for (let i = 0; i < 100; i++) {
    imagesArr.push(`https://picsum.photos/100/100?random=${i}`);
  }

  return imagesArr.map((imgURL) => {
    return <img className={style.img} key={imgURL} src={imgURL} />;
  });
}

export default CacheIMG;
