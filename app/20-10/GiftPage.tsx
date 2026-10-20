"use client";

import { useRef, useState, type CSSProperties } from "react";

const petals = Array.from({ length: 18 }, (_, index) => index);

function Bloom({ x, y, color, size = 1 }: { x: number; y: number; color: string; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse key={angle} cx="0" cy="-13" rx="7.5" ry="13" fill={color} transform={`rotate(${angle})`} />
      ))}
      <circle r="7" fill="#e6a64f" />
      <circle r="2.5" fill="#fff0be" />
    </g>
  );
}

function Bouquet() {
  return (
    <svg className="bouquet-art" viewBox="0 0 480 530" role="img" aria-label="Bó hoa cúc và hoa hồng màu hồng">
      <defs>
        <linearGradient id="paper" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fff5e8" />
          <stop offset="1" stopColor="#e9b89d" />
        </linearGradient>
        <linearGradient id="ribbon" x1="0" x2="1">
          <stop stopColor="#a54356" />
          <stop offset="1" stopColor="#7d2f43" />
        </linearGradient>
      </defs>
      <ellipse cx="242" cy="470" rx="148" ry="22" fill="#7d2f43" opacity=".09" />
      <g className="bouquet-stems" fill="none" stroke="#718a63" strokeWidth="6" strokeLinecap="round">
        <path d="M234 385Q218 245 120 95" /><path d="M240 390Q239 230 197 75" />
        <path d="M244 390Q280 235 335 105" /><path d="M248 390Q244 220 265 126" />
        <path d="M226 390Q165 260 71 177" /><path d="M258 390Q330 272 405 177" />
        <path d="M239 383Q190 292 155 193" /><path d="M251 386Q310 295 321 200" />
      </g>
      <g fill="#879a70">
        <path d="M146 246q-51-48-71-21 18 40 71 21" /><path d="M165 287q-49-24-61 5 31 30 61-5" />
        <path d="M310 255q41-52 70-30-12 43-70 30" /><path d="M288 302q50-29 65-3-26 34-65 3" />
        <path d="M198 330q-45-41-68-15 18 36 68 15" /><path d="M279 342q37-45 64-26-13 39-64 26" />
      </g>
      <g className="flower-heads">
        <Bloom x={120} y={95} color="#f3b7b3" size={1.12} />
        <Bloom x={197} y={75} color="#fff0dc" size={1.05} />
        <Bloom x={265} y={126} color="#e98d9a" size={1.16} />
        <Bloom x={335} y={105} color="#f8d7c0" size={1.05} />
        <Bloom x={71} y={177} color="#f8d7c0" size={.82} />
        <Bloom x={405} y={177} color="#f1aaa9" size={.86} />
        <Bloom x={155} y={193} color="#e98d9a" size={.8} />
        <Bloom x={321} y={200} color="#fff0dc" size={.82} />
      </g>
      <path d="M122 262Q240 326 360 256L305 450Q242 483 178 450Z" fill="url(#paper)" stroke="#d5a58f" strokeWidth="2" />
      <path d="M122 262Q240 326 360 256L337 333Q240 374 145 330Z" fill="#fff9ef" opacity=".68" />
      <path d="M225 348Q241 375 267 349L286 413Q249 400 241 441Q225 404 194 415Z" fill="url(#ribbon)" />
      <path d="M242 355q-34-36-45-8 11 27 45 8m1 0q33-36 46-8-13 27-46 8" fill="#b95162" stroke="#7d2f43" strokeWidth="2" />
      <circle cx="243" cy="356" r="9" fill="#f4c2a6" />
      <g fill="#d38f79" opacity=".42"><circle cx="172" cy="374" r="2"/><circle cx="311" cy="380" r="2"/><circle cx="194" cy="427" r="2"/><circle cx="289" cy="424" r="2"/></g>
    </svg>
  );
}

export default function GiftPage({ fontClassName }: { fontClassName: string }) {
  const [received, setReceived] = useState(false);
  const [burst, setBurst] = useState(0);
  const flowerStageRef = useRef<HTMLDivElement>(null);

  function openGift() {
    setReceived(true);
    setBurst((current) => current + 1);

    if (window.matchMedia("(max-width: 520px)").matches) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      flowerStageRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }
  }

  return (
    <main className={`${fontClassName} celebration ${received ? "is-open" : ""}`} id="top">
      <div className="grain" aria-hidden="true" />
      {received && <div className="petal-shower" key={burst} aria-hidden="true">{petals.map((petal) => <i key={petal} style={{ "--left": `${(petal * 37 + 7) % 101}%`, "--delay": `${(petal % 9) * -0.23}s`, "--duration": `${5.5 + (petal % 7) * 0.5}s` } as CSSProperties} />)}</div>}

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Tháng Mười thương mến, về đầu trang"><span className="wordmark-flower">✿</span> tháng mười <i>thương mến</i></a>
        <span className="date-pill"><span /> 20 · 10 · 2026</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="pretitle"><span className="pretitle-line" /> MỘT ĐIỀU NHỎ DÀNH RIÊNG CHO EM</div>
          <p className="date-script">Ngày Phụ nữ Việt Nam <span>♡</span></p>
          <h1 id="hero-title">Gửi em<br />một <em>mùa hoa</em><br />dịu dàng.</h1>
          <p className="hero-description">Vì em xứng đáng được nâng niu — hôm nay, ngày mai, và cả những ngày bình thường nhất.</p>
          <button className="gift-button" onClick={openGift} aria-expanded={received}>
            <span>{received ? "Mở lại món quà" : "Chạm để nhận hoa"}</span>
            <svg className="button-arrow" viewBox="0 0 20 20" aria-hidden="true">
              {received ? (
                <path d="M17 8a7 7 0 1 0 1 4M17 3v5h-5" />
              ) : (
                <path d="M5 15 15 5M6 5h9v9" />
              )}
            </svg>
          </button>
          <div className={`gift-note ${received ? "visible" : ""}`} aria-live="polite">
            <span className="note-sparkle">✳</span>
            <p>{received ? "Chúc em luôn rực rỡ theo cách của riêng mình. Happy Women’s Day!" : "Một bó hoa nhỏ, một lời thương thật lớn."}</p>
          </div>
        </div>

        <div className="flower-stage" aria-label="Bó hoa dành tặng em" ref={flowerStageRef}>
          <div className="halo halo-one" /><div className="halo halo-two" />
          <div className="sun-disc" />
          <div className="flower-tag"><span>FOR YOU</span><b>♡</b></div>
          <div className="bouquet-wrap"><Bouquet /></div>
          <span className="floating-heart heart-one">♡</span><span className="floating-heart heart-two">✿</span><span className="floating-heart heart-three">♡</span>
          <div className="stage-caption"><span>01 / 01</span><i /> <span>JUST FOR YOU</span></div>
        </div>
      </section>

      <footer className="bottomline"><span>THÁNG MƯỜI, GỬI NGÀN YÊU THƯƠNG</span><span className="footer-flower">✿</span><span>MADE WITH ♡ IN VIỆT NAM</span></footer>
    </main>
  );
}
