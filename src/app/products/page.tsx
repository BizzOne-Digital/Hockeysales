import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Strides Hockey Sales",
  description: "Shop elite hockey sticks, skates, CCM, and Knapper gear.",
};

const stickInventory = [
  { model: "Tracer", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 87, 102", hand: "LH" }, { curve: "P28", flex: "70, 87, 102", hand: "LH" }, { curve: "P88", flex: "70, 77, 87", hand: "LH" },
    { curve: "P28", flex: "77, 87", hand: "RH" }, { curve: "P88", flex: "87", hand: "RH" },
    { curve: "P92", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "40, 50, 65", hand: "RH" },
  ]},
  { model: "Twitch", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87", hand: "LH" }, { curve: "P28", flex: "70, 77, 87", hand: "LH" }, { curve: "P92", flex: "70, 77, 87", hand: "RH" }, { curve: "P28", flex: "87", hand: "RH" },
    { curve: "P92", flex: "30, 40, 50, 55", hand: "LH" }, { curve: "P28", flex: "30, 40, 50, 55", hand: "LH" }, { curve: "P92", flex: "30, 50", hand: "RH" }, { curve: "P28", flex: "30, 50, 55", hand: "RH" },
  ]},
  { model: "FT8 Pro", brand: "CCM", items: [
    { curve: "P29", flex: "70", hand: "LH" }, { curve: "P28", flex: "70, 75", hand: "LH" }, { curve: "P29", flex: "75", hand: "RH" }, { curve: "P28", flex: "75, 87, 95", hand: "RH" },
    { curve: "P29", flex: "55, 65", hand: "LH" }, { curve: "P29", flex: "55, 65", hand: "RH" }, { curve: "P28", flex: "55, 65", hand: "RH" },
    { curve: "P29", flex: "30, 40, 50", hand: "LH" }, { curve: "P28", flex: "30, 40, 50", hand: "LH" }, { curve: "P29", flex: "30, 40, 50", hand: "RH" }, { curve: "P28", flex: "30, 40, 50", hand: "RH" },
  ]},
  { model: "FT9 Pro", brand: "CCM", isNew: true, items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75, 85", hand: "LH" }, { curve: "P29", flex: "70, 75, 85", hand: "RH" }, { curve: "P28", flex: "70, 75, 85", hand: "RH" },
    { curve: "P29", flex: "55, 65", hand: "LH" }, { curve: "P28", flex: "55, 65", hand: "LH" }, { curve: "P29", flex: "55, 65", hand: "RH" }, { curve: "P28", flex: "55, 65", hand: "RH" },
  ]},
  { model: "Trigger 10 Pro", brand: "CCM", items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75, 85, 95", hand: "LH" }, { curve: "P92", flex: "70, 75", hand: "RH" }, { curve: "P28", flex: "70, 75, 85, 95", hand: "RH" },
    { curve: "P29", flex: "30, 40, 50, 55, 65", hand: "LH" }, { curve: "P28", flex: "30, 55, 65", hand: "LH" }, { curve: "P29", flex: "30, 40, 50, 55", hand: "RH" }, { curve: "P28", flex: "50, 55", hand: "RH" },
  ]},
  { model: "Vizion", brand: "CCM", items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75", hand: "LH" }, { curve: "P29", flex: "70, 75, 85", hand: "RH" }, { curve: "P28", flex: "70, 75, 85", hand: "RH" },
    { curve: "P29", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P28", flex: "40", hand: "LH" },
  ]},
  { model: "FlyLite", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 102", hand: "LH" }, { curve: "P28", flex: "87, 102", hand: "LH" }, { curve: "P29", flex: "70, 87", hand: "RH" }, { curve: "P28", flex: "87", hand: "RH" },
    { curve: "P92", flex: "30, 40", hand: "LH" }, { curve: "P28", flex: "28, 40", hand: "LH" }, { curve: "P92", flex: "30", hand: "RH" },
  ]},
  { model: "Proto 2", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87", hand: "LH" }, { curve: "P28", flex: "70, 77, 87", hand: "LH" }, { curve: "P92", flex: "70, 77, 87", hand: "RH" }, { curve: "P28", flex: "70, 77, 87", hand: "RH" },
    { curve: "P28", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "40, 50, 55", hand: "RH" }, { curve: "P28", flex: "30, 40, 50, 55, 65", hand: "RH" },
  ]},
  { model: "Pulse", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87, 102", hand: "LH" }, { curve: "P28", flex: "70, 77, 87, 102", hand: "LH" }, { curve: "P92", flex: "70, 77, 87, 102", hand: "RH" }, { curve: "P28", flex: "70, 77, 87, 102", hand: "RH" },
    { curve: "P92", flex: "30, 40, 50, 55, 65", hand: "LH" }, { curve: "P28", flex: "30, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "50, 55, 65", hand: "RH" }, { curve: "P28", flex: "50, 55, 65", hand: "RH" },
  ]},
  { model: "XF Ghost", brand: "Bauer", items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75, 85", hand: "LH" }, { curve: "P88", flex: "70", hand: "LH" },
    { curve: "P29", flex: "55, 65", hand: "LH" }, { curve: "P28", flex: "55, 65", hand: "LH" }, { curve: "P29", flex: "55, 65", hand: "RH" }, { curve: "P28", flex: "55", hand: "RH" },
  ]},
  { model: "Hyper 2", brand: "Bauer", items: [
    { curve: "P92", flex: "65", hand: "LH" }, { curve: "P28", flex: "65, 87", hand: "LH" }, { curve: "P28", flex: "55, 65, 87", hand: "RH" },
  ]},
  { model: "Trigger 9 Pro", brand: "CCM", items: [
    { curve: "P28", flex: "75, 85", hand: "LH" }, { curve: "P28", flex: "85", hand: "RH" },
  ]},
  { model: "FT7 Pro", brand: "CCM", items: [
    { curve: "P29", flex: "70, 75", hand: "LH" }, { curve: "P28", flex: "75", hand: "LH" }, { curve: "P29", flex: "70, 75, 85", hand: "RH" }, { curve: "P28", flex: "75, 85", hand: "RH" },
    { curve: "P29", flex: "65", hand: "LH" }, { curve: "P29", flex: "65", hand: "RH" },
  ]},
  { model: "Proto R", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87", hand: "LH" }, { curve: "P28", flex: "77, 87", hand: "LH" }, { curve: "P28", flex: "87", hand: "RH" },
    { curve: "P92", flex: "50, 65", hand: "LH" }, { curve: "P28", flex: "40", hand: "LH" },
  ]},
];

const shadowSizes = ["4.5 Fit 3", "5.0 Fit 2", "5.5 Fit 2", "6.0 Fit 2", "6.5 Fit 2", "7.0 Fit 2", "7.5 Fit 2", "8.0 Fit 2", "8.5 Fit 2", "9.0 Fit 2", "9.5 Fit 2"];

const skates = [
  { name: "Bauer Vapor FlyLite Skates", price: "Coming in July", desc: "Next-generation Vapor fit with FlyLite technology for explosive speed and agility.", status: "Coming Soon", statusClass: "text-[#ed4a14] bg-[#ed4a14]/10 border border-[#ed4a14]", img: "/bauer-vapor-flylite.png" },
  { name: "Bauer Supreme Skates", price: "$650", desc: "Available in most sizes. Reach out for details.", status: "In Stock", statusClass: "text-[#006399] bg-[#67bafd]/20 border border-[#67bafd]", img: "/bauer-supreme-skate.jpg", sizes: shadowSizes },
];

const accessories: never[] = [];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">

        {/* ── Page Hero ── */}
        <section className="mb-20 text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#67bafd]/20 text-[#006399] border border-[#006399]/30 font-inter font-semibold text-sm mb-6">
            <span className="material-symbols-outlined text-base mr-2">verified</span>
            PRO STOCK &amp; ELITE GEAR
          </div>
          <h1 className="font-montserrat text-[48px] font-extrabold text-black mb-6">Equip Your Performance</h1>
          <p className="font-inter text-lg text-[#44474d] max-w-2xl mx-auto mb-8">
            Discover our curated selection of elite hockey equipment — from precision-engineered sticks to professional-grade protective gear.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#e7e8e9] px-4 py-2 rounded-lg border border-[#c5c6cd]">
            <span className="material-symbols-outlined text-[#006399] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <span className="font-inter font-semibold text-sm text-black">All prices include applicable taxes and shipping.</span>
          </div>
        </section>

        {/* ── Bento category grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 h-auto md:h-[400px]">
          <div className="md:col-span-2 group relative overflow-hidden rounded-xl border border-[#c5c6cd] hover:border-[#006399] transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <Image src="/bauer-sticks.png" alt="Hockey Sticks" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="font-montserrat text-[32px] font-bold text-white mb-2">Hockey Sticks</h3>
              <p className="text-white/80 font-inter text-base mb-4">Ultimate feel. Unmatched power.</p>
              <a href="#sticks" className="inline-flex items-center text-[#cde5ff] font-inter font-semibold text-sm">
                View Collection <span className="material-symbols-outlined ml-1" style={{ fontSize: "18px" }}>arrow_forward</span>
              </a>
            </div>
          </div>
          {[
            { href: "#skates", label: "Elite Skates", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcNgkT3CngTAs9q82lEGcxuSUDcu0aywMAfwfMJ_a-KH_xXiS47QXRMyI8m2U8-nI6Srw-DktXzM_zk1GYIYygGrX_YiPYZxizekdylx8V81iAomZiU5Au8JDMw9mpZr9-sOU-0uX2mCuVuarG-xCbjW_lK6-uXUlMc57yAMn4eeo3NJMkXJRau7MgmqRbmvAHgRZW70Pbm6bGovJog-hU7uzKPI2jm5bVbKxA48gs0O_fTTHo4DHECt4nMRd4FjOJdfPzrxek_A" },
            { href: "#protective", label: "Protection", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATWMByiHnOwuJn6tesaB7wKlAnkaYJn5rtgXpxoS2QV0kMzEN93vg4j7y-USL6azwyJXHQx8Si4LCgkNu0bwUBbfOURZ7pBT6r0xfCk74tFq7kTr2-w4ZORt6IijjrevC5KRElaTrB3T82YPVtRcwMfJfAN8Gjt5wbOaLBQcEr_MmY1ndKtJOT1u-ty3d09m4XbG0QgyEdyf9gP1m4E6Uq8dHJz1uzF9Z13-tPIhFD02R_6ofmMP409-qgEsGS16dJMtjQVX9J4A" },
          ].map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-xl border border-[#c5c6cd] hover:border-[#006399] transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="font-montserrat text-2xl font-bold text-white mb-1">{item.label}</h3>
                <a href={item.href} className="text-[#cde5ff] font-inter font-semibold text-sm flex items-center">
                  Explore <span className="material-symbols-outlined text-base ml-1">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Sticks ── */}
        <section className="mb-20" id="sticks">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-[48px] font-extrabold text-black mb-2">Sticks Available for Order</h2>
            <p className="font-inter text-base text-[#44474d]">Precision-balanced tools for elite playmakers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#003a5c] to-black">
              <Image src="/bauer-sticks.png" alt="Hockey Sticks" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-[#c5c6cd] rounded-xl p-8">
                <h3 className="font-montserrat text-2xl font-bold text-black mb-2">Senior &amp; Intermediate Sticks</h3>
                <div className="font-montserrat text-[48px] font-extrabold text-black">$220</div>
              </div>
              <div className="bg-white border border-[#c5c6cd] rounded-xl p-8">
                <h3 className="font-montserrat text-2xl font-bold text-black mb-2">Junior Sticks</h3>
                <div className="font-montserrat text-[48px] font-extrabold text-black">$200</div>
              </div>
              <div className="bg-[#ed4a14]/10 border border-[#ed4a14] rounded-xl p-6 text-center">
                <span className="font-montserrat text-lg font-bold text-[#ed4a14] uppercase tracking-wide">No Warranty</span>
              </div>
              <Link href="/contact" className="w-full bg-black text-white py-4 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
                Contact to Order
              </Link>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="space-y-6">
            {stickInventory.map((stick) => (
              <div key={stick.model} className="bg-white border border-[#c5c6cd] rounded-xl overflow-hidden">
                <div className="bg-[#0a1628] px-6 py-4 flex items-center gap-3">
                  <h3 className="font-montserrat text-xl font-bold text-white">{stick.model}</h3>
                  <span className="font-inter text-xs text-[#8facc8] bg-[#1a2d4a] px-2 py-1 rounded">{stick.brand}</span>
                  {stick.isNew && <span className="font-inter text-xs text-white bg-[#ed4a14] px-2 py-1 rounded font-bold">NEW</span>}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#f8f9fa] border-b border-[#c5c6cd]">
                        <th className="text-left px-6 py-3 font-inter font-semibold text-[#44474d] text-xs uppercase tracking-wider">Curve</th>
                        <th className="text-left px-6 py-3 font-inter font-semibold text-[#44474d] text-xs uppercase tracking-wider">Flex Options</th>
                        <th className="text-left px-6 py-3 font-inter font-semibold text-[#44474d] text-xs uppercase tracking-wider">Hand</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stick.items.map((item, i) => (
                        <tr key={`${item.curve}-${item.flex}-${item.hand}`} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]/50"}>
                          <td className="px-6 py-3 font-inter font-semibold text-black">{item.curve}</td>
                          <td className="px-6 py-3 font-inter text-[#44474d]">{item.flex}</td>
                          <td className="px-6 py-3">
                            <span className={`font-inter text-xs font-bold px-2 py-1 rounded ${item.hand === "LH" ? "bg-[#006399]/10 text-[#006399]" : "bg-[#ed4a14]/10 text-[#ed4a14]"}`}>
                              {item.hand}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CCM Highlight ── */}
        <section className="mb-20 bg-black text-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="font-inter font-semibold text-sm text-[#cde5ff] mb-2 tracking-[0.2em] uppercase">Premium Partner</div>
              <h2 className="font-montserrat text-[48px] font-extrabold mb-4">CCM 2026 Skates Collection</h2>
              <p className="font-inter text-lg text-white/70 mb-8">
                We carry the full 2026 CCM skates lineup — from the all-new 2026 Elite to the Tacks XR and Jetspeed FT8 Pro series. Engineered for the fastest game on earth.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {["Official Retailer", "Full Warranty"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#cde5ff]">check_circle</span>
                    <span className="font-inter font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#ed4a14] text-white px-6 py-4 rounded mb-8 text-center">
                <span className="font-montserrat text-xl font-bold tracking-wide">CONTACT FOR PRICING AND AVAILABILITY</span>
              </div>
              <Link href="/contact" className="bg-white text-black px-10 py-4 rounded font-inter font-semibold text-sm w-fit hover:bg-[#cde5ff] transition-colors">
                Explore CCM Range
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[400px]">
              <Image
                src="/ccm-skates-catalog-cropped.png"
                alt="CCM 2026 Skates Collection"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* ── Skates + Accessories ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          <div className="lg:col-span-2 space-y-8" id="skates">
            <div className="flex justify-between items-center">
              <h2 className="font-montserrat text-[32px] font-bold text-black">Skates &amp; Performance</h2>
              <div className="flex items-center gap-2 text-[#44474d] text-xs font-inter uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#006399] animate-pulse" />
                New Styles Added
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skates.map((s) => (
                <div key={s.name} className="bg-white border border-[#c5c6cd] rounded p-4 product-card-hover">
                  <div className="aspect-[4/3] bg-[#f8f9fa] rounded-sm mb-4 overflow-hidden relative">
                    <Image src={s.img} alt={s.name} fill className="object-contain p-2" />
                  </div>
                  <h4 className="font-montserrat text-2xl font-bold text-black mb-1">{s.name}</h4>
                  <p className="font-inter text-sm text-[#44474d] mb-4">{s.desc}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-montserrat text-2xl font-bold text-black">{s.price}</span>
                    <span className={`font-inter text-xs px-2 py-1 rounded ${s.statusClass}`}>{s.status}</span>
                  </div>
                  {"sizes" in s && s.sizes && (
                    <div className="mb-4 p-4 bg-[#f8f9fa] rounded border border-[#c5c6cd]">
                      <p className="font-inter font-semibold text-xs text-[#44474d] uppercase tracking-wider mb-2">Skate Sizes I Can Order</p>
                      <div className="flex flex-wrap gap-2">
                        {(s.sizes as string[]).map((size) => (
                          <span key={size} className="font-inter text-xs font-semibold bg-white border border-[#c5c6cd] px-2 py-1 rounded">{size}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link href="/contact" className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
                    Contact to Order
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <aside className="space-y-8">
            <h2 className="font-montserrat text-[32px] font-bold text-black">Accessories</h2>
            <div className="bg-[#edeeef] rounded-xl border border-[#c5c6cd] overflow-hidden">
              <div className="relative h-[250px]">
                <Image src="/glo1.webp" alt="Hockey Accessories" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-montserrat text-xl font-bold mb-1">Too many great products to list</p>
                  <p className="font-inter text-sm text-white/80">Please reach out for Pricing and Availability</p>
                </div>
              </div>
              <div className="p-6">
                <Link href="/contact" className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Contact for Pricing
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Protective + Knapper ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" id="protective">
          <div className="space-y-8">
            <h2 className="font-montserrat text-[32px] font-bold text-black">Protective Equipment</h2>
            <div className="rounded-xl overflow-hidden border border-[#c5c6cd]">
              <div className="relative h-[350px]">
                <Image src="/ccm-skates-catalog-cropped.png" alt="CCM Protective Equipment" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="font-montserrat text-2xl font-bold mb-2">A wide range of Protective to choose from.</p>
                  <p className="font-inter text-base text-white/80 mb-3">
                    Go to <a href="https://ccmhockey.com" target="_blank" rel="noreferrer" className="underline text-[#67bafd] font-semibold">ccmhockey.com</a> to view everything I can order for you.
                  </p>
                  <p className="font-montserrat text-lg font-bold text-[#ed4a14]">Reach out for Pricing</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <Link href="/contact" className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Contact for Pricing
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8" id="knapper">
            <h2 className="font-montserrat text-[32px] font-bold text-black">Knapper Products</h2>
            <div className="rounded-xl overflow-hidden border border-[#c5c6cd]">
              <div className="relative min-h-[350px]">
                <Image src="/pd1.webp" alt="Knapper Gear" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                  <h3 className="font-montserrat text-3xl font-bold mb-4">Knapper Gear</h3>
                  <p className="font-inter text-base text-white/80 mb-3 max-w-sm mx-auto">
                    Go to <a href="https://knapper.com" target="_blank" rel="noreferrer" className="underline text-[#67bafd] font-semibold">knapper.com</a> to view what&apos;s available.
                  </p>
                  <p className="font-montserrat text-lg font-bold text-[#ed4a14]">Reach out for Pricing</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <Link href="/contact" className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Contact for Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Kobe Sportswear ── */}
        <section className="mb-20 bg-black text-white rounded-xl overflow-hidden" id="kobe">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[350px] bg-white flex items-center justify-center p-12">
              <div className="relative w-full h-[280px]">
                <Image src="/logo.png" alt="Kobe Sportswear" fill className="object-contain" />
              </div>
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="font-inter font-semibold text-sm text-[#cde5ff] mb-2 tracking-[0.2em] uppercase">Jerseys &amp; Apparel</div>
              <h2 className="font-montserrat text-[48px] font-extrabold mb-6">Kobe Sportswear</h2>
              <p className="font-inter text-lg text-white/70 mb-6">
                Go to <a href="https://kobesportswear.com" target="_blank" rel="noreferrer" className="underline text-[#67bafd] font-semibold">kobesportswear.com</a> to look at their great selection of Jerseys, Socks and Apparel.
              </p>
              <p className="font-montserrat text-xl font-bold text-[#ed4a14] mb-8">Reach out for Pricing</p>
              <Link href="/contact" className="bg-white text-black px-10 py-4 rounded font-inter font-semibold text-sm w-fit hover:bg-[#cde5ff] transition-colors">
                Contact for Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#e7e8e9] rounded-2xl p-20 text-center border border-[#c5c6cd]">
          <h2 className="font-montserrat text-[48px] font-extrabold text-black mb-6">Can&apos;t find what you need?</h2>
          <p className="font-inter text-lg text-[#44474d] max-w-xl mx-auto mb-12">
            Our inventory is updated daily. Contact us for specific models, custom team orders, or professional fitting advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+19025788000" className="bg-black text-white px-10 py-4 rounded font-inter font-semibold text-sm flex items-center gap-2 hover:bg-[#0d1c32] transition-colors shadow-lg">
              <span className="material-symbols-outlined">call</span>
              +1 (902) 578-8000
            </a>
            <Link href="/contact" className="bg-white text-black border border-black px-10 py-4 rounded font-inter font-semibold text-sm hover:bg-[#f8f9fa] transition-colors">
              Email Our Team
            </Link>
          </div>
          <div className="mt-8 font-inter text-xs text-[#75777e] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">verified_user</span>
            Full manufacturer warranty on all sales
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}