import React, { useEffect, useState, useRef } from 'react';


function Banner() {
  const [bookingsCount, setBookingsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const bannerRef = useRef(null);

  const startCounting = () => {
    const targetBookingsCount = 100;
    const targetCustomersCount = 150;
    const duration = 2000; // Duration of the animation in milliseconds
    const stepTime = Math.abs(Math.floor(duration / targetBookingsCount));

    const bookingsInterval = setInterval(() => {
      setBookingsCount((prevCount) => {
        if (prevCount < targetBookingsCount) {
          return prevCount + 1;
        } else {
          clearInterval(bookingsInterval);
          return targetBookingsCount;
        }
      });
    }, stepTime);

    const customersInterval = setInterval(() => {
      setCustomersCount((prevCount) => {
        if (prevCount < targetCustomersCount) {
          return prevCount + 1;
        } else {
          clearInterval(customersInterval);
          return targetCustomersCount;
        }
      });
    }, stepTime);

    return () => {
      clearInterval(bookingsInterval);
      clearInterval(customersInterval);
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect(); // Stop observing once the animation starts
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <section className="section__container banner__container" ref={bannerRef}>
      <div className="banner__content">
        <div className="banner__card">
          <h4>{bookingsCount}+</h4>
          <p>Bookings Completed</p>
        </div>
        <div className="banner__card">
          <h4>{customersCount}+</h4>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
