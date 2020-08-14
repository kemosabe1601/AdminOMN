import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "Manage",
    isTitle: true,
  },
  {
    id: 2,
    label: "Home",
    icon: "bx-home-circle",
    link: "/home",
    subItems: [
    ],
  },
  {
    id: 6,
    label: "Category",
    icon: "bx bx-collection",
    link: "/category",
    subItems: [],
  },
  {
    id: 7,
    label: "List",
    icon: "bx bx-layer",
    link: "/show",
    subItems: [],
  },
  {
    id: 8,
    label: "Bracters",
    icon: "dripicons-lightbulb",
    link: "/bracters",
    subItems: [],
  },
  {
    id: 9,
    label: "Challengers",
    icon: "dripicons-heart",
    subItems: [
      {
        id: 10,
        label: "List",
        link: "/challengers/list",
        parentId: 9,
      },
      {
        id: 11,
        label: "Deleted Requested",
        link: "/challengers/deleted",
        parentId: 9,
      },
      {
        id: 12,
        label: "Challenger Program",
        link: "/challengers/program",
        parentId: 9,
      },
    ],
  },
  {
    id: 13,
    label: "Upload",
    icon: "bx bxs-hot",
    subItems: [
      {
        id: 14,
        label: "List",
        link: "/upload/list",
        parentId: 13,
      },
      {
        id: 15,
        label: "Deleted Requested",
        link: "/upload/deleted",
        parentId: 13,
      },
      {
        id: 16,
        label: "Challenger Program",
        link: "/upload/program",
        parentId: 13,
      },
    ],
  },
  {
    id: 17,
    label: "Profit Payment",
    icon: "bx bx-won",
    subItems: [
      {
        id: 18,
        label: "List",
        link: "/profitpayment",
        parentId: 17,
      },
      {
        id: 19,
        label: "Completed",
        link: "/profitpayment/complete",
        parentId: 17,
      },
      {
        id: 20,
        label: "Deleted",
        link: "/profitpayment/deleted",
        parentId: 17,
      },
    ],
  },
  {
    id: 21,
    label: "Customer Manage",
    icon: "bx bx-user",
    subItems: [
      {
        id: 22,
        label: "Live Chat",
        link: "/customer",
        parentId: 21,
      },
      {
        id: 23,
        label: "Chat Detail",
        link: "/customer/chat-detail",
        parentId: 21,
      },
      {
        id: 24,
        label: "Inquiry's Details",
        link: "/customer/inquiry",
        parentId: 21,
      },
      {
        id: 24,
        label: "Problem",
        link: "/customer/problems",
        parentId: 21,
      },
    ],
  },
  {
    id: 25,
    label: "Message",
    link: "/message",
    icon: "bx bx-message-square-dots",
  },
  {
    id: 26,
    label: "Systems Manage",
    icon: "dripicons-gear",
    subItems: [
      {
        id: 27,
        label: "Message Manage",
        link: "/system/message",
        parentId: 26,
      },
      {
        id: 28,
        label: "Membership Manage",
        link: "/system/membership",
        parentId: 26,
      },
      {
        id: 29,
        label: "Employee Manage",
        link: "/system/employee",
        parentId: 26,
      },
      {
        id: 30,
        label: "Footer Manage",
        link: "/system/footer",
        parentId: 26,
        subItems: [
          {
            id: 31,
            label: "Terms & Conditions",
            link: "/system/footer/terms&conditions",
            parentId: 30,
          },
          {
            id: 32,
            label: "Privacy Policy",
            link: "/system/footer/privacy",
            parentId: 30,
          },
          {
            id: 33,
            label: "Video Manage",
            link: "/system/footer/video-manage",
            parentId: 30,
          },
        ],
      },
      {
        id: 34,
        label: "Access Manage",
        link: "/system/access",
        parentId: 26,
      },
    ],
  },
  {
    id: 35,
    label: "Sample Manage",
    icon: "dripicons-document-edit",
    subItems: [
      {
        id: 36,
        label: "Upload Sample",
        link: "/sample/upload",
        parentId: 35,
      },
      {
        id: 37,
        label: "Production Support Sample",
        link: "/sample/production-support",
        parentId: 35,
      },
      {
        id: 38,
        label: "Self-Production Sample",
        link: "/sample/self-production",
        parentId: 35,
      },
      {
        id: 39,
        label: "Main Video Sample",
        link: "/sample/main-video",
        parentId: 35,
      },
    ],
  },
];
