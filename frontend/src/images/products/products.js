import Biryani from './Biryani-06.jpg';
import Falooda from './Faloda-03.jpg';
import Gulab from './Gulab-01.jpg';
import Ras from './Ras-02.jpg';
import Tukra from './Tukra-04.jpg';
import Sheer from './sheer-05.jpg';
import Tikka from './Tikka-07.jpg';
import Seekh from './Seekh-08.jpg';
import Fish from './Fish-09.jpg';
import White from './white-10.jpg';
import Broast from './Broast-11.jpg';

export const getImages = (image) => ({
  Biryani,
  Falooda,
  Gulab,
  Ras,
  Tukra,
  Sheer,
  Tikka,
  Seekh,
  Fish,
  White,
  Broast
}[ image ?? Broast])