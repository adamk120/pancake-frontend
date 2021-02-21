import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: '!USD',
    icon: 'HomeIcon',
    href: '/',
    calloutClass: 'rainbow'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    calloutClass: 'locked'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
    calloutClass: 'locked'
  },
  {
    label: 'Stablecoin Minter',
    icon: 'TicketIcon',
    href: '/lottery',
    calloutClass: 'locked'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: '',
    calloutClass: 'locked',
  },  
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/notusdchat',
      },
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/zR4hxFQc',
      },      
      {
        label: 'Medium',
        href: 'https://medium.com/notusd',
      },
      {
        label: 'Blog',
        href: 'https://notusd.com/',
      },      
    ],
  }
]

export default config
