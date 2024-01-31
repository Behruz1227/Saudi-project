import { useState } from 'react';
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

const YandexMaps = () => {
    const [locate, setLocate] = useState([38.841605, 65.789979])
    const [zoom, setZoom] = useState(10)
    const apiKey = '28c3f859-1fa2-4b41-9df4-e371053dc79e';

    // zoom ni uzgartirish
    const handleZoomChange = (e) => setZoom(e.get('newZoom'))

    // turgan manzilni olish
    const getMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLocate([latitude, longitude]);
                    setZoom(10);
                },
                (error) => {
                    console.error('Geolocation error:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    // click bulganda location olish
    const locationClick = (e) => {
        const coords = e.get('coords')
        setLocate(coords);
        // console.log(coords[0], coords[1]);
        const geoCodeUrl = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${apiKey}&geocode=${coords[1]},${coords[0]}`;

        fetch(geoCodeUrl)
            .then(response => response.json())
            .then(data => {
                // aniq manzilni olish uchun
                const address = data.response.GeoObjectCollection.featureMember[0]
                    .GeoObject.metaDataProperty.GeocoderMetaData.text;
            })
            .catch(error => console.error('Xatolik yuz berdi:', error));
    }

    // color red qilish uchun ishlatilgan
    const placemarkStyle = { iconColor: '#ff0000', };

    return (
        <div className="w-full min-h-screen overflow-hidden relative">
            <YMaps query={{ apikey: '28c3f859-1fa2-4b41-9df4-e371053dc79e' }}>
                <Map
                    defaultState={{ center: locate, zoom: zoom }}
                    width='100%'
                    height='100vh'
                    onBoundsChange={handleZoomChange}
                    onClick={locationClick}
                >
                    <Placemark geometry={locate} options={placemarkStyle} />
                    <ZoomControl options={{ float: 'right', position: { bottom: 100, right: 10, } }} />
                </Map>
            </YMaps>
            <button
                onClick={getMyLocation}
                className='absolute right-1 bottom-80 text-green-400 border-2 shadow-lg 
                active:bg-green-500 active:text-white hover:text-green-600 duration-200 bg-white 
                rounded-full w-10 h-10'>
                <i className="fa-solid fa-location-crosshairs"></i>
            </button>
        </div>
    )
}

export default YandexMaps;