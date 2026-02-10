import { useParams, Link, useSearchParams } from "react-router-dom";
import { tours, WHATSAPP_NUMBER_E164 } from "../data/travelData";
import { useEffect, useMemo, useState } from "react";
import {
  Clock,
  MapPin,
  Star,
  Check,
  X,
  Calendar,
  Info,
  Download,
  MessageCircle,
  Languages,
  ChevronDown,
} from "lucide-react";

// ────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────

type Language = "en" | "si";

interface BilingualText {
  en: string;
  si: string;
}

interface BilingualArray {
  en: string[];
  si: string[];
}

interface TourItem {
  day: number;
  title: BilingualText;
  description: BilingualText;
}

interface PriceOption {
  label: BilingualText;
  price: number;
}

interface Tour {
  id: string;
  title: BilingualText;
  destination: BilingualText;
  country: string;
  duration: BilingualText;
  price?: number;
  priceOptions?: PriceOption[];
  image: string;
  brochure?: string;
  description: BilingualText;
  highlights: BilingualArray;
  includes: BilingualArray;
  excludes: BilingualArray;
  importantNotes: BilingualArray;
  itinerary?: TourItem[];              // ← made optional
  departures: string[];
  category: string;
  rating: number;
  featured: boolean;
}

interface Translations {
  highlights: string;
  itinerary: string;
  included: string;
  excluded: string;
  notes: string;
  dates: string;
  info: string;
  priceStart: string;
  total: string;
  travellers: string;
  selectDate: string;
  brochure: string;
  book: string;
  back: string;
  toggle: string;
}

// ────────────────────────────────────────────────
// Read More Component
// ────────────────────────────────────────────────

interface ReadMoreProps {
  text: string;
  lines?: number;
}

function ReadMore({ text, lines = 3 }: ReadMoreProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p
        className={
          open
            ? "text-gray-600 leading-relaxed"
            : `text-gray-600 leading-relaxed line-clamp-${lines}`
        }
      >
        {text}
      </p>
      {text.length > 120 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
        >
          {open ? "Show less" : "Read more"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────

export default function TourDetails() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialLang = searchParams.get("lang") === "si" ? "si" : "en";
  const [lang, setLang] = useState<Language>(initialLang);

  // Removed type predicate → avoids assignability error
  const tour = useMemo(() => tours.find((t) => t.id === id), [id]);

  const [travelers, setTravelers] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    searchParams.set("lang", lang);
    setSearchParams(searchParams, { replace: true });
  }, [lang, searchParams, setSearchParams]);

  useEffect(() => {
    if (tour?.departures?.length) {
      setSelectedDate(tour.departures[0]);
    }
  }, [tour]);

  const formatLKR = (value: number) =>
    new Intl.NumberFormat("en-LK", { style: "currency", currency: "LKR" }).format(value);

  const t = useMemo<Record<Language, Translations>>(
    () => ({
      en: {
        highlights: "Highlights",
        itinerary: "Itinerary",
        included: "Included",
        excluded: "Not included",
        notes: "Important notes",
        dates: "Departure dates (2026)",
        info: "Tour information",
        priceStart: "Starting price (per person)",
        total: "Total (estimated)",
        travellers: "Travelers",
        selectDate: "Select departure date",
        brochure: "Download brochure (PDF)",
        book: "Book via WhatsApp",
        back: "Back",
        toggle: "සිංහල",
      },
      si: {
        highlights: "විශේෂතා",
        itinerary: "ගමන් මාර්ගය",
        included: "ඇතුළත් දෑ",
        excluded: "ඇතුළත් නොවන දෑ",
        notes: "සැලකිය යුතු කරුණු",
        dates: "පිටත්වීම් දිනයන් (2026)",
        info: "චාරිකා තොරතුරු",
        priceStart: "ආරම්භක ගාස්තුව (පුද්ගලයෙකුට)",
        total: "මුළු ගාස්තුව (අනුමාන)",
        travellers: "ගමන්කරුවන්",
        selectDate: "පිටත්වීමේ දිනය තෝරන්න",
        brochure: "Brochure බාගත කරන්න (PDF)",
        book: "WhatsApp මගින් වෙන්කරවා ගන්න",
        back: "ආපසු",
        toggle: "English",
      },
    }),
    []
  );

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Tour not found</p>
      </div>
    );
  }

  // Bilingual field access
  const title = tour.title[lang];
  const dest = tour.destination[lang];
  const duration = tour.duration[lang];
  const desc = tour.description[lang];
  const highlights = tour.highlights[lang];
  const includes = tour.includes[lang];
  const excludes = tour.excludes[lang];
  const notes = tour.importantNotes[lang];

  const basePrice = tour.priceOptions?.length
    ? Math.min(...tour.priceOptions.map((p) => p.price))
    : tour.price ?? 0;

  const totalPrice = basePrice * travelers;

  const buildWhatsAppMessage = () => {
    const msgEn =
      `Booking Request%0A` +
      `Package: ${tour.title.en}%0A` +
      `Departure Date: ${selectedDate}%0A` +
      `Travelers: ${travelers}%0A` +
      `Estimated Total: ${formatLKR(totalPrice)}%0A` +
      `Please share availability and next steps.`;

    const msgSi =
      `වෙන්කරවා ගැනීමේ ඉල්ලීම%0A` +
      `පැකේජය: ${tour.title.si}%0A` +
      `පිටත්වීමේ දිනය: ${selectedDate}%0A` +
      `ගමන්කරුවන්: ${travelers}%0A` +
      `අනුමාන මුළු ගාස්තුව: ${formatLKR(totalPrice)}%0A` +
      `කරුණාකර ඉදිරි ක්‍රියාමාර්ග සහ ලබාගත හැකි තත්ත්වය දන්වන්න.`;

    return `${msgSi}%0A%0A${msgEn}`;
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${buildWhatsAppMessage()}`;

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Hero */}
      <div className="relative">
        <div className="h-[340px] sm:h-[380px]">
          <img src={tour.image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>

        <div className="absolute top-4 right-4">
          <button
            onClick={() => setLang((l) => (l === "en" ? "si" : "en"))}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 border border-white/10 text-white px-4 py-2 rounded-xl font-semibold backdrop-blur"
          >
            <Languages className="h-5 w-5" />
            {t[lang].toggle}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-white text-sm">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{dest}</span>
            </div>

            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/90">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                <Clock className="h-4 w-4" />
                {duration}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-300 fill-current" />
                {tour.rating} / 5
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - content */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-white rounded-2xl border p-6 sm:p-8 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
              <h2 className="text-lg font-semibold text-[#0B1C2D]">Tour description</h2>
              <div className="mt-3 text-sm">
                <ReadMore text={desc} lines={3} />
              </div>
            </section>

            <section className="bg-white rounded-2xl border p-6 sm:p-8 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
              <h2 className="text-xl font-semibold text-[#0B1C2D]">{t[lang].highlights}</h2>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary - safe optional chaining */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <section className="bg-white rounded-2xl border p-6 sm:p-8 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
                <h2 className="text-xl font-semibold text-[#0B1C2D]">{t[lang].itinerary}</h2>
                <div className="mt-4 space-y-4">
                  {tour.itinerary.map((item) => (
                    <div key={item.day} className="rounded-xl border bg-[#FBFBFC] p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-blue-700" />
                        <h3 className="font-semibold text-[#0B1C2D]">
                          Day {item.day}: {item.title[lang]}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.description[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-white rounded-2xl border p-6 sm:p-8 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-semibold text-[#0B1C2D]">{t[lang].included}</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#0B1C2D]">{t[lang].excluded}</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {notes.length > 0 && (
              <section className="bg-white rounded-2xl border p-6 sm:p-8 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-700" />
                  <h2 className="text-lg font-semibold text-[#0B1C2D]">{t[lang].notes}</h2>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
                  {notes.map((note, idx) => (
                    <li key={idx}>• {note}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right column */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-6 space-y-6">
              <div className="bg-white rounded-2xl border p-6 shadow-[0_10px_30px_rgba(16,24,40,0.08)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {t[lang].priceStart}
                    </p>
                    <p className="text-3xl font-extrabold text-[#0B1C2D] mt-1">
                      {formatLKR(basePrice)}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800">
                    2026
                  </span>
                </div>

                {tour.priceOptions && tour.priceOptions.length > 0 && (
                  <div className="mt-4 rounded-xl border bg-[#FBFBFC] p-4">
                    <p className="text-sm font-semibold text-[#0B1C2D]">
                      {lang === "en" ? "Price options" : "ගාස්තු විකල්ප"}
                    </p>
                    <div className="mt-2 space-y-2 text-sm">
                      {tour.priceOptions.map((p, idx) => (
                        <div key={idx} className="flex justify-between gap-3">
                          <span className="text-gray-700">{p.label[lang]}</span>
                          <span className="font-semibold text-[#0B1C2D]">{formatLKR(p.price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5">
                  <label className="block text-sm font-semibold text-[#0B1C2D] mb-2">
                    {t[lang].selectDate}
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full rounded-xl border bg-[#FBFBFC] px-4 py-3 font-semibold text-[#0B1C2D] focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    {tour.departures.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-semibold text-[#0B1C2D] mb-2">
                    {t[lang].travellers}
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                      className="w-11 h-11 rounded-xl border bg-white hover:bg-gray-50 font-bold"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center py-3 rounded-xl border bg-[#FBFBFC] font-bold">
                      {travelers}
                    </div>
                    <button
                      onClick={() => setTravelers((t) => t + 1)}
                      className="w-11 h-11 rounded-xl border bg-white hover:bg-gray-50 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-5 border-t pt-4 flex justify-between items-center">
                  <span className="text-gray-600 font-semibold text-sm">{t[lang].total}</span>
                  <span className="text-lg font-extrabold text-blue-800">
                    {formatLKR(totalPrice)}
                  </span>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t[lang].book}
                </a>

                {tour.brochure && (
                  <a
                    href={tour.brochure}
                    download
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-white text-blue-800 py-3 rounded-xl font-bold border hover:bg-blue-50 transition"
                  >
                    <Download className="h-5 w-5" />
                    {t[lang].brochure}
                  </a>
                )}

                <div className="mt-4 text-center">
                  <Link to="/" className="text-sm font-semibold text-blue-800 hover:underline">
                    {t[lang].back}
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl border p-6 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
                <h3 className="text-lg font-semibold text-[#0B1C2D]">{t[lang].dates}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {tour.departures.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-700 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border p-6 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
                <h3 className="text-lg font-semibold text-[#0B1C2D]">{t[lang].info}</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{lang === "en" ? "Country" : "රට"}</span>
                    <span className="font-semibold text-[#0B1C2D]">{tour.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{lang === "en" ? "Duration" : "කාලය"}</span>
                    <span className="font-semibold text-[#0B1C2D]">{duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{lang === "en" ? "Category" : "වර්ගය"}</span>
                    <span className="font-semibold text-[#0B1C2D]">{tour.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{lang === "en" ? "Rating" : "අගය"}</span>
                    <span className="font-semibold text-[#0B1C2D]">{tour.rating} / 5</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-[0_1px_0_rgba(16,24,40,0.04)]">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {lang === "en"
                    ? "Need help with booking? Tap WhatsApp above and we’ll guide you."
                    : "වෙන්කරවා ගැනීමට උදව් අවශ්‍යද? ඉහත WhatsApp බොත්තම ඔබන්න."}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}