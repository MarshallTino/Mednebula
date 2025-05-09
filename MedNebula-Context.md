# MedNebula Website Context

## Project Overview

### Mission & Purpose
MedNebula is a comprehensive platform designed to connect people with diverse functional abilities (particularly mobility limitations) to services, activities, resources, and community support. The platform serves as an information hub and service connector for people with mobility challenges and their families.

### Core Value Proposition
- **Information Hub**: Centralized source of information about mobility-related services and news
- **Service Connector**: Connect users to specialized services and healthcare professionals
- **Community Building**: Create a supportive environment for sharing experiences and resources
- **Educational Platform**: Provide training and resources for both families and healthcare professionals

### Target Audience
- People with mobility limitations and diverse functional abilities
- Families and caretakers supporting individuals with mobility challenges
- Healthcare professionals working with mobility-impaired patients
- Service providers offering specialized services for this community

### Key Statistics
- Addressing needs of 2.4 million cases in Spain
- Founded by someone with personal experience (cerebral palsy)

## Website Structure

### Main Pages

#### 1. Landing Page (Home)
- Hero section with mission statement and call-to-action
- "Acompañar a las familias" section highlighting support functions
- Centro Informativo section explaining the platform's purpose
- Services section showcasing available services
- Team section introducing key staff members
- Call-to-action banner for contacting the team

#### 2. Services Page
- Hero section with service mission statement
- Comprehensive list of services with descriptions and "Ver más" buttons
- Background information about service providers and partnerships

#### 3. Contact Page
- Contact information and form
- Support options

#### 4. About Page (Currently 404)
- Not yet implemented, redirects to 404 page

#### 5. 404 Page
- Custom error page with links back to homepage and contact

### Navigation
- Persistent navbar with links to all main pages
- Responsive design with hamburger menu on mobile
- Logo serves as home link
- Footer with additional links and copyright information

## Technical Architecture

### Development Framework
- **Frontend**: React (with TypeScript)
- **Routing**: React Router v7
- **State Management**: React Hooks
- **Build System**: Create React App

### File Organization
- **src/components/**: Reusable UI components
- **src/pages/**: Page-level components
- **src/styles/**: Global styles and theme
- **src/Data/**: Static data files
- **src/assets/**: Images and SVG files

### Key Dependencies
- **styled-components**: CSS-in-JS styling solution
- **react-router-dom**: Navigation and routing
- **react-scroll**: Smooth scrolling functionality
- **react-icons**: Icon library
- **TypeScript**: Type safety

### Styling Approach
- Theme-based design system using styled-components
- Global styles for consistent defaults
- Component-specific styled elements
- Responsive breakpoints for mobile adaptation

## Content Details

### Core Services
1. **YogaEspecial**: Adapted yoga for people with mobility limitations
2. **SomHi Centro Neurorehabilitacion**: Advanced neurological rehabilitation center
3. **Eventos y Talleres Formativos**: Educational events and workshops
4. **MiSara Special Needs**: Specialized therapy focusing on posture and sensory control
5. **Método Feldenkrais**: Movement therapy focused on body awareness

### Additional Service Categories
1. **Servicios y Actividades**: Specialized activities for mobility-limited individuals
2. **Red Social Médica**: Medical social network for sharing experiences
3. **Gestor de Mednebula**: Service connecting users with specialized treatments
4. **Cursos para profesionales**: Online and in-person courses for healthcare professionals
5. **Noticias y Recursos**: News and resources about mobility-related developments

### Team Structure
- **Laureano Ivanow**: CEO
- **Marcel Martino**: CTO
- **Àlex Navarro**: Developer
- **Octavi Galli**: Medical Advisor

## Design Language

### Color Scheme
- **Primary Colors**: 
  - Base: #0071bc (Blue)
  - Main Dark: #00253d (Dark Blue)
  - Accent: #6A5ACD (Slate Blue)
- **Secondary Colors**:
  - Accent Light: #9D91E7 (Light Purple)
  - Accent Dark: #483D8B (Dark Purple)
- **Gray Scale**: From #F8F9FA to #212529
- **Gradients**: Linear gradient from blue to dark blue used throughout

### Typography
- **Primary Font**: Oxanium
- **Secondary Font**: 29LT Adir
- **Tertiary Font**: Oxanium

### UI Components
- **Buttons**: Multiple styles (Default, Gradient, Outline) with hover animations
- **Cards**: For services, team members, and solutions
- **Containers**: Standardized section and content containers
- **Navigation**: Responsive navbar with mobile adaptation
- **Banners**: Call-to-action sections with images and buttons
- **Sections**: Consistently styled with titles and content areas

### Responsive Design
- Mobile-first approach with breakpoints at standard widths
- Hamburger menu for mobile navigation
- Stacked layouts on smaller screens
- Adjusted font sizes and spacing for mobile devices
- Properly sized images for different screen resolutions

## Development Notes

### Current Areas for Improvement
- **About Page**: Needs to be implemented (currently 404)
- **Code Warnings**: Several unused variables and imports noted in console
- **Accessibility**: Could benefit from additional ARIA attributes and keyboard navigation
- **SEO Optimization**: Meta tags and descriptions could be enhanced
- **Internationalization**: Currently only in Spanish, could expand to other languages

### Testing Infrastructure
- Playwright configured for end-to-end testing
- Basic test files present in /tests directory

## Technical Notes for Future Development

### Deployment
- The application is configured to be served by a development server
- Production deployment likely needs additional optimization

### Performance Considerations
- Image optimization could be improved
- Code splitting for better loading times
- Lighthouse metrics monitoring

## MCP Integration
The project uses Model Context Protocol integration for development assistance, with Playwright configured for browser automation and testing.

---

This document serves as a comprehensive context overview of the MedNebula project, intended to provide AI assistants with sufficient background to understand the project without requiring a full scan of all files each time assistance is needed.
