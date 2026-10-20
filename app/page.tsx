const Arrow = () => <span aria-hidden="true">↗</span>;

const Check = () => <span className="check" aria-hidden="true">✓</span>;

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rally Solo - Trang chủ">
          <span className="brand-ball" aria-hidden="true" />
          <span>RALLY<span>SOLO</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#model">Mô hình</a>
          <a href="#session">Buổi tập</a>
          <a href="#pricing">Gói tập</a>
          <a href="#faq">Hỏi đáp</a>
        </nav>

        <a className="header-cta" href="#booking">Đặt sân ngay <Arrow /></a>

        <details className="mobile-menu">
          <summary aria-label="Mở menu"><span /><span /></summary>
          <nav>
            <a href="#model">Mô hình</a>
            <a href="#session">Buổi tập</a>
            <a href="#pricing">Gói tập</a>
            <a href="#booking">Đặt trải nghiệm</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> Trạm tập tennis tự động thế hệ mới</div>
          <h1>Đánh một mình.<br /><em>Tiến bộ</em> mỗi ngày.</h1>
          <p className="hero-lead">
            Không cần chờ bạn tập. Máy bắn bóng thông minh giúp bạn luyện đúng điểm yếu,
            đúng tốc độ và theo nhịp riêng của mình.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#booking">Thử ngay 30 phút <Arrow /></a>
            <a className="text-link" href="#model"><span className="play">▶</span> Xem cách vận hành</a>
          </div>
          <div className="hero-proof">
            <div><strong>120</strong><span>bóng / lượt</span></div>
            <div><strong>6</strong><span>chế độ xoáy</span></div>
            <div><strong>100%</strong><span>chủ động</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Mô phỏng sân tennis cùng máy bắn bóng">
          <div className="visual-label">COURT 01 <span>LIVE</span></div>
          <div className="court">
            <div className="court-line court-line-one" />
            <div className="court-line court-line-two" />
            <div className="court-line court-line-three" />
            <div className="court-line court-line-four" />
            <div className="net"><i /><i /><i /><i /><i /></div>
            <div className="ball-path path-one" />
            <div className="ball-path path-two" />
            <div className="moving-ball ball-one" />
            <div className="moving-ball ball-two" />
            <div className="machine">
              <div className="machine-basket"><i /><i /><i /><i /><i /></div>
              <div className="machine-head"><span /></div>
              <div className="machine-body">RS</div>
              <div className="machine-wheel left" />
              <div className="machine-wheel right" />
            </div>
            <div className="player">
              <span className="player-head" />
              <span className="player-body" />
              <span className="player-arm" />
              <span className="player-leg-one" />
              <span className="player-leg-two" />
              <span className="racket"><i /></span>
            </div>
          </div>
          <div className="shot-card">
            <span className="shot-icon">↗</span>
            <div><small>ĐƯỜNG BÓNG</small><strong>Topspin · Góc phải</strong></div>
            <b>72<br /><small>km/h</small></b>
          </div>
          <div className="session-chip"><span>08:42</span> NHỊP TẬP TỐT</div>
        </div>
      </section>

      <div className="ticker" aria-label="Các lợi ích nổi bật">
        <div>
          <span>TẬP MỌI LÚC</span><i>✦</i><span>CHỦ ĐỘNG NHỊP ĐỘ</span><i>✦</i>
          <span>THEO DÕI TIẾN BỘ</span><i>✦</i><span>KHÔNG CẦN BẠN TẬP</span><i>✦</i>
          <span>TẬP MỌI LÚC</span><i>✦</i><span>CHỦ ĐỘNG NHỊP ĐỘ</span><i>✦</i>
        </div>
      </div>

      <section className="model-section section" id="model">
        <div className="section-kicker">01 — TỰ TẬP, KHÔNG TỰ LOAY HOAY</div>
        <div className="section-heading">
          <h2>Một sân. Một máy.<br /><em>Mọi bài đánh bạn cần.</em></h2>
          <p>RALLY SOLO biến mỗi buổi tập cá nhân thành một phiên luyện có mục tiêu, đủ thử thách và dễ đo lường.</p>
        </div>

        <div className="feature-grid">
          <article className="feature-card feature-dark">
            <div className="card-index">01</div>
            <div className="radar" aria-hidden="true"><span /><i /><b /></div>
            <h3>Chọn đúng<br />điểm yếu để tập</h3>
            <p>Forehand, backhand, volley hay di chuyển hai góc — thiết lập bài tập trong vài chạm.</p>
          </article>
          <article className="feature-card feature-lime">
            <div className="card-index">02</div>
            <div className="speed-dial" aria-hidden="true"><span>72</span><small>KM/H</small></div>
            <h3>Tùy chỉnh<br />đúng trình độ</h3>
            <p>Điều chỉnh tốc độ, độ xoáy, tần suất và vị trí bóng từ cơ bản đến nâng cao.</p>
          </article>
          <article className="feature-card feature-light">
            <div className="card-index">03</div>
            <div className="mini-chart" aria-hidden="true"><i /><i /><i /><i /><i /><span>+24%</span></div>
            <h3>Nhìn thấy<br />từng bước tiến</h3>
            <p>Lưu lịch sử buổi tập, chuỗi ngày vận động và mục tiêu cá nhân ngay trên điện thoại.</p>
          </article>
        </div>
      </section>

      <section className="session-section" id="session">
        <div className="session-intro">
          <div className="section-kicker light">02 — MỘT BUỔI TẬP RALLY SOLO</div>
          <h2>Vào sân.<br /><em>Chạm để bắt đầu.</em></h2>
          <p>Không setup phức tạp. Chọn bài, chỉnh nhịp, tập trung vào từng cú đánh.</p>
          <a className="button lime" href="#booking">Chọn buổi tập của bạn <Arrow /></a>
        </div>

        <div className="steps">
          <article>
            <span className="step-number">01</span>
            <div className="step-icon phone-icon"><i /><b /></div>
            <div><h3>Đặt lịch online</h3><p>Chọn sân và khung giờ phù hợp chỉ trong 30 giây.</p></div>
          </article>
          <article>
            <span className="step-number">02</span>
            <div className="step-icon tune-icon"><i /><i /><i /></div>
            <div><h3>Chọn bài tập</h3><p>Dùng preset gợi ý hoặc tự chỉnh tốc độ, điểm rơi và xoáy.</p></div>
          </article>
          <article>
            <span className="step-number">03</span>
            <div className="step-icon racket-icon"><i /></div>
            <div><h3>Vào nhịp thôi!</h3><p>Máy đã nạp đủ bóng. Khởi động và bắt đầu rally với chính mình.</p></div>
          </article>
        </div>
      </section>

      <section className="programs section">
        <div className="program-header">
          <div>
            <div className="section-kicker">03 — BÀI TẬP NỔI BẬT</div>
            <h2>Mỗi mục tiêu,<br /><em>một nhịp bóng riêng.</em></h2>
          </div>
          <div className="program-nav" aria-hidden="true"><button>←</button><button>→</button></div>
        </div>
        <div className="program-grid">
          <article className="program-card p-blue">
            <div className="program-top"><span>CƠ BẢN</span><small>20 PHÚT</small></div>
            <div className="program-art"><i /><i /><i /><span>30<br /><small>bóng</small></span></div>
            <h3>Nhịp thuận tay</h3>
            <p>Ổn định điểm chạm và tăng cảm giác bóng với forehand đều nhịp.</p>
            <a href="#booking">Chọn bài này <Arrow /></a>
          </article>
          <article className="program-card p-orange">
            <div className="program-top"><span>TRUNG CẤP</span><small>30 PHÚT</small></div>
            <div className="program-art zigzag"><i /><i /><i /><i /><span>2<br /><small>góc</small></span></div>
            <h3>Bền chân hai góc</h3>
            <p>Luyện split-step, di chuyển ngang và hồi vị sau mỗi cú đánh.</p>
            <a href="#booking">Chọn bài này <Arrow /></a>
          </article>
          <article className="program-card p-purple">
            <div className="program-top"><span>NÂNG CAO</span><small>40 PHÚT</small></div>
            <div className="program-art target"><i /><b /><span>6<br /><small>điểm</small></span></div>
            <h3>Phản xạ ngẫu nhiên</h3>
            <p>Đường bóng biến đổi liên tục để nâng tốc độ xử lý và quyết định.</p>
            <a href="#booking">Chọn bài này <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote>
          Trước đây mình chỉ ra sân khi có người hẹn. Giờ mỗi tuần mình tập thêm 2 buổi,
          <em> backhand ổn định hơn hẳn</em> mà không phụ thuộc lịch của ai.
        </blockquote>
        <div className="quote-author">
          <div className="avatar">TN</div>
          <div><strong>TRÚC NGUYỄN</strong><span>Trình độ 3.0 · 18 buổi tập</span></div>
        </div>
      </section>

      <section className="pricing section" id="pricing">
        <div className="section-kicker">04 — CHỌN NHỊP CỦA BẠN</div>
        <div className="section-heading pricing-heading">
          <h2>Tập ít hay nhiều,<br /><em>luôn có gói vừa vặn.</em></h2>
          <p>Giá đã bao gồm sân, máy và bóng. Không phí ẩn, không cam kết dài hạn.</p>
        </div>
        <div className="price-grid">
          <article className="price-card">
            <div><span className="plan-label">TRẢ THEO BUỔI</span><h3>Solo Drop-in</h3><p>Cho lần đầu trải nghiệm hoặc lịch tập linh hoạt.</p></div>
            <div className="price"><strong>149K</strong><span>/ 30 phút</span></div>
            <ul><li><Check /> Toàn bộ bài tập cơ bản</li><li><Check /> Bao gồm sân, máy và 120 bóng</li><li><Check /> Lưu lịch sử buổi tập</li></ul>
            <a className="button outline" href="#booking">Đặt một buổi <Arrow /></a>
          </article>
          <article className="price-card featured-price">
            <div className="popular">ĐƯỢC CHỌN NHIỀU</div>
            <div><span className="plan-label">THÀNH VIÊN THÁNG</span><h3>Solo Flow</h3><p>Dành cho người muốn tạo nhịp tập đều đặn.</p></div>
            <div className="price"><strong>799K</strong><span>/ tháng</span></div>
            <ul><li><Check /> 6 buổi, mỗi buổi 45 phút</li><li><Check /> Mở khóa toàn bộ bài nâng cao</li><li><Check /> Theo dõi mục tiêu và tiến bộ</li><li><Check /> Ưu tiên giữ lịch quen thuộc</li></ul>
            <a className="button primary" href="#booking">Bắt đầu Solo Flow <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div>
          <div className="section-kicker">05 — HỎI NHANH, ĐÁP GỌN</div>
          <h2>Chưa từng tự tập?<br /><em>Không sao cả.</em></h2>
        </div>
        <div className="faq-list">
          <details open><summary>Người mới chơi có sử dụng được không?<span>+</span></summary><p>Có. Máy có preset tốc độ chậm, điểm rơi cố định và hướng dẫn khởi động rõ ràng cho người mới.</p></details>
          <details><summary>Mình cần mang theo gì?<span>+</span></summary><p>Bạn chỉ cần mang vợt, giày tennis và nước. Sân đã chuẩn bị máy cùng toàn bộ bóng tập.</p></details>
          <details><summary>Nếu chưa biết cài máy thì sao?<span>+</span></summary><p>Nhân viên sẽ hướng dẫn ở buổi đầu. Những lần sau, bạn chỉ cần chọn bài tập đã lưu trên điện thoại.</p></details>
          <details><summary>Có thể đi cùng huấn luyện viên không?<span>+</span></summary><p>Hoàn toàn được. Máy là công cụ hỗ trợ tốt để HLV sửa kỹ thuật trên một đường bóng ổn định.</p></details>
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-copy">
          <div className="eyebrow light-pill"><span>●</span> Sân đầu tiên đã sẵn sàng</div>
          <h2>Rally tiếp theo<br />là với <em>chính bạn.</em></h2>
          <p>Đặt buổi trải nghiệm 30 phút. Đến sân, chọn bài và đánh thôi.</p>
        </div>
        <form className="booking-form">
          <label><span>Tên của bạn</span><input type="text" name="name" placeholder="Minh Anh" required /></label>
          <label><span>Số điện thoại</span><input type="tel" name="phone" placeholder="09xx xxx xxx" required /></label>
          <label><span>Trình độ hiện tại</span><select name="level" defaultValue=""><option value="" disabled>Chọn trình độ</option><option>Mới bắt đầu</option><option>Đã chơi dưới 1 năm</option><option>Trung cấp</option><option>Nâng cao</option></select></label>
          <button className="button dark-button" type="submit">Giữ chỗ trải nghiệm <Arrow /></button>
          <small>Bằng việc đăng ký, bạn đồng ý để RALLY SOLO liên hệ xác nhận lịch.</small>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-ball" /> <span>RALLY<span>SOLO</span></span></a>
        <p>Tennis không cần chờ ai.</p>
        <div className="footer-links"><a href="#model">Mô hình</a><a href="#pricing">Gói tập</a><a href="#faq">Hỏi đáp</a><a href="mailto:hello@rallysolo.vn">Liên hệ</a></div>
        <div className="footer-bottom"><span>© 2026 RALLY SOLO</span><span>MADE FOR YOUR NEXT RALLY ●</span></div>
      </footer>
    </main>
  );
}
