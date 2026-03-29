import React from "react";
import Button from "@/components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              // backgroundColor: "#000000",
              backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Coloumn - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
                Software Engineer . React Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>

              {/* Small Intro */}
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Hi, I'm Tushar Chakraborty — a software engineer specializing in
                React, Preact, .NET, MERN, and MongoDB. I build scalable,
                high-performance web applications that deliver seamless and
                engaging user experiences.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/TusharChakraborty07/",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/tushar-chakraborty-9a603122b/",
                },
                // {
                //   icon: Github,
                //   href: "https://github.com/TusharChakraborty07/",
                // },
              ].map((social, idx) => (
                <a
                  id={social.idx}
                  href={social.href}
                  className="p-2 glass rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Coloumn - profile image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
