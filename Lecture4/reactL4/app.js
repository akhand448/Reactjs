import React from "react";
import ReactDOM from "react-dom/client";

/*
    App Components

    1. Header
      - Logo
      - nav items
    2. Body
      - Search
      - Restaurant container
        - Restaurant card
    3. footer
      - copyright
      - contact links
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/023/557/033/non_2x/indian-restaurant-icon-spice-food-bowl-and-chilli-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    costForTwo,
    avgRating,
    sla: { deliveryTime } = {}
  } = resData.info || {};
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} min.</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "376708",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "3rd Sector",
      areaName: "HSR Layout",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "7.1K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 02:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-3rd-sector-hsr-layout-rest376708",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "799131",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/65bb4296-9bdb-403c-b826-95ca843a3e2c_799131.jpg",
      locality: "KUVEMPU BADAVANE",
      areaName: "Singasandra",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 04:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-kuvempu-badavane-singasandra-rest799131",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "376713",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_376713.JPG",
      locality: "3rd Sector",
      areaName: "HSR Layout",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "434792",
      avgRatingString: "4.2",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 02:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/big-bowl-3rd-sector-hsr-layout-rest376713",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "17036",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33319107-783d-4484-97e8-2fac21b4c9b7_17036.jpg",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
      parentId: "371281",
      avgRatingString: "4.5",
      totalRatingsString: "100K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 04:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "7.5K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-hsr-layout-rest17036",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "816059",
      name: "Salad Days",
      cloudinaryImageId: "3a6b427c050f6a0ca7c12fea2d6aa383",
      locality: "Electronic City",
      areaName: "Electronic City",
      costForTwo: "₹500 for two",
      cuisines: ["Salads"],
      avgRating: 4.5,
      parentId: "796",
      avgRatingString: "4.5",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/salad-days-electronic-city-rest816059",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "695635",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "c99aa4e68f6f6235e8aeb420932c13d7",
      locality: "Gharebhavi Palya",
      areaName: "HSR",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 00:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-gharebhavi-palya-hsr-rest695635",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "858797",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/501c71da-75c5-40f9-a17a-2b87cf56cf52_858797.jpg",
      locality: "Harlur Main Road",
      areaName: "Kudlu",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-harlur-main-road-kudlu-rest858797",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "816456",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/b0d5f9d2-6565-491f-b656-d8935aa6e1ce_816456.JPG",
      locality: "Parappana Agrahara Village",
      areaName: "AECS LAYOUT",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "931",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 00:30:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!"
          },
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                }
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-parappana-agrahara-village-aecs-layout-rest816456",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "791696",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/92284767-1382-49c0-9680-a001aedf500f_791696.JPG",
      locality: "BEGUR",
      areaName: "Singsandra",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 00:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-begur-singsandra-rest791696",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "36001",
      name: "California Burrito",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/ffa7be98-f7a7-4f29-8854-9e72134aeca5_36001.jpg",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food"
      ],
      avgRating: 4.6,
      parentId: "1252",
      avgRatingString: "4.6",
      totalRatingsString: "36K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 03:00:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "3.6K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/california-burrito-hsr-layout-rest36001",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "660690",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/10/d0b2a9cc-6759-4e3f-9235-2a07b8712188_660690.JPG",
      locality: "Electronic City",
      areaName: "Velankani Drive",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/theobroma-electronic-city-velankani-drive-rest660690",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "548400",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/d13201f8-f5e6-4dad-950d-68a663e0d56b_548400.JPG",
      locality: "4th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.3,
      parentId: "1557",
      avgRatingString: "4.3",
      totalRatingsString: "4.2K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 01:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "628"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/taco-bell-4th-sector-hsr-layout-rest548400",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "774510",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/757b89b0-75f5-408d-b105-5d75512cbc69_774510.jpg",
      locality: "Nyanappanahalli",
      areaName: "Vision India",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.5,
      parentId: "3818",
      avgRatingString: "4.5",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-12 02:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹3000",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/bakingo-nyanappanahalli-vision-india-rest774510",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "606852",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/ab9ce58a-82c9-4e20-a4a9-30ca00c41862_606852.JPG",
      locality: "A block",
      areaName: "AECS Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:55:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dominos-pizza-a-block-aecs-layout-rest606852",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "27746",
      name: "Kapoor's Cafe",
      cloudinaryImageId: "vvtwcod6kn0uglnwa6eh",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Thalis"],
      avgRating: 4.3,
      parentId: "114900",
      avgRatingString: "4.3",
      totalRatingsString: "31K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "9.9K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kapoors-cafe-hsr-layout-rest27746",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "352787",
      name: "Grameen Kulfi",
      cloudinaryImageId: "tslyv7idly67myoaa594",
      locality: "4th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.8",
      totalRatingsString: "778",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/grameen-kulfi-4th-sector-hsr-layout-rest352787",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "69138",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/afd1ba6a-0fd2-49ce-8ff0-824090b8a95a_69138.JPG",
      locality: "4th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.6",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:00:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "Ratnesh_Badges/test2.png",
            shortDescription: "Perfect ice cream delivery",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Ratnesh_Badges/test2.png",
                  shortDescription: "Perfect ice cream delivery"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nic-ice-creams-4th-sector-hsr-layout-rest69138",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "210185",
      name: "Faasos  Wraps, Rolls & Shawarma",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "AECS Layout",
      areaName: "Singasandra",
      costForTwo: "₹500 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4.3,
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "3.2K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!"
          },
          {
            imageId: "Rxawards/_CATEGORY-Rolls.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                }
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Rolls.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/faasos-wraps-rolls-and-shawarma-aecs-layout-singasandra-rest210185",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "159251",
      name: "Polar Bear",
      cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
      locality: "Haralur",
      areaName: "Reliable Tranquil Layout",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "726",
      avgRatingString: "4.6",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/polar-bear-haralur-reliable-tranquil-layout-rest159251",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "210199",
      name: "The Biryani Life",
      cloudinaryImageId: "ku5clziwuaxtrollu6p0",
      locality: "AECS Layout",
      areaName: "Singasandra",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4,
      parentId: "8496",
      avgRatingString: "4.0",
      totalRatingsString: "910",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-02-11 23:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      context: "seo-data-76ec0d41-bfec-4684-b69e-b8871cc03da2"
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-biryani-life-aecs-layout-singasandra-rest210199",
      type: "WEBLINK"
    }
  }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard key = {restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
