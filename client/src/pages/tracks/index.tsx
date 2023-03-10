import React from 'react';
import Navbar from "@/components/Navbar";
import MainLayout from "@/layouts/MainLayout";
import TrackList from "@/components/TrackList";

const expample = [
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
    {
        name: "Velich",
        author: "Daun",
        lyrics: "я памятаю свое риднэ сило",
        cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
        audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
        listens: 0,
        _id: "640ad92a751c84e979e5d104",
    },
]

const Index = () => {
    return (
            <MainLayout>
                <TrackList tracks={expample}/>
            </MainLayout>


    );
};

export default Index;
