import axios from 'axios';
document.cookie = '_ga=GA1.1.831826798.1657736882; site_session=62cf103676c722.84605690; WeeblyDiceRollUser=MTY1NzczNzI3MHxFUXdBRG5acGMybDBiM0pmTXprNU9EZ3p8hN95Wstr6RmTC7BoOcpPFBhZtlAFZkv7H70CnQRT0rw=; com_cart_token=62cf103697626; language=en; publishedsite-xsrf=eyJpdiI6IkdLZUtzVDE1TUdOYldaXC8wT0NpQTRnPT0iLCJ2YWx1ZSI6Ik82YzNnTmdXN0hteGgrN2NNRmdSMVVWSVBSa054b0lmcVJ3RU9laFdSVXVcL3I0b1lxbGVIWmwybWtrK3JreUZVZTlOcDZ2NkVLOHFMbjg4MXZxc1c0aGZuNlhXdDlzeTllc0U0ZE5oeTZsYzhYSTl0aTlzaVFqZWNQeTB2YUt4ZSIsIm1hYyI6ImU4YTc3YzBkY2RiMDQ1MTY4OWVmZTQ3Y2UxNWM5ZTYxYjJiOGNjNTk1OTA3YmM1NDNiNTA0ZjVmMThiNTE4ZGMifQ%3D%3D; websitespring-xsrf=eyJpdiI6IkZYNmZ5YUhLNzVZeHI5amhmOVcwNEE9PSIsInZhbHVlIjoiZzNsNjlTcmxQRWthQXdGRk5CQWV3V2U1cmlcLzN5RHNsZ3ExbTVGTmxzWEk5dzFVWUpQVHFwajNpT3JyRlwvcGt5OWVqUStxU3ZsRmhrMmJMS29EWU4yQXpYa0RrUU5OdktkWGlJVmpudW42ckU3OEo5OVhjV3J1eDlxbHZVMUkzbiIsIm1hYyI6ImQ2NWU1M2NjMjhkZjZkYWQ0M2M1Mzc3YzBiNWNiZTJmMmY1ZjE5Zjg5YWNhZWVhOWQwNjIxYWUwMWM2YjQ2ZjUifQ%3D%3D; XSRF-TOKEN=eyJpdiI6IkVNczhzdXZIaEZETm1SVjVzM1JIWHc9PSIsInZhbHVlIjoiejNWem1HTHNrdk9pOVRRejBPODFnUXhMSmtQY285anJQY0tJejhrZnoyTkpINWI1N3NxbW41VkxtS2loUDl5UFJCVXYyMXhxT3FLd1plNm1DK2VaU2JhK0gxYUdLZDVUbkFhWUlLWmhsY3Nma3pORkhyc0NKYkJuMHhoQnFRUGoiLCJtYWMiOiIxMGI5YjhiMjYyNWZlNGU0Nzc1ODEyN2Y0OWUyZjJlM2ZhNzNmNTlkM2QyOTE5NDA0YTUxZmI4MDJiZWEyNjljIn0%3D; _snow_id.0a00=6d5096ae-b26d-403b-9d93-f1f2781eff25.1657636364.5.1657812221.1657809625.84a2da82-5603-4e61-bcc3-f1b6b4fc0345; _ga_YR68MMJ8TP=GS1.1.1657812217.2.1.1657813270.0';

const axiosClient = axios.create({
  baseURL: "https://hungboy.ngrok.io",
  withCredentials: true,
  // headers:{
  //   Cookie: "XSRF-TOKEN=eyJpdiI6InZzY3hDd1RRWHFyQ2l2TjhzWTRiS0E9PSIsInZhbHVlIjoiXC9cL2Q3XC9PTkxWVDZkWG5ueVwvZ2dcL0l5aXFTM2xSeWYweUo3cmtabm1kWWJJQUM2bkI5bUgwYlBcL3RHUVordVdNZmlWdUZhRGhTWG9HV3FoOGpBeVFsemlMTnNcL0ozZWM0TTdCbHErckx4V3VxdGVjYnV0UUtPYjg5RFcyQ0FWaXROIiwibWFjIjoiYzY5YmFkNjJkN2YzMGRiNjkwYzhjZDk3NjIxNzlkMDlkOWZjOWE4YWM5YjA5MDQ1YmYwZmM2M2RiMTM1ZDQ3MyJ9;"
  // }
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