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
		subItems: [],
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
				link: '/challengers/list',
				parentId: 9,
			},
			{
				id: 11,
				label: 'Challenger Program',
				link: '/challengers/program',
				parentId: 9,
			},
			{
				id: 12,
				label: 'Deleted Requested',
				parentId: 9,
				subItems: [
					{
						id: 13,
						label: 'List',
						link: '/challengers/deleted/list',
						parentId: 12,
					},
					{
						id: 13,
						label: 'Program',
						link: '/challengers/deleted/program',
						parentId: 12,
					},
				],
			},
		],
	},
	{
		id: 14,
		label: 'Upload',
		icon: 'bx bxs-hot',
		subItems: [
			{
				id: 15,
				label: 'Status',
				link: '/upload/status',
				parentId: 14,
			},
			{
				id: 16,
				label: 'List',
				link: '/upload/list',
				parentId: 14,
			},
			{
				id: 17,
				label: 'Deleted Requested',
				link: '/upload/deleted',
				parentId: 14,
				subItems: [
					{
						id: 18,
						label: 'List',
						link: '/upload/deleted/list',
						parentId: 17,
					},
					{
						id: 19,
						label: 'Program',
						link: '/upload/deleted/program',
						parentId: 17,
					},
				],
			},
			// {
			//   id: 17,
			//   label: "Program",
			//   link: "/upload/program",
			//   parentId: 13,
			// },
		],
	},
	{
		id: 18,
		label: 'Profit Payment',
		icon: 'bx bx-won',
		subItems: [
			{
				id: 19,
				label: 'List',
				link: '/profitpayment/list',
				parentId: 18,
			},
			{
				id: 20,
				label: 'Completed',
				link: '/profitpayment/complete',
				parentId: 18,
			},
			{
				id: 21,
				label: 'Deleted',
				link: '/profitpayment/deleted',
				parentId: 18,
			},
			{
				id: 22,
				label: 'Viewing fee per min',
				link: '/profitpayment/viewingfeepermin',
				parentId: 18,
			},
		],
	},
	{
		id: 23,
		label: 'Customer Manage',
		icon: 'bx bx-user',
		subItems: [
			{
				id: 24,
				label: 'Live Chat',
				link: '/customer',
				parentId: 23,
			},
			{
				id: 25,
				label: 'Chat Detail',
				link: '/customer/chat-detail',
				parentId: 23,
			},
			{
				id: 26,
				label: "Inquiry's Details",
				link: '/customer/inquiry',
				parentId: 23,
			},
			{
				id: 27,
				label: 'Problem',
				link: '/customer/problems',
				parentId: 23,
			},
		],
	},
	{
		id: 28,
		label: 'Message',
		link: '/message',
		icon: 'bx bx-message-square-dots',
	},
	{
		id: 29,
		label: 'Systems Manage',
		icon: 'dripicons-gear',
		subItems: [
			{
				id: 30,
				label: 'Message Manage',
				link: '/system/message',
				parentId: 29,
			},
			{
				id: 31,
				label: 'Membership Manage',
				link: '/system/membership',
				parentId: 29,
			},
			{
				id: 32,
				label: 'Employee Manage',
				link: '/system/employee',
				parentId: 29,
			},
			{
				id: 33,
				label: 'Footer Manage',
				link: '/system/footer',
				parentId: 28,
				subItems: [
					{
						id: 34,
						label: 'Terms & Conditions',
						link: '/system/footer/terms&conditions',
						parentId: 33,
					},
					{
						id: 35,
						label: 'Privacy Policy',
						link: '/system/footer/privacy',
						parentId: 33,
					},
					{
						id: 36,
						label: 'Video Manage',
						link: '/system/footer/video-manage',
						parentId: 33,
					},
				],
			},
			{
				id: 37,
				label: 'Access Manage',
				link: '/system/access',
				parentId: 29,
			},
		],
	},
	{
		id: 38,
		label: 'Sample Manage',
		icon: 'dripicons-document-edit',
		subItems: [
			{
				id: 39,
				label: 'Upload Sample',
				link: '/sample/upload',
				parentId: 38,
			},
			{
				id: 40,
				label: 'Production Support Sample',
				link: '/sample/production-support',
				parentId: 38,
			},
			{
				id: 41,
				label: 'Self-Production Sample',
				link: '/sample/self-production',
				parentId: 38,
			},
			{
				id: 42,
				label: 'Main Video Sample',
				link: '/sample/main-video',
				parentId: 38,
			},
		],
	},
];
