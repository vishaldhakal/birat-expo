"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";

export default function ProposalDetails() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slidesData = [
    {
      number: 1,
      title: "Our Advantage",
      question: "What makes our region economically distinctive?",
      content: "Two or three facts that set your region apart: main sectors, key numbers and one photo or map.",
      time: "2 min",
    },
    {
      number: 2,
      title: "Our Opportunities",
      question: "What are our priority business and investment opportunities?",
      content: "Your top three business or investment opportunities, each with sector, size or capacity, and stage.",
      time: "3 min",
    },
    {
      number: 3,
      title: "What We Offer",
      question: "Which products, services or capabilities can we bring to other markets?",
      content: "Products, services or capabilities you can bring to other regions, with quantities or capacity where known.",
      time: "2 min",
    },
    {
      number: 4,
      title: "What We Seek",
      question: "Which buyers, suppliers, investors, technology or partners do we need?",
      content: "The buyers, suppliers, investors, technology or partners you need, with size or quantity.",
      time: "1 min",
    },
    {
      number: 5,
      title: "Our Collaboration Proposal",
      question: "What specific partnership can we develop together?",
      content: "One specific proposal: what, with whom, and the next step with a date. Add the contact person and a QR code.",
      time: "2 min",
    },
  ];

  return (
    <div className="bg-white text-gray-900 border-t border-gray-100 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* 1. Objectives */}
        <section id="objectives" className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Strategic <span className="text-blue-600">Objectives</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              The Summit is designed to serve three core national needs: stronger buyer–supplier links across provinces, investable opportunities that create jobs at home, and a shared private-sector voice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Showcase regional economic strengths and emerging business opportunities across Nepal.",
              "Connect businesses with buyers, suppliers, investors, distributors and technology partners.",
              "Promote inter-provincial trade, investment and industrial collaboration.",
              "Facilitate partnerships among chambers, enterprises, startups and institutions.",
              "Identify new markets, investment opportunities and regional value chains.",
              "Generate actionable business leads and collaboration proposals.",
              "Position Biratnagar as a national meeting point for business networking and opportunity creation.",
            ].map((obj, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border border-gray-100 bg-gray-50/60 flex items-start gap-3.5 ${
                  idx === 6 ? "md:col-span-2 bg-blue-50/40 border-blue-100" : ""
                }`}
              >
                <span className="font-mono text-xs font-bold text-blue-700 bg-white border border-gray-200 px-2.5 py-1 rounded-md shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Alignment with Birat Expo 2026 */}
        <section id="alignment" className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Alignment with <span className="text-blue-600">Birat Expo 2026</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              Birat Expo 2026, organized by CIM under the theme <span className="font-semibold text-gray-900">&ldquo;The Ecosystem of Opportunities,&rdquo;</span> aims to connect industry, innovation, investment, skills, sustainability and markets.
              Birat Business Summit 2026 will serve as the Expo&apos;s strategic dialogue and business collaboration platform, while Opportunity Connect will translate that dialogue into practical business relationships.
            </p>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Reinforcing the Expo&apos;s Six Opportunity Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Connect", desc: "Bring businesses and chambers together." },
                { name: "Expand", desc: "Open new markets and distribution channels." },
                { name: "Invest", desc: "Identify investment and joint-venture opportunities." },
                { name: "Build", desc: "Connect entrepreneurs, startups and established industries." },
                { name: "Influence", desc: "Identify common policy challenges and opportunities for collective advocacy." },
                { name: "Grow", desc: "Encourage enterprise development and regional value-chain partnerships." },
              ].map((pillar) => (
                <div
                  key={pillar.name}
                  className="p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-colors"
                >
                  <h4 className="text-base sm:text-lg font-bold text-gray-950">
                    {pillar.name}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Indicative Targets */}
        <section id="targets" className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Indicative <span className="text-blue-600">Targets</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              These targets are indicative and depend on confirmed participation. CIM will report progress at 30 and 90 days after the Summit.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { num: "25–30", label: "Chambers participating" },
              { num: "Up to 18", label: "Chamber presentations" },
              { num: "At least 50", label: "Documented business opportunities" },
              { num: "At least 30", label: "Expressions of interest" },
              { num: "At least 20", label: "Potential business matches" },
              { num: "At least 10", label: "Follow-up meetings" },
              { num: "At least 5", label: "Collaboration proposals for further development" },
            ].map((t, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                  <span className="text-blue-600">{t.num}</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                  {t.label}
                </p>
              </div>
            ))}

            <div className="p-5 sm:p-6 rounded-2xl border border-blue-100 bg-blue-50/40 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                  Accountability
                </p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed font-medium">
                  CIM 30 &amp; 90-day post-summit progress reporting.
                </p>
              </div>
              <Link
                href="/thematic/register"
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900"
              >
                <span>Register Interest</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Chamber Participation & Presentation Structure */}
        <section id="chamber-participation" className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Opportunity Connect: <span className="text-blue-600">Chamber Participation</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              Each participating chamber will receive a 15-minute presentation slot to present its region&apos;s economic strengths and identify specific business opportunities. Every chamber uses the same five-slide template, issued by CIM. Each slide answers one of the five questions, so every presentation is easy to follow and easy to compare. Of the 15 minutes, 10 are for presenting (about 2 minutes a slide) and 5 are for questions.
            </p>
          </div>

          {/* Slide Navigator */}
          <div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
              {slidesData.map((s, idx) => (
                <button
                  key={s.number}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                    activeSlide === idx
                      ? "bg-gray-950 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Slide {s.number}: {s.title}
                </button>
              ))}
            </div>

            {/* Active Slide Card */}
            <div className="mt-3 p-6 sm:p-7 rounded-2xl border border-gray-100 bg-gray-50/60">
              <div className="flex items-center justify-between border-b border-gray-200/70 pb-3">
                <span className="font-bold text-sm sm:text-base text-gray-950">
                  Slide {slidesData[activeSlide].number}: {slidesData[activeSlide].title}
                </span>
                <span className="text-xs font-mono font-medium text-gray-700 bg-white border border-gray-200 px-2.5 py-1 rounded-md">
                  Time: {slidesData[activeSlide].time}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Question to Answer:
                  </span>
                  <p className="text-base sm:text-lg font-medium text-gray-950 mt-0.5 italic">
                    &ldquo;{slidesData[activeSlide].question}&rdquo;
                  </p>
                </div>
                <div className="pt-1">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    What to Put on the Slide:
                  </span>
                  <p className="text-sm sm:text-base text-gray-700 mt-0.5 leading-relaxed font-medium">
                    {slidesData[activeSlide].content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Overview Table */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100 text-left text-xs sm:text-sm">
                <thead className="bg-gray-50 font-bold text-gray-900">
                  <tr>
                    <th className="px-5 py-3.5 w-16 text-center">Slide</th>
                    <th className="px-5 py-3.5 w-64">Title and Question</th>
                    <th className="px-5 py-3.5">What to Put on the Slide</th>
                    <th className="px-5 py-3.5 w-24 text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {slidesData.map((s) => (
                    <tr key={s.number} className="hover:bg-gray-50/60">
                      <td className="px-5 py-3.5 text-center font-bold text-blue-600">
                        {s.number}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="font-bold text-gray-950">{s.title}</div>
                        <div className="text-xs text-gray-500 italic mt-0.5">{s.question}</div>
                      </td>
                      <td className="px-5 py-3.5 text-gray-700 leading-relaxed font-medium">
                        {s.content}
                      </td>
                      <td className="px-5 py-3.5 text-right font-semibold text-gray-950 whitespace-nowrap">
                        {s.time}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50/80 font-bold text-gray-950">
                    <td colSpan={3} className="px-5 py-3.5 text-right">
                      Total: 10 minutes presenting, then 5 minutes for questions
                    </td>
                    <td className="px-5 py-3.5 text-right whitespace-nowrap font-extrabold text-blue-600">15 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tip Note */}
          <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/70 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
            <span className="font-bold text-gray-950">Guideline:</span> Presentations should focus on practical opportunities rather than lengthy institutional introductions.
            <br />
            <span className="font-bold text-gray-950">Tip:</span> The three opportunities on slide 2 should be the same three shown on the chamber&apos;s Wall banners and on its one-page opportunity sheet, so all of the chamber&apos;s material tells one story.
          </div>
        </section>

        {/* 5. Opportunity Wall and Banners */}
        <section id="opportunity-wall" className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Opportunity Wall &amp; <span className="text-blue-600">Banners</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              The Opportunity Wall is a shared display of the business opportunities presented by participating chambers — Showcase Your Region. Each chamber prepares three banners in the common format. With 15 to 18 chambers, the Wall holds up to 54 banners along the inner side walls of the hangar, which fits the 81 sq m wall zone (about 49 m of banner width against roughly 60 m of usable wall). If space becomes tight, the fallback is two banners per chamber.
            </p>
          </div>

          {/* Banner Specifications Table */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
            <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-950">Banner Specifications</h3>
            </div>
            <table className="min-w-full divide-y divide-gray-100 text-xs sm:text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Banner size and orientation", "3 ft wide × 6 ft high, portrait"],
                  ["Quantity", "3 banners per chamber, up to 54 in total"],
                  ["Content blocks", "Opportunity Theme, What We Offer, What We Seek, Contact Information and a QR code"],
                  ["Footer", "Contact details, QR code, and the line \"Birat Business Summit 2026 | Opportunity Connect\""],
                  ["Design template", "CIM issues an editable template. The flex design is the chamber's responsibility"],
                  ["Printing", "Each chamber prints its own banners at its own cost using the CIM template"],
                  ["Placement", "Hung by CIM on the inner side walls of the hangar, with names visible from the registration desk"],
                  ["QR code", "One QR code per banner, linking to the chamber's page on www.biratbazaar.com in a single URL"],
                ].map(([element, spec], idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="px-5 py-3.5 font-bold text-gray-950 w-1/3 align-top">
                      {element}
                    </td>
                    <td className="px-5 py-3.5 text-gray-700 align-top font-medium leading-relaxed">
                      {spec}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quality check & Design rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quality check */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/60 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-gray-950">
                Quality Check: Verified Opportunities Only
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                A Review Panel of CIM, NYEF and one chamber representative checks every banner before printing. A banner is accepted when it meets all five tests:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium">
                {[
                  "The business or chamber endorsement is genuine, supported by a registration or an endorsement letter.",
                  "A named contact person can be reached during and after the Summit.",
                  "The offer and the ask are specific, with quantities or capacity where available.",
                  "The claims are accurate and not misleading.",
                  "The chamber consents to publication on the Wall and in the digital directory.",
                ].map((test, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design rules */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/60 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-gray-950">
                Banner Design Rules
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                <div>
                  <span className="font-bold text-gray-950">Text size: </span>
                  <span className="text-gray-600">Headline at least 100 pt, block headings at least 60 pt, body text at least 48 pt and contact details at least 40 pt, so the banner reads from 2 to 3 metres.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-950">Colours: </span>
                  <span className="text-gray-600">Use the template colours (navy, indigo, teal and gold). Keep dark text on light backgrounds and white text on dark ones.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-950">Margins: </span>
                  <span className="text-gray-600">Keep text, logo and QR code at least 2 inches inside the edge of the banner.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-950">Content: </span>
                  <span className="text-gray-600">Verified facts only. The Review Panel checks every banner before printing.</span>
                </div>
                <div>
                  <span className="font-bold text-gray-950">Files: </span>
                  <span className="text-gray-600">Send print-ready PDF artwork, with fonts embedded.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Template Layout Breakdown */}
          <div className="p-6 rounded-2xl border border-gray-100 bg-white space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-gray-950">
              Opportunity Wall Banner Template Layout
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Each banner presents one opportunity, so a chamber uses the same layout for all three of its banners. CIM issues the editable file. Chambers fill in the numbered blocks and leave the CIM header colours and footer line unchanged.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
              {[
                "1. Header: chamber name in capitals and logo. \"Opportunity 1 of 3\" shows which banner it is.",
                "2. Opportunity Theme: one clear line on the opportunity, up to 12 words.",
                "3. Photo: one sharp photo of the product, place or sector. Optional.",
                "4. What We Offer: up to three short points, with quantities or capacity where available.",
                "5. What We Seek: up to three short points naming the buyer, supplier, investor, technology or partner needed.",
                "6. Contact Information: a named contact person with phone, email and website. Part of the footer area.",
                "7. QR code: one per banner, linking to the chamber's page on www.biratbazaar.com. Part of the footer area.",
                "8. Footer line: fixed CIM line \"Birat Business Summit 2026 | Opportunity Connect\" and the tagline. Do not change.",
              ].map((b, bIdx) => (
                <div key={bIdx} className="p-3 rounded-xl border border-gray-100 bg-gray-50/60 text-gray-800">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Expected Results */}
        <section id="expected-results" className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Expected <span className="text-blue-600">Results</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              The Summit aims to achieve the following outcomes (indicative targets subject to confirmed participation and implementation capacity):
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Participation of 15–18 district and regional chambers.",
              "Up to 18 chamber presentations.",
              "At least 50 documented business opportunities.",
              "At least 30 expressions of interest.",
              "At least 20 potential business matches.",
              "At least 10 follow-up meetings.",
              "At least five collaboration proposals for further development.",
            ].map((res, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-gray-100 bg-white flex items-center gap-3 text-xs sm:text-sm text-gray-800 font-medium"
              >
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Conclusion */}
        <section id="conclusion" className="space-y-5">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Strategic <span className="text-blue-600">Conclusion</span>
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl border border-gray-100 bg-gray-50/70 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
            <p>
              <strong className="text-gray-950 font-bold">Birat Business Summit 2026: Opportunity Connect</strong> will provide a practical platform where Nepal&apos;s regional business communities can meet, share opportunities, find partners and develop new pathways for growth.
            </p>
            <p>
              By combining strategic dialogue with chamber presentations, business matchmaking and follow-up, the Summit will help transform regional economic potential into commercial relationships and collaborative action.
            </p>
          </div>
        </section>

        {/* 8. Participation and Coordination */}
        <section id="coordination" className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Participation &amp; <span className="text-blue-600">Coordination</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              Interested chambers will be invited to submit an expression of interest, nominate a presenter and focal person, and provide a short summary of their proposed opportunities.
              CIM will allocate presentation slots, provide a common presentation template, coordinate the programme, maintain the Opportunity Wall and facilitate follow-up.
              Travel and accommodation costs will be borne by participating organizations.
            </p>
          </div>

          {/* Contact Details Table */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
            <table className="min-w-full divide-y divide-gray-100 text-xs sm:text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 font-bold text-gray-950 w-1/3">Organizing institution</td>
                  <td className="px-5 py-3.5 text-gray-700 font-medium">Chamber of Industries Morang (CIM)</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 font-bold text-gray-950">Address</td>
                  <td className="px-5 py-3.5 text-gray-700 font-medium">Sahid Marga, Biratnagar-2, Koshi Province, Nepal</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 font-bold text-gray-950">Office telephone</td>
                  <td className="px-5 py-3.5 text-gray-700 font-medium">
                    <a href="tel:021515712" className="hover:underline mr-2 text-blue-600">021-515712</a> /{" "}
                    <a href="tel:021577646" className="hover:underline ml-2 text-blue-600">021-577646</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 font-bold text-gray-950">Email</td>
                  <td className="px-5 py-3.5 text-gray-700 font-medium">
                    <a href="mailto:cim.biratnagar@gmail.com" className="hover:underline text-blue-600">cim.biratnagar@gmail.com</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 font-bold text-gray-950">Website</td>
                  <td className="px-5 py-3.5 text-gray-700 font-medium">
                    <a href="https://www.cim.org.np" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                      https://www.cim.org.np
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 font-bold text-gray-950">Birat Expo website</td>
                  <td className="px-5 py-3.5 text-gray-700 font-medium">
                    <a href="https://biratexpo.cim.org.np" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                      https://biratexpo.cim.org.np
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Official Bottom Tagline Banner with ChevronRight */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-8 sm:p-10 text-center space-y-3">
            <h3 className="text-base sm:text-xl font-extrabold uppercase tracking-wider text-gray-950">
              Birat Business Summit 2026 — <span className="text-blue-600">Opportunity Connect</span>
            </h3>
            <p className="text-sm sm:text-base font-bold text-gray-900">
              Find a Partner. Find a Market. Find an Opportunity.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              A Signature Business Platform of Birat Expo 2026 — The Ecosystem of Opportunities.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/thematic/register"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                <span>Register for Summit</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:cim.biratnagar@gmail.com"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition"
              >
                <span>Contact CIM</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
