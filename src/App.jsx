
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaEye,
  FaEyeSlash,
  FaHome,
  FaSearch,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaArrowRight,
  FaHeart,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaBuilding,
  FaKey,
  FaShieldAlt,
} from "react-icons/fa";

import { FiArrowUpRight, FiPlay } from "react-icons/fi";

import "aos/dist/aos.css";

import loginBg from "./assets/login-bg.jpg";
import heroImage from "./assets/hero.jpg";
import property1 from "./assets/property1.jpg";
import property2 from "./assets/property2.jpg";
import property3 from "./assets/property3.jpg";
import property4 from "./assets/property4.jpg";
import property5 from "./assets/property5.jpg";
import property6 from "./assets/property6.jpg";
import aboutImage from "./assets/about.jpg";
import avatar from "./assets/avatar.jpg";

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    id: 1,
    image: property1,
    name: "The Grand Residence",
    location: "Bangalore, India",
    price: "₹1.85 Cr",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "2,450 sqft",
    badge: "FEATURED",
  },
  {
    id: 2,
    image: property2,
    name: "Modern Skyline Apartment",
    location: "Chennai, India",
    price: "₹92 L",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: "1,680 sqft",
    badge: "NEW",
  },
  {
    id: 3,
    image: property3,
    name: "Serenity Luxury Villa",
    location: "Coimbatore, India",
    price: "₹2.40 Cr",
    type: "Villa",
    beds: 5,
    baths: 4,
    area: "3,200 sqft",
    badge: "PREMIUM",
  },
  {
    id: 4,
    image: property4,
    name: "Urban Nest Residence",
    location: "Hyderabad, India",
    price: "₹76 L",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: "1,350 sqft",
    badge: "POPULAR",
  },
  {
    id: 5,
    image: property5,
    name: "The Garden Estate",
    location: "Kerala, India",
    price: "₹1.25 Cr",
    type: "Villa",
    beds: 3,
    baths: 3,
    area: "2,100 sqft",
    badge: "NEW",
  },
  {
    id: 6,
    image: property6,
    name: "Elite Business Towers",
    location: "Hosur, India",
    price: "₹3.10 Cr",
    type: "Commercial",
    beds: 0,
    baths: 2,
    area: "4,000 sqft",
    badge: "INVESTMENT",
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const [filterType, setFilterType] = useState("All");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [searchText, setSearchText] = useState("");

  const heroRef = useRef(null);

  // AOS INITIALIZATION

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  // HERO GSAP INTRO

  useEffect(() => {
    if (loggedIn && heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, [loggedIn]);

  // ADVANCED ANIMATIONS

  useEffect(() => {
    if (!loggedIn) return;

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .fromTo(
          ".hero-label",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(
          ".hero-content h1",
          { opacity: 0, y: 70, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
          },
          "-=0.4"
        )
        .fromTo(
          ".hero-content > p",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-rating",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".property-search-box",
          { opacity: 0, y: 70, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          "-=0.3"
        );

      // HERO GLOW MOVEMENT

      gsap.to(".hero-glow-one", {
        x: 80,
        y: -50,
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-two", {
        x: -70,
        y: 60,
        scale: 1.15,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ABOUT FLOATING CARD

      gsap.to(".about-floating-card", {
        y: -14,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ABOUT DECORATION ROTATION

      gsap.to(".about-image-decoration", {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      // TESTIMONIAL LIGHT

      gsap.to(".testimonial-glow", {
        x: 100,
        y: -40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // FOOTER LIGHT

      gsap.to(".realty-footer::before", {
        x: 100,
        duration: 5,
        repeat: -1,
        yoyo: true,
      });
    }, ".realty-website");

    // DESKTOP DETECTION

    const isDesktop = window.matchMedia("(min-width: 992px)").matches;

    // 3D CARD TILT

    const tiltElements = document.querySelectorAll(
      ".property-card, .service-card, .contact-form-card"
    );

    const handleTiltMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 7;
      const rotateX = ((centerY - y) / centerY) * 7;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformOrigin: "center",
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleTiltLeave = (event) => {
      gsap.to(event.currentTarget, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto",
      });
    };

    if (isDesktop) {
      tiltElements.forEach((element) => {
        element.addEventListener("mousemove", handleTiltMove);
        element.addEventListener("mouseleave", handleTiltLeave);
      });
    }

    // HERO MOUSE PARALLAX

    const hero = document.querySelector(".hero-section");
    const heroBg = document.querySelector(".hero-bg");
    const heroGlows = document.querySelectorAll(".hero-glow");

    const handleHeroMouse = (event) => {
      if (!hero || !heroBg || !isDesktop) return;

      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(heroBg, {
        x: x * -25,
        y: y * -18,
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto",
      });

      heroGlows.forEach((glow, index) => {
        gsap.to(glow, {
          x: x * (index === 0 ? 65 : -45),
          y: y * (index === 0 ? 45 : -35),
          duration: 1.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    if (hero && isDesktop) {
      hero.addEventListener("mousemove", handleHeroMouse);
    }

    // FLOATING TOP BUTTON

    const floatingTop = document.querySelector(".floating-top");

    const handleScroll = () => {
      if (floatingTop) {
        floatingTop.classList.toggle(
          "floating-top-visible",
          window.scrollY > 450
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      tiltElements.forEach((element) => {
        element.removeEventListener("mousemove", handleTiltMove);
        element.removeEventListener("mouseleave", handleTiltLeave);
      });

      if (hero) {
        hero.removeEventListener("mousemove", handleHeroMouse);
      }

      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, [loggedIn]);

  // LOGIN

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setLoginError("Please enter your email and password.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setLoginError("Please enter a valid email address.");
      return;
    }

    setLoginError("");
    setLoggedIn(true);
  };

  // FAVORITES

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // PROPERTY FILTER

  const filteredProperties = properties.filter((property) => {
    const matchesType =
      filterType === "All" || property.type === filterType;

    const matchesLocation =
      !location ||
      property.location.toLowerCase().includes(location.toLowerCase()) ||
      property.name.toLowerCase().includes(location.toLowerCase());

    const priceText = property.price.replace(/[₹, ]/g, "");

    let priceInCr = 0;

    if (priceText.includes("Cr")) {
      priceInCr = parseFloat(priceText.replace("Cr", ""));
    } else if (priceText.includes("L")) {
      priceInCr = parseFloat(priceText.replace("L", "")) / 100;
    }

    const matchesBudget =
      !budget ||
      (budget === "Under 1 Cr" && priceInCr < 1) ||
      (budget === "1 Cr - 2 Cr" &&
        priceInCr >= 1 &&
        priceInCr <= 2) ||
      (budget === "Above 2 Cr" && priceInCr > 2);

    const matchesFavorite =
      !showFavorites || favorites.includes(property.id);

    return (
      matchesType &&
      matchesLocation &&
      matchesBudget &&
      matchesFavorite
    );
  });

  // SEARCH

  const handleSearch = () => {
    setShowFavorites(false);
    setSearchText("search");

    document.getElementById("properties")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // RESET FILTERS

  const resetFilters = () => {
    setLocation("");
    setBudget("");
    setFilterType("All");
    setSearchText("");
    setShowFavorites(false);
  };

  // FAVORITE NAVIGATION

  const handleFavoriteNav = () => {
    setShowFavorites((prev) => !prev);
    setFilterType("All");
    setLocation("");
    setBudget("");

    setTimeout(() => {
      document.getElementById("properties")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  // LOGIN SCREEN

  if (!loggedIn) {
    return (
      <div
        className="login-page"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="login-overlay"></div>

        <div className="login-floating-shape shape-one"></div>
        <div className="login-floating-shape shape-two"></div>
        <div className="login-floating-shape shape-three"></div>

        <div className="login-navbar">
          <a href="#" className="login-brand">
            <span className="brand-icon">
              <FaHome />
            </span>
            ESTORA<span className="brand-light"></span>
          </a>
        </div>

        <div className="login-container">
          <div className="login-content" data-aos="fade-right">
            <span className="login-small-label">
              <span className="small-dot"></span>
              ELEVATE YOUR LIFESTYLE
            </span>

            <h1>
              Find your
              <br />
              <span>perfect home.</span>
            </h1>

            <p>
              Explore exceptional properties, discover desirable
              neighbourhoods, and find a home that reflects your
              lifestyle. Your journey to better living begins with ESTORA.
            </p>

            <div className="login-highlights">
              <div>
                <FaCheckCircle />
                <span>Verified Property Listings</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Expert Real Estate Advisors</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Transparent Property Deals</span>
              </div>
            </div>
          </div>

          <div className="login-card" data-aos="fade-left">
            <div className="login-card-top">
              <div className="login-card-icon">
                <FaHome />
              </div>

              <span className="login-welcome">
                WELCOME TO ESTORA
              </span>
            </div>

            <h2>Welcome back</h2>

            <p className="login-subtitle">
              Sign in to explore properties and manage your real estate journey.
            </p>

            <form onSubmit={handleLogin}>
              <div className="form-group-custom">
                <label>Email address</label>

                <div className="login-input">
                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group-custom">
                <label>Password</label>

                <div className="login-input">
                  <FaShieldAlt />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <a
                  href="#login"
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginError(
                      "Demo login: enter any valid email and password."
                    );
                  }}
                >
                  Forgot password?
                </a>
              </div>

              {loginError && (
                <div className="login-error">{loginError}</div>
              )}

              <button type="submit" className="login-submit">
                SIGN IN
                <FaArrowRight />
              </button>
            </form>

            <div className="login-divider">
              <span>YOUR PROPERTY JOURNEY STARTS HERE</span>
            </div>

            <div className="login-footer-text">
              <FaShieldAlt />
              Your information is protected
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="realty-website">
      {/* NAVBAR */}

      <nav className="realty-navbar">
        <div className="container-fluid realty-nav-container">
          <a href="#home" className="realty-logo">
            <span className="logo-square">
              <FaHome />
            </span>
            ESTORA<span></span>
          </a>

          <div
            className={`nav-links ${
              menuOpen ? "nav-links-active" : ""
            }`}
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#properties" onClick={() => setMenuOpen(false)}>
              Properties
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>

          <div className="nav-actions">
            <button
              className={`favorite-nav ${
                showFavorites ? "favorite-nav-active" : ""
              }`}
              onClick={handleFavoriteNav}
              aria-label="View favorite properties"
              title="Favorite Properties"
            >
              <FaHeart />
              <span>{favorites.length}</span>
            </button>

            <a href="#contact" className="nav-contact-btn">
              Let's Talk
              <FiArrowUpRight />
            </a>

            <button
              className="nav-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero-section" id="home" ref={heroRef}>
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="hero-dark-overlay"></div>
        <div className="hero-grid-overlay"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-label">
              <span></span>
              EXCLUSIVE HOMES & PREMIUM PROPERTIES
            </div>

            <h1>
              Find a place
              <br />
              <span>to call home.</span>
            </h1>

            <p>
              Discover exceptional homes, thoughtfully selected properties,
              and investment opportunities that redefine modern living.
              Find the perfect space for your lifestyle with ESTORA.
            </p>

            <div className="hero-buttons">
              <a href="#properties" className="hero-primary-btn">
                EXPLORE PROPERTIES
                <FaArrowRight />
              </a>

              <a href="#about" className="hero-secondary-btn">
                <span className="play-circle">
                  <FiPlay />
                </span>
                ABOUT ESTORA
              </a>
            </div>

            <div className="hero-rating">
              <div className="hero-avatar-stack">
                <img src={avatar} alt="Happy property client" />
                <img src={property2} alt="Property client" />
                <img src={property3} alt="Property client" />
              </div>

              <div>
                <strong>2,500+</strong>
                <span>Clients who found their home</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH BOX */}

        <div className="container hero-search-container">
          <div className="property-search-box" data-aos="fade-up">
            <div className="search-field">
              <label>
                <FaMapMarkerAlt />
                LOCATION
              </label>

              <input
                type="text"
                placeholder="City, neighborhood..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="search-field">
              <label>
                <FaBuilding />
                PROPERTY TYPE
              </label>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All Properties</option>
                <option value="Villa">Luxury Villas</option>
                <option value="Apartment">Apartments</option>
                <option value="Commercial">Commercial Spaces</option>
              </select>
            </div>

            <div className="search-field">
              <label>
                <FaKey />
                PRICE RANGE
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Any Budget</option>
                <option value="Under 1 Cr">Under ₹1 Cr</option>
                <option value="1 Cr - 2 Cr">₹1 Cr - ₹2 Cr</option>
                <option value="Above 2 Cr">Above ₹2 Cr</option>
              </select>
            </div>

            <button className="search-button" onClick={handleSearch}>
              <FaSearch />
              SEARCH PROPERTIES
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" data-aos="fade-up">
              <h3>2,500<span>+</span></h3>
              <p>Successful Property Deals</p>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <h3>15<span>+</span></h3>
              <p>Years of Market Expertise</p>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <h3>98<span>%</span></h3>
              <p>Client Satisfaction Rate</p>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <h3>45<span>+</span></h3>
              <p>Professional Property Advisors</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}

      <section className="properties-section section-padding" id="properties">
        <div className="container">
          <div className="section-top" data-aos="fade-up">
            <div>
              <span className="section-eyebrow">
                {showFavorites
                  ? "YOUR PERSONAL COLLECTION"
                  : "EXCLUSIVE PROPERTY PORTFOLIO"}
              </span>

              <h2 className="section-heading">
                {showFavorites ? (
                  <>
                    YOUR <span>FAVORITE PROPERTIES.</span>
                  </>
                ) : (
                  <>
                    DISCOVER YOUR <span>DREAM HOME.</span>
                  </>
                )}
              </h2>

              <p className="section-description">
                {showFavorites
                  ? "Explore the properties you have saved to your favorites."
                  : "Explore our curated collection of premium residences, modern apartments, luxury villas, and investment properties."}
              </p>
            </div>
          </div>

          <div className="property-filter-row" data-aos="fade-up">
            {["All", "Villa", "Apartment", "Commercial"].map((type) => (
              <button
                key={type}
                className={`filter-btn ${
                  filterType === type ? "filter-active" : ""
                }`}
                onClick={() => {
                  setFilterType(type);
                  setSearchText("");
                  setShowFavorites(false);
                }}
              >
                {type === "All"
                  ? "All Properties"
                  : type === "Villa"
                  ? "Luxury Villas"
                  : type === "Apartment"
                  ? "Apartments"
                  : "Commercial"}
              </button>
            ))}
          </div>

          <div className="property-grid">
            {filteredProperties.map((property, index) => (
              <div
                className="property-card"
                key={property.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="property-image-wrap">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="property-image"
                  />

                  <span className="property-badge">
                    {property.badge}
                  </span>

                  <button
                    className={`property-heart ${
                      favorites.includes(property.id)
                        ? "heart-active"
                        : ""
                    }`}
                    onClick={() => toggleFavorite(property.id)}
                    aria-label={
                      favorites.includes(property.id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                    title={
                      favorites.includes(property.id)
                        ? "Remove Favorite"
                        : "Add Favorite"
                    }
                  >
                    <FaHeart />
                  </button>

                  <div className="property-image-overlay"></div>
                </div>

                <div className="property-card-content">
                  <span className="property-type">
                    {property.type}
                  </span>

                  <h3>{property.name}</h3>

                  <p className="property-location">
                    <FaMapMarkerAlt />
                    {property.location}
                  </p>

                  <div className="property-details">
                    {property.beds > 0 && (
                      <span>
                        <FaBed />
                        {property.beds} Beds
                      </span>
                    )}

                    <span>
                      <FaBath />
                      {property.baths} Baths
                    </span>

                    <span>
                      <FaRulerCombined />
                      {property.area}
                    </span>
                  </div>

                  <div className="property-bottom">
                    <div>
                      <span className="price-label">OFFERING PRICE</span>
                      <h4>{property.price}</h4>
                    </div>

                    <a
                      href="#contact"
                      className="property-arrow"
                      aria-label="Enquire about this property"
                    >
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="no-properties">
              <FaHeart />

              <h3>
                {showFavorites
                  ? "No Favorite Properties Yet"
                  : "No Properties Available"}
              </h3>

              <p>
                {showFavorites
                  ? "Click the heart icon on any property to add it to your favorites."
                  : "We couldn't find matching properties. Try adjusting your search criteria."}
              </p>

              <button onClick={resetFilters}>
                VIEW ALL PROPERTIES
              </button>
            </div>
          )}

          <div className="property-bottom-link" data-aos="fade-up">
            <button onClick={resetFilters}>
              VIEW ALL PROPERTIES
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section section-padding" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-column" data-aos="fade-right">
              <div className="about-main-image">
                <img
                  src={aboutImage}
                  alt="Premium residential property by ESTORA"
                />
              </div>

              <div className="about-floating-card">
                <span className="about-card-icon">
                  <FaHome />
                </span>

                <div>
                  <strong>15+ YEARS</strong>
                  <p>Real estate excellence</p>
                </div>
              </div>

              <div className="about-image-decoration"></div>
            </div>

            <div className="about-content" data-aos="fade-left">
              <h2>
                BUILT ON TRUST.
                <br />
                <span>DRIVEN BY EXCELLENCE.</span>
              </h2>

              <p>
                At ESTORA, we believe finding the right property is more
                than a transaction — it's the beginning of a new chapter.
                Every home represents an opportunity to create lasting
                memories, meaningful experiences, and a better future.
              </p>

              <p>
                With a commitment to quality, integrity, and personalized
                service, we help our clients discover exceptional properties
                and make confident real estate decisions. From finding your
                dream home to exploring investment opportunities, we make
                every step seamless and rewarding.
              </p>

              <div className="about-feature-list">
                <div>
                  <FaCheckCircle />
                  <span>Carefully selected premium properties</span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>Honest, transparent real estate services</span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>Dedicated property consultation</span>
                </div>
              </div>

              <a href="#contact" className="about-button">
                DISCOVER OUR STORY
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section section-padding" id="services">
        <div className="container">
          <div className="section-top" data-aos="fade-up">
            <div>
              <span className="section-eyebrow">
                OUR REAL ESTATE SOLUTIONS
              </span>

              <h2 className="section-heading">
                EXPERTISE THAT <span>MOVES YOU.</span>
              </h2>

              <p className="section-description">
                Comprehensive property services designed to simplify
                decisions, maximize opportunities, and deliver confidence.
              </p>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card" data-aos="fade-up">
              <div className="service-icon">
                <FaHome />
              </div>

              <h3>Property Acquisition</h3>

              <p>
                Discover properties that match your lifestyle, preferences,
                and budget with personalized guidance from our experts.
              </p>

              <a href="#contact">
                DISCOVER MORE
                <FaArrowRight />
              </a>
            </div>

            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon">
                <FaKey />
              </div>

              <h3>Property Sales</h3>

              <p>
                Position your property for success with market insights,
                strategic pricing, and dedicated sales assistance.
              </p>

              <a href="#contact">
                DISCOVER MORE
                <FaArrowRight />
              </a>
            </div>

            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon">
                <FaBuilding />
              </div>

              <h3>Real Estate Investments</h3>

              <p>
                Explore promising real estate opportunities with
                insights tailored to your investment objectives.
              </p>

              <a href="#contact">
                DISCOVER MORE
                <FaArrowRight />
              </a>
            </div>

            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon">
                <FaShieldAlt />
              </div>

              <h3>Property Consulting</h3>

              <p>
                Make informed property decisions with professional
                market guidance, insights, and personalized consultation.
              </p>

              <a href="#contact">
                DISCOVER MORE
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}

      <section className="testimonial-section">
        <div className="testimonial-glow"></div>

        <div className="container">
          <div className="testimonial-content" data-aos="zoom-in">
            <span className="section-eyebrow">
              EXPERIENCES THAT INSPIRE
            </span>

            <h2>
              “A seamless journey
              <br />
              <span>to our dream home.”</span>
            </h2>

            <p>
              Working with ESTORA was an exceptional experience.
              Their knowledgeable team understood exactly what we were
              looking for and guided us through every stage with clarity,
              professionalism, and genuine care. Finding our dream home
              was easier than we ever imagined.
            </p>

            <div className="testimonial-person">
              <img src={avatar} alt="ESTORA client" />

              <div>
                <strong>Arun & Priya</strong>
                <span>Verified Property Buyers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-content" data-aos="fade-right">
              <span className="section-eyebrow">
                CONNECT WITH OUR EXPERTS
              </span>

              <h2>
                LET'S FIND
                <br />
                YOUR <span>PLACE.</span>
              </h2>

              <p>
                Whether you're buying, selling, or investing in real estate,
                our dedicated team is here to help you make the right move.
                Let's turn your property goals into reality.
              </p>

              <div className="contact-info">
                <div>
                  <span className="contact-icon">
                    <FaPhoneAlt />
                  </span>

                  <div>
                    <label>CALL OUR TEAM</label>
                    <p>+91 93425 68375</p>
                  </div>
                </div>

                <div>
                  <span className="contact-icon">
                    <FaEnvelope />
                  </span>

                  <div>
                    <label>EMAIL OUR TEAM</label>
                    <p>uk556513@gmail.com</p>
                  </div>
                </div>

                <div>
                  <span className="contact-icon">
                    <FaMapMarkerAlt />
                  </span>

                  <div>
                    <label>OUR LOCATION</label>
                    <p>Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card" data-aos="fade-left">
              <h3>Start your property journey.</h3>

              <p>
                Share your requirements and our real estate specialists
                will connect with you shortly.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your enquiry has been submitted.");
                  e.target.reset();
                }}
              >
                <div className="contact-input-group">
                  <label>Full name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Contact number</label>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Property requirement</label>

                  <select required>
                    <option value="">
                      Choose your property interest
                    </option>
                    <option>Luxury Villa</option>
                    <option>Residential Apartment</option>
                    <option>Commercial Property</option>
                    <option>Real Estate Investment</option>
                  </select>
                </div>

                <div className="contact-input-group">
                  <label>Your requirements</label>

                  <textarea
                    placeholder="Share your preferred location, budget, or property requirements..."
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                  SUBMIT PROPERTY ENQUIRY
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="realty-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#home" className="realty-logo">
            <span className="logo-square">
              <FaHome />
            </span>
            ESTORA<span></span>
          </a>
              <p>
                Find Your Dream Home.Live Your Best Life.
                <br />
                Discover exceptional homes, premium spaces and design.
                
              </p>
            </div>

            <div className="footer-links">
              <h4>EXPLORE</h4>

              <a href="#home">Home</a>
              <a href="#properties">Properties</a>
              <a href="#about">About ESTORA</a>
              <a href="#services">Our Services</a>
            </div>

            <div className="footer-links">
              <h4>PROPERTY SERVICES</h4>

              <a href="#contact">Contact Our Team</a>
              <a href="#contact">Property Consulting</a>
              <a href="#contact">Investment Opportunities</a>
              <a href="#contact">Client Assistance</a>
            </div>

            <div className="footer-newsletter">
              <h4>PROPERTY INSIGHTS</h4>

              <p>
                Subscribe for exclusive property listings,
                market insights, and real estate updates.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                  e.target.reset();
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />

                <button type="submit">
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 ESTORA REALTY. ALL RIGHTS RESERVED.</p>

            <a href="#home">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING TOP */}

      <button
        className="floating-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
