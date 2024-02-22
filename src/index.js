import { getLocationName } from "./getLocation";
import { refreshPage } from "./Dom";
getLocationName();

document.querySelector('.btn-go-home').addEventListener('click', refreshPage);