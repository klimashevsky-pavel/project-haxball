export interface INavigationTabConfig  {
    name: string;
    route: string;
}

export const NavigationTabConfig: INavigationTabConfig[] = [
    {
        name: 'Home',
        route: '/',
    },
    {
        name: 'Scoreboard',
        route: '/scoreboard',
    },
    {
        name: 'Play',
        route: '/play',
    },
    {
        name: 'About',
        route: '/about',
    },
];
