import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { distanceCards } from "../../data/location";
import SectionHeading from "../common/SectionHeading";

export default function DistanceCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Location" title="Everything Within Reach" />

          <div className="flex gap-3">
            <button
              ref={prevRef}
              aria-label="Previous"
              className="grid h-12 w-12 place-items-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next"
              className="grid h-12 w-12 place-items-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="container-luxe mt-12"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.15}
          grabCursor
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-14"
        >
          {distanceCards.map((card, i) => (
            <SwiperSlide key={`${card.name}-${i}`}>
              <article className="group relative h-[420px] overflow-hidden rounded-4xl">
                <img
                  src={card.image}
                  alt={card.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-baseline gap-1.5 text-white">
                    <span className="font-serif text-6xl font-light leading-none">
                      {card.distance}
                    </span>
                    <span className="text-sm font-light text-gold-200">km</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wide3 text-white/70">away</p>
                  <div className="mt-4 h-px w-10 bg-gold/60" />
                  <p className="mt-3 font-serif text-lg leading-tight text-white">{card.name}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide3 text-gold-200">
                    {card.tag}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
