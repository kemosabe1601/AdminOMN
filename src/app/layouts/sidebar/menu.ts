import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
	{
		id: 1,
		label: 'Manage',
		isTitle: true,
	},
	{
		id: 2,
		label: 'Home',
		icon: 'bx-home-circle',
		link: '/home',
		// badge: {
		//     variant: 'info',
		//     text: '03',
		// },
		subItems: [
			// {
			//     id: 3,
			//     label: 'Default',
			//     link: '/dashboard',
			//     parentId: 2
			// },
			// {
			//     id: 4,
			//     label: 'Saas',
			//     link: 'javascript: void(0);',
			//     parentId: 2
			// },
			// {
			//     id: 5,
			//     label: 'Crypto',
			//     link: 'javascript: void(0);',
			//     parentId: 2
			// },
		],
	},
	{
		id: 6,
		label: 'Category',
		icon: 'bx bx-collection',
		link: '/category',
		subItems: [],
	},
	{
		id: 7,
		label: 'List',
		icon: 'bx bx-layer',
		link: '/show',
		subItems: [],
	},
	{
		id: 8,
		label: 'Bracters',
		icon: 'dripicons-lightbulb',
		link: '/bracters',
		subItems: [],
	},
	{
		id: 9,
		label: 'Challengers',
		icon: 'dripicons-heart',
		subItems: [
			{
				id: 10,
				label: 'List',
				link: '/challengers',
				parentId: 9,
			},
			{
				id: 11,
				label: 'Deleted Requested',
				link: '/challengers/deleted',
				parentId: 9,
			},
			{
				id: 12,
				label: 'Challenger Program',
				link: '/challengers/program',
				parentId: 9,
			},
		],
	},
	{
		id: 13,
		label: 'Upload',
		icon: 'bx bxs-hot',
		subItems: [
			{
				id: 14,
				label: 'List',
				link: '/upload',
				parentId: 13,
			},
			{
				id: 15,
				label: 'Deleted Requested',
				link: '/upload/deleted',
				parentId: 13,
			},
			{
				id: 16,
				label: 'Challenger Program',
				link: '/upload/program',
				parentId: 13,
			},
		],
	},
	{
		id: 17,
		label: 'Profit Payment',
		icon: 'bx bx-won',
		subItems: [
			{
				id: 18,
				label: 'List',
				link: '/profitpayment',
				parentId: 17,
			},
			{
				id: 19,
				label: 'Completed',
				link: '/profitpayment/complete',
				parentId: 17,
			},
			{
				id: 20,
				label: 'Deleted',
				link: '/profitpayment/deleted',
				parentId: 17,
			},
		],
	},
	{
		id: 21,
		label: 'Customer Manage',
		icon: 'bx bx-user',
		subItems: [
			{
				id: 22,
				label: 'Live Chat',
				link: '/customer',
				parentId: 21,
			},
			{
				id: 23,
				label: 'Chat Detail',
				link: '/customer/chat-detail',
				parentId: 21,
			},
			{
				id: 24,
				label: "Inquiry's Details",
				link: '/customer/inquiry',
				parentId: 21,
			},
			{
				id: 24,
				label: 'Problem',
				link: '/customer/problems',
				parentId: 21,
			},
		],
	},
	{
		id: 25,
		label: 'Message',
		link: '/message',
		icon: 'bx bx-message-square-dots',
	},
	{
		id: 26,
		label: 'Systems Manage',
		icon: 'bx bx-spray-can',
		subItems: [
			{
				id: 27,
				label: 'Message Manage',
				link: '/system/message',
				parentId: 26,
			},
			{
				id: 28,
				label: 'Membership Manage',
				link: '/system/membership',
				parentId: 26,
			},
			{
				id: 29,
				label: 'Employee Manage',
				link: '/system/employee',
				parentId: 26,
			},
			{
				id: 30,
				label: 'Footer Manage',
				link: '/system/footer',
				parentId: 26,
				subItems: [
					{
						id: 31,
						label: 'Terms & Conditions',
						link: '/system/footer/terms&conditions',
						parentId: 30,
					},
					{
						id: 32,
						label: 'Privacy Policy',
						link: '/system/footer/privacy',
						parentId: 30,
					},
					{
						id: 33,
						label: 'Video Manage',
						link: '/system/footer/video-manage',
						parentId: 30,
					},
				],
			},
			{
				id: 34,
				label: 'Access Manage',
				link: '/system/access',
				parentId: 26,
			},
		],
	},
	{
		id: 35,
		label: 'Sample Manage',
		icon: 'bx bx-comment-edit',
		subItems: [
			{
				id: 36,
				label: 'Upload Sample',
				link: '/sample/upload',
				parentId: 35,
			},
			{
				id: 37,
				label: 'Production Support Sample',
				link: '/sample/production-support',
				parentId: 35,
			},
			{
				id: 38,
				label: 'Self-Production Sample',
				link: '/sample/self-production',
				parentId: 35,
			},
			{
				id: 39,
				label: 'Main Video Sample',
				link: '/sample/main-video',
				parentId: 35,
			},
		],
	},
	// {
	//     id: 6,
	//     isLayout: true
	// },
	// {
	//     id: 7,
	//     label: 'Apps',
	//     isTitle: true
	// },
	// {
	//     id: 8,
	//     label: 'Calendar',
	//     icon: 'bx-calendar',
	//     link: 'javascript: void(0);',
	// },
	// {
	//     id: 9,
	//     label: 'Chat',
	//     icon: 'bx-chat',
	//     link: 'javascript: void(0);',
	//     badge: {
	//         variant: 'success',
	//         text: 'New',
	//     },
	// },
	// {
	//     id: 10,
	//     label: 'Ecommerce',
	//     icon: 'bx-store',
	//     subItems: [
	//         {
	//             id: 11,
	//             label: 'Products',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//         {
	//             id: 12,
	//             label: 'Product Detail',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//         {
	//             id: 13,
	//             label: 'Orders',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//         {
	//             id: 14,
	//             label: 'Customers',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//         {
	//             id: 15,
	//             label: 'Cart',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//         {
	//             id: 16,
	//             label: 'Checkout',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//         {
	//             id: 17,
	//             label: 'Shops',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//         {
	//             id: 18,
	//             label: 'Add Product',
	//             link: 'javascript: void(0);',
	//             parentId: 10
	//         },
	//     ]
	// },
	// {
	//     id: 19,
	//     label: 'Crypto',
	//     icon: 'bx-bitcoin',
	//     subItems: [
	//         {
	//             id: 20,
	//             label: 'Wallet',
	//             link: 'javascript: void(0);',
	//             parentId: 19
	//         },
	//         {
	//             id: 21,
	//             label: 'Buy/Sell',
	//             link: 'javascript: void(0);',
	//             parentId: 19
	//         },
	//         {
	//             id: 22,
	//             label: 'Exchange',
	//             link: 'javascript: void(0);',
	//             parentId: 19
	//         },
	//         {
	//             id: 23,
	//             label: 'Lending',
	//             link: 'javascript: void(0);',
	//             parentId: 19
	//         },
	//         {
	//             id: 24,
	//             label: 'Orders',
	//             link: 'javascript: void(0);',
	//             parentId: 19
	//         },
	//         {
	//             id: 25,
	//             label: 'KYC Application',
	//             link: 'javascript: void(0);',
	//             parentId: 19
	//         },
	//         {
	//             id: 26,
	//             label: 'ICO Landing',
	//             link: 'javascript: void(0);',
	//             parentId: 19
	//         }
	//     ]
	// },
	// {
	//     id: 27,
	//     label: 'Email',
	//     icon: 'bx-envelope',
	//     subItems: [
	//         {
	//             id: 28,
	//             label: 'Inbox',
	//             link: 'javascript: void(0);',
	//             parentId: 27
	//         },
	//         {
	//             id: 29,
	//             label: 'Read Email',
	//             link: 'javascript: void(0);',
	//             parentId: 27
	//         }
	//     ]
	// },
	// {
	//     id: 30,
	//     label: 'Invoices',
	//     icon: 'bx-receipt',
	//     subItems: [
	//         {
	//             id: 31,
	//             label: 'Invoice List',
	//             link: 'javascript: void(0);',
	//             parentId: 30
	//         },
	//         {
	//             id: 32,
	//             label: 'Invoice Detail',
	//             link: 'javascript: void(0);',
	//             parentId: 30
	//         },
	//     ]
	// },
	// {
	//     id: 33,
	//     label: 'Projects',
	//     icon: 'bx-briefcase-alt-2',
	//     subItems: [
	//         {
	//             id: 34,
	//             label: 'Projects Grid',
	//             link: 'javascript: void(0);',
	//             parentId: 33
	//         },
	//         {
	//             id: 35,
	//             label: 'Projects List',
	//             link: 'javascript: void(0);',
	//             parentId: 33
	//         },
	//         {
	//             id: 36,
	//             label: 'Project Overview',
	//             link: 'javascript: void(0);',
	//             parentId: 33
	//         },
	//         {
	//             id: 37,
	//             label: 'Create New',
	//             link: 'javascript: void(0);',
	//             parentId: 33
	//         }
	//     ]
	// },
	// {
	//     id: 38,
	//     label: 'Tasks',
	//     icon: 'bx-task',
	//     subItems: [
	//         {
	//             id: 39,
	//             label: 'Task List',
	//             link: 'javascript: void(0);',
	//             parentId: 38
	//         },
	//         {
	//             id: 40,
	//             label: 'Kanban Board',
	//             link: 'javascript: void(0);',
	//             parentId: 38
	//         },
	//         {
	//             id: 41,
	//             label: 'Create Task',
	//             link: 'javascript: void(0);',
	//             parentId: 38
	//         }
	//     ]
	// },
	// {
	//     id: 42,
	//     label: 'Contacts',
	//     icon: 'bxs-user-detail',
	//     subItems: [
	//         {
	//             id: 43,
	//             label: 'User Grid',
	//             link: 'javascript: void(0);',
	//             parentId: 42
	//         },
	//         {
	//             id: 44,
	//             label: 'User List',
	//             link: 'javascript: void(0);',
	//             parentId: 42
	//         },
	//         {
	//             id: 45,
	//             label: 'Profile',
	//             link: 'javascript: void(0);',
	//             parentId: 42
	//         }
	//     ]
	// },
	// {
	//     id: 46,
	//     label: 'Pages',
	//     isTitle: true
	// },
	// {
	//     id: 47,
	//     label: 'Authentication',
	//     icon: 'bx-user-circle',
	//     subItems: [
	//         {
	//             id: 48,
	//             label: 'Login',
	//             link: 'javascript: void(0);',
	//             parentId: 47
	//         },
	//         {
	//             id: 49,
	//             label: 'Register',
	//             link: 'javascript: void(0);',
	//             parentId: 47
	//         },
	//         {
	//             id: 50,
	//             label: 'Recover Password',
	//             link: 'javascript: void(0);',
	//             parentId: 47
	//         },
	//         {
	//             id: 51,
	//             label: 'Lock Screen',
	//             link: 'javascript: void(0);',
	//             parentId: 47
	//         }
	//     ]
	// },
	// {
	//     id: 52,
	//     label: 'Utility',
	//     icon: 'bx-file',
	//     subItems: [
	//         {
	//             id: 53,
	//             label: 'Starter Page',
	//             link: 'javascript: void(0);',
	//             parentId: 52
	//         },
	//         {
	//             id: 54,
	//             label: 'Maintenance',
	//             link: 'javascript: void(0);',
	//             parentId: 52
	//         },
	//         {
	//             id: 55,
	//             label: 'Timeline',
	//             link: 'javascript: void(0);',
	//             parentId: 52
	//         },
	//         {
	//             id: 56,
	//             label: 'FAQs',
	//             link: 'javascript: void(0);',
	//             parentId: 52
	//         },
	//         {
	//             id: 57,
	//             label: 'Pricing',
	//             link: 'javascript: void(0);',
	//             parentId: 52
	//         },
	//         {
	//             id: 58,
	//             label: 'Error 404',
	//             link: 'javascript: void(0);',
	//             parentId: 52
	//         },
	//         {
	//             id: 59,
	//             label: 'Error 500',
	//             link: 'javascript: void(0);',
	//             parentId: 52
	//         },
	//     ]
	// },
	// {
	//     id: 60,
	//     label: 'Components',
	//     isTitle: true
	// },
	// {
	//     id: 61,
	//     label: 'UI Elements',
	//     icon: 'bx-tone',
	//     subItems: [
	//         {
	//             id: 62,
	//             label: 'Alerts',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 63,
	//             label: 'Buttons',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 64,
	//             label: 'Cards',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 65,
	//             label: 'Carousel',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 66,
	//             label: 'Dropdowns',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 67,
	//             label: 'Grid',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 68,
	//             label: 'Images',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 69,
	//             label: 'Modals',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 70,
	//             label: 'Range Slider',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 71,
	//             label: 'Progress Bars',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 72,
	//             label: 'Sweet-Alert',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 73,
	//             label: 'Tabs & Accordions',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 74,
	//             label: 'Typography',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 75,
	//             label: 'Video',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 76,
	//             label: 'General',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 77,
	//             label: 'Colors',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//         {
	//             id: 78,
	//             label: 'Image Cropper',
	//             link: 'javascript: void(0);',
	//             parentId: 61
	//         },
	//     ]
	// },
	// {
	//     id: 79,
	//     label: 'Forms',
	//     icon: 'bxs-eraser',
	//     subItems: [
	//         {
	//             id: 80,
	//             label: 'Form Elements',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         },
	//         {
	//             id: 81,
	//             label: 'Form Validation',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         },
	//         {
	//             id: 82,
	//             label: 'Form Advanced',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         },
	//         {
	//             id: 83,
	//             label: 'Form Editors',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         },
	//         {
	//             id: 84,
	//             label: 'Form File Upload',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         },
	//         {
	//             id: 85,
	//             label: 'Form Repeater',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         },
	//         {
	//             id: 86,
	//             label: 'Form Wizard',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         },
	//         {
	//             id: 87,
	//             label: 'Form Mask',
	//             link: 'javascript: void(0);',
	//             parentId: 79
	//         }
	//     ]
	// },
	// {
	//     id: 88,
	//     icon: 'bx-list-ul',
	//     label: 'Tables',
	//     subItems: [
	//         {
	//             id: 89,
	//             label: 'Basic Tables',
	//             link: 'javascript: void(0);',
	//             parentId: 88
	//         },
	//         {
	//             id: 90,
	//             label: 'Advanced Table',
	//             link: 'javascript: void(0);',
	//             parentId: 88
	//         }
	//     ]
	// },
	// {
	//     id: 91,
	//     icon: 'bxs-bar-chart-alt-2',
	//     label: 'Charts',
	//     subItems: [
	//         {
	//             id: 92,
	//             label: 'Apex charts',
	//             link: 'javascript: void(0);',
	//             parentId: 91
	//         },
	//         {
	//             id: 93,
	//             label: 'Chartjs Chart',
	//             link: 'javascript: void(0);',
	//             parentId: 91
	//         },
	//         {
	//             id: 94,
	//             label: 'Chartist Chart',
	//             link: 'javascript: void(0);',
	//             parentId: 91
	//         },
	//         {
	//             id: 95,
	//             label: 'E - Chart',
	//             link: 'javascript: void(0);',
	//             parentId: 91
	//         }
	//     ]
	// },
	// {
	//     id: 96,
	//     label: 'Icons',
	//     icon: 'bx-aperture',
	//     subItems: [
	//         {
	//             id: 97,
	//             label: 'Boxicons',
	//             link: 'javascript: void(0);',
	//             parentId: 96
	//         },
	//         {
	//             id: 98,
	//             label: 'Material Design',
	//             link: 'javascript: void(0);',
	//             parentId: 96
	//         },
	//         {
	//             id: 99,
	//             label: 'Dripicons',
	//             link: 'javascript: void(0);',
	//             parentId: 96
	//         },
	//         {
	//             id: 100,
	//             label: 'Font awesome',
	//             link: 'javascript: void(0);',
	//             parentId: 96
	//         },
	//     ]
	// },
	// {
	//     id: 101,
	//     label: 'Maps',
	//     icon: 'bx-map',
	//     subItems: [
	//         {
	//             id: 102,
	//             label: 'Google Maps',
	//             link: 'javascript: void(0);',
	//             parentId: 101
	//         }
	//     ]
	// },
	// {
	//     id: 103,
	//     label: 'Multi Level',
	//     icon: 'bx-share-alt',
	//     subItems: [
	//         {
	//             id: 104,
	//             label: 'Level 1.1',
	//             link: 'javascript: void(0);',
	//             parentId: 103
	//         },
	//         {
	//             id: 105,
	//             label: 'Level 1.2',
	//             parentId: 103,
	//             subItems: [
	//                 {
	//                     id: 106,
	//                     label: 'Level 2.1',
	//                     link: 'javascript: void(0);',
	//                     parentId: 105,
	//                 },
	//                 {
	//                     id: 107,
	//                     label: 'Level 2.2',
	//                     link: 'javascript: void(0);',
	//                     parentId: 105,
	//                 }
	//             ]
	//         },
	//     ]
	// }
];
