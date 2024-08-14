

// src/App.js
import React, { useState, useEffect } from 'react';
import ScrollBar from './components/ScrollBar';
import Section from './components/Section';
import GoToTop from './components/GoToTop';
import './App.css';
import ThemeToggle from './components/ThemeToggle';

const sectionsData = [
  {
    title: 'Featured',
    items: [
              { title: 'Haircut', description: 'We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.' },
              { title: 'Deep Condition (Standard)', description: 'This is an add on deep conditioning treatment service for clients who need to restore moisture back into their hair.  ' },
              { title: 'Blow Dry/Silk Press', description: 'Please do NOT apply castor oil or coconut oil to hair before service.If you have NOT had a professional trim/haircut in the last 3 months, you must book a haircut service.' },
            ],
            
   
    backgroundColor: '#ff9999', 
  },
  {
    title: 'Haircutting',
    items: [
              { title: 'A Bob Haircut', description: 'A bob cut, is a short to medium length haircut, in which the hair is typically cut straight around the head at approximately jaw level, and no longer than shoulder-length.' },
              { title: 'Haircut Short Tapered', description: 'A taper is a cut that leaves your hair long at the top and short on the sides. Hair gradually gets shorter as you move down the back and sides of your head. ' },
              { title: 'Haircut', description: 'We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.' },
            ],
 
    backgroundColor: '#99ff99',
  },
  {
    title: 'Color Services',
    items: [
      { title: 'NEW SINGLE PROCESS WITH FULL HEAD HIGHLIGHTS', description: 'This process completely changes your hair color to a brown, with a full head of blonde highlights added to create dimension. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service)' },
      { title: 'NEW FULL HEAD HIGHLIGHTS', description: 'A full head of highlights to make hair blonde, golden, or soft browns. Natural hair base color stays the same. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service)' },
      { title: 'BLONDE HIGHLIGHTS (Half Head Highlights)', description: 'A half head of highlights to make hair blonde, golden, or softs browns. Natural hair base color stays the same' },
    ],
    
    backgroundColor: '#9999ff', 
  },
  {
    title: 'Extension, Installs and Wigs',
    items: [
      { title: 'Install Removal', description: ' . A detox shampoo, deep conditioning treatment. Afterwards hair will be blow dried. Additional styling service must be booked if seeking any styling.' },
      { title: 'Basic Weave Install', description: 'A full head of highlights to make hair blonde, golden, or soft browns. Natural hair base color stays the same. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service)' },
      { title: 'Braid Down for Wig', description: 'Does not include instillation. Includes wash condition and braid own.' },
    ],
    
    backgroundColor: '#b481d3', 
  },
  
  {
    title: 'natural hairstyling',
    items: [
      { title: 'Flexi Rod Set', description: ' $125' },
      { title: 'Wash & Go - Curly Style', description: '$60' },
      { title: 'Flat Twist', description: '$125' },
    ],
    
    backgroundColor: '#a7952d', 
  },
  {
    title: 'Styling',
    items: [
      { title: 'Blow Dry/Silk Press', description: 'Please do NOT apply castor oil or coconut oil to hair before service.'},
      { title: 'Half Up Half Down Ponytail', description: '$225' },
      { title: 'Shampoo/Wrap (Relaxed Hair)', description: '$85' },
    ],
    
    backgroundColor: '#5ad8fb', 
  },

  {
    title: 'Relaxer/ Texturizer/ Keratin',
    items: [
      { title: 'Relaxer', description: ' $110' },
      { title: 'Relaxer and haircut', description: '$160' },
      { title: 'Virgin Relaxer and Haircut', description: '$200' },
    ],
    
    backgroundColor: '#31d34a', 
  },

  
  {
    title: 'Treatments',
    items: [
      { title: 'Detox Shampoo', description: ' $50' },
      { title: 'Deep Condition (Standard)', description: '$160' },
      { title: 'Virgin Relaxer and Haircut', description: '$200' },
      
    ],
    
    backgroundColor: '#2da7a2', 
  },



];
function App() {
    const [currentSection, setCurrentSection] = useState(0);
  
    const handleSectionClick = (index) => {
      setCurrentSection(index);
      document.getElementById(`section-${index}`).scrollIntoView({ behavior: 'smooth' });
    };
  
    const handleScroll = () => {
      const sectionElements = sectionsData.map((_, index) => document.getElementById(`section-${index}`));
      const scrollTop = window.scrollY;
      let newHighlightedIndex = currentSection;
  
      // Calculate the center of the viewport
      const viewportCenter = scrollTop + window.innerHeight / 2;
  
      // Check which section is closest to the center of the viewport
      sectionElements.forEach((section, i) => {
        const sectionCenter = section.offsetTop + section.offsetHeight / 2;
        if (Math.abs(sectionCenter - viewportCenter) < Math.abs(sectionElements[newHighlightedIndex].offsetTop + sectionElements[newHighlightedIndex].offsetHeight / 2 - viewportCenter)) {
          newHighlightedIndex = i;
        }
      });
  
      if (newHighlightedIndex !== currentSection) {
        setCurrentSection(newHighlightedIndex);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSection]);
  
    return (
      <div className="App">
        <ScrollBar
          sectionNames={sectionsData.map(section => section.title)} // Display titles in the scroll bar
          onSectionClick={handleSectionClick}
          highlightedIndex={currentSection}
        />
        <div className="sections-container">
          {sectionsData.map((section, index) => (
            <Section
              key={index}
              content={section}
              id={`section-${index}`}
              backgroundColor={section.backgroundColor} // Pass background color
            />
          ))}
        </div>
        <GoToTop /> 

      </div>
    );
  }
  
  export default App;