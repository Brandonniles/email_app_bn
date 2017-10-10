var gmailApp = {
	name: 'Gmail',
	mailboxes: {
		inbox: [
			{
				primary: [],
				social: [], 
				Promotions: []
			}
		],
		starred: [
			{
				from: 'Brandon Matthews',
				first15Characters: 'Welcome info- -- Brandon',
				attatchemt: true,
				date: 'Aug 30'
			},
			{
				from: 'Cole',
				first15Characters: 'Future student trying to',
				attatchemt: false,
				date: 'Aug 16'
			},
			{
				from: 'Raleigh-Durham German Meetup',
				first15Characters: 'Meetup details changed: O',
				attatchemt: false,
				date: 'May 17'
			},
			{
				from: 'Pat Dawson',
				first15Characters: 'All MADHouse Clinic',
				attatchemt: true,
				date: 'Mar 7'
			}
		],
		important: [
			{
				from: 'Mint',
				first15Characters: 'Your weekly summar',
				attatchemt: false,
				date: 'Oct 7'
			},
			{
				from: ['Richard', 'Tiffanie'],
				first15Characters: 'Electric Bicycle City',
				attatchemt: false,
				date: 'OCt 6'
			}
		],
		sentMail: [
			{
				to: 'lolive',
				first15Characters: 'github name - username br',
				attatchemt: false,
				date: 'Oct 3'
			}
		],
		drafts: [],
		spam: []
	},
	chatList: {
		contacts: [
			{
				name: 'Oliver Niles',
				lastMessage: 'Thanks',
			},
			{
				name: ['Travis', 'Shon', 'Tyler'],
				lastMessage: {Shon: 'Anywhoozies'}
			},
			{
				name: 'Shon Niles',
				lastMessage: '📹 You were in a video chat'
			},
			{
				name: 'Travis Niles',
				lastMessage: 'I\'ll call you in a few...'
			},
			{
				name: 'FAMEREEE💜',
				lastMessage: 'Yup'
			},
			{
				name: 'Tyler Niles',
				lastMessage: '😂'
			},
			{
				name: 'Ashley Peters',
				lastMessage: '✉ Invitation sent'
			}

		]

}
};
// code to address emailApp


// get a list of inbox name
// for (var i = 0; i <= gmailApp.chatList.contacts.length - 1; i++) {
// 	console.log(gmailApp.chatList.contacts[i].name);
// }

//get a list of emails
// for (var i = 0; i <= gmailApp.mailboxes.starred.length - 1; i++) {
// 	console.log(gmailApp.mailboxes.starred[i]);
// }

//get the text of the second email in the starred list
console.log(gmailApp.mailboxes.starred[1].first15Characters);

//mark an email as sent
gmailApp.mailboxes.sentMail[0]['sent'] = true;
console.log(gmailApp.mailboxes.sentMail[0])














