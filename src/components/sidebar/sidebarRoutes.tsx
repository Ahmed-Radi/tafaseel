import { VscDashboard } from "react-icons/vsc";
import { MdOutlineSensors } from "react-icons/md";
import { FaRegPaperPlane, FaRobot } from "react-icons/fa6";
import { PiAddressBook, PiCalendarDotsDuotone } from "react-icons/pi";
import { IoIosSwitch, IoIosSettings } from "react-icons/io";
import { LiaRocketSolid } from "react-icons/lia";
import { TfiKey, TfiPowerOff } from "react-icons/tfi";
import { ISidebarData } from "@/types/dashboard/sidebar";

const data: ISidebarData[] = [
  {
    "title": "",
    "line": false,
    "items" : [
      {
        "title": "لوحة التحكم و التقارير",
        "icon": <VscDashboard />,
        "path": "/support"
      },
      {
        "title": "حسابات الواتساب",
        "icon": <MdOutlineSensors />,
        "path": "/user/device"
      },
      {
        "title": "ادوات الواتساب",
        "icon": <FaRegPaperPlane />,
        "children": [
            {
                "title": "لوحة الإرسال اليدوي",
                "icon": <VscDashboard />,
                "path": "/user/sent-text-message"
            },
            {
                "title": "الرد الآلي (شات بوت)",
                "icon": <FaRobot />,
                "path": "/user/chatbot",
            },
            {
                "title": "الحملات الجماعية/التسويقية",
                "icon": <PiCalendarDotsDuotone />,
                "path": "/user/schedule-message",
            }
        ]
      },
      {
        "title": "قوائم جهات الإتصال",
        "icon": <PiAddressBook />,
        "path": "/user/contact"
      },
      {
        "title": "سجل الرسائل",
        "icon": <IoIosSwitch />,
        "path": "/user/logs"
      },
    ]
  },
  //Second list
  {
    "title": "صفحات هامّة",
    "line": true,
    "items" : [
      {
        "title": "خدمات مصغّرة",
        "icon": <VscDashboard />,
        "path": "/user/services"
      },
      {
        "title": "إدارة الإشتراك",
        "icon": <LiaRocketSolid />,
        "path": "/user/subscription"
      },
    ]
  },
  // Third list
  {
    "title": "ادارة الحساب",
    "line": true,
    "items" : [
      {
        "title": "إعدادات الملف الشخصي",
        "icon": <IoIosSettings />,
        "path": "/user/profile"
      },
      {
        "title": "رمز المصادقة للـ API",
        "icon": <TfiKey />,
        "path": "/user/auth-key"
      },
      {
        "title": "تسجيل الخروج",
        "icon": <TfiPowerOff />,
        "action": () => {console.log('logout')}
      },
    ]
  },
];

export default data;