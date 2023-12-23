import locationIcon from "../assets/icons/location-icon.svg";
import percentage from "../assets/icons/down-payment.svg";
import coinIcon from "../assets/icons/coin.svg";
import DubaiVideo from "../assets/videos/dubai.mp4";
//------ affordable villas   --------
import paegOneProjectOneHeader from "../assets/images/damac.webp";
import paegOneProjectTwoHeader from "../assets/images/reportage.webp";
//Nearby Images
import dxb from "../assets/images/nearby/dxb.webp";
import downtown from "../assets/images/nearby/downtown.webp";
import marina from "../assets/images/nearby/marina.webp";
import global from "../assets/images/nearby/global.webp";
import dwc from "../assets/images/nearby/dwc.webp";
import difc from "../assets/images/nearby/difc.webp";
import img from "../assets/images/nearby/img.webp";
//------ laxury villas   --------
import pageTwoProjectOneHeader from "../assets/images/main.webp";
import pageTwoProjectTwoHeader from "../assets/images/acres.webp";
//Nearby Images
import moe from "../assets/images/nearby/moe.webp";
import jumeirah from "../assets/images/nearby/jumeirah.webp";
//------ affordable appartments   --------
import pageThreeProjectOneHeader from "../assets/images/barari.webp";
import pageThreeProjectTwoHeader from "../assets/images/oxford.webp";
//Nearby Images
import dunecrest from "../assets/images/nearby/dunecrest.webp";
//------ luxury appartments   --------
import pageFourProjectOneHeader from "../assets/images/binghatti2.webp";
import pageFourProjectTwoHeader from "../assets/images/elingtton.webp";
//Nearby Images
import future from "../assets/images/nearby/future.webp";

export const LandingPages = [
  {
    id: 0,
    Colors: {
      Primary: "#57633A",
      Secondary: "white",
      Third: "rgba(221, 178, 110, 1)",
    },
    PageName: { en: "Affordable Villas", ar: "اسعار مقبولة" },
    slug: "affordable-villas",
    projects: [
      {
        id: 0,
        slug: "park-greens",
        ProjectName: { en: "Park Greens", ar: "بارك غرين" },
        HeaderTitle: {
          en: "Modern Villas",
          ar: "فلل فخمة",
        },
        HeaderTitleHighlight: [
          {
            en: "Seamlessly Blended",
            ar: "تمتزج مع الطبيعة",
          },
          {
            en: "with Nature",
            ar: "بسلاسة",
          },
          {
            en: "At Park Greens",
            ar: "يارك غرين",
          },
        ],
        HeaderImage: paegOneProjectOneHeader,
        InfoTitle: {
          en: "Discover Your Water Wonderland",
          ar: "تمتع بإطلالات مائية خلابة ",
        },
        InfoSubTitle: {
          en: "With beautiful layouts, state-of-the-art finishes and lush living spaces that open out into your own private garden, celebrate the effortless balance between elegance and function.",
          ar: "تنعم بالفخامة و الجودة مع تصميمات جميلة و تشطيبات حديثة و مساحات كبيرة مطلة على حديقتك الخاصة. ",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED2.89M", ar: "AED2.89M" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Damac Hills 2", ar: "داماك هيلز" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "20%", ar: "20%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "35",
            Place: { en: "DWC Airport", ar: "مطار آل مكتوم الدولي" },
            Image: dwc,
          },
          {
            Duration: "24",
            Place: {
              en: "IMG Worlds of Adventure",
              ar: "آي إم جي عالم من المغامرات",
            },
            Image: img,
          },
          {
            Duration: "20",
            Place: { en: "DIFC", ar: "مركز دبي المالي العالمي" },
            Image: difc,
          },
          {
            Duration: "25",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "30",
            Place: { en: "Dubai Downtown", ar: "وسط دبي" },
            Image: downtown,
          },
          {
            Duration: "20",
            Place: { en: "Global Village", ar: "القرية العالمية" },
            Image: global,
          },
        ],
        Video: DubaiVideo,
      },
      {
        id: 1,
        slug: "reportage-village",
        ProjectName: { en: "Reportage Village", ar: "قرية ريبورتاج" },
        HeaderTitle: {
          en: "Ready for a new living Experience at Reportage Village At",
          ar: "تجربة معيشة جديدة في قرية ريبورتاج",
        },
        HeaderTitleHighlight: [
          {
            en: "Reportage Village",
            ar: "قرية ريبورتاج",
          },
          {
            en: "Reportage Village",
            ar: "قرية ريبورتاج",
          },
          {
            en: "Reportage Village",
            ar: "قرية ريبورتاج",
          },
        ],
        HeaderImage: paegOneProjectTwoHeader,
        InfoTitle: {
          en: " Luxury Lifestyle with Close Proximity to Most of Dubai’s",
          ar: "نمط حياة فاخر مع سهولة وصول لجميع مناطق دبي",
        },
        InfoSubTitle: {
          en: "Reportage Village is in Dubailand. which offers distinctive and contemporary highend residential townhouses, delivering the whole luxury lifestyle with close proximity to most of Dubai's attractions.   and is surrounded by parks, schools",
          ar: "تقع قريب ريبورتاج في دبي لاند و التي توفر مساكن مميزة و معاصرة ونمط حياة فاخر و محاط بالحدائق و المدارس مع سهولة وصول لأهم معالم دبي ",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED2.1M", ar: "AED2.1M" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Dubailand", ar: "دبي لاند" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "5%", ar: "5%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "11",
            Place: {
              en: "IMG Worlds of Adventure",
              ar: "آي إم جي عالم من المغامرات",
            },
            Image: img,
          },
          {
            Duration: "11",
            Place: { en: "Zayed University", ar: "جامعة زايد" },
            Image: marina,
          },
          {
            Duration: "20",
            Place: { en: "DIFC", ar: "مركز دبي المالي العالمي" },
            Image: difc,
          },
          {
            Duration: "30",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "27",
            Place: { en: "Dubai Downtown", ar: "وسط دبي" },
            Image: downtown,
          },
          {
            Duration: "23",
            Place: { en: "Mall of Emirates", ar: "مول الامارات" },
            Image: global,
          },
        ],
        Video: DubaiVideo,
      },
    ],
  },
  {
    id: 1,
    Colors: {
      Primary: "#414242",
      Secondary: "white",
      Third: "rgba(221, 178, 110, 1)",
    },
    PageName: { en: "Luxury Villas", ar: "فلل فخمة" },
    slug: "luxury-villas",
    projects: [
      {
        id: 0,
        slug: "plagette",
        ProjectName: { en: "PLAGETTE", ar: "بلاجيت" },
        HeaderTitle: {
          en: "Ultra Luxury Villa at PLAGETTE",
          ar: "فلل فاخرة جدا من بلاجيت ",
        },
        HeaderTitleTow: {
          en: "Greenary",
          ar: "فلل فاخرة جدا من تلال الغاف",
        },
        HeaderImage: pageTwoProjectOneHeader,
        InfoTitle: {
          en: " Vibrant Lagoon-side Community",
          ar: "مجتمع نابض بالحياة و بجانب البحيرة",
        },
        InfoSubTitle: {
          en: "Welcome to our vibrant lagoon-side community, a blend of nature and convenience. With over 500,000 SQ. M of green parks and open spaces, life here is a breath of fresh air. Explore 18 kilometers of walking trails and 11 kilometers of cycling and jogging paths, all set in lush landscapes. Experience convenience and leisure with top-notch dining, exclusive retail options, and a renowned international school, all just a short stroll away in our welcoming neighborhood.",
          ar: " نرحب بكم في مجتمعنا الذي ينبض بالحياة حيث يوفر بإطلالاته الخلابة على البحيرة مزيجا من الراحة و الطبيعة. مع أكثر من 50 ألف قدم من الحدائق الخضراء و المساحات المفتوحة. إستكشف 18 كيلومترا من مسارات المشي و 11 كيلومتر من مسارات ركوب الدراجات و الجري. كل ذلك في مناظر طبيعية خصبة. إختبر الراحة و التسلية مع أفضل المطاعم و محلات البيع بالاضافة الى مدرسة دولية في أحيائنا الودودة ",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED7.8M", ar: "AED7.8M" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Hessa Street", ar: "شارع حصة" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "20%", ar: "20%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "24",
            Place: { en: "Palm Jumeirah ", ar: "نخلة جميرا" },
            Image: jumeirah,
          },
          {
            Duration: "24",
            Place: { en: "Dubai Marina", ar: "دبي مارينا" },
            Image: marina,
          },
          {
            Duration: "20",
            Place: { en: "DWC Airport", ar: "مطار آل مكتوم الدولي" },
            Image: dwc,
          },
          {
            Duration: "30",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "21",
            Place: { en: "Dubai Downtown", ar: "وسط دبي" },
            Image: downtown,
          },
          {
            Duration: "20",
            Place: { en: "Mall of Emirates", ar: "مول الامارات" },
            Image: moe,
          },
        ],
        Video: DubaiVideo,
      },
      {
        id: 1,
        slug: "acres",
        ProjectName: { en: "Acres", ar: "Acres" },
        HeaderTitle: {
          en: "A Masterpiece of Nature Living In ACRES",
          ar: "تحفة من العيش في الطبيعة",
        },
        HeaderImage: pageTwoProjectTwoHeader,
        InfoTitle: {
          en: "Discover a community unlike any other in Dubai",
          ar: "إكتشف مجتمع لا مثيل له في دبي",
        },
        InfoSubTitle: {
          en: "Welcome to The Acres, a beautiful new community with stand-alone villas surrounded by nature. Enjoy peaceful gardens and clear blue lagoons in a neighborhood that fits perfectly with the gentle hills. Our pathways connect you to every part of this lush and growing area. At The Acres, the beauty of the outdoors is just a step away, blending comfort with the simplicity of nature",
          ar: "نرحب بكم في هذا المجتمع الجديد الذي يضم فلل مستقلة محاطة بالطبيعة و الحدائق الهادئة و البحيرات الزرقاء الصافية في حي يتناسب من التلال اللطيفة. توفر لك مساراتنا سهولة وصول لجميع أجزاء هذه المنطقة الخصبة و المتنامية.",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED5.09M", ar: "AED5.09" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Dubailand", ar: "دبي لاند" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "10%", ar: "10%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "24",
            Place: { en: "Palm Jumeirah ", ar: "تخلة جميرا" },
            Image: jumeirah,
          },
          {
            Duration: "24",
            Place: { en: "Dubai Marina", ar: "دبي مارينا" },
            Image: marina,
          },
          {
            Duration: "20",
            Place: { en: "DWC Airport", ar: "مطار آل مكتوم الدولي" },
            Image: dwc,
          },
          {
            Duration: "30",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "21",
            Place: { en: "Dubai Downtown", ar: "وسط دبي" },
            Image: downtown,
          },
          {
            Duration: "20",
            Place: { en: "Mall of Emirates", ar: "مول الامارات" },
            Image: moe,
          },
        ],
        Video: DubaiVideo,
      },
    ],
  },
  {
    id: 2,
    Colors: {
      Primary: "#001A4B",
      Secondary: "white",
      Third: "rgba(221, 178, 110, 1)",
    },
    PageName: { en: "Affordable Appartments", ar: "شقق رخيصة" },
    slug: "affordable-appartments",
    projects: [
      {
        id: 0,
        slug: "barari-views",
        ProjectName: { en: "Barari Views", ar: "جاكوب" },
        HeaderTitle: {
          en: "Enjoy Endless Greenery Views at Al Barari",
          ar: "إستمتع بالخضار المحيط بك بمنظر خلاب ",
        },
        HeaderTitleTow: {
          en: "Greenary",
          ar: "فلل فاخرة جدا من تلال الغاف",
        },
        HeaderImage: pageThreeProjectOneHeader,
        InfoTitle: {
          en: "Distiguished Design With Private pool at your Balcony",
          ar: "تصمم فريد مع مسبحك الخاص على البلكون",
        },
        InfoSubTitle: {
          en: "Barari Views is a high-end residential units from studios, 1, 2 & 3 bedroom apartments with private pool.There are smart home systems installed in all the properties, allowing you to easily adjust the lighting, temperature, security features and more. ",
          ar: "براري فيوز تمثل وحدات سكنية فاخرة تتضمن استوديوهات وشقق بغرفة نوم واحدة أو غرفتين أو ثلاث غرف نوم، مع مسبح خاص. يتوفر نظام منزل ذكي مثبت في جميع الوحدات، مما يسمح لك بضبط الإضاءة ودرجة الحرارة وميزات الأمان والمزيد بسهولة.",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED750K", ar: "AED750K" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Majan", ar: "مجان" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "20%", ar: "20%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "5",
            Place: {
              en: "IMG Worlds of Adventure",
              ar: "آي إم جي عالم من المغامرات",
            },
            Image: img,
          },
          {
            Duration: "5",
            Place: {
              en: "Dunecrest American School",
              ar: "مدرسة ديونكريست الامريكية",
            },
            Image: dunecrest,
          },
          {
            Duration: "8",
            Place: { en: "Global Village", ar: "القرية العالمية" },
            Image: global,
          },
          {
            Duration: "30",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "20",
            Place: { en: "Dubai Downtown", ar: "وسط دبي" },
            Image: downtown,
          },
          {
            Duration: "20",
            Place: { en: "Mall of Emirates", ar: "مول الإمارات" },
            Image: moe,
          },
        ],
        Video: DubaiVideo,
      },
      {
        id: 1,
        slug: "ten-oxford",
        ProjectName: { en: "10 Oxford", ar: "10 Oxford" },
        HeaderTitle: {
          en: "Oxford Where Quality & High Design Meet",
          ar: "مشروع أوكسفورد حيث تلتقي الجودة و التصاميم الفريد",
        },
        HeaderImage: pageThreeProjectTwoHeader,
        InfoTitle: {
          en: "Earth's natural elements come to life within its architecture",
          ar: "العناصر الطبيعية للأرض تتجسد في هندستها.",
        },
        InfoSubTitle: {
          en: "This remarkable residential project offers an exquisite blend of nature-inspired design, with a total of 434 units spread across basement, ground, and 5 floors, luxurious living, and an array of amenities to ensure a comfortable lifestyle.",
          ar: "يقدم هذا المشروع السكني الرائع مزيجًا فريدًا من التصميم المستوحات من الطبيعة، حيث يتكون من مجموع 434 وحدة موزعة على الطابق السفلي والأرضي و5 طوابق أخرى. إنه عرض فاخر للعيش ومجموعة من وسائل الراحة لضمان نمط حياة مريح. ",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED680K", ar: "AED680K" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Arjan", ar: "أرجان" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "20%", ar: "20%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "20",
            Place: { en: "Global Village", ar: "القرية العالمية" },
            Image: global,
          },
          {
            Duration: "18",
            Place: { en: "Dubai Marina", ar: "دبي مارينا" },
            Image: marina,
          },
          {
            Duration: "25",
            Place: { en: "DWC Airport", ar: "مطار آل مكتوم الدولي" },
            Image: dwc,
          },
          {
            Duration: "25",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "30",
            Place: { en: "Dubai Downtown", ar: "وسط دبي" },
            Image: downtown,
          },
          {
            Duration: "20",
            Place: { en: "Mall of Emirates", ar: "مول الإمارات" },
            Image: moe,
          },
        ],
        Video: DubaiVideo,
      },
    ],
  },
  {
    id: 3,
    Colors: {
      Primary: "#30445C",
      Secondary: "white",
      Third: "rgba(221, 178, 110, 1)",
    },
    PageName: { en: "Luxury Appartments", ar: "شقق فخمة" },
    slug: "luxury-appartments",
    projects: [
      {
        id: 0,
        slug: "jacob-co",
        ProjectName: { en: "Jacob & Co", ar: "جاكوب" },
        HeaderTitle: {
          en: "Iconic Skyscraper Designed by Jacob & Co ",
          ar: "ناطحة سحاب مميزة من تصميم جاكوب و شركاءه",
        },
        HeaderTitleTow: {
          en: "Greenary",
          ar: "فلل فاخرة جدا من تلال الغاف",
        },
        HeaderImage: pageFourProjectOneHeader,
        InfoTitle: {
          en: "Live in the Closest Residential Point to Space",
          ar: "إغتنم فرصة العيش في أعلى و أقرب برج سكني للفضاء",
        },
        InfoSubTitle: {
          en: "Designed by Jacob & Co, this Residences building will become the planet's closest residential point to space. Feel your best, enjoying the unique service, original design, and exclusivity of the project.",
          ar: "سيصبح هذا المبنى السكني مصمم من قبل شركة جاكوب و شركاءه أقرب نقطة سكنية للفضاء على كوكب الأرض. أستمتع بالخدمة الفريدة و التصميم الأصلي و الحصرية لهذا المشروع ",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED8.34M", ar: "AED8.34M" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Downtown", ar: "وسط دبي" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "30%", ar: "30%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "11",
            Place: { en: "Muesem of Future", ar: "متحف المستقبل" },
            Image: future,
          },
          {
            Duration: "27",
            Place: { en: "Dubai Marina", ar: "دبي مارينا" },
            Image: marina,
          },
          {
            Duration: "20",
            Place: { en: "Palm Jumeirah", ar: "نخلة جميرا" },
            Image: jumeirah,
          },
          {
            Duration: "20",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "10",
            Place: { en: "Dubai Downtown", ar: "وسط دبي (برج خليفة)" },
            Image: downtown,
          },
          {
            Duration: "20",
            Place: { en: "Mall of Emirates", ar: "مول الامارات" },
            Image: moe,
          },
        ],
        Video: DubaiVideo,
      },
      {
        id: 1,
        slug: "one-river-point",
        ProjectName: { en: "One River Point", ar: "One River Point" },
        HeaderTitle: {
          en: "A high-end urban escape that captures the mood and rhythm of Dubai",
          ar: "مبنى حضاري فاخر يلتقط الإيقاع الفريد لمدينة دبي",
        },
        HeaderImage: pageFourProjectTwoHeader,
        InfoTitle: {
          en: "Overlooking the mesmerizing Dubai Canal & Burj Khalifa",
          ar: "يطل على قناة دبي الساحرة و برج خليفة",
        },
        InfoSubTitle: {
          en: "The residential project presents an array of world-class amenities that cater to the wellness-oriented and sophisticated lifestyle of its residents. The amenities are celebrated as an exclusive zone combining various spaces through a striking formal expression that adds a touch of architectural distinction and visual appeal.",
          ar: "يقدم المشروع السكني مجموعة من وسائل الراحة على مستوى عالمي تلبي نمط حياة سكانه الموجه نحو العافية والأناقة. تُحتفى بوسائل الراحة كمنطقة حصرية تجمع بين مختلف الفضاءات من خلال تعبير فني بارز يضيف لمسة من التميز المعماري والجاذبية البصرية. ",
        },
        InfoData: [
          {
            Icon: coinIcon,
            Title: { en: "AED1.78M", ar: "AED1.78M" },
            SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
          },
          {
            Icon: locationIcon,
            Title: { en: "Business Bay", ar: "الخليج التجاري" },
            SubTitle: { en: "Location", ar: "الموقع" },
          },
          {
            Icon: percentage,
            Title: { en: "20%", ar: "20%" },
            SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
          },
        ],
        Nearby: [
          {
            Duration: "20",
            Place: { en: "Muesem of Future", ar: "متحف المستقبل" },
            Image: future,
          },
          {
            Duration: "27",
            Place: { en: "Dubai Marina", ar: "دبي مارينا" },
            Image: marina,
          },
          {
            Duration: "28",
            Place: { en: "Palm Jumeirah", ar: "نخلة جميرا" },
            Image: jumeirah,
          },
          {
            Duration: "20",
            Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
            Image: dxb,
          },
          {
            Duration: "18",
            Place: { en: "Dubai Downtown", ar: "وسط دبي (برج خليفة)" },
            Image: downtown,
          },
          {
            Duration: "20",
            Place: { en: "Mall of Emirates", ar: "مول الامارات" },
            Image: moe,
          },
        ],
        Video: DubaiVideo,
      },
    ],
  },
];
