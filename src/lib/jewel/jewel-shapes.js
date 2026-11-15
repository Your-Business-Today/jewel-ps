import { brilliantJewel } from './shapes/brilliant-jewel.js';
import { townhouse } from './shapes/townhouse.js';
import { turningGear } from './shapes/turning-gear.js';
import { waterDrop } from './shapes/water-drop.js';
import { haloedJewel } from './shapes/haloed-jewel.js';

/** Every shape the particle jewel can take, by name. */
export const jewelShapes = { brilliantJewel, townhouse, turningGear, waterDrop, haloedJewel };

/** @typedef {keyof typeof jewelShapes} JewelShapeName */

/** The shape the jewel takes beside each of the homepage's services. @type {Record<string, JewelShapeName>} */
export const shapeForService = {
	refurbishment: 'townhouse',
	maintenance: 'turningGear',
	restoration: 'waterDrop',
	contact: 'haloedJewel'
};
