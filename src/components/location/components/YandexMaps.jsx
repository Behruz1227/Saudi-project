import { useState } from 'react';
import {
    Map,
    Placemark,
    YMaps,
    ZoomControl,
    FullscreenControl,
    RouteButton,
    RouteEditor,
    SearchControl,
} from "react-yandex-maps";

const YandexMaps = () => {
    const [locate, setLocate] = useState([38.841605, 65.789979]);
    const [zoom, setZoom] = useState(10);
    const [addressLoc, setAddressLoc] = useState();
    const [isHovered, setHovered] = useState(false);
    const apiKey = '28c3f859-1fa2-4b41-9df4-e371053dc79e';

    // zoom ni uzgartirish
    const handleZoomChange = (e) => setZoom(e.get('newZoom'))
    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

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
        const geoCodeUrl = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${apiKey}&geocode=${coords[1]},${coords[0]}`;

        fetch(geoCodeUrl)
            .then(response => response.json())
            .then(data => setAddressLoc(data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text))
            .catch(() => console.error('Xatolik yuz berdi!'));
    }

    const placemarkOptions = { iconColor: isHovered ? 'red' : 'blue', preset: 'islands#circleDotIcon', };

    return (
        <div className="w-full min-h-screen relative">
            <YMaps query={{ apikey: '28c3f859-1fa2-4b41-9df4-e371053dc79e' }}>
                <Map
                    defaultState={{ center: locate, zoom: zoom }}
                    width='100%'
                    height='100vh'
                    onBoundsChange={handleZoomChange}
                    onClick={locationClick}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                >
                    <Placemark
                        geometry={locate}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        properties={{ balloonContent: addressLoc, }}
                        options={placemarkOptions}
                        modules={['geoObject.addon.balloon']}
                    />
                    <ZoomControl
                        options={{ position: { bottom: 90, right: 10, } }}
                    />
                    <FullscreenControl
                        data={{ title: 'Full screen map' }}
                        options={{ position: { bottom: 310, right: 10, } }}
                    />
                    <RouteButton
                        options={{
                            position: { top: 30, right: 10, },
                            selectOnClick: false,
                            types: {
                                auto: true, // Avtomobil yo'nalishi
                                masstransit: true, // Transport yo'nalishi
                                pedestrian: true, // Piyoda yo'nalishi
                                bicycle: true, // Velosiped yo'nalishi
                                taxi: true, // Taksi yo'nalishi
                                multiroute: true, // Ko'p yo'nalishli yo'nalish
                                masstransitSuburban: true, // Transport yo'nalishi (shahar tashqarisida)
                                masstransitCity: true, // Transport yo'nalishi (shahar ichida)
                            }
                        }}
                    />
                    <RouteEditor
                        options={{
                            position: { top: 30, right: 90 },
                            editWayPoints: true, // Yo'lning boshlanish joyidan boshlab chizishni ruxsat etish
                            editViaPoints: true, // Yo'l segmentlarini tahrirlashni ruxsat etish
                            editSegmentControl: true, // Yo'l turini o'zgartirishni ruxsat etish
                            addWayPoints: true, // Yo'l yaratish vaqtida yangi joylarni qo'shishni ruxsat etish
                            dragWayPoints: true, // Yo'lning boshlanish va tugash joylarini o'zgartirishni ruxsat etish
                            reverseWayPoints: true, // Yo'lning harakatini boshqarishni ruxsat etish
                            reverseViaPoints: true, // Yo'l qadamini birinchi qadamga qaytarishni ruxsat etish
                            showInfoInBalloon: true, // Harakat qilayotganda yo'lga ma'lumot olishni ruxsat etish
                            zIndex: 1000, // Yo'lning bosish va tugash joylari bilan asosiy chiziqni yo'q qilish                            
                        }}
                    />
                    {/* <SearchControl
                        options={{ position: { top: 30, left: 10 } }}
                        state={{ expanded: true }}
                    /> */}
                </Map>
            </YMaps>
            <button
                onClick={getMyLocation}
                className='absolute right-1 bottom-[22rem] text-green-400 border-2 shadow-lg active:bg-green-500 
                active:text-white hover:text-green-600 duration-200 bg-white rounded-full w-10 h-10'>
                <i className="fa-solid fa-location-crosshairs"></i>
            </button>
        </div>
    )
}

export default YandexMaps;