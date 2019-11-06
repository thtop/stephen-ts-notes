import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const user2 = new User();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);
customMap.addUserMarker(user2);
