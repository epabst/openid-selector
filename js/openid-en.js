/*
	Simple OpenID Plugin
	http://code.google.com/p/openid-selector/
	
	This code is licensed under the New BSD License.
*/

var providers_large = {
	google : {
		name : 'Google',
		scheme : 'google_oauth2',
		// url : 'https://www.google.com/accounts/o8/id'
		url : null
	},
	yahoo : {
		name : 'Yahoo',
		scheme : 'yahoo',
		url : 'http://me.yahoo.com/'
	},
	facebook : {
		name : 'Facebook',
		scheme : 'facebook',
		// label : 'Enter your Facebook profile.',
		url : null
	},
	twitter : {
		name : 'Twitter',
		scheme : 'twitter',
		// label : 'Enter your Twitter account.',
		url : null
	},
	openid : {
		name : 'OpenID',
		scheme : 'openid',
		label : 'Enter your OpenID.',
		url : null
	}
};

var providers_small = {
	aol : {
		name : 'AOL',
		scheme : 'openid',
		label : 'Enter your AOL screenname.',
		url : 'http://openid.aol.com/{username}'
	},
	winliveid : {
		name : 'Live',
		scheme : 'live',
		// label : 'Enter your Windows Live username.',
		url : null
	},
	mailru : {
		name : 'MailRU',
		scheme : 'openid',
		// label : 'Your MailRU username',
		url : 'http://openid.mail.ru/'
	},
	verisign : {
		name : 'Verisign',
		scheme : 'openid',
		label : 'Your Verisign username',
		url : 'http://{username}.pip.verisignlabs.com/'
	},
	myopenid : {
		name : 'MyOpenID',
		scheme : 'openid',
		label : 'Enter your MyOpenID username.',
		url : 'http://{username}.myopenid.com/'
	},
	livejournal : {
		name : 'LiveJournal',
		scheme : 'openid',
		label : 'Enter your Livejournal username.',
		url : 'http://{username}.livejournal.com/'
	},
	flickr : {
		name : 'Flickr',        
		scheme : 'openid',
		label : 'Enter your Flickr username.',
		url : 'http://flickr.com/{username}/'
	},
	technorati : {
		name : 'Technorati',
		scheme : 'openid',
		label : 'Enter your Technorati username.',
		url : 'http://technorati.com/people/technorati/{username}/'
	},
	wordpress : {
		name : 'Wordpress',
		scheme : 'openid',
		label : 'Enter your Wordpress.com username.',
		url : 'http://{username}.wordpress.com/'
	},
	blogger : {
		name : 'Blogger',
		scheme : 'openid',
		label : 'Your Blogger account',
		url : 'http://{username}.blogspot.com/'
	},
	vidoop : {
		name : 'Vidoop',
		scheme : 'openid',
		label : 'Your Vidoop username',
		url : 'http://{username}.myvidoop.com/'
	},
	launchpad : {
		name : 'Launchpad',
		scheme : 'openid',
		label : 'Your Launchpad username',
		url : 'https://launchpad.net/~{username}'
	},
	/*
        github : {
		name : 'Github',
		scheme : 'github',
		// label : 'Your Github username',
		url : null
	},
	bitbucket : {
		name : 'Bitbucket',
		scheme : 'bitbucket',
		// label : 'Your BitBucket username',
		url : null
	},
        */
	claimid : {
		name : 'ClaimID',
		scheme : 'openid',
		label : 'Your ClaimID username',
		url : 'http://claimid.com/{username}'
	},
	clickpass : {
		name : 'ClickPass',
		scheme : 'openid',
		label : 'Enter your ClickPass username',
		url : 'http://clickpass.com/public/{username}'
	},
        /*
        yandex : {
                name : 'Яндекс',
		scheme : 'openid',
                url : 'http://openid.yandex.ru'
        },
        rambler : {
                name : 'Рамблер',
		scheme : 'openid',
                url : 'http://www.rambler.ru'
        },
        */
	google_profile : {
		name : 'Google Profile',
		scheme : 'openid',
		label : 'Enter your Google Profile username',
		url : 'http://www.google.com/profiles/{username}'
	}

};

openid.locale = 'en';
openid.sprite = 'en'; // reused in german& japan localization
openid.demo_text = 'In client demo mode. Normally would have submitted OpenID:';
openid.signin_text = 'Sign-In';
openid.image_title = 'log in with {provider}';
