export const BUSINESS = {
  name: "Trippletone Stationeries",
  motto: "Equip and Discover",
  email: "brianachacha123@gmail.com",
  phoneDisplay: "0729 830 739",
  phoneTel: "+254729830739",
  whatsapp: "254729830739",
  location: "Katito Junction, Kisumu, Kenya",
};

export const waLink = (msg = "Hello Trippletone Stationeries, I'd like to make an inquiry.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
