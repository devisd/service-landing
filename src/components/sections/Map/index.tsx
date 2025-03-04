import React from 'react';

interface MapProps {
    address?: string;
    latitude?: number;
    longitude?: number;
}

const Map: React.FC<MapProps> = ({
    address = 'Адрес сервисного центра',
    latitude = 55.755826, // Default coordinates (Moscow)
    longitude = 37.6173
}) => {
    return (
        <section id="map" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-8">Наше местоположение</h3>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 w-full">
                        {/* You can replace this with Google Maps or another map provider */}
                        <iframe
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}&center=${latitude},${longitude}&zoom=15`}
                            title="Карта расположения сервисного центра"
                            className="w-full h-[400px] border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="p-6">
                        <p className="font-medium text-gray-700 mb-2">
                            <span className="font-bold">Наш адрес:</span> {address}
                        </p>
                        <p className="text-gray-600">
                            Приходите к нам в сервисный центр, мы всегда рады помочь вам с ремонтом вашей техники!
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center text-gray-600">
                    <p>Если у вас возникли вопросы о том, как до нас добраться, позвоните нам</p>
                </div>
            </div>
        </section>
    );
};

export default Map; 