import {number} from "prop-types";

export interface IVerifiedTrack{

    layout: number;
    type: string;
    key: number;
    title: string;
    subtitle: string;
    images: {
        background: string,
        coverart: string,
        coverarthq: string,
        joecolor: string
    }
    share: {
    subject: string,
        text: string,
        href: string,
        image: string,
        twitter: string,
        html: string,
        avatar: string,
        snapchat: string
},
    hub: {
    type: string,
        image: string,
        actions: [
        {
            name: string,
            type: string,
            id: string
        },
        {
            name: string,
            type: string,
            uri: string
        }
    ],
        options: [
        {
            caption: string,
            actions: [
                {
                    name: string,
                    type: string,
                    uri: string
                },
                {
                    name: string,
                    type: string,
                    uri: string
                }
            ],
            beacondata: {
                type: string,
                providername: string
            },
            image: string,
            type: string,
            listcaption: string,
            overflowimage: string,
            colouroverflowimage: false,
            providername: string;
        },
        {
            caption: string,
            actions: [
                {
                    type: string,
                    uri: string,
                }
            ],
            beacondata: {
                type: string,
                providername: string
            },
            image: string,
            type: string,
            listcaption: string,
            overflowimage: string,
            colouroverflowimage: false,
            providername: string
        }
    ],
        providers: [
        {
            caption: string,
            images: {
                overflow: string,
                default: string
            },
            actions: [
                {
                    name: string,
                    type: string,
                    uri: string
                }
            ],
            type: string
        },
        {
            caption: string,
            images: {
                overflow: string,
                default: string
            },
            actions: [
                {
                    name: string,
                    type: string,
                    uri: string
                }
            ],
            type: string
        }
    ],
        explicit: false,
        displayname: string
},
    url: string,
    artists: [
    {
        id: string,
        adamid: string
    }
],
    isrc: string,
    genres: {
    primary: string
},
    urlparams: {
    tracktitle: string,
        trackartist: string
},
    myshazam: {
    apple: {
        actions: [
            {
                name: string,
                type: string,
                uri: string
            }
        ]
    }
},
    albumadamid: string,
    sections: [
    {
        type: string,
        metapages: [
            {
                image: string,
                caption: string,
            },
            {
                image: string,
                caption: string
            }
        ],
        tabname: string,
        metadata: [
            {
                title: string,
                text: string
            },
            {
                title: string,
                text: string
            },
            {
                title: string,
                text: string
            }
        ]
    },
    {
        type: string,
        tabname: string,
        youtubeurl: {
            caption: string,
            image: {
                dimensions: {
                    width: 1280,
                    height: 720
                },
                url: string
            },
            actions: [
                {
                    name: string,
                    type: string,
                    share: {
                        subject: string,
                        text: string,
                        href: string,
                        image: string,
                        twitter: string,
                        html: string,
                        avatar: string,
                        snapchat: string
                    },
                    uri: string
                }
            ]
        }
    },
    {
        type: string,
        avatar: string,
        id: string,
        name: string,
        verified: false,
        actions: [
            {
                type: string,
                id: string
            },
            {
                type: string,
                id: string
            }
        ],
        tabname: string
    },
    {
        type: string,
        tabname: string
    }
]
}

