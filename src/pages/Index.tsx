import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'concert' | 'performance' | 'camp';
  description: string;
  price?: string;
  capacity?: string;
}

const EventCard = ({ event }: { event: Event }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const typeColors = {
    concert: 'bg-hiphop-blue',
    performance: 'bg-hiphop-purple', 
    camp: 'bg-gradient-to-r from-hiphop-blue to-hiphop-purple'
  };

  const typeIcons = {
    concert: 'Music',
    performance: 'Users',
    camp: 'Mountain'
  };

  return (
    <div className="group perspective-1000 h-80">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className={`absolute inset-0 w-full h-full backface-hidden ${typeColors[event.type]} transform skew-x-[-12deg] origin-bottom-left shadow-lg hover:shadow-xl transition-shadow duration-300`}>
          <div className="h-full flex flex-col justify-between p-6 text-white transform skew-x-[12deg]">
            <div className="flex justify-between items-start">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                <Icon name={typeIcons[event.type]} size={16} className="mr-1" />
                {event.type === 'concert' ? 'Концерт' : event.type === 'performance' ? 'Выступление' : 'Лагерь'}
              </Badge>
              <Icon name="Calendar" size={20} className="text-white/80" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2 leading-tight">{event.title}</h3>
              <div className="space-y-1 text-white/90">
                <div className="flex items-center">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-white/70 text-right">
              Нажми для подробностей →
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black transform skew-x-[-12deg] origin-bottom-left shadow-lg`}>
          <div className="h-full flex flex-col justify-between p-6 text-white transform skew-x-[12deg]">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <Icon name="ArrowLeft" size={20} className="text-white/60" />
              </div>
              
              <div className="space-y-3 text-sm">
                <p className="text-white/90 leading-relaxed">{event.description}</p>
                
                {event.price && (
                  <div className="flex items-center">
                    <Icon name="CreditCard" size={16} className="mr-2 text-hiphop-purple" />
                    <span>Цена: {event.price}</span>
                  </div>
                )}
                
                {event.capacity && (
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-2 text-hiphop-blue" />
                    <span>Мест: {event.capacity}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Button className="w-full bg-hiphop-purple hover:bg-hiphop-purple/80 text-white">
                <Icon name="Ticket" size={16} className="mr-2" />
                Купить билет
              </Button>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                <Icon name="Share2" size={16} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Hip-Hop Battle Night",
      date: "25 июля 2025",
      time: "20:00",
      location: "Клуб PRAVDA",
      type: "concert",
      description: "Грандиозная битва лучших танцоров города! Жаркие баттлы, крутые призы и незабываемая атмосфера. Приходи и стань свидетелем настоящего искусства хип-хопа!",
      price: "1500₽",
      capacity: "200"
    },
    {
      id: 2,
      title: "Street Dance Show",
      date: "30 июля 2025", 
      time: "19:30",
      location: "ДК Молодёжный",
      type: "performance",
      description: "Авторское шоу с участием лучших танцоров России. Уникальная хореография, живая музыка и захватывающие спецэффекты.",
      price: "2000₽",
      capacity: "500"
    },
    {
      id: 3,
      title: "Hip-Hop Summer Camp",
      date: "5-12 августа",
      time: "10:00-18:00",
      location: "База отдыха 'Ритм'",
      type: "camp",
      description: "Недельный интенсив для всех уровней подготовки. Мастер-классы, баттлы, новые друзья и море позитива в окружении природы.",
      price: "15000₽",
      capacity: "50"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hiphop-purple/20 via-transparent to-hiphop-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-hiphop-purple to-hiphop-blue rounded-full">
                <Icon name="Music" size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-hiphop-purple via-hiphop-blue to-hiphop-purple bg-clip-text text-transparent">
              HIP-HOP DANCER
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Окунись в мир уличного танца. Концерты, выступления и мастер-классы 
              от профессионального танцора
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ближайшие события</h2>
          <p className="text-xl text-white/70">Календарь концертов и выступлений</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-white/10 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Готов присоединиться?</h3>
          <p className="text-lg text-white/70 mb-8">
            Подписывайся на обновления и не пропускай самые горячие события
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-hiphop-purple hover:bg-hiphop-purple/80">
              <Icon name="Bell" size={20} className="mr-2" />
              Подписаться на уведомления
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Icon name="Instagram" size={20} className="mr-2" />
              Следить в Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;