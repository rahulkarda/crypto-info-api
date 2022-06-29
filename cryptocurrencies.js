const cryptocurrencies = [
	{
		name: 'Bitcoin',
		url: 'https://bitcoin.org/en/',
		description: 'Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer Bitcoin network.',
		explorer: 'https://btcscan.org/',
		ticker: 'BTC',
		keywords: ['bitcoin', 'btc', 'coin', 'decentralized', 'digital currency', 'cryptocurrency', 'first cryptocurrency', 'first crypto', 'open source', 'crypto asset'],
	},
	{
		name: 'Ethereum',
		url: 'https://ethereum.org/en/',
		description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality.',
		explorer: 'https://etherscan.io/',
		ticker: 'ETH',
		keywords: ['ethereum', 'eth', 'token', 'decentralized', 'smart contracts', 'cryptocurrency', 'open source', 'blockchain' , 'nft'],
	},
	{
		name: 'Tether',
		url: 'https://tether.to/en/',
		description: 'Tether is a stablecoin cryptocurrency that is hosted on the Ethereum and Bitcoin blockchains.',
		explorer: 'https://usdt.tokenview.com/',
		ticker: 'USDT',
		keywords: ['tether', 'usdt', 'stable coin', 'token', 'cryptocurrency', 'blockchain', 'stable', 'dollar'],
	},
	{
		name: 'USD Coin',
		url: 'https://www.circle.com/en/usdc',
		description: 'USD Coin is a digital stablecoin that is pegged to the United States dollar.',
		explorer: 'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		ticker: 'USDC',
		keywords: ['usd coin', 'usdc', 'stable coin', 'token', 'cryptocurrency', 'blockchain', 'stable', 'dollar'],
	},
	{
		name: 'Binance Coin',
		url: 'https://www.binance.com/en/bnb',
		description: 'Binance coin is the cryptocurrency coin that powers the BNB Chain ecosystem.',
		explorer: 'https://bscscan.com/',
		ticker: 'BNB',
		keywords: ['binance coin', 'bnb', 'coin', 'cryptocurrency', 'blockchain'],
	},
	{
		name: 'Cardano',
		url: 'https://cardano.org/',
		description: 'Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods.',
		explorer: 'https://cardanoscan.io/',
		ticker: 'ADA',
		keywords: ['cardano', 'ada', 'coin', 'smart contracts', 'cryptocurrency', 'blockchain','open source', 'nft'],
	},
	{
		name: 'Ripple',
		url: 'https://ripple.com/',
		description: 'XRP is the native cryptocurrency of XRP Ledger, which is an open-source, public blockchain designed to facilitate faster and cheaper payments.',
		explorer: 'https://xrpscan.com/',
		ticker: 'XRP',
		keywords: ['ripple', 'xrp', 'coin', 'cryptocurrency', 'blockchain','open source'],
	},
	{
		name: 'Solana',
		url: 'https://solana.com/',
		description: 'Solana is a public blockchain platform with smart contract functionality. Its native cryptocurrency is SOL.',
		explorer: 'https://explorer.solana.com/',
		ticker: 'SOL',
		keywords: ['solana', 'sol', 'coin', 'smart contracts', 'cryptocurrency', 'blockchain', 'open source', 'nft'],
	},
	{
		name: 'Doge',
		url: 'https://dogecoin.com/',
		description: 'Dogecoin is a meme cryptocurrency with the internet-famous Shiba Inu canine breed as a mascot.',
		explorer: 'https://dogechain.info/',
		ticker: 'DOGE',
		keywords: ['doge', 'shiba', 'meme coin', 'meme', 'coin', 'cryptocurrency', 'blockchain', 'open source', 'nft'],
	},
	{
		name: 'OxygenX',
		url: 'https://oxygenx.live',
		description: 'OxygenX is a decentralized open source blockchain which provides ownership of NFTs with its native token ogx.',
		explorer: 'https://oxygenx.info/',
		ticker: 'OGX',
		keywords: ['oxygenx', 'ogx', 'coin', 'cryptocurrency', 'blockchain', 'open source', 'nft'],
	},

	// 	Resource Format - please follow the styling below.
	// 	{
	// 		name: '',
	// 		url: '',
	//		description: '',
	//		explorer: '',
	//		ticker: '',
	// 		keywords: ['']
	// 	},
];

exports.cryptocurrencies = cryptocurrencies;