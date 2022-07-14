import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "https://hungboy.ngrok.io"
})

const addToCartURI = `/ajax/api/JsonRPC/Commerce/?Commerce/[Checkout::addItemToCart]`;

export const addItemToShippingCart = async (cartToken?: string): Promise<string> => {
  const shippingCartPayload = {"id":0,"jsonrpc":"2.0","method":"Checkout::addItemToCart","params":["1",1,1,{},[],0,{"fulfillment_option":"shipping","store_location_uuid":"11ecdc50718e22bfa4ab2c600c83e955","is_no_contact_delivery_enabled":false,"should_reset_shipment_time":false,"set_primary_order":false,"delivery_address":null,"in_seat_delivery_notes":""},{"source":"0"}]};

  const response = await axiosClient.post(
    cartToken? `${addToCartURI}&cartToken=${cartToken}` : addToCartURI,
    shippingCartPayload,
  );

  return response.data.token;
}

export const addItemToPickupCart = async (cartToken?: string): Promise<string> => {
  const pickupCartPayload = {"id":0,"jsonrpc":"2.0","method":"Checkout::addItemToCart","params":["1",1,1,{},[],0,{"fulfillment_option":"pickup","store_location_uuid":"11ecdc50718e22bfa4ab2c600c83e955","is_no_contact_delivery_enabled":false,"should_reset_shipment_time":false,"set_primary_order":false,"delivery_address":null,"in_seat_delivery_notes":null},{"source":"0"}]};

  const response = await axiosClient.post(
    cartToken? `${addToCartURI}&cartToken=${cartToken}` : addToCartURI,
    pickupCartPayload,
  );

  return response.data.token;
}

const readCartURI = `/ajax/api/JsonRPC/CommerceV2/?CommerceV2/[Cart::read]`;
const readCartPayload = {"id":0,"jsonrpc":"2.0","method":"Cart::read","params":[false]};