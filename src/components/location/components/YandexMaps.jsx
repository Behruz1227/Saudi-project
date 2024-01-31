import { useState } from 'react';
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

const YandexMaps = () => {
    const [locate, setLocate] = useState([38.841605, 65.789979])
    const [zoom, setZoom] = useState(10)
    const apiKey = '28c3f859-1fa2-4b41-9df4-e371053dc79e';

    // zoom ni uzgartirish
    const handleZoomChange = (e) => setZoom(e.get('newZoom'))

    // turgan manzilni olish
    const myLocationClick = () => {
        if (1) {
            navigator.geolocation.getCurrentPosition(position => {
                // console.log(position.coords.latitude);
                // console.log(position.coords.longitude);
                let lat = position.coords.latitude
                let long = position.coords.longitude
                setLocate([lat, long]);
            })
        }
    }

    // click bulganda location olish
    const locationClick = (e) => {
        const coords = e.get('coords')
        setLocate(coords);
        // console.log(coords);
        const geoCodeUrl = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${apiKey}&geocode=${coords[1]},${coords[0]}`;

        fetch(geoCodeUrl)
            .then(response => response.json())
            .then(data => {
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
                onClick={myLocationClick}
                className='absolute right-1 bottom-80 text-green-400 border-2 shadow-lg 
                active:bg-green-500 active:text-white hover:text-green-600 duration-200 bg-white 
                rounded-full w-10 h-10'>
                <i className="fa-solid fa-location-crosshairs"></i>
            </button>
        </div>
    )
}

export default YandexMaps;