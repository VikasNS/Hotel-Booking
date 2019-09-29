const {
    dialogflow,
    BasicCard,
    BrowseCarousel,
    BrowseCarouselItem,
    Button,
    Permission,
    Carousel,
    Image,
    LinkOutSuggestion,
    List,
    MediaObject,
    Suggestions,
    SimpleResponse,
    Table
} = require('actions-on-google');
var admin = require('firebase-admin');
var queryText = "";
var fire;
const app = dialogflow({debug: true});
const functions = require('firebase-functions');

fire = admin.initializeApp(
       {
          //Removed
        });
var db=admin.database();


dum = {
  "MAA": [
    {
      "hotel_name": "COURTYARD CHENNAI MARRIOTT",
	  "hotel_name_hi" : "कूर्टियार्ड चेंनई मैरिएट",
      "lat": 13.0135,
      "lang": 80.2223,
      "price": "5515.49",
      "address": "५६४ एएनए सनेही चेंनई ६०००१AL चन्नी ",
      "contact": "91-44-66764000",
      "URL": "https://media-cdn.tripadvisor.com/media/photo-s/10/00/09/a8/swimming-pool.jpg",
      "CheckIn": "शाम 6 से 1 बजे",
      "CheckOut":"रात्रि 8 से 12 बजे",
      "Rating":"4/5",
      "Amenities":"स्विमिंग पूल, मुफ्त भोजन, मालिश केंद्र"
    },
    {
      "hotel_name": "HILTON CHENNAI",
	  "hotel_name_hi" : "हिल्टन चेन्नई",
      "lat": 13.0372,
      "lang": 80.21212,
      "price": "8320.00",
      "address": "124/1 जवाहरलाल नेहरू सलाई 600 097 चेन्नई ",
      "contact": "91-44-22255555",
      "URL": "http://ihg.scene7.com/is/image/ihg/holiday-inn-hotel-and-suites-oakland-2533422671-4x3",
      "CheckIn": "सुबह 9 से दोपहर 2 बजे",
      "CheckOut":"रात्रि 8 बजे से 2 बजे तक",
      "Rating":"3/5",
      "Amenities":"कॉन्टिनेंटल ब्रेकफास्ट, मसाज सेंटर, ए.सी."
    },
    {
      "hotel_name": "LEMON TREE HOTEL CHENNAI",
	  "hotel_name_hi" : "लेमन ट्रे होटल चेन्नई",
      "lat": 13.00803,
      "lang": 80.23426,
      "price": "4081.17",
      "address": "72 सरदार पाटल रोड, गुजरात 600032 चेन्नई",
      "contact": "91 44 44232323",
      "URL": "http://ihg.scene7.com/is/image/ihg/holiday-inn-hotel-and-suites-oakland-2533422671-4x3",
      "CheckIn": "शाम 6 से शाम 4 बजे तक",
      "CheckOut":"शाम 6 से 10 बजे",
      "Rating":"4.5/5",
      "Amenities":"एसी, स्विमिंग पूल, मुफ्त भोजन"
    }
  ],
  "CCU": [
    {
      "hotel_name": "SWISSOTEL KOLKATA",
	  "hotel_name_hi" : "स्विस कोकाटा",
      "lat": 22.57288,
      "lang": 88.36417,
      "price": "6400.00",
      "address": "CITY CENTER TWO, ACTION AREA 2 D.PLOT NO 11/5 अपरिभाषित कोल्कता ",
      "contact": "+91 33 66266666",
      "URL": "https://www.omnihotels.com/-/media/images/hotels/ausctr/pool/ausctr-omni-austin-hotel-downtown-evening-pool.jpg",
      "CheckIn": "शाम 7 से 12 बजे",
      "CheckOut":"शाम 7 से 12 बजे",
      "Rating":"4.2/5",
      "Amenities":"Warm Water for bath, Swimming Pool, Free Food"
    },
    {
      "hotel_name": "SWISSOTEL KOLKATA",
	  "hotel_name_hi" : "स्विस कोकाटा",
      "lat": 22.57288,
      "lang": 88.36417,
      "price": "6400.00",
      "address": "CITY CENTER TWO,ACTION AREA 2 D.PLOT NO 11/5 undefined KOLKATA ",
      "contact": "+91 33 66266666",
      "URL": "https://www.omnihotels.com/-/media/images/hotels/ausctr/pool/ausctr-omni-austin-hotel-downtown-evening-pool.jpg",
      "CheckIn": "सुबह 9 से दोपहर 2 बजे",
      "CheckOut":"शाम 7 से 10 बजे",
      "Rating":"3.5/5",
      "Amenities":"कॉन्टिनेंटल ब्रेकफास्ट, एसी, स्विमिंग पूल"
    }
  ],
  "AMD": [
    {
      "hotel_name": "LEMON TREE HOTEL AHMEDABAD",
	  "hotel_name_hi" : "लेमन ट्रे होटल एहमदबड",
      "lat": 23.02961,
      "lang": 72.56395,
      "price": "4041.79",
      "address": "434 1 मीठाकाली सिक्स क्रॉस रोड, नवरंगपुरा 380006 अह्मदाबाद",
      "contact": "91 79 44232323",
      "URL": "http://streamafrica.com/wp-content/uploads/2016/01/hotels-4.jpg",
      "CheckIn": "सुबह 10 बजे से शाम 4 बजे तक",
      "CheckOut":"शाम 6 से 10 बजे",
      "Rating":"3.9/5",
      "Amenities":"ध्यान केंद्र, एसी, स्विमिंग पूल"
    },
    {
      "hotel_name": "LEMON TREE PREMIER THE ATRIUM",
	  "hotel_name_hi" : " नींबू का पेड़ प्रीमेच्योर एट्रियम",
      "lat": 23.02705,
      "lang": 72.57661,
      "price": "4554.81",
      "address": " खानपुर, नेहरू पुल 380001 अहमदाबाद ",
      "contact": "917925505505",
      "URL": "http://streamafrica.com/wp-content/uploads/2016/01/hotels-4.jpg",
      "CheckIn": "सुबह 9 से दोपहर 3 बजे",
      "CheckOut":"रात्रि 9 से 3 बजे",
      "Rating":"4.6/5",
      "Amenities":"स्विमिंग पूल, मुफ्त भोजन"
    }
  ],
  "BLR": [
    {
      "hotel_name": "LE MERIDIEN BANGALORE",
	  "hotel_name_hi" : "ले मेरिडिनर बंगलोर",
      "lat": 12.99029,
      "lang": 77.58638,
      "price": "7072.00",
      "address": "कोई 28 SANKEY सड़क, पी.बी. सं। 174 OPPOSITE बंगलौर 560 052 बेंगालुरू",
      "contact": "+91 80 22262233",
      "URL": "http://streamafrica.com/wp-content/uploads/2016/01/hotels-4.jpg",
      "CheckIn": "सुबह 6 से 11 बजे",
      "CheckOut":"रात्रि 11 बजे से 3 बजे तक",
      "Rating":"4.9/5",
      "Amenities":"स्विमिंग पूल, मुफ्त भोजन, ए.सी."
    },
    {
      "hotel_name": "LE MERIDIEN BANGALORE",
	  "hotel_name_hi" : "ले मेरिडिनर बंगलोर",
      "lat": 12.99029,
      "lang": 77.58638,
      "price": "7072.00",
      "address": "कोई 28 SANKEY सड़क, पी.बी. सं। 174 OPPOSITE बंगलौर 560 052 बेंगालुरू",
      "contact": "+91 80 22262233",
      "URL": "http://streamafrica.com/wp-content/uploads/2016/01/hotels-4.jpg",
      "CheckIn": "सुबह 6 से 11 बजे",
      "CheckOut":"रात्रि 11 बजे से 3 बजे तक",
      "Rating":"3/5",
      "Amenities":"स्नान के लिए गर्म पानी, मुफ्त भोजन, ध्यान केंद्र"
    }

  ],
  "BOM": [
    {
      "hotel_name": "INTERCONTINENTAL MARINE DRIVE",
	  "hotel_name_hi" : "इंटरकांटिनेंटल समुद्री अभियान",
      "lat": 18.93385,
      "lang": 72.82445,
      "price": "9790.55",
      "address": "135 MARINE DRIVE 400020 मुंबई",
      "contact": "+91 22 39879999",
      "URL": "https://media-cdn.tripadvisor.com/media/photo-s/10/00/09/a8/swimming-pool.jpg",
      "CheckIn": "सुबह 8 से दोपहर 1 बजे",
      "CheckOut":"रात्रि 8 बजे से 1 बजे तक",
      "Rating":"2.5/5",
      "Amenities":"मुफ्त भोजन"
    },
    {
      "hotel_name": "INTERCONTINENTAL MARINE DRIVE",
	  "hotel_name_hi" : "इंटरकांटिनेंटल समुद्री अभियान",
      "lat": 18.93385,
      "lang": 72.82445,
      "price": "9790.55",
      "address": "135 MARINE DRIVE 400020 मुंबई",
      "contact": "+91 22 39879999",
      "URL": "https://media-cdn.tripadvisor.com/media/photo-s/10/00/09/a8/swimming-pool.jpg",
      "CheckIn": "शाम 6 से 3 बजे",
      "CheckOut":"रात्रि 8 से 11 बजे",
      "Rating":"3.5/5",
      "Amenities":"निःशुल्क भोजन, ध्यान केंद्र, स्विमिंग पूल"
    }
  ]
};

let cities = ["AMD", "BOM", "MAA", "CCU", "BLR"];

function getHotelByHotelName(hotelName) {
  let HOTEL = {};

  cities.forEach(city => {
    let hotels = map(city);
    hotels.forEach(hotel => {
      if (hotel.hotel_name == hotelName) {
        HOTEL = hotel;
      }
    });
  });   
  return HOTEL;
}

function getHotel(cityName) {
  let citJson = map(cityName);
  return citJson;
}

function numberOfHotels(cityName) {
  return map(cityName).length;
}

function map(cityName) {
  if (cityName == "AMD") {
    return dum.AMD;
  } else if (cityName == "BLR") {
    return dum.BLR;
  } else if (cityName == "BOM") {
    return dum.BOM;
  } else if (cityName == "CCU") {
    return dum.CCU;
  } else if (cityName == "LON") {
    return dum.LON;
  } else if (cityName == "MAA") {
    return dum.MAA;
  }
}

function mapCityToCityCode(cityName){
  switch (cityName) {
    case 'BLR':
      return "BLR-bangalore";
    case 'HYDERABAD':
      return 'HYD-hyderabad';
    case 'CCU':
      return "CCU-kolkata";
    case 'DEL':
      return 'DEL-delhi';
    case 'ranchi':
      return 'IXR-ranchi';
    case 'jaipur':
      return 'JAI-jaipur';
    case 'bhubaneshwar':
      return 'BBI-bhubaneshwar';
    case 'AMD':
      return 'AHM-ahemdabad';
    case 'BOM':
      return 'BOM-mumbai';
    case 'cochin':
      return 'COK-cochin';
    case 'chandigarh':
      return 'IXC-chandigarh';
    case 'MAA':
      return 'MAA-chennai';
    default:
      return "MAA-chennai";
  }
}

function getFilghtURL(source,destination,adults,children,infants,date) {
  var sp = date.split("/");
  var date = sp[0]+"-"+sp[1]+"-"+sp[2]
  return "https://paytm.com/flights/flightSearch/"+mapCityToCityCode(source)+"/"+mapCityToCityCode(destination)+"/"+adults+"/"+children+"/"+infants+"/E/"+date;
}

function getDeepLinkURL(source_lat,source_lon,dest_lat,dest_lon) {
    // body...
    var lat = source_lat;
    var long = source_lon;
    var lat1 = dest_lat;
    var long1 = dest_lon;
    var pickup_nick_name = "";
    var drop_nick_name = "";
    var pickup_addr = "";
    var drop_addr = "";
    var url =
      "https://m.uber.com/ul/?client_id=Qh5_5eEV2W_xUIEqxmhbhBh-NEvkktgD&action=setPickup&pickup[latitude]=" +
      lat +
      "&pickup[longitude]=" +
      long +
      "&pickup[nickname]=" +
      pickup_nick_name +
      "&pickup[formatted_address]=" +
      pickup_addr +
      "&dropoff[latitude]=" +
      lat1 +
      "&dropoff[longitude]=" +
      long1 +
      "&dropoff[nickname]=" +
      drop_nick_name +
      "&dropoff[formatted_address]=" +
      drop_addr +
      "&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383";
      
     return url;
}


app.intent('होटल बुक करें',(conv,{Destination,checkIn,checkOut,packageType,hotelNo,ConfirmBooking}) => {
    if(!Destination && !checkIn && !checkOut && !packageType && !hotelNo && !ConfirmBooking) {
        conv.ask("राजू, आप किस शहर में होटल बुक करना चाहते हैं?");
        
    }else if(Destination && !checkIn && !checkOut && !packageType && !hotelNo && !ConfirmBooking) {
        conv.ask("आप किस तारीख को चेकइन करना चाहते हैं?");
        
    }else if(Destination && checkIn && !checkOut && !packageType && !hotelNo && !ConfirmBooking) {
        conv.ask("आप किस तारीख को चेकआउट करना चाहते हैं?");
        
    }else if(Destination && checkIn && checkOut && !packageType && !hotelNo && !ConfirmBooking) {
        conv.ask("आप कितने कमरे बुक करना चाहते हैं? एक कमरे में दो व्यक्ति रह सकते हैं?");
        conv.ask(new Suggestions(["एक","दो","तीन","चार"]));
        
    }else if(Destination && checkIn && checkOut && packageType && !hotelNo && !ConfirmBooking) {
         conv.ask("आप कौन सा होटल चुनना चाहते हैं");
		 var res = getHotel(Destination);
		 var resCount = numberOfHotels(Destination);
		 var resArr = [];
         for(var i = 0; i < resCount; i++) {
             resArr.push(new BrowseCarouselItem({
                          title: res[i].hotel_name_hi,
                          url: res[i].URL,
                          description: res[i].price + " RS | रेटिंग : "+ res[i].Rating,
                          image: new Image({
                            url: res[i].URL,
                            alt: 'Image alternate text',
                          }),
                          footer: res[i].address,
                        }));
         }
         conv.ask(new BrowseCarousel({items: resArr}));
        
    }else if(Destination && checkIn && checkOut && packageType && hotelNo && !ConfirmBooking) {
	    var res = getHotelByHotelName(hotelNo.toUpperCase());
        var HotelName = res.hotel_name_hi;
        var HotelPrice = res.price;
        var URL = res.URL;
        var Amenities = res.Amenities;
		
		
        return db.ref('userDetails/vikas/booking').once("value").then((snapshot)=>{
            if(snapshot.exists() && snapshot.child('HotelName').val() == hotelNo) {
                conv.ask('इस होटल में आपके लिए बुकिंग पहले से है,  क्या आप अधिक कमरे जोड़ने की कोशिश कर रहे हैं?');
                conv.user.storage.val = parseInt(snapshot.child('count').val());
            }else{
                conv.ask("क्या आप बुकिंग की पुष्टि करना चाहते हैं?");
                conv.user.storage.val = 0;
            }
            conv.ask(new BasicCard({
    			  text: `सुविधाएं : ${Amenities} , 
    			  चेक इन समय : ${res.CheckIn} , 
    			  चेक आउट समय : ${res.CheckIn}`, 
    			  subtitle: HotelPrice + "RS",
    			  title: HotelName,
    			  image: new Image({
    				url: URL,
    				alt: 'Image alternate text',
    			  }),
    			  display: 'CROPPED',
			}));
	        conv.ask(new Suggestions(["हाँ","नहीं"])); 
        });

    }else if(Destination && checkIn && checkOut && packageType && hotelNo && ConfirmBooking) {
        if(ConfirmBooking == "Yes" || ConfirmBooking == "yes") {
            conv.ask(`भुगतान विवरण नीचे हैं। कृपया पे बटन पर क्लिक करके भुगतान करें`);
            conv.ask(new BasicCard({
                  text: `2 घंटे के भीतर भुगतान करें`,  
                  subtitle: `कुल भुगतान राशि ${getHotelByHotelName(hotelNo.toUpperCase()).price * packageType} RS`,
                  title: ``,
                  buttons: new Button({
                    title: 'पैसे भरे',
                    url: `https://hotelninja.tk/?link=https://hotelninja.tk/bCK1?price%3D${getHotelByHotelName(hotelNo.toUpperCase()).price * packageType}%26message%3DHotelBookingPayment%26upiID%3Dvrkarthik@ybl&apn=com.example.dum&afl=https://hotelninja.tk/bCK1`,
                  }),
                  image: new Image({
                    url: 'https://miro.medium.com/max/368/1*uo-bbMxLvnii6Bi7UijM-A.png',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
            
            return db.ref("userDetails/vikas/booking").set({
                Destination : Destination,
                HotelName : hotelNo,
				HotelNameHI : getHotelByHotelName(hotelNo.toUpperCase()).hotel_name_hi,
                checkIn : checkIn,
                checkOut : checkOut,
                lat : getHotelByHotelName(hotelNo.toUpperCase()).lat,
                lng : getHotelByHotelName(hotelNo.toUpperCase()).lang,
                count : parseInt(packageType) + conv.user.storage.val
            }).then(()=>{
                console.log(hotelNo);
                var hotel_price = getHotelByHotelName(hotelNo.toUpperCase()).price;
                var hotel_contact = getHotelByHotelName(hotelNo.toLocaleUpperCase()).contact;
                //helper.sendMessage(hotelNo,checkIn,checkOut,parseInt(hotel_price,10)*packageType+" ",hotel_contact);
                
                // return helper.sendMessage(hotelNo,checkIn,checkOut,"helper.getHotelByHotelName(hotelNo.toUpperCase()).price * packageType","7259545785");
            });
        } else if(ConfirmBooking == "no") {
            conv.ask("कोई बात नहीं।! धन्यवाद।");
            return db.ref('Marketing/vikas').set({
                HotelName : hotelNo,
                Name : "Vikas",
                PhoneNo : "+918867474172"
            }).then(()=>{
                
            });
        }
     }

    
    
});


app.intent('Default Welcome Intent',(conv) => {
    conv.ask("हाय राजू, में आपकी कैसे मदद कर सकता हूं?");
    conv.ask(new Suggestions(["होटल बुक करें","मेरी बुकिंग","टैक्सी बुक करें","बुकिंग रेटिंग दें","विमान  बुक करे","बुकिंग रद्द करें"]));
});

app.intent("बुकिंग रेटिंग दें",(conv,{review}) => {
    var gotReview = review.length > 0;
    var str = "";
    var db=admin.database();
    if(!gotReview) {
        return db.ref('userDetails/vikas/booking').once("value").then((snapshot) =>  {
        
        str = str + "शहर का कोड : "+snapshot.child("Destination").val() +".  होटल का नाम"+snapshot.child("HotelNameHI").val() + " तारीख " + snapshot.child("checkIn").val() ;
        conv.ask("ज़रूर, कृपया नीचे दी गई बुकिंग के लिए प्रतिक्रिया दें।");
        conv.ask(str);
        //fire.delete();
        return 1;
        });
    }else {
        conv.ask("धन्यवाद, आपकी प्रतिक्रिया दर्ज कर ली गई है");
		conv.ask(new Suggestions(["होटल बुक करें","मेरी बुकिंग","टैक्सी बुक करें","बुकिंग रेटिंग दें","विमान  बुक करे","बुकिंग रद्द करें"]));
        return db.ref('userDetails/vikas/feedback').set({
            review : review
        }).then(()=>{
            //fire.delete();
        });
    }
    
    //fire.delete();
});

app.intent('मेरी बुकिंग',(conv) => {
    var str = "";
    return db.ref('userDetails/vikas/booking').once("value").then((snapshot) =>  {
        conv.ask('ज़रूर, यहाँ आपकी पिछली बुकिंग का विवरण है।');
        str = `
		शहर का कोड : ${snapshot.child("Destination").val()},
		होटल का नाम : ${snapshot.child("HotelNameHI").val()},
		चेक इन : ${snapshot.child("checkIn").val().substr(0,10)},
		चेक आउट : ${snapshot.child("checkOut").val().substr(0,10)},
		कमरों की संख्या  : ${snapshot.child("count").val()}`;
        conv.ask(str);
        conv.ask(new Suggestions(["टैक्सी बुक करे"]));
    });
});

app.intent('बुकिंग रद्द करें',(conv,{Confirmation}) => {
    var gotConfirmation = Confirmation.length > 0;
    if(!gotConfirmation) {
        conv.ask("क्या आप वाकई अपनी बुकिंग रद्द करना चाहते हैं?");
        conv.ask(new Suggestions(["हाँ","नहीं"]));
    } else{
        if(Confirmation == "yes") {
            conv.ask("आपकी बुकिंग रद्द कर दी गई है. आपका भुगतान अगले 2 व्यावसायिक दिनों में वापस कर दिया जाएगा।");
            return db.ref('userDetails/vikas/booking').remove().then(()=>{
               
            });
        }else {
            conv.ask("ज़रूर, आपकी बुकिंग रद्द नहीं हुई है।");
        }
    }
});

app.intent('टैक्सी बुक करें',(conv) => {
    
    return db.ref('userDetails/vikas/booking').once("value").then((snapshot)=>{
        var HotelName = snapshot.child("HotelNameHI").val();
        conv.ask(HotelName + " को उबेर  ");
        var lat = snapshot.child("lat").val();
        var lang = snapshot.child("lng").val();
       
        return conv.ask(new BasicCard({
                  text: `अनुमानित शुल्क: 2500 से 3000 रुपये`,  
                  subtitle: HotelName,
                  title: `उबेर`,
                  buttons: new Button({
                    title: 'बुक  उबेर',
                    url: getDeepLinkURL(13.017190,77.564652,lat,lang),
                  }),
                  image: new Image({
                    url: 'https://cdn0.iconfinder.com/data/icons/picons-social/57/70-uber-512.png',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
    });
        
});

app.intent('विमान  बुक करे',(conv) => {
    
    return db.ref('userDetails/vikas/booking').once("value").then((snapshot)=>{
		var Destination = snapshot.child("Destination").val();
        var HotelName = snapshot.child("HotelNameHI").val();
		var count = snapshot.child("count").val();
		var checkIn = snapshot.child("checkIn").val();
        conv.ask(HotelName + " को विमान  ");
   
        return conv.ask(new BasicCard({
                  text: ``,  
                  subtitle: HotelName,
                  title: `विमान`,
                  buttons: new Button({
                    title: 'बुक  विमान',
                    url: getFilghtURL("BLR",Destination,count,0,0,checkIn),
                  }),
                  image: new Image({
                    url: 'https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTPAYT45BF9C3ED/0x1920/70/0.jpg',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
    });
});

app.intent('Default Fallback Intent',(conv) => {
    conv.ask("माफ़ कीजिये, हमें समझ नहीं आया कि आपने अभी क्या कहा. हम अपने एनएलपी मॉडल को प्रशिक्षित करने के लिए इसका उपयोग करेंगे");
    
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
